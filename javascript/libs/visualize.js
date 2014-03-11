/*global document, setTimeout, window */
(function (global) {
    "use strict";
    var VIS,
        $ = global.$;

    function parseQuery(myFrame) {
        var frame = myFrame || global,
            query = frame.location.search.substring(1),
            vars = query.split('&'),
            parsed = {},
            pair,
            i;
        for (i = 0; i < vars.length; i++) {
            pair = vars[i].split('=');
            parsed[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return parsed;
    }

    function getQueryParameter(name, myFrame) {
        var frame = myFrame || global;
        frame.parsedQuery = frame.parsedQuery || parseQuery(frame);
        if (typeof global.parsedQuery[name] !== "undefined") {
            return global.parsedQuery[name];
        }
        return null;
    }

    function makeVisualizerUrl(method) {
        var visualizerId = getQueryParameter("processingVisualizerId") ||
                           global.location.pathname.split('/')[2];
        return '/visualize/' + visualizerId + '/' + method;
    }

    global.parsedQuery = global.parsedQuery || parseQuery();

    VIS = {
        "init": function () {
            var processingStatus, p;
            this.processingOverlay = null;
            this.parameters = {};
            for (p in global.parsedQuery) {
                if (global.parsedQuery.hasOwnProperty(p)) {
                    this.parameters[p] = global.parsedQuery[p];
                }
            }
            this.config = {
                "loadingImg": null,
                "loadingMsg": "Processing File for Visualization",
                "processingPollUrl": null,
                "processingParamsUrl": null,
                "loadingPollInterval": 5000
            };
            $(this).trigger("initConfig", this.config);
            processingStatus = this.getProcessingStatus();
            if (processingStatus === "loading") {
                this.createProcessingOverlay();
                this.pollProcessing();
            } else if (processingStatus === "error") {
                this.processingError();
            } else {
                $(this).trigger("ready");
            }
        },
        "getParameter": function (name) {
            if (typeof this.parameters[name] !== "undefined") {
                return this.parameters[name];
            }
            return null;
        },
        "getProcessingStatus": function () {
            return this.getParameter("processingStatus");
        },
        "getResourceUrl": function () {
            return this.getParameter("resource_url");
        },
        "getProcessResourceId": function () {
            return getQueryParameter("processingResourceId");
        },
        "getProcessingPollUrl": function () {
            if (this.config.processingPollUrl === null) {
                this.config.processingPollUrl = makeVisualizerUrl('processed_status');
            }
            return this.config.processingPollUrl;
        },
        "getProcessingParamsUrl": function () {
            if (this.config.processingParamsUrl === null) {
                this.config.processingParamsUrl = makeVisualizerUrl('processed_parameters');
            }
            return this.config.processingParamsUrl;
        },
        "createProcessingOverlay": function () {
            var processingContent;
            if (this.processingOverlay === null) {
                this.processingOverlay = $('<div/>', {
                    "class": "processingOverlay"
                });
                processingContent = $('<div/>', {"class": "processingOverlayContent"});
                if (this.config.loadingImg) {
                    processingContent.append(
                        $('<img/>', {
                            "src": this.config.loadingImg,
                            "class": "processingLoadingGif"
                        })
                    );
                }
                processingContent.append($('<h3/>', {
                    "text": this.config.loadingMsg
                }));
                this.processingOverlay.append(processingContent);
                $(document).find("body")
                    .css("min-height", 500)
                    .append(this.processingOverlay);
            }
        },
        "removeProcessingOverlay": function () {
            if (this.processingOverlay !== null) {
                this.processingOverlay.remove();
                this.processingOverlay = null;
            }
        },
        "pollProcessing": function () {
            var that = this;
            $.ajax({
                url: that.getProcessingPollUrl(),
                type: "GET",
                dataType: 'json',
                data: {"unique_id": that.getProcessResourceId()},
                success: function (response) {
                    if ($(that).trigger("pollComplete") === false) {
                        return;
                    }
                    that.parameters.processingStatus = response.status;
                    if (response.status === 'loading') {
                        setTimeout(function () {
                            global.VIS.pollProcessing.call(global.VIS);
                        }, that.config.loadingPollInterval);
                    } else if (response.status === 'ready') {
                        that.processingSuccess.call(that);
                    } else {
                        that.processingError.call(that);
                    }
                },
                error: function () {
                    that.processingError();
                }
            });
        },
        "processingSuccess": function () {
            this.removeProcessingOverlay();
            var that = this;
            $.ajax({
                url: that.getProcessingParamsUrl(),
                type: "GET",
                dataType: 'json',
                data: {"unique_id": that.getProcessResourceId()},
                success: function (response) {

                    $.each(response.parameters, function (param) {
                        that.parameters[param] = response.parameters[param];
                    });

                    $(that).trigger("ready");
                },
                "error": function () {
                    that.processingError();
                }
            });
        },
        "processingError": function () {
            this.createProcessingOverlay();
            this.processingOverlay.find(".processingOverlayContent").html(
                $("<h3/>", {
                    "text": "There was an error processing this file for visualization"
                })
            ).append($("<span>You can </span>"))
                .append(
                    $("<a/>", {
                        "href": this.getResourceUrl(),
                        "text": "download the file"
                    })
                )
                .append($("<span> instead.</span>"));
        },

        /* events */
        "pollComplete": $.noop,
        "initConfig": $.noop,
        "ready": $.noop
    };

    global.VIS = VIS;

}(window));