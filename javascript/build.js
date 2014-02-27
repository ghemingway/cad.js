
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*! jsTree - v3.0.0-beta - 2014-01-03 - (MIT) */
(function(e){"function"==typeof define&&define.amd?define("jstree",["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e,t){if(!e.jstree){var n=0,r=0,a=!1,i=!1,s=!1,o=[],d=e("script:last").attr("src"),l=document,c=l.createElement("LI"),h,_;c.setAttribute("role","treeitem"),h=l.createElement("I"),h.className="jstree-icon jstree-ocl",c.appendChild(h),h=l.createElement("A"),h.className="jstree-anchor",h.setAttribute("href","#"),_=l.createElement("I"),_.className="jstree-icon jstree-themeicon",h.appendChild(_),c.appendChild(h),h=_=null,e.jstree={version:"3.0.0-alpha",defaults:{plugins:[]},plugins:{},path:d&&-1!==d.indexOf("/")?d.replace(/\/[^\/]+$/,""):""},e.jstree.create=function(t,r){var a=new e.jstree.core(++n),i=r;return r=e.extend(!0,{},e.jstree.defaults,r),i&&i.plugins&&(r.plugins=i.plugins),e.each(r.plugins,function(e,t){"core"!==e&&(a=a.plugin(t,r[t]))}),a.init(t,r),a},e.jstree.core=function(e){this._id=e,this._data={core:{themes:{name:!1,dots:!1,icons:!1},selected:[]}}},e.jstree.reference=function(n){if(n&&!e(n).length){n.id&&(n=n.id);var r=null;return e(".jstree").each(function(){var a=e(this).data("jstree");return a&&a._model.data[n]?(r=a,!1):t}),r}return e(n).closest(".jstree").data("jstree")},e.fn.jstree=function(n){var r="string"==typeof n,a=Array.prototype.slice.call(arguments,1),i=null;return this.each(function(){var s=e.jstree.reference(this),o=r&&s?s[n]:null;return i=r&&o?o.apply(s,a):null,s||r||n!==t&&!e.isPlainObject(n)||e(this).data("jstree",new e.jstree.create(this,n)),s&&!r&&(i=s),null!==i&&i!==t?!1:t}),null!==i&&i!==t?i:this},e.expr[":"].jstree=e.expr.createPseudo(function(n){return function(n){return e(n).hasClass("jstree")&&e(n).data("jstree")!==t}}),e.jstree.defaults.core={data:!1,strings:!1,check_callback:!1,animation:200,multiple:!0,themes:{name:!1,url:!1,dir:!1,dots:!0,icons:!0,stripes:!1,variant:!1},expand_selected_onload:!0},e.jstree.core.prototype={plugin:function(t,n){var r=e.jstree.plugins[t];return r?(this._data[t]={},r.prototype=this,new r(n,this)):this},init:function(t,n){this._model={data:{"#":{id:"#",parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}}},changed:[],force_full_redraw:!1,redraw_timeout:!1,default_state:{loaded:!0,opened:!1,selected:!1,disabled:!1}},this.element=e(t).addClass("jstree jstree-"+this._id),this.settings=n,this.element.bind("destroyed",e.proxy(this.teardown,this)),this._data.core.ready=!1,this._data.core.loaded=!1,this._data.core.rtl="rtl"===this.element.css("direction"),this.element[this._data.core.rtl?"addClass":"removeClass"]("jstree-rtl"),this.element.attr("role","tree"),this.bind(),this.trigger("init"),this._data.core.original_container_html=this.element.find(" > ul > li").clone(!0),this._data.core.original_container_html.find("li").addBack().contents().filter(function(){return 3===this.nodeType&&(!this.nodeValue||/^\s+$/.test(this.nodeValue))}).remove(),this.element.html("<ul class='jstree-container-ul'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this._data.core.li_height=this.get_container_ul().children("li:eq(0)").height()||18,this.trigger("loading"),this.load_node("#")},destroy:function(){this.element.unbind("destroyed",this.teardown),this.teardown()},teardown:function(){this.unbind(),this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class",function(){return this.className.replace(/jstree[^ ]*|$/gi,"")}),this.element=null},bind:function(){e.support.touch&&this.element.addTouch(),this.element.on("dblclick.jstree",function(){if(document.selection&&document.selection.empty)document.selection.empty();else if(window.getSelection){var e=window.getSelection();try{e.removeAllRanges(),e.collapse()}catch(t){}}}).on("click.jstree",".jstree-ocl",e.proxy(function(e){this.toggle_node(e.target)},this)).on("click.jstree",".jstree-anchor",e.proxy(function(t){t.preventDefault(),e(t.currentTarget).focus(),this.activate_node(t.currentTarget,t)},this)).on("keydown.jstree",".jstree-anchor",e.proxy(function(t){var n=null;switch(t.which){case 13:case 32:t.type="click",e(t.currentTarget).trigger(t);break;case 37:t.preventDefault(),this.is_open(t.currentTarget)?this.close_node(t.currentTarget):(n=this.get_prev_dom(t.currentTarget),n&&n.length&&n.children(".jstree-anchor").focus());break;case 38:t.preventDefault(),n=this.get_prev_dom(t.currentTarget),n&&n.length&&n.children(".jstree-anchor").focus();break;case 39:t.preventDefault(),this.is_closed(t.currentTarget)?this.open_node(t.currentTarget,function(e){this.get_node(e,!0).children(".jstree-anchor").focus()}):(n=this.get_next_dom(t.currentTarget),n&&n.length&&n.children(".jstree-anchor").focus());break;case 40:t.preventDefault(),n=this.get_next_dom(t.currentTarget),n&&n.length&&n.children(".jstree-anchor").focus();break;case 46:t.preventDefault(),n=this.get_node(t.currentTarget),n&&n.id&&"#"!==n.id&&(n=this.is_selected(n)?this.get_selected():n);break;case 113:t.preventDefault(),n=this.get_node(t.currentTarget);break;default:}},this)).on("load_node.jstree",e.proxy(function(t,n){if(n.status&&("#"!==n.node.id||this._data.core.loaded||(this._data.core.loaded=!0,this.trigger("loaded")),!this._data.core.ready&&!this.get_container_ul().find(".jstree-loading:eq(0)").length)){if(this._data.core.ready=!0,this._data.core.selected.length){if(this.settings.core.expand_selected_onload){var r=[],a,i;for(a=0,i=this._data.core.selected.length;i>a;a++)r=r.concat(this._model.data[this._data.core.selected[a]].parents);for(r=e.vakata.array_unique(r),a=0,i=r.length;i>a;a++)this.open_node(r[a],!1,0)}this.trigger("changed",{action:"ready",selected:this._data.core.selected})}this.trigger("ready")}},this)).on("init.jstree",e.proxy(function(){var e=this.settings.core.themes;this._data.core.themes.dots=e.dots,this._data.core.themes.stripes=e.stripes,this._data.core.themes.icons=e.icons,this.set_theme(e.name||"default",e.url),this.set_theme_variant(e.variant)},this)).on("loading.jstree",e.proxy(function(){this[this._data.core.themes.dots?"show_dots":"hide_dots"](),this[this._data.core.themes.icons?"show_icons":"hide_icons"](),this[this._data.core.themes.stripes?"show_stripes":"hide_stripes"]()},this)).on("focus.jstree",".jstree-anchor",e.proxy(function(t){e(t.currentTarget).mouseenter()},this)).on("blur.jstree",".jstree-anchor",e.proxy(function(t){e(t.currentTarget).mouseleave()},this)).on("mouseenter.jstree",".jstree-anchor",e.proxy(function(e){var t=this.element.find(".jstree-anchor:focus").not(".jstree-clicked");t&&t.length&&t[0]!==e.currentTarget&&t.blur(),this.hover_node(e.currentTarget)},this)).on("mouseleave.jstree",".jstree-anchor",e.proxy(function(e){this.dehover_node(e.currentTarget)},this))},unbind:function(){this.element.off(".jstree"),e(document).off(".jstree-"+this._id)},trigger:function(e,t){t||(t={}),t.instance=this,this.element.triggerHandler(e.replace(".jstree","")+".jstree",t)},get_container:function(){return this.element},get_container_ul:function(){return this.element.children("ul:eq(0)")},get_string:function(t){var n=this.settings.core.strings;return e.isFunction(n)?n.call(this,t):n&&n[t]?n[t]:t},_firstChild:function(e){e=e?e.firstChild:null;while(null!==e&&1!==e.nodeType)e=e.nextSibling;return e},_nextSibling:function(e){e=e?e.nextSibling:null;while(null!==e&&1!==e.nodeType)e=e.nextSibling;return e},_previousSibling:function(e){e=e?e.previousSibling:null;while(null!==e&&1!==e.nodeType)e=e.previousSibling;return e},get_node:function(t,n){t&&t.id&&(t=t.id);var r;if(this._model.data[t])t=this._model.data[t];else if(((r=e(t,this.element)).length||(r=e("#"+t,this.element)).length)&&this._model.data[r.closest("li").attr("id")])t=this._model.data[r.closest("li").attr("id")];else{if(!(r=e(t,this.element)).length||!r.hasClass("jstree"))return!1;t=this._model.data["#"]}return n&&(t="#"===t.id?this.element:e(document.getElementById(t.id))),t},get_next_dom:function(t,n){var r;return t=this.get_node(t,!0),t[0]===this.element[0]?(r=this._firstChild(this.get_container_ul()[0]),r?e(r):!1):t&&t.length?n?(r=this._nextSibling(t[0]),r?e(r):!1):t.hasClass("jstree-open")?(r=this._firstChild(t.children("ul")[0]),r?e(r):!1):null!==(r=this._nextSibling(t[0]))?e(r):t.parentsUntil(".jstree","li").next("li").eq(0):!1},get_prev_dom:function(t,n){var r;if(t=this.get_node(t,!0),t[0]===this.element[0])return r=this.get_container_ul()[0].lastChild,r?e(r):!1;if(!t||!t.length)return!1;if(n)return r=this._previousSibling(t[0]),r?e(r):!1;if(null!==(r=this._previousSibling(t[0]))){t=e(r);while(t.hasClass("jstree-open"))t=t.children("ul:eq(0)").children("li:last");return t}return r=t[0].parentNode.parentNode,r&&"LI"===r.tagName?e(r):!1},get_parent:function(e){return e=this.get_node(e),e&&"#"!==e.id?e.parent:!1},get_children_dom:function(e){return e=this.get_node(e,!0),e[0]===this.element[0]?this.get_container_ul().children("li"):e&&e.length?e.children("ul").children("li"):!1},is_parent:function(e){return e=this.get_node(e),e&&(e.state.loaded===!1||e.children.length)},is_loaded:function(e){return e=this.get_node(e),e&&e.state.loaded},is_loading:function(e){return e=this.get_node(e,!0),e&&e.hasClass("jstree-loading")},is_open:function(e){return e=this.get_node(e),e&&e.state.opened},is_closed:function(e){return e=this.get_node(e),e&&this.is_parent(e)&&!e.state.opened},is_leaf:function(e){return!this.is_parent(e)},load_node:function(t,n){var r,a;if(e.isArray(t)){for(t=t.slice(),r=0,a=t.length;a>r;r++)this.load_node(t[r],n);return!0}return(t=this.get_node(t))?(this.get_node(t,!0).addClass("jstree-loading"),this._load_node(t,e.proxy(function(e){t.state.loaded=e,this.get_node(t,!0).removeClass("jstree-loading"),this.trigger("load_node",{node:t,status:e}),n&&n.call(this,t,e)},this)),!0):(n.call(this,t,!1),!1)},_load_node:function(n,r){var a=this.settings.core.data;return a?e.isFunction(a)?a.call(this,n,e.proxy(function(t){return r.call(this,this["string"==typeof t?"_append_html_data":"_append_json_data"](n,"string"==typeof t?e(t):t))},this)):"object"==typeof a?a.url?(a=e.extend(!0,{},a),e.isFunction(a.url)&&(a.url=a.url.call(this,n)),e.isFunction(a.data)&&(a.data=a.data.call(this,n)),e.ajax(a).done(e.proxy(function(a,i,s){var o=s.getResponseHeader("Content-Type");return-1!==o.indexOf("json")?r.call(this,this._append_json_data(n,a)):-1!==o.indexOf("html")?r.call(this,this._append_html_data(n,e(a))):t},this)).fail(e.proxy(function(){r.call(this,!1)},this))):r.call(this,this._append_json_data(n,a)):"string"==typeof a?r.call(this,this._append_html_data(n,a)):r.call(this,!1):r.call(this,"#"===n.id?this._append_html_data(n,this._data.core.original_container_html.clone(!0)):!1)},_node_changed:function(e){e=this.get_node(e),e&&this._model.changed.push(e.id)},_append_html_data:function(t,n){t=this.get_node(t);var r=n.is("ul")?n.children():n,a=t.id,i=[],s=[],o=this._model.data,d=o[a],l=this._data.core.selected.length,c,h,_;for(r.each(e.proxy(function(t,n){c=this._parse_model_from_html(e(n),a,d.parents.concat()),c&&(i.push(c),s.push(c),o[c].children_d.length&&(s=s.concat(o[c].children_d)))},this)),d.children=i,d.children_d=s,h=0,_=d.parents.length;_>h;h++)o[d.parents[h]].children_d=o[d.parents[h]].children_d.concat(s);return this.trigger("model",{nodes:s,parent:a}),"#"!==a?(this._node_changed(a),this.redraw()):(this.get_container_ul().children(".jstree-initial-node").remove(),this.redraw(!0)),this._data.core.selected.length!==l&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),!0},_append_json_data:function(n,r){n=this.get_node(n);var a=r,i=n.id,s=[],o=[],d=this._model.data,l=d[i],c=this._data.core.selected.length,h,_,u;if(e.isArray(a)||(a=[a]),a.length&&a[0].id!==t&&a[0].parent!==t){for(_=0,u=a.length;u>_;_++)a[_].children||(a[_].children=[]),d[a[_].id]=a[_];for(_=0,u=a.length;u>_;_++)d[a[_].parent].children.push(a[_].id),l.children_d.push(a[_].id);for(_=0,u=l.children.length;u>_;_++)h=this._parse_model_from_flat_json(d[l.children[_]],i,l.parents.concat()),o.push(h),d[h].children_d.length&&(o=o.concat(d[h].children_d))}else{for(_=0,u=a.length;u>_;_++)h=this._parse_model_from_json(a[_],i,l.parents.concat()),h&&(s.push(h),o.push(h),d[h].children_d.length&&(o=o.concat(d[h].children_d)));for(l.children=s,l.children_d=o,_=0,u=l.parents.length;u>_;_++)d[l.parents[_]].children_d=d[l.parents[_]].children_d.concat(o)}return this.trigger("model",{nodes:o,parent:i}),"#"!==i?(this._node_changed(i),this.redraw()):this.redraw(!0),this._data.core.selected.length!==c&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),!0},_parse_model_from_html:function(n,a,i){i=i?[].concat(i):[],a&&i.unshift(a);var s,o,d=this._model.data,l={id:!1,text:!1,icon:!0,parent:a,parents:i,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},c,h,_;for(c in this._model.default_state)this._model.default_state.hasOwnProperty(c)&&(l.state[c]=this._model.default_state[c]);if(h=e.vakata.attributes(n,!0),e.each(h,function(n,r){return r=e.trim(r),r.length?(l.li_attr[n]=r,"id"===n&&(l.id=r),t):!0}),h=n.children("a").eq(0),h.length&&(h=e.vakata.attributes(h,!0),e.each(h,function(t,n){n=e.trim(n),n.length&&(l.a_attr[t]=n)})),h=n.children("a:eq(0)").length?n.children("a:eq(0)").clone():n.clone(),h.children("ins, i, ul").remove(),h=h.html(),h=e("<div />").html(h),l.text=h.html(),h=n.data(),l.data=h?e.extend(!0,{},h):null,l.state.opened=n.hasClass("jstree-open"),l.state.selected=n.children("a").hasClass("jstree-clicked"),l.state.disabled=n.children("a").hasClass("jstree-disabled"),l.data&&l.data.jstree)for(c in l.data.jstree)l.data.jstree.hasOwnProperty(c)&&(l.state[c]=l.data.jstree[c]);h=n.children("a").children(".jstree-themeicon"),h.length&&(l.icon=h.hasClass("jstree-themeicon-hidden")?!1:h.attr("rel")),l.state.icon&&(l.icon=l.state.icon),h=n.children("ul").children("li");do _="j"+this._id+"_"+ ++r;while(d[_]);return l.id=l.li_attr.id||_,h.length?(h.each(e.proxy(function(t,n){s=this._parse_model_from_html(e(n),l.id,i),o=this._model.data[s],l.children.push(s),o.children_d.length&&(l.children_d=l.children_d.concat(o.children_d))},this)),l.children_d=l.children_d.concat(l.children)):n.hasClass("jstree-closed")&&(l.state.loaded=!1),d[l.id]=l,l.state.selected&&this._data.core.selected.push(l.id),l.id},_parse_model_from_flat_json:function(e,n,r){r=r?r.concat():[],n&&r.unshift(n);var a=e.id,i=this._model.data,s=this._model.default_state,o,d,l,c,h={id:a,text:e.text||"",icon:e.icon!==t?e.icon:!0,parent:n,parents:r,children:e.children||[],children_d:e.children_d||[],data:e.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(o in s)s.hasOwnProperty(o)&&(h.state[o]=s[o]);if(e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(h.icon=e.data.jstree.icon),e&&e.data&&(h.data=e.data,e.data.jstree))for(o in e.data.jstree)e.data.jstree.hasOwnProperty(o)&&(h.state[o]=e.data.jstree[o]);if(e&&"object"==typeof e.state)for(o in e.state)e.state.hasOwnProperty(o)&&(h.state[o]=e.state[o]);if(e&&"object"==typeof e.li_attr)for(o in e.li_attr)e.li_attr.hasOwnProperty(o)&&(h.li_attr[o]=e.li_attr[o]);if(h.li_attr.id||(h.li_attr.id=a),e&&"object"==typeof e.a_attr)for(o in e.a_attr)e.a_attr.hasOwnProperty(o)&&(h.a_attr[o]=e.a_attr[o]);for(e&&e.children&&e.children===!0&&(h.state.loaded=!1,h.children=[],h.children_d=[]),i[h.id]=h,o=0,d=h.children.length;d>o;o++)l=this._parse_model_from_flat_json(i[h.children[o]],h.id,r),c=i[l],h.children_d.push(l),c.children_d.length&&(h.children_d=h.children_d.concat(c.children_d));return delete e.data,delete e.children,i[h.id].original=e,h.state.selected&&this._data.core.selected.push(h.id),h.id},_parse_model_from_json:function(e,n,a){a=a?a.concat():[],n&&a.unshift(n);var i=!1,s,o,d,l,c=this._model.data,h=this._model.default_state,_;do i="j"+this._id+"_"+ ++r;while(c[i]);_={id:!1,text:"string"==typeof e?e:"",icon:"object"==typeof e&&e.icon!==t?e.icon:!0,parent:n,parents:a,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(s in h)h.hasOwnProperty(s)&&(_.state[s]=h[s]);if(e&&e.id&&(_.id=e.id),e&&e.text&&(_.text=e.text),e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(_.icon=e.data.jstree.icon),e&&e.data&&(_.data=e.data,e.data.jstree))for(s in e.data.jstree)e.data.jstree.hasOwnProperty(s)&&(_.state[s]=e.data.jstree[s]);if(e&&"object"==typeof e.state)for(s in e.state)e.state.hasOwnProperty(s)&&(_.state[s]=e.state[s]);if(e&&"object"==typeof e.li_attr)for(s in e.li_attr)e.li_attr.hasOwnProperty(s)&&(_.li_attr[s]=e.li_attr[s]);if(_.li_attr.id&&!_.id&&(_.id=_.li_attr.id),_.id||(_.id=i),_.li_attr.id||(_.li_attr.id=_.id),e&&"object"==typeof e.a_attr)for(s in e.a_attr)e.a_attr.hasOwnProperty(s)&&(_.a_attr[s]=e.a_attr[s]);if(e&&e.children&&e.children.length){for(s=0,o=e.children.length;o>s;s++)d=this._parse_model_from_json(e.children[s],_.id,a),l=c[d],_.children.push(d),l.children_d.length&&(_.children_d=_.children_d.concat(l.children_d));_.children_d=_.children_d.concat(_.children)}return e&&e.children&&e.children===!0&&(_.state.loaded=!1,_.children=[],_.children_d=[]),delete e.data,delete e.children,_.original=e,c[_.id]=_,_.state.selected&&this._data.core.selected.push(_.id),_.id},_redraw:function(){var e=this._model.force_full_redraw?this._model.data["#"].children.concat([]):this._model.changed.concat([]),t=document.createElement("UL"),n,r,a;for(r=0,a=e.length;a>r;r++)n=this.redraw_node(e[r],!0,this._model.force_full_redraw),n&&this._model.force_full_redraw&&t.appendChild(n);this._model.force_full_redraw&&(t.className=this.get_container_ul()[0].className,this.element.empty().append(t)),this._model.force_full_redraw=!1,this._model.changed=[],this.trigger("redraw",{nodes:e})},redraw:function(e){e&&(this._model.force_full_redraw=!0),this._redraw()},redraw_node:function(t,n,r){var a=this.get_node(t),i=!1,s=!1,o=!1,d=!1,l=!1,h=!1,_="",u=document,g=this._model.data;if(!a)return!1;if("#"===a.id)return this.redraw(!0);if(n=n||0===a.children.length,t=u.getElementById(a.id))t=e(t),r||(i=t.parent().parent()[0],i===this.element[0]&&(i=null),s=t.index()),g[a.id].data=t.data(),n||!a.children.length||t.children("ul").length||(n=!0),n||(o=t.children("UL")[0]),t.remove();else if(n=!0,!r){if(i="#"!==a.parent?e("#"+a.parent,this.element)[0]:null,!(null===i||i&&g[a.parent].state.opened))return!1;s=e.inArray(a.id,null===i?g["#"].children:g[a.parent].children)}t=c.cloneNode(!0),_="jstree-node ";for(d in a.li_attr)if(a.li_attr.hasOwnProperty(d)){if("id"===d)continue;"class"!==d?t.setAttribute(d,a.li_attr[d]):_+=a.li_attr[d]}_+=!a.children.length&&a.state.loaded?" jstree-leaf":a.state.opened?" jstree-open":" jstree-closed",null!==a.parent&&g[a.parent].children[g[a.parent].children.length-1]===a.id&&(_+=" jstree-last"),t.id=a.id,t.className=_,_=(a.state.selected?" jstree-clicked":"")+(a.state.disabled?" jstree-disabled":"");for(l in a.a_attr)if(a.a_attr.hasOwnProperty(l)){if("href"===l&&"#"===a.a_attr[l])continue;"class"!==l?t.childNodes[1].setAttribute(l,a.a_attr[l]):_+=" "+a.a_attr[l]}if(_.length&&(t.childNodes[1].className="jstree-anchor "+_),a.icon&&a.icon!==!0&&(a.icon===!1?t.childNodes[1].childNodes[0].className+=" jstree-themeicon-hidden":-1===a.icon.indexOf("/")?t.childNodes[1].childNodes[0].className+=" "+a.icon+" jstree-themeicon-custom":(t.childNodes[1].childNodes[0].style.backgroundImage="url("+a.icon+")",t.childNodes[1].childNodes[0].style.backgroundPosition="center center",t.childNodes[1].childNodes[0].style.backgroundSize="auto",t.childNodes[1].childNodes[0].className+=" jstree-themeicon-custom")),t.childNodes[1].innerHTML+=a.text,a.data&&e.data(t,a.data),n&&a.children.length&&a.state.opened){for(h=u.createElement("UL"),h.setAttribute("role","group"),h.className="jstree-children",d=0,l=a.children.length;l>d;d++)h.appendChild(this.redraw_node(a.children[d],n,!0));t.appendChild(h)}return o&&t.appendChild(o),r||(i||(i=this.element[0]),i.getElementsByTagName("UL").length?i=i.getElementsByTagName("UL")[0]:(d=u.createElement("UL"),d.setAttribute("role","group"),d.className="jstree-children",i.appendChild(d),i=d),i.childNodes.length>s?i.insertBefore(t,i.childNodes[s]):i.appendChild(t)),t},open_node:function(n,r,a){var i,s,o,d;if(e.isArray(n)){for(n=n.slice(),i=0,s=n.length;s>i;i++)this.open_node(n[i],r,a);return!0}if(n=this.get_node(n),!n||"#"===n.id)return!1;if(a=a===t?this.settings.core.animation:a,!this.is_closed(n))return r&&r.call(this,n,!1),!1;if(this.is_loaded(n))o=this.get_node(n,!0),d=this,o.length&&(n.children.length&&!this._firstChild(o.children("ul")[0])&&(n.state.opened=!0,this.redraw_node(n,!0),o=this.get_node(n,!0)),a?o.children("ul").css("display","none").end().removeClass("jstree-closed").addClass("jstree-open").children("ul").stop(!0,!0).slideDown(a,function(){this.style.display="",d.trigger("after_open",{node:n})}):o[0].className=o[0].className.replace("jstree-closed","jstree-open")),n.state.opened=!0,r&&r.call(this,n,!0),this.trigger("open_node",{node:n}),a&&o.length||this.trigger("after_open",{node:n});else{if(this.is_loading(n))return setTimeout(e.proxy(function(){this.open_node(n,r,a)},this),500);this.load_node(n,function(e,t){return t?this.open_node(e,r,a):r?r.call(this,e,!1):!1})}},_open_to:function(t){if(t=this.get_node(t),!t||"#"===t.id)return!1;var n,r,a=t.parents;for(n=0,r=a.length;r>n;n+=1)"#"!==n&&this.open_node(a[n],!1,0);return e(document.getElementById(t.id))},close_node:function(n,r){var a,i,s,o;if(e.isArray(n)){for(n=n.slice(),a=0,i=n.length;i>a;a++)this.close_node(n[a],r);return!0}return n=this.get_node(n),n&&"#"!==n.id?(r=r===t?this.settings.core.animation:r,s=this,o=this.get_node(n,!0),o.length&&(r?o.children("ul").attr("style","display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").children("ul").stop(!0,!0).slideUp(r,function(){this.style.display="",o.children("ul").remove(),s.trigger("after_close",{node:n})}):o[0].className=o[0].className.replace("jstree-open","jstree-closed")),n.state.opened=!1,this.trigger("close_node",{node:n}),r&&o.length||this.trigger("after_close",{node:n}),t):!1},toggle_node:function(n){var r,a;if(e.isArray(n)){for(n=n.slice(),r=0,a=n.length;a>r;r++)this.toggle_node(n[r]);return!0}return this.is_closed(n)?this.open_node(n):this.is_open(n)?this.close_node(n):t},open_all:function(e,t,n){if(e||(e="#"),e=this.get_node(e),!e)return!1;var r="#"===e.id?this.get_container_ul():this.get_node(e,!0),a,i,s;if(!r.length){for(a=0,i=e.children_d.length;i>a;a++)this.is_closed(this._mode.data[e.children_d[a]])&&(this._mode.data[e.children_d[a]].state.opened=!0);return this.trigger("open_all",{node:e})}n=n||r,s=this,r=this.is_closed(e)?r.find("li.jstree-closed").addBack():r.find("li.jstree-closed"),r.each(function(){s.open_node(this,s.is_loaded(this)?!1:function(e){this.open_all(e,t,n)},t||0)}),0===n.find("li.jstree-closed").length&&this.trigger("open_all",{node:this.get_node(n)})},close_all:function(e,t){if(e||(e="#"),e=this.get_node(e),!e)return!1;var n="#"===e.id?this.get_container_ul():this.get_node(e,!0),r=this,a,i;if(!n.length){for(a=0,i=e.children_d.length;i>a;a++)this._mode.data[e.children_d[a]].state.opened=!1;return this.trigger("close_all",{node:e})}n=this.is_open(e)?n.find("li.jstree-open").addBack():n.find("li.jstree-open"),n.vakata_reverse().each(function(){r.close_node(this,t||0)}),this.trigger("close_all",{node:e})},is_disabled:function(e){return e=this.get_node(e),e&&e.state&&e.state.disabled},enable_node:function(n){var r,a;if(e.isArray(n)){for(n=n.slice(),r=0,a=n.length;a>r;r++)this.enable_node(n[r]);return!0}return n=this.get_node(n),n&&"#"!==n.id?(n.state.disabled=!1,this.get_node(n,!0).children(".jstree-anchor").removeClass("jstree-disabled"),this.trigger("enable_node",{node:n}),t):!1},disable_node:function(n){var r,a;if(e.isArray(n)){for(n=n.slice(),r=0,a=n.length;a>r;r++)this.disable_node(n[r]);return!0}return n=this.get_node(n),n&&"#"!==n.id?(n.state.disabled=!0,this.get_node(n,!0).children(".jstree-anchor").addClass("jstree-disabled"),this.trigger("disable_node",{node:n}),t):!1},activate_node:function(e,t){if(this.is_disabled(e))return!1;if(this.settings.core.multiple&&(t.metaKey||t.ctrlKey||t.shiftKey)&&(!t.shiftKey||this._data.core.last_clicked&&this.get_parent(e)&&this.get_parent(e)===this._data.core.last_clicked.parent))if(t.shiftKey){var n=this.get_node(e).id,r=this._data.core.last_clicked.id,a=this.get_node(this._data.core.last_clicked.parent).children,i=!1,s,o;for(s=0,o=a.length;o>s;s+=1)a[s]===n&&(i=!i),a[s]===r&&(i=!i),i||a[s]===n||a[s]===r?this.select_node(a[s]):this.deselect_node(a[s])}else this.is_selected(e)?this.deselect_node(e):this.select_node(e);else this.deselect_all(!0),this.select_node(e),this._data.core.last_clicked=this.get_node(e);this.trigger("activate_node",{node:this.get_node(e)})},hover_node:function(e){return e=this.get_node(e,!0),e&&e.length?(e.children(".jstree-anchor").addClass("jstree-hovered"),this.trigger("hover_node",{node:this.get_node(e)}),t):!1},dehover_node:function(e){return e=this.get_node(e,!0),e&&e.length?(e.children(".jstree-anchor").removeClass("jstree-hovered"),this.trigger("dehover_node",{node:this.get_node(e)}),t):!1},select_node:function(n,r,a){var i,s,o,d;if(e.isArray(n)){for(n=n.slice(),s=0,o=n.length;o>s;s++)this.select_node(n[s],r,a);return!0}return n=this.get_node(n),n&&"#"!==n.id?(i=this.get_node(n,!0),n.state.selected||(n.state.selected=!0,this._data.core.selected.push(n.id),i.length&&(i.children(".jstree-anchor").addClass("jstree-clicked"),a||(d=this,i.parents(".jstree-closed").each(function(){d.open_node(this,!1,0)}))),this.trigger("select_node",{node:n,selected:this._data.core.selected}),r||this.trigger("changed",{action:"select_node",node:n,selected:this._data.core.selected})),t):!1},deselect_node:function(n,r){var a,i,s;if(e.isArray(n)){for(n=n.slice(),a=0,i=n.length;i>a;a++)this.deselect_node(n[a],r);return!0}return n=this.get_node(n),n&&"#"!==n.id?(s=this.get_node(n,!0),n.state.selected&&(n.state.selected=!1,this._data.core.selected=e.vakata.array_remove(this._data.core.selected,e.inArray(n.id,this._data.core.selected)),s.length&&s.children(".jstree-anchor").removeClass("jstree-clicked"),this.trigger("deselect_node",{node:n,selected:this._data.core.selected}),r||this.trigger("changed",{action:"deselect_node",node:n,selected:this._data.core.selected})),t):!1},select_all:function(e){var t=this._data.core.selected.concat([]),n,r;for(this._data.core.selected=this._model.data["#"].children_d.concat(),n=0,r=this._data.core.selected.length;r>n;n++)this._model.data[this._data.core.selected[n]]&&(this._model.data[this._data.core.selected[n]].state.selected=!0);this.redraw(!0),this.trigger("select_all",{selected:this._data.core.selected}),e||this.trigger("changed",{action:"select_all",selected:this._data.core.selected,old_selection:t})},deselect_all:function(e){var t=this._data.core.selected.concat([]),n,r;for(n=0,r=this._data.core.selected.length;r>n;n++)this._model.data[this._data.core.selected[n]]&&(this._model.data[this._data.core.selected[n]].state.selected=!1);this._data.core.selected=[],this.element.find(".jstree-clicked").removeClass("jstree-clicked"),this.trigger("deselect_all",{selected:this._data.core.selected,node:t}),e||this.trigger("changed",{action:"deselect_all",selected:this._data.core.selected,old_selection:t})},is_selected:function(e){return e=this.get_node(e),e&&"#"!==e.id?e.state.selected:!1},get_selected:function(){return this._data.core.selected},get_state:function(){var e={core:{open:[],scroll:{left:this.element.scrollLeft(),top:this.element.scrollTop()},selected:[]}},t;for(t in this._model.data)this._model.data.hasOwnProperty(t)&&"#"!==t&&(this._model.data[t].state.opened&&e.core.open.push(t),this._model.data[t].state.selected&&e.core.selected.push(t));return e},set_state:function(n,r){if(n){if(n.core){var a,i,s,o;return e.isArray(n.core.open)?(a=!0,i=!1,s=this,e.each(n.core.open.concat([]),function(t,r){i=document.getElementById(r),i&&(s.is_loaded(r)?(s.is_closed(r)&&s.open_node(r,!1,0),e.vakata.array_remove(n.core.open,e.inArray(r,n.core.open))):(s.is_loading(r)||s.open_node(r,e.proxy(function(){this.set_state(n)},s),0),a=!1))}),a&&(delete n.core.open,this.set_state(n,r)),!1):n.core.scroll?(n.core.scroll&&n.core.scroll.left!==t&&this.element.scrollLeft(n.core.scroll.left),n.core.scroll&&n.core.scroll.top!==t&&this.element.scrollTop(n.core.scroll.top),delete n.core.scroll,delete n.core.open,this.set_state(n,r),!1):n.core.selected?(o=this,this.deselect_all(),e.each(n.core.selected,function(e,t){o.select_node(t)}),delete n.core.selected,this.set_state(n,r),!1):e.isEmptyObject(n)?(r&&r.call(this),this.trigger("set_state"),!1):!0}return!0}return!1},refresh:function(){this._data.core.state=this.get_state(),this.load_node("#",function(t,n){n&&this.set_state(e.extend(!0,{},this._data.core.state),function(){this.trigger("refresh")}),this._data.core.state=null})},get_text:function(e){return e=this.get_node(e),e&&"#"!==e.id?e.text:!1},set_text:function(t,n){var r,a,i,s;if(e.isArray(t)){for(t=t.slice(),r=0,a=t.length;a>r;r++)this.set_text(t[r],n);return!0}return t=this.get_node(t),t&&"#"!==t.id?(t.text=n,i=this.get_node(t,!0),i.length&&(i=i.children(".jstree-anchor:eq(0)"),s=i.children("I").clone(),i.html(n).prepend(s),this.trigger("set_text",{obj:t,text:n})),!0):!1},get_json:function(e,t){if(e=this.get_node(e||"#"),!e)return!1;var n={id:e.id,text:e.text,icon:this.get_icon(e),li_attr:e.li_attr,a_attr:e.a_attr,state:{},data:t&&t.no_data?!1:this.get_node(e,!0).length?this.get_node(e,!0).data():e.data,children:[]},r,a;if(!t||!t.no_state)for(r in e.state)e.state.hasOwnProperty(r)&&(n.state[r]=e.state[r]);if(t&&t.no_id&&n.li_attr&&n.li_attr.id&&(delete n.li_attr.id,delete n.id),!t||!t.no_children)for(r=0,a=e.children.length;a>r;r++)n.children.push(this.get_json(e.children[r],t));return"#"===e.id?n.children:n},create_node:function(n,r,a,i,s){if(n=this.get_node(n),!n)return!1;if(a=a===t?"last":a,!a.match(/^(before|after)$/)&&!s&&!this.is_loaded(n))return this.load_node(n,function(){this.create_node(n,r,a,i,!0)});r||(r={text:this.get_string("New node")}),r.text===t&&(r.text=this.get_string("New node"));var o,d,l,c;switch("#"===n.id&&("before"===a&&(a="first"),"after"===a&&(a="last")),a){case"before":o=this.get_node(n.parent),a=e.inArray(n,o.children),n=o;break;case"after":o=this.get_node(n.parent),a=e.inArray(n,o.children),n=o;break;case"inside":case"first":a=0;break;case"last":a=n.children.length;break;default:a||(a=0)}if(a>n.children.length&&(a=n.children.length),r.id||(r.id=!0),!this.check("create_node",r,n,a))return!1;if(delete r.id,r=this._parse_model_from_json(r,n.id,n.parents.concat()),!r)return!1;for(o=this.get_node(r),d=[],d.push(r),d=d.concat(o.children_d),this.trigger("model",{nodes:d,parent:n.id}),n.children_d=n.children_d.concat(d),l=0,c=n.parents.length;c>l;l++)this._model.data[n.parents[l]].children_d=this._model.data[n.parents[l]].children_d.concat(d);for(r=o,o=[],l=0,c=n.children.length;c>l;l++)o[l>=a?l+1:l]=n.children[l];return o[a]=r.id,n.children=o,this.redraw_node(n,!0),i&&i.call(this,this.get_node(r)),this.trigger("create_node",{node:this.get_node(r),parent:n.id,position:a}),r.id},rename_node:function(t,n){var r,a,i;if(e.isArray(t)){for(t=t.slice(),r=0,a=t.length;a>r;r++)this.rename_node(t[r],n);return!0}return t=this.get_node(t),t&&"#"!==t.id?(i=t.text,this.check("rename_node",t,this.get_parent(t),n)?(this.set_text(t,n),this.trigger("rename_node",{node:t,text:n,old:i}),!0):!1):!1},delete_node:function(t){var n,r,a,i,s,o,d,l,c,h;if(e.isArray(t)){for(t=t.slice(),n=0,r=t.length;r>n;n++)this.delete_node(t[n]);return!0}if(t=this.get_node(t),!t||"#"===t.id)return!1;if(a=this.get_node(t.parent),i=e.inArray(t.id,a.children),h=!1,!this.check("delete_node",t,a,i))return!1;for(a.children=e.vakata.array_remove(a.children,i),s=t.children_d.concat([]),s.push(t.id),l=0,c=s.length;c>l;l++){for(o=0,d=t.parents.length;d>o;o++)this._model.data[t.parents[o]].children_d=e.vakata.array_remove(this._model.data[t.parents[o]].children_d,e.inArray(s[l],this._model.data[t.parents[o]].children_d));
    this._model.data[s[l]].state.selected&&(h=!0,this._data.core.selected=e.vakata.array_remove(this._data.core.selected,e.inArray(s[l],this._data.core.selected)))}return this.trigger("delete_node",{node:t,parent:a.id}),h&&this.trigger("changed",{action:"delete_node",node:t,selected:this._data.core.selected,parent:a.id}),delete this._model.data[t.id],this.redraw_node(a,!0),!0},check:function(t,n,r,a){n=n&&n.id?n:this.get_node(n),r=r&&r.id?r:this.get_node(r);var i=t.match(/^move_node|copy_node|create_node$/i)?r:n,s=this.settings.core.check_callback;return"move_node"!==t||n.id!==r.id&&e.inArray(n.id,r.children)!==a&&-1===e.inArray(r.id,n.children_d)?(i=this.get_node(i,!0),i.length&&(i=i.data("jstree")),i&&i.functions&&(i.functions[t]===!1||i.functions[t]===!0)?i.functions[t]:s===!1||e.isFunction(s)&&s.call(this,t,n,r,a)===!1||s&&s[t]===!1?!1:!0):!1},move_node:function(n,r,a,i,s){var o,d,l,c,h,_,u,g,f,p,m,v,j;if(e.isArray(n)){for(n=n.reverse().slice(),o=0,d=n.length;d>o;o++)this.move_node(n[o],r,a,i,s);return!0}if(n=n&&n.id?n:this.get_node(n),r=this.get_node(r),a=a===t?0:a,!r||!n||"#"===n.id)return!1;if(!(""+a).match(/^(before|after)$/)&&!s&&!this.is_loaded(r))return this.load_node(r,function(){this.move_node(n,r,a,i,!0)});switch(l=""+n.parent,c=(""+a).match(/^(before|after)$/)&&"#"!==r.id?this.get_node(r.parent):r,h=this._model.data[n.id]?this:e.jstree.reference(n.id),_=this._id!==h._id,"#"===c.id&&("before"===a&&(a="first"),"after"===a&&(a="last")),a){case"before":a=e.inArray(r.id,c.children);break;case"after":a=e.inArray(r.id,c.children)+1;break;case"inside":case"first":a=0;break;case"last":a=c.children.length;break;default:a||(a=0)}if(a>c.children.length&&(a=c.children.length),!this.check("move_node",n,c,a))return!1;if(_||n.parent!==c.id){for(g=n.children_d.concat(),g.push(n.id),f=0,p=n.parents.length;p>f;f++){for(u=[],j=h._model.data[n.parents[f]].children_d,m=0,v=j.length;v>m;m++)-1===e.inArray(j[m],g)&&u.push(j[m]);h._model.data[n.parents[f]].children_d=u}for(h._model.data[l].children=e.vakata.array_remove(h._model.data[l].children,e.inArray(n.id,h._model.data[l].children)),f=0,p=c.parents.length;p>f;f++)this._model.data[c.parents[f]].children_d=this._model.data[c.parents[f]].children_d.concat(g);for(u=[],f=0,p=c.children.length;p>f;f++)u[f>=a?f+1:f]=c.children[f];u[a]=n.id,c.children=u,c.children_d.push(n.id),c.children_d=c.children_d.concat(n.children_d),n.parent=c.id,g=c.parents.concat(),g.push(c.id),n.parents=g,_?(h.delete_node(n.id),this._node_changed(c.id),this.redraw("#"===c.id)):(this._node_changed(l),this._node_changed(c.id),this.redraw("#"===l||"#"===c.id))}else{for(u=c.children.concat(),g=e.inArray(n.id,u),-1!==g&&(u=e.vakata.array_remove(u,g),a>g&&a--),g=[],f=0,p=u.length;p>f;f++)g[f>=a?f+1:f]=u[f];g[a]=n.id,c.children=g,this._node_changed(c.id),this.redraw("#"===c.id)}return i&&i.call(this,n,c,a),this.trigger("move_node",{node:n,parent:c.id,position:a,old_parent:l,is_multi:_,old_instance:h,new_instance:this}),!0},copy_node:function(n,r,a,i,s){var o,d,l,c,h,_,u,g,f,p,m;if(e.isArray(n)){for(n=n.reverse().slice(),o=0,d=n.length;d>o;o++)this.copy_node(n[o],r,a,i,s);return!0}if(n=n&&n.id?n:this.get_node(n),r=this.get_node(r),a=a===t?0:a,!r||!n||"#"===n.id)return!1;if(!(""+a).match(/^(before|after)$/)&&!s&&!this.is_loaded(r))return this.load_node(r,function(){this.copy_node(n,r,a,i,!0)});switch(g=""+n.parent,f=(""+a).match(/^(before|after)$/)&&"#"!==r.id?this.get_node(r.parent):r,p=this._model.data[n.id]?this:e.jstree.reference(n.id),m=this._id!==p._id,"#"===f.id&&("before"===a&&(a="first"),"after"===a&&(a="last")),a){case"before":a=e.inArray(r.id,f.children);break;case"after":a=e.inArray(r.id,f.children)+1;break;case"inside":case"first":a=0;break;case"last":a=f.children.length;break;default:a||(a=0)}if(a>f.children.length&&(a=f.children.length),!this.check("copy_node",n,f,a))return!1;if(u=p.get_json(n,{no_id:!0,no_data:!0,no_state:!0}),!u)return!1;if(u=this._parse_model_from_json(u,f.id,f.parents.concat()),!u)return!1;for(c=this.get_node(u),l=[],l.push(u),l=l.concat(c.children_d),this.trigger("model",{nodes:l,parent:f.id}),h=0,_=f.parents.length;_>h;h++)this._model.data[f.parents[h]].children_d=this._model.data[f.parents[h]].children_d.concat(l);for(l=[],h=0,_=f.children.length;_>h;h++)l[h>=a?h+1:h]=f.children[h];return l[a]=c.id,f.children=l,f.children_d.push(c.id),f.children_d=f.children_d.concat(c.children_d),this._node_changed(f.id),this.redraw("#"===f.id),i&&i.call(this,c,f,a),this.trigger("copy_node",{node:c,original:n,parent:f.id,position:a,old_parent:g,is_multi:m,old_instance:p,new_instance:this}),c.id},cut:function(n){if(n||(n=this._data.core.selected.concat()),e.isArray(n)||(n=[n]),!n.length)return!1;var r=[],o,d,l;for(d=0,l=n.length;l>d;d++)o=this.get_node(n[d]),o&&o.id&&"#"!==o.id&&r.push(o);return r.length?(a=r,s=this,i="move_node",this.trigger("cut",{node:n}),t):!1},copy:function(n){if(n||(n=this._data.core.selected.concat()),e.isArray(n)||(n=[n]),!n.length)return!1;var r=[],o,d,l;for(d=0,l=n.length;l>d;d++)o=this.get_node(n[d]),o&&o.id&&"#"!==o.id&&r.push(o);return r.length?(a=r,s=this,i="copy_node",this.trigger("copy",{node:n}),t):!1},get_buffer:function(){return{mode:i,node:a,inst:s}},can_paste:function(){return i!==!1&&a!==!1},paste:function(e){return e=this.get_node(e),e&&i&&i.match(/^(copy_node|move_node)$/)&&a?(this[i](a,e)&&this.trigger("paste",{parent:e.id,node:a,mode:i}),a=!1,i=!1,s=!1,t):!1},edit:function(n,r){if(n=this._open_to(n),!n||!n.length)return!1;var a=this._data.core.rtl,i=this.element.width(),s=n.children(".jstree-anchor"),o=e("<span>"),d="string"==typeof r?r:this.get_text(n),l=e("<div />",{css:{position:"absolute",top:"-200px",left:a?"0px":"-1000px",visibility:"hidden"}}).appendTo("body"),c=e("<input />",{value:d,"class":"jstree-rename-input",css:{padding:"0",border:"1px solid silver","box-sizing":"border-box",display:"inline-block",height:this._data.core.li_height+"px",lineHeight:this._data.core.li_height+"px",width:"150px"},blur:e.proxy(function(){var e=o.children(".jstree-rename-input"),t=e.val();""===t&&(t=d),l.remove(),o.replaceWith(s),o.remove(),this.rename_node(n,t)===!1&&this.set_text(n,d)},this),keydown:function(e){var t=e.which;27===t&&(this.value=d),(27===t||13===t||37===t||38===t||39===t||40===t||32===t)&&e.stopImmediatePropagation(),(27===t||13===t)&&(e.preventDefault(),this.blur())},click:function(e){e.stopImmediatePropagation()},mousedown:function(e){e.stopImmediatePropagation()},keyup:function(e){c.width(Math.min(l.text("pW"+this.value).width(),i))},keypress:function(e){return 13===e.which?!1:t}}),h={fontFamily:s.css("fontFamily")||"",fontSize:s.css("fontSize")||"",fontWeight:s.css("fontWeight")||"",fontStyle:s.css("fontStyle")||"",fontStretch:s.css("fontStretch")||"",fontVariant:s.css("fontVariant")||"",letterSpacing:s.css("letterSpacing")||"",wordSpacing:s.css("wordSpacing")||""};this.set_text(n,""),o.attr("class",s.attr("class")).append(s.contents().clone()).append(c),s.replaceWith(o),l.css(h),c.css(h).width(Math.min(l.text("pW"+c[0].value).width(),i))[0].select()},set_theme:function(t,n){if(!t)return!1;if(n===!0){var r=this.settings.core.themes.dir;r||(r=e.jstree.path+"/themes"),n=r+"/"+t+"/style.css"}n&&-1===e.inArray(n,o)&&(e("head").append('<link rel="stylesheet" href="'+n+'" type="text/css" />'),o.push(n)),this._data.core.themes.name&&this.element.removeClass("jstree-"+this._data.core.themes.name),this._data.core.themes.name=t,this.element.addClass("jstree-"+t),this.trigger("set_theme",{theme:t})},get_theme:function(){return this._data.core.themes.name},set_theme_variant:function(e){this._data.core.themes.variant&&this.element.removeClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant),this._data.core.themes.variant=e,e&&this.element.addClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant)},get_theme_variant:function(){return this._data.core.themes.variant},show_stripes:function(){this._data.core.themes.stripes=!0,this.get_container_ul().addClass("jstree-striped")},hide_stripes:function(){this._data.core.themes.stripes=!1,this.get_container_ul().removeClass("jstree-striped")},toggle_stripes:function(){this._data.core.themes.stripes?this.hide_stripes():this.show_stripes()},show_dots:function(){this._data.core.themes.dots=!0,this.get_container_ul().removeClass("jstree-no-dots")},hide_dots:function(){this._data.core.themes.dots=!1,this.get_container_ul().addClass("jstree-no-dots")},toggle_dots:function(){this._data.core.themes.dots?this.hide_dots():this.show_dots()},show_icons:function(){this._data.core.themes.icons=!0,this.get_container_ul().removeClass("jstree-no-icons")},hide_icons:function(){this._data.core.themes.icons=!1,this.get_container_ul().addClass("jstree-no-icons")},toggle_icons:function(){this._data.core.themes.icons?this.hide_icons():this.show_icons()},set_icon:function(t,n){var r,a,i;if(e.isArray(t)){for(t=t.slice(),r=0,a=t.length;a>r;r++)this.set_icon(t[r],n);return!0}return t=this.get_node(t),t&&"#"!==t.id?(t.icon=n,i=this.get_node(t,!0).children("jstree-anchor").children(".jstree-themeicon"),n===!1?this.removeClass("jstree-themeicon-custom").hide_icon(t):-1===n.indexOf("/")?i.addClass(n+" jstree-themeicon-custom").attr("rel",n):i.removeClass("jstree-themeicon-custom").css("background","url('"+n+"') center center no-repeat").attr("rel",n),!0):!1},get_icon:function(e){return e=this.get_node(e),e&&"#"!==e.id?e.icon:!1},hide_icon:function(t){var n,r;if(e.isArray(t)){for(t=t.slice(),n=0,r=t.length;r>n;n++)this.hide_icon(t[n]);return!0}return t=this.get_node(t),t&&"#"!==t?(t.icon=!1,this.get_node(t,!0).children("a").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"),!0):!1},show_icon:function(t){var n,r,a;if(e.isArray(t)){for(t=t.slice(),n=0,r=t.length;r>n;n++)this.show_icon(t[n]);return!0}return t=this.get_node(t),t&&"#"!==t?(a=this.get_node(t,!0),t.icon=a.length?a.children("a").children(".jstree-themeicon").attr("rel"):!0,t.icon||(t.icon=!0),a.children("a").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"),!0):!1}},e.vakata={},e.fn.vakata_reverse=[].reverse,e.vakata.attributes=function(t,n){t=e(t)[0];var r=n?{}:[];return e.each(t.attributes,function(t,a){-1===e.inArray(a.nodeName.toLowerCase(),["style","contenteditable","hasfocus","tabindex"])&&null!==a.nodeValue&&""!==e.trim(a.nodeValue)&&(n?r[a.nodeName]=a.nodeValue:r.push(a.nodeName))}),r},e.vakata.array_unique=function(e){var t=[],n,r,a;for(n=0,a=e.length;a>n;n++){for(r=0;n>=r;r++)if(e[n]===e[r])break;r===n&&t.push(e[n])}return t},e.vakata.array_remove=function(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=0>t?e.length+t:t,e.push.apply(e,r),e},function(){var t={},n=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},r=n(window.navigator.userAgent);r.browser&&(t[r.browser]=!0,t.version=r.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),e.vakata.browser=t}(),e.vakata.browser.msie&&8>e.vakata.browser.version&&(e.jstree.defaults.core.animation=0);var u=document.createElement("I");u.className="jstree-icon jstree-checkbox",e.jstree.defaults.checkbox={visible:!0,three_state:!0,whole_node:!0,keep_selected_style:!0},e.jstree.plugins.checkbox=function(t,n){this.bind=function(){n.bind.call(this),this._data.checkbox.uto=!1,this.element.on("init.jstree",e.proxy(function(){this._data.checkbox.visible=this.settings.checkbox.visible,this.settings.checkbox.keep_selected_style||this.element.addClass("jstree-checkbox-no-clicked")},this)).on("loading.jstree",e.proxy(function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]()},this)),this.settings.checkbox.three_state&&this.element.on("changed.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree",e.proxy(function(){this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(e.proxy(this._undetermined,this),50)},this)).on("model.jstree",e.proxy(function(t,n){var r=this._model.data,a=r[n.parent],i=n.nodes,s=[],o,d,l,c,h,_;if(a.state.selected){for(d=0,l=i.length;l>d;d++)r[i[d]].state.selected=!0;this._data.core.selected=this._data.core.selected.concat(i)}else for(d=0,l=i.length;l>d;d++)if(r[i[d]].state.selected){for(c=0,h=r[i[d]].children_d.length;h>c;c++)r[r[i[d]].children_d[c]].state.selected=!0;this._data.core.selected=this._data.core.selected.concat(r[i[d]].children_d)}for(d=0,l=a.children_d.length;l>d;d++)r[a.children_d[d]].children.length||s.push(r[a.children_d[d]].parent);for(s=e.vakata.array_unique(s),c=0,h=s.length;h>c;c++){a=r[s[c]];while(a&&"#"!==a.id){for(o=0,d=0,l=a.children.length;l>d;d++)o+=r[a.children[d]].state.selected;if(o!==l)break;a.state.selected=!0,this._data.core.selected.push(a.id),_=this.get_node(a,!0),_&&_.length&&_.children(".jstree-anchor").addClass("jstree-clicked"),a=this.get_node(a.parent)}}this._data.core.selected=e.vakata.array_unique(this._data.core.selected)},this)).on("select_node.jstree",e.proxy(function(t,n){var r=n.node,a=this._model.data,i=this.get_node(r.parent),s=this.get_node(r,!0),o,d,l,c;for(this._data.core.selected=e.vakata.array_unique(this._data.core.selected.concat(r.children_d)),o=0,d=r.children_d.length;d>o;o++)a[r.children_d[o]].state.selected=!0;while(i&&"#"!==i.id){for(l=0,o=0,d=i.children.length;d>o;o++)l+=a[i.children[o]].state.selected;if(l!==d)break;i.state.selected=!0,this._data.core.selected.push(i.id),c=this.get_node(i,!0),c&&c.length&&c.children(".jstree-anchor").addClass("jstree-clicked"),i=this.get_node(i.parent)}s.length&&s.find(".jstree-anchor").addClass("jstree-clicked")},this)).on("deselect_node.jstree",e.proxy(function(t,n){var r=n.node,a=this.get_node(r,!0),i,s,o;for(i=0,s=r.children_d.length;s>i;i++)this._model.data[r.children_d[i]].state.selected=!1;for(i=0,s=r.parents.length;s>i;i++)this._model.data[r.parents[i]].state.selected=!1,o=this.get_node(r.parents[i],!0),o&&o.length&&o.children(".jstree-anchor").removeClass("jstree-clicked");for(o=[],i=0,s=this._data.core.selected.length;s>i;i++)-1===e.inArray(this._data.core.selected[i],r.children_d)&&-1===e.inArray(this._data.core.selected[i],r.parents)&&o.push(this._data.core.selected[i]);this._data.core.selected=e.vakata.array_unique(o),a.length&&a.find(".jstree-anchor").removeClass("jstree-clicked")},this)).on("delete_node.jstree",e.proxy(function(e,t){var n=this.get_node(t.parent),r=this._model.data,a,i,s,o;while(n&&"#"!==n.id){for(s=0,a=0,i=n.children.length;i>a;a++)s+=r[n.children[a]].state.selected;if(s!==i)break;n.state.selected=!0,this._data.core.selected.push(n.id),o=this.get_node(n,!0),o&&o.length&&o.children(".jstree-anchor").addClass("jstree-clicked"),n=this.get_node(n.parent)}},this)).on("move_node.jstree",e.proxy(function(t,n){var r=n.is_multi,a=n.old_parent,i=this.get_node(n.parent),s=this._model.data,o,d,l,c,h;if(!r){o=this.get_node(a);while(o&&"#"!==o.id){for(d=0,l=0,c=o.children.length;c>l;l++)d+=s[o.children[l]].state.selected;if(d!==c)break;o.state.selected=!0,this._data.core.selected.push(o.id),h=this.get_node(o,!0),h&&h.length&&h.children(".jstree-anchor").addClass("jstree-clicked"),o=this.get_node(o.parent)}}o=i;while(o&&"#"!==o.id){for(d=0,l=0,c=o.children.length;c>l;l++)d+=s[o.children[l]].state.selected;if(d===c)o.state.selected||(o.state.selected=!0,this._data.core.selected.push(o.id),h=this.get_node(o,!0),h&&h.length&&h.children(".jstree-anchor").addClass("jstree-clicked"));else{if(!o.state.selected)break;o.state.selected=!1,this._data.core.selected=e.vakata.array_remove(this._data.core.selected,e.inArray(o.id,this._data.core.selected)),h=this.get_node(o,!0),h&&h.length&&h.children(".jstree-anchor").removeClass("jstree-clicked")}o=this.get_node(o.parent)}},this))},this._undetermined=function(){var t,n,r=this._model.data,a=this._data.core.selected,i=[],s=this;for(t=0,n=a.length;n>t;t++)r[a[t]]&&r[a[t]].parents&&(i=i.concat(r[a[t]].parents));for(this.element.find(".jstree-closed").not(":has(ul)").each(function(){var e=s.get_node(this);!e.state.loaded&&e.original&&e.original.state&&e.original.state.undetermined&&e.original.state.undetermined===!0&&(i.push(e.id),i=i.concat(e.parents))}),i=e.vakata.array_unique(i),t=e.inArray("#",i),-1!==t&&(i=e.vakata.array_remove(i,t)),this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"),t=0,n=i.length;n>t;t++)r[i[t]].state.selected||(a=this.get_node(i[t],!0),a&&a.length&&a.children("a").children(".jstree-checkbox").addClass("jstree-undetermined"))},this.redraw_node=function(t,r,a){if(t=n.redraw_node.call(this,t,r,a)){var i=t.getElementsByTagName("A")[0];i.insertBefore(u.cloneNode(),i.childNodes[0])}return!a&&this.settings.checkbox.three_state&&(this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(e.proxy(this._undetermined,this),50)),t},this.activate_node=function(t,r){return(this.settings.checkbox.whole_node||e(r.target).hasClass("jstree-checkbox"))&&(r.ctrlKey=!0),n.activate_node.call(this,t,r)},this.show_checkboxes=function(){this._data.core.themes.checkboxes=!0,this.element.children("ul").removeClass("jstree-no-checkboxes")},this.hide_checkboxes=function(){this._data.core.themes.checkboxes=!1,this.element.children("ul").addClass("jstree-no-checkboxes")},this.toggle_checkboxes=function(){this._data.core.themes.checkboxes?this.hide_checkboxes():this.show_checkboxes()}},e.jstree.defaults.contextmenu={select_node:!0,show_at_node:!0,items:function(t){return{create:{separator_before:!1,separator_after:!0,_disabled:!1,label:"Create",action:function(t){var n=e.jstree.reference(t.reference),r=n.get_node(t.reference);n.create_node(r,{},"last",function(e){setTimeout(function(){n.edit(e)},0)})}},rename:{separator_before:!1,separator_after:!1,_disabled:!1,label:"Rename",action:function(t){var n=e.jstree.reference(t.reference),r=n.get_node(t.reference);n.edit(r)}},remove:{separator_before:!1,icon:!1,separator_after:!1,_disabled:!1,label:"Delete",action:function(t){var n=e.jstree.reference(t.reference),r=n.get_node(t.reference);n.is_selected(r)?n.delete_node(n.get_selected()):n.delete_node(r)}},ccp:{separator_before:!0,icon:!1,separator_after:!1,label:"Edit",action:!1,submenu:{cut:{separator_before:!1,separator_after:!1,label:"Cut",action:function(t){var n=e.jstree.reference(t.reference),r=n.get_node(t.reference);n.is_selected(r)?n.cut(n.get_selected()):n.cut(r)}},copy:{separator_before:!1,icon:!1,separator_after:!1,label:"Copy",action:function(t){var n=e.jstree.reference(t.reference),r=n.get_node(t.reference);n.is_selected(r)?n.copy(n.get_selected()):n.copy(r)}},paste:{separator_before:!1,icon:!1,_disabled:!this.can_paste(),separator_after:!1,label:"Paste",action:function(t){var n=e.jstree.reference(t.reference),r=n.get_node(t.reference);n.paste(r)}}}}}}},e.jstree.plugins.contextmenu=function(n,r){this.bind=function(){r.bind.call(this),this.element.on("contextmenu.jstree","a",e.proxy(function(e){e.preventDefault(),this.is_loading(e.currentTarget)||this.show_contextmenu(e.currentTarget,e.pageX,e.pageY)},this)).on("click.jstree","a",e.proxy(function(t){this._data.contextmenu.visible&&e.vakata.context.hide()},this)),e(document).on("context_hide.vakata",e.proxy(function(){this._data.contextmenu.visible=!1},this))},this.teardown=function(){this._data.contextmenu.visible&&e.vakata.context.hide(),r.teardown.call(this)},this.show_contextmenu=function(n,r,a){if(n=this.get_node(n),!n||"#"===n.id)return!1;var i=this.settings.contextmenu,s=this.get_node(n,!0),o=s.children(".jstree-anchor"),d=!1,l=!1;(i.show_at_node||r===t||a===t)&&(d=o.offset(),r=d.left,a=d.top+this._data.core.li_height),this.settings.contextmenu.select_node&&!this.is_selected(n)&&(this.deselect_all(),this.select_node(n)),l=i.items,e.isFunction(l)&&(l=l.call(this,n)),e(document).one("context_show.vakata",e.proxy(function(t,n){var r="jstree-contextmenu jstree-"+this.get_theme()+"-contextmenu";e(n.element).addClass(r)},this)),this._data.contextmenu.visible=!0,e.vakata.context.show(o,{x:r,y:a},l),this.trigger("show_contextmenu",{node:n,x:r,y:a})}},function(e){var n=!1,r={element:!1,reference:!1,position_x:0,position_y:0,items:[],html:"",is_visible:!1};e.vakata.context={settings:{hide_onmouseleave:0,icons:!0},_trigger:function(t){e(document).triggerHandler("context_"+t+".vakata",{reference:r.reference,element:r.element,position:{x:r.position_x,y:r.position_y}})},_execute:function(e){return e=r.items[e],e&&!e._disabled&&e.action?e.action.call(null,{item:e,reference:r.reference,element:r.element,position:{x:r.position_x,y:r.position_y}}):!1},_parse:function(n,a){if(!n)return!1;a||(r.html="",r.items=[]);var i="",s=!1,o;return a&&(i+="<ul>"),e.each(n,function(n,a){return a?(r.items.push(a),!s&&a.separator_before&&(i+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;<"+"/a><"+"/li>"),s=!1,i+="<li class='"+(a._class||"")+(a._disabled?" vakata-contextmenu-disabled ":"")+"'>",i+="<a href='#' rel='"+(r.items.length-1)+"'>",e.vakata.context.settings.icons&&(i+="<ins ",a.icon&&(i+=-1!==a.icon.indexOf("/")?" style='background:url(\""+a.icon+"\") center center no-repeat' ":" class='"+a.icon+"' "),i+=">&#160;</ins><span>&#160;</span>"),i+=a.label+"<"+"/a>",a.submenu&&(o=e.vakata.context._parse(a.submenu,!0),o&&(i+=o)),i+="</li>",a.separator_after&&(i+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;<"+"/a><"+"/li>",s=!0),t):!0}),i=i.replace(/<li class\='vakata-context-separator'\><\/li\>$/,""),a&&(i+="</ul>"),a||(r.html=i,e.vakata.context._trigger("parse")),i.length>10?i:!1},_show_submenu:function(t){if(t=e(t),t.length&&t.children("ul").length){var r=t.children("ul"),a=t.offset().left+t.outerWidth(),i=t.offset().top,s=r.width(),o=r.height(),d=e(window).width()+e(window).scrollLeft(),l=e(window).height()+e(window).scrollTop();n?t[0>a-(s+10+t.outerWidth())?"addClass":"removeClass"]("vakata-context-left"):t[a+s+10>d?"addClass":"removeClass"]("vakata-context-right"),i+o+10>l&&r.css("bottom","-1px"),r.show()}},show:function(t,a,i){var s,o,d,l,c,h,_,u,g=!0;switch(r.element&&r.element.length&&r.element.width(""),g){case!a&&!t:return!1;case!!a&&!!t:r.reference=t,r.position_x=a.x,r.position_y=a.y;break;case!a&&!!t:r.reference=t,s=t.offset(),r.position_x=s.left+t.outerHeight(),r.position_y=s.top;break;case!!a&&!t:r.position_x=a.x,r.position_y=a.y}t&&!i&&e(t).data("vakata_contextmenu")&&(i=e(t).data("vakata_contextmenu")),e.vakata.context._parse(i)&&r.element.html(r.html),r.items.length&&(o=r.element,d=r.position_x,l=r.position_y,c=o.width(),h=o.height(),_=e(window).width()+e(window).scrollLeft(),u=e(window).height()+e(window).scrollTop(),n&&(d-=o.outerWidth(),e(window).scrollLeft()+20>d&&(d=e(window).scrollLeft()+20)),d+c+20>_&&(d=_-(c+20)),l+h+20>u&&(l=u-(h+20)),r.element.css({left:d,top:l}).show().find("a:eq(0)").focus().parent().addClass("vakata-context-hover"),r.is_visible=!0,e.vakata.context._trigger("show"))},hide:function(){r.is_visible&&(r.element.hide().find("ul").hide().end().find(":focus").blur(),r.is_visible=!1,e.vakata.context._trigger("hide"))}},e(function(){n="rtl"===e("body").css("direction");var t=!1,a='.vakata-context { display:none; _width:1px; } .vakata-context, .vakata-context ul { margin:0; padding:2px; position:absolute; background:#f5f5f5; border:1px solid #979797; 	-moz-box-shadow:5px 5px 4px -4px #666666; -webkit-box-shadow:2px 2px 2px #999999; box-shadow:2px 2px 2px #999999; }.vakata-context ul { list-style:none; left:100%; margin-top:-2.7em; margin-left:-4px; } .vakata-context li.vakata-context-right ul { left:auto; right:100%; margin-left:auto; margin-right:-4px; } .vakata-context li { list-style:none; display:inline; }.vakata-context li a { display:block; padding:0 2em 0 2em; text-decoration:none; width:auto; color:black; white-space:nowrap; line-height:2.4em; 	-moz-text-shadow:1px 1px 0px white; -webkit-text-shadow:1px 1px 0px white; text-shadow:1px 1px 0px white; 	-moz-border-radius:1px; -webkit-border-radius:1px; border-radius:1px; }.vakata-context li a:hover { position:relative; background-color:#e8eff7; 	-moz-box-shadow:0px 0px 2px #0a6aa1; -webkit-box-shadow:0px 0px 2px #0a6aa1; box-shadow:0px 0px 2px #0a6aa1; }.vakata-context li.vakata-context-hover > a { position:relative; background-color:#e8eff7; 	-moz-box-shadow:0px 0px 2px #0a6aa1; -webkit-box-shadow:0px 0px 2px #0a6aa1; box-shadow:0px 0px 2px #0a6aa1; }.vakata-context li a.vakata-context-parent { background-image:url("data:image/gif;base64,R0lGODlhCwAHAIAAACgoKP///yH5BAEAAAEALAAAAAALAAcAAAIORI4JlrqN1oMSnmmZDQUAOw=="); background-position:right center; background-repeat:no-repeat; } .vakata-context li.vakata-context-separator a, .vakata-context li.vakata-context-separator a:hover { background:white; border:0; border-top:1px solid #e2e3e3; height:1px; min-height:1px; max-height:1px; padding:0; margin:0 0 0 2.4em; border-left:1px solid #e0e0e0; _overflow:hidden; 	-moz-text-shadow:0 0 0 transparent; -webkit-text-shadow:0 0 0 transparent; text-shadow:0 0 0 transparent; 	-moz-box-shadow:0 0 0 transparent; -webkit-box-shadow:0 0 0 transparent; box-shadow:0 0 0 transparent; 	-moz-border-radius:0; -webkit-border-radius:0; border-radius:0; }.vakata-context li.vakata-contextmenu-disabled a, .vakata-context li.vakata-contextmenu-disabled a:hover { color:silver; background-color:transparent; border:0; box-shadow:0 0 0; }.vakata-context li a ins { text-decoration:none; display:inline-block; width:2.4em; height:2.4em; background:transparent; margin:0 0 0 -2em; } .vakata-context li a span { display:inline-block; width:1px; height:2.4em; background:white; margin:0 0.5em 0 0; border-left:1px solid #e2e3e3; _overflow:hidden; } .vakata-context-rtl ul { left:auto; right:100%; margin-left:auto; margin-right:-4px; } .vakata-context-rtl li a.vakata-context-parent { background-image:url("data:image/gif;base64,R0lGODlhCwAHAIAAACgoKP///yH5BAEAAAEALAAAAAALAAcAAAINjI+AC7rWHIsPtmoxLAA7"); background-position:left center; background-repeat:no-repeat; } .vakata-context-rtl li.vakata-context-separator a { margin:0 2.4em 0 0; border-left:0; border-right:1px solid #e2e3e3;} .vakata-context-rtl li.vakata-context-left ul { right:auto; left:100%; margin-left:-4px; margin-right:auto; } .vakata-context-rtl li a ins { margin:0 -2em 0 0; } .vakata-context-rtl li a span { margin:0 0 0 0.5em; border-left-color:white; background:#e2e3e3; } ';e.jstree.no_css||e("head").append('<style type="text/css">'+a+"</style>"),r.element=e("<ul class='vakata-context'></ul>"),r.element.on("mouseenter","li",function(n){n.stopImmediatePropagation(),e.contains(this,n.relatedTarget)||(t&&clearTimeout(t),r.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(),e(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context","li").addBack().addClass("vakata-context-hover"),e.vakata.context._show_submenu(this))}).on("mouseleave","li",function(t){e.contains(this,t.relatedTarget)||e(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")}).on("mouseleave",function(n){e(this).find(".vakata-context-hover").removeClass("vakata-context-hover"),e.vakata.context.settings.hide_onmouseleave&&(t=setTimeout(function(t){return function(){e.vakata.context.hide()}}(this),e.vakata.context.settings.hide_onmouseleave))}).on("click","a",function(e){e.preventDefault()}).on("mouseup","a",function(t){e(this).blur().parent().hasClass("vakata-context-disabled")||e.vakata.context._execute(e(this).attr("rel"))===!1||e.vakata.context.hide()}).on("keydown","a",function(t){var n=null;switch(t.which){case 13:case 32:t.type="mouseup",t.preventDefault(),e(t.currentTarget).trigger(t);break;case 37:r.is_visible&&(r.element.find(".vakata-context-hover").last().parents("li:eq(0)").find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 38:r.is_visible&&(n=r.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first(),n.length||(n=r.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()),n.addClass("vakata-context-hover").children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 39:r.is_visible&&(r.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 40:r.is_visible&&(n=r.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first(),n.length||(n=r.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()),n.addClass("vakata-context-hover").children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 27:e.vakata.context.hide(),t.preventDefault();break;default:}}).appendTo("body"),e(document).on("mousedown",function(t){r.is_visible&&!e.contains(r.element[0],t.target)&&e.vakata.context.hide()}).on("context_show.vakata",function(e,t){r.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"),n&&r.element.addClass("vakata-context-rtl").css("direction","rtl"),r.element.find("ul").hide().end()})})}(e),e.jstree.defaults.dnd={copy:!0,open_timeout:500},e.jstree.plugins.dnd=function(n,r){this.bind=function(){r.bind.call(this),this.element.on("mousedown","a",e.proxy(function(n){var r=this.get_node(n.target),a=this.is_selected(r)?this.get_selected().length:1;return r&&r.id&&"#"!==r.id&&1===n.which?(this.element.trigger("mousedown.jstree"),e.vakata.dnd.start(n,{jstree:!0,origin:this,obj:this.get_node(r,!0),nodes:a>1?this.get_selected():[r.id]},'<div id="jstree-dnd" class="jstree-'+this.get_theme()+'"><i class="jstree-icon jstree-er"></i>'+(a>1?a+" "+this.get_string("nodes"):this.get_text(n.currentTarget,!0))+'<ins class="jstree-copy" style="display:none;">+</ins></div>')):t},this))}},e(function(){var n=!1,r=!1,a=e('<div id="jstree-marker">&#160;</div>').hide().appendTo("body");e(document).bind("dnd_start.vakata",function(e,t){n=!1}).bind("dnd_move.vakata",function(i,s){if(r&&clearTimeout(r),s.data.jstree&&(!s.event.target.id||"jstree-marker"!==s.event.target.id)){var o=e.jstree.reference(s.event.target),d=!1,l=!1,c=!1,h,_,u,g,f,p,m,v,j,x,y,k;if(o&&o._data&&o._data.dnd)if(a.attr("class","jstree-"+o.get_theme()),s.helper.children().attr("class","jstree-"+o.get_theme()).find(".jstree-copy:eq(0)")[s.data.origin.settings.dnd.copy&&(s.event.metaKey||s.event.ctrlKey)?"show":"hide"](),s.event.target!==o.element[0]&&s.event.target!==o.get_container_ul()[0]||0!==o.get_container_ul().children().length){if(d=e(s.event.target).closest("a"),d&&d.length&&d.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")&&(l=d.offset(),c=s.event.pageY-l.top,u=d.height(),p=u/3>c?["b","i","a"]:c>u-u/3?["a","i","b"]:c>u/2?["i","a","b"]:["i","b","a"],e.each(p,function(i,c){switch(c){case"b":h=l.left-6,_=l.top-5,g=o.get_parent(d),f=d.parent().index();break;case"i":h=l.left-2,_=l.top-5+u/2+1,g=d.parent(),f=0;break;case"a":h=l.left-6,_=l.top-5+u,g=o.get_parent(d),f=d.parent().index()+1}for(m=!0,v=0,j=s.data.nodes.length;j>v;v++)if(x=s.data.origin.settings.dnd.copy&&(s.event.metaKey||s.event.ctrlKey)?"copy_node":"move_node",y=f,"move_node"===x&&"a"===c&&s.data.origin===o&&g===o.get_parent(s.data.nodes[v])&&(k=o.get_node(g),y>e.inArray(s.data.nodes[v],k.children)&&(y-=1)),m=m&&o.check(x,s.data.nodes[v],g,y),!m)break;return m?("i"===c&&d.parent().is(".jstree-closed")&&o.settings.dnd.open_timeout&&(r=setTimeout(function(e,t){return function(){e.open_node(t)
}}(o,d),o.settings.dnd.open_timeout)),n={ins:o,par:g,pos:f},a.css({left:h+"px",top:_+"px"}).show(),s.helper.find(".jstree-icon:eq(0)").removeClass("jstree-er").addClass("jstree-ok"),p=!0,!1):t}),p===!0))return}else{for(m=!0,v=0,j=s.data.nodes.length;j>v;v++)if(m=m&&o.check(s.data.origin.settings.dnd.copy&&(s.event.metaKey||s.event.ctrlKey)?"copy_node":"move_node",s.data.nodes[v],"#","last"),!m)break;if(m)return n={ins:o,par:"#",pos:"last"},a.hide(),s.helper.find(".jstree-icon:eq(0)").removeClass("jstree-er").addClass("jstree-ok"),t}n=!1,s.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"),a.hide()}}).bind("dnd_scroll.vakata",function(e,t){t.data.jstree&&(a.hide(),n=!1,t.helper.find(".jstree-icon:eq(0)").removeClass("jstree-ok").addClass("jstree-er"))}).bind("dnd_stop.vakata",function(e,t){r&&clearTimeout(r),t.data.jstree&&(a.hide(),n&&n.ins[t.data.origin.settings.dnd.copy&&(t.event.metaKey||t.event.ctrlKey)?"copy_node":"move_node"](t.data.nodes,n.par,n.pos))}).bind("keyup keydown",function(t,n){n=e.vakata.dnd._get(),n.data&&n.data.jstree&&n.helper.find(".jstree-copy:eq(0)")[n.data.origin.settings.dnd.copy&&(t.metaKey||t.ctrlKey)?"show":"hide"]()})}),function(e){e.fn.vakata_reverse=[].reverse;var n={element:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1};e.vakata.dnd={settings:{scroll_speed:10,scroll_proximity:20,helper_left:5,helper_top:10,threshold:5},_trigger:function(t,n){var r=e.vakata.dnd._get();r.event=n,e(document).triggerHandler("dnd_"+t+".vakata",r)},_get:function(){return{data:n.data,element:n.element,helper:n.helper}},_clean:function(){n.helper&&n.helper.remove(),n.scroll_i&&(clearInterval(n.scroll_i),n.scroll_i=!1),n={element:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1},e(document).unbind("mousemove",e.vakata.dnd.drag),e(document).unbind("mouseup",e.vakata.dnd.stop)},_scroll:function(t){if(!n.scroll_e||!n.scroll_l&&!n.scroll_t)return n.scroll_i&&(clearInterval(n.scroll_i),n.scroll_i=!1),!1;if(!n.scroll_i)return n.scroll_i=setInterval(e.vakata.dnd._scroll,100),!1;if(t===!0)return!1;var r=n.scroll_e.scrollTop(),a=n.scroll_e.scrollLeft();n.scroll_e.scrollTop(r+n.scroll_t*e.vakata.dnd.settings.scroll_speed),n.scroll_e.scrollLeft(a+n.scroll_l*e.vakata.dnd.settings.scroll_speed),(r!==n.scroll_e.scrollTop()||a!==n.scroll_e.scrollLeft())&&e.vakata.dnd._trigger("scroll",n.scroll_e)},start:function(t,r,a){n.is_drag&&e.vakata.dnd.stop({});try{t.currentTarget.unselectable="on",t.currentTarget.onselectstart=function(){return!1},t.currentTarget.style&&(t.currentTarget.style.MozUserSelect="none")}catch(i){}return n.init_x=t.pageX,n.init_y=t.pageY,n.data=r,n.is_down=!0,n.element=t.currentTarget,a!==!1&&(n.helper=e("<div id='vakata-dnd'></div>").html(a).css({display:"block",margin:"0",padding:"0",position:"absolute",top:"-2000px",lineHeight:"16px",zIndex:"10000"})),e(document).bind("mousemove",e.vakata.dnd.drag),e(document).bind("mouseup",e.vakata.dnd.stop),!1},drag:function(r){if(n.is_down){if(!n.is_drag){if(!(Math.abs(r.pageX-n.init_x)>e.vakata.dnd.settings.threshold||Math.abs(r.pageY-n.init_y)>e.vakata.dnd.settings.threshold))return;n.helper&&(n.helper.appendTo("body"),n.helper_w=n.helper.outerWidth()),n.is_drag=!0,e.vakata.dnd._trigger("start",r)}var a=!1,i=!1,s=!1,o=!1,d=!1,l=!1,c=!1,h=!1,_=!1,u=!1;n.scroll_t=0,n.scroll_l=0,n.scroll_e=!1,e(r.target).parentsUntil("body").addBack().vakata_reverse().filter(function(){return/^auto|scroll$/.test(e(this).css("overflow"))&&(this.scrollHeight>this.offsetHeight||this.scrollWidth>this.offsetWidth)}).each(function(){var a=e(this),i=a.offset();return this.scrollHeight>this.offsetHeight&&(i.top+a.height()-r.pageY<e.vakata.dnd.settings.scroll_proximity&&(n.scroll_t=1),r.pageY-i.top<e.vakata.dnd.settings.scroll_proximity&&(n.scroll_t=-1)),this.scrollWidth>this.offsetWidth&&(i.left+a.width()-r.pageX<e.vakata.dnd.settings.scroll_proximity&&(n.scroll_l=1),r.pageX-i.left<e.vakata.dnd.settings.scroll_proximity&&(n.scroll_l=-1)),n.scroll_t||n.scroll_l?(n.scroll_e=e(this),!1):t}),n.scroll_e||(a=e(document),i=e(window),s=a.height(),o=i.height(),d=a.width(),l=i.width(),c=a.scrollTop(),h=a.scrollLeft(),s>o&&r.pageY-c<e.vakata.dnd.settings.scroll_proximity&&(n.scroll_t=-1),s>o&&o-(r.pageY-c)<e.vakata.dnd.settings.scroll_proximity&&(n.scroll_t=1),d>l&&r.pageX-h<e.vakata.dnd.settings.scroll_proximity&&(n.scroll_l=-1),d>l&&l-(r.pageX-h)<e.vakata.dnd.settings.scroll_proximity&&(n.scroll_l=1),(n.scroll_t||n.scroll_l)&&(n.scroll_e=a)),n.scroll_e&&e.vakata.dnd._scroll(!0),n.helper&&(_=parseInt(r.pageY+e.vakata.dnd.settings.helper_top,10),u=parseInt(r.pageX+e.vakata.dnd.settings.helper_left,10),s&&_+25>s&&(_=s-50),d&&u+n.helper_w>d&&(u=d-(n.helper_w+2)),n.helper.css({left:u+"px",top:_+"px"})),e.vakata.dnd._trigger("move",r)}},stop:function(t){n.is_drag&&e.vakata.dnd._trigger("stop",t),e.vakata.dnd._clean()}}}(jQuery),e.jstree.defaults.search={ajax:!1,fuzzy:!0,case_sensitive:!1,show_only_matches:!1},e.jstree.plugins.search=function(t,n){this.bind=function(){n.bind.call(this),this._data.search.str="",this._data.search.dom=e(),this._data.search.res=[],this.settings.search.show_only_matches&&this.element.on("search.jstree",function(t,n){n.nodes.length&&(e(this).find("li").hide().filter(".jstree-last").filter(function(){return this.nextSibling}).removeClass("jstree-last"),n.nodes.parentsUntil(".jstree").addBack().show().filter("ul").each(function(){e(this).children("li:visible").eq(-1).addClass("jstree-last")}))}).on("clear_search.jstree",function(t,n){n.nodes.length&&e(this).find("li").css("display","").filter(".jstree-last").filter(function(){return this.nextSibling}).removeClass("jstree-last")})},this.search=function(t,n){if(t===!1||""===e.trim(t))return this.clear_search();var r=this.settings.search,a=r.ajax?e.extend({},r.ajax):!1,i=null,s=[],o=[],d,l;if(this._data.search.res.length&&this.clear_search(),!n&&a!==!1)return a.data||(a.data={}),a.data.str=t,e.ajax(r.ajax).done(e.proxy(function(e){this._search_load(e,t)},this));if(this._data.search.str=t,this._data.search.dom=e(),this._data.search.res=[],i=new e.vakata.search(t,!0,{caseSensitive:r.case_sensitive,fuzzy:r.fuzzy}),e.each(this._model.data,function(e,t){t.text&&i.search(t.text).isMatch&&(s.push(e),o=o.concat(t.parents))}),s.length){for(o=e.vakata.array_unique(o),this._search_open(o),d=0,l=s.length;l>d;d++)i=this.get_node(s[d],!0),i&&(this._data.search.dom=this._data.search.dom.add(i));this._data.search.res=s,this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")}this.trigger("search",{nodes:this._data.search.dom,str:t,res:this._data.search.res})},this.clear_search=function(){this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search"),this.trigger("clear_search",{nodes:this._data.search.dom,str:this._data.search.str,res:this._data.search.res}),this._data.search.str="",this._data.search.res=[],this._data.search.dom=e()},this._search_open=function(t){var n=this;e.each(t.concat([]),function(e,r){r=document.getElementById(r),r&&n.is_closed(r)&&n.open_node(r,function(){n._search_open(t)})})},this._search_load=function(t,n){var r=!0,a=this,i=a._model.data;e.each(t.concat([]),function(e,s){i[s]&&(i[s].state.loaded||(a.load_node(s,function(){a._search_load(t,n)}),r=!1))}),r&&this.search(n,!0)}},function(e){e.vakata.search=function(e,t,n){n=n||{},n.fuzzy!==!1&&(n.fuzzy=!0),e=n.caseSensitive?e:e.toLowerCase();var r=n.location||0,a=n.distance||100,i=n.threshold||.6,s=e.length,o,d,l,c;return s>32&&(n.fuzzy=!1),n.fuzzy&&(o=1<<s-1,d=function(){var t={},n=0;for(n=0;s>n;n++)t[e.charAt(n)]=0;for(n=0;s>n;n++)t[e.charAt(n)]|=1<<s-n-1;return t}(),l=function(e,t){var n=e/s,i=Math.abs(r-t);return a?n+i/a:i?1:n}),c=function(t){if(t=n.caseSensitive?t:t.toLowerCase(),e===t||-1!==t.indexOf(e))return{isMatch:!0,score:0};if(!n.fuzzy)return{isMatch:!1,score:1};var a,c,h=t.length,_=i,u=t.indexOf(e,r),g,f,p=s+h,m,v,j,x,y,k=1,b=[];for(-1!==u&&(_=Math.min(l(0,u),_),u=t.lastIndexOf(e,r+s),-1!==u&&(_=Math.min(l(0,u),_))),u=-1,a=0;s>a;a++){g=0,f=p;while(f>g)_>=l(a,r+f)?g=f:p=f,f=Math.floor((p-g)/2+g);for(p=f,v=Math.max(1,r-f+1),j=Math.min(r+f,h)+s,x=Array(j+2),x[j+1]=(1<<a)-1,c=j;c>=v;c--)if(y=d[t.charAt(c-1)],x[c]=0===a?(1|x[c+1]<<1)&y:(1|x[c+1]<<1)&y|(1|(m[c+1]|m[c])<<1)|m[c+1],x[c]&o&&(k=l(a,c-1),_>=k)){if(_=k,u=c-1,b.push(u),!(u>r))break;v=Math.max(1,2*r-u)}if(l(a+1,r)>_)break;m=x}return{isMatch:u>=0,score:k}},t===!0?{search:c}:c(t)}}(jQuery),e.jstree.defaults.sort=function(e,t){return this.get_text(e)>this.get_text(t)?1:-1},e.jstree.plugins.sort=function(t,n){this.bind=function(){n.bind.call(this),this.element.on("model.jstree",e.proxy(function(e,t){this.sort(t.parent,!0)},this)).on("rename_node.jstree create_node.jstree",e.proxy(function(e,t){this.sort(t.parent||t.node.parent,!1),this.redraw_node(t.parent||t.node.parent,!0)},this)).on("move_node.jstree copy_node.jstree",e.proxy(function(e,t){this.sort(t.parent,!1),this.redraw_node(t.parent,!0)},this))},this.sort=function(t,n){var r,a;if(t=this.get_node(t),t&&t.children&&t.children.length&&(t.children.sort(e.proxy(this.settings.sort,this)),n))for(r=0,a=t.children_d.length;a>r;r++)this.sort(t.children_d[r],!1)}};var g=!1;e.jstree.defaults.state={key:"jstree",events:"changed.jstree open_node.jstree close_node.jstree",ttl:!1},e.jstree.plugins.state=function(t,n){this.bind=function(){n.bind.call(this),this.element.on("ready.jstree",e.proxy(function(t,n){this.element.one("restore_state.jstree set_state.jstree",e.proxy(function(){this.element.on(this.settings.state.events,e.proxy(function(){g&&clearTimeout(g),g=setTimeout(e.proxy(function(){this.save_state()},this),100)},this))},this)),this.restore_state()},this))},this.save_state=function(){e.vakata.storage.set(this.settings.state.key,this.get_state(),this.settings.state.ttl)},this.restore_state=function(){var t=e.vakata.storage.get(this.settings.state.key);t&&this.set_state(t),this.trigger("restore_state",{state:t})},this.clear_state=function(){return e.vakata.storage.del(this.settings.state.key)}},function(e,t){var n=function(e){var t=/["\\\x00-\x1f\x7f-\x9f]/g,n={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return e.match(t)?'"'+e.replace(t,function(e){var t=n[e];return"string"==typeof t?t:(t=e.charCodeAt(),"\\u00"+Math.floor(t/16).toString(16)+(t%16).toString(16))})+'"':'"'+e+'"'};e.vakata.json={encode:JSON&&JSON.stringify?JSON.stringify:function(r){if(null===r)return"null";var a=[],i;switch(typeof r){case"undefined":return t;case"number":case"boolean":return""+r;case"string":return n(r);case"object":if(e.isFunction(r.toJSON))return e.vakata.json.encode(r.toJSON());if(r.constructor===Date)return'"'+r.getUTCFullYear()+"-"+("0"+(r.getUTCMonth()+1)+"").slice(-2)+"-"+("0"+r.getUTCDate()+"").slice(-2)+"T"+("0"+r.getUTCHours()+"").slice(-2)+":"+("0"+r.getUTCMinutes()+"").slice(-2)+":"+("0"+r.getUTCSeconds()+"").slice(-2)+"."+("00"+r.getUTCMilliseconds()+"").slice(-3)+'Z"';if(r.constructor===Array){for(i=0;r.length>i;i++)a.push(e.vakata.json.encode(r[i])||"null");return"["+a.join(",")+"]"}return e.each(r,function(r,i){return e.isFunction(i)?!0:(r="number"==typeof r?'"'+r+'"':n(r),i=e.vakata.json.encode(i),a.push(r+":"+i),t)}),"{"+a.join(", ")+"}"}},decode:JSON&&JSON.parse?JSON.parse:function(t){return e.parseJSON(t)}}}(jQuery),function(e,t,n){var r=function(e){return e},a=function(e){return decodeURIComponent(e.replace(/\+/g," "))},i=e.vakata.cookie=function(s,o,d){var l,c,h,_,u,g,f,p;if(o!==n)return d=e.extend({},i.defaults,d),null===o&&(d.expires=-1),"number"==typeof d.expires&&(l=d.expires,c=d.expires=new Date,c.setDate(c.getDate()+l)),o=i.json?e.vakata.json.encode(o):o+"",o=[encodeURIComponent(s),"=",i.raw?o:encodeURIComponent(o),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join(""),t.cookie=o,o;for(h=i.raw?r:a,_=t.cookie.split("; "),u=0,g=_.length;g>u;u++)if(f=_[u].split("="),h(f.shift())===s)return p=h(f.join("=")),i.json?e.vakata.json.decode(p):p;return null};i.defaults={},e.vakata.removeCookie=function(t,n){return null!==e.vakata.cookie(t)?(e.vakata.cookie(t,null,n),!0):!1}}(jQuery,document),function(e,t){var n={},r={jStorage:"{}"},a=null,i=0,s=e.vakata.json.encode,o=e.vakata.json.decode,d=!1,l=!1;function c(){if(r.jStorage)try{n=o(r.jStorage+"")}catch(e){r.jStorage="{}"}else r.jStorage="{}";i=r.jStorage?(r.jStorage+"").length:0}function h(){try{r.jStorage=s(n),"userDataBehavior"===d&&(a.setAttribute("jStorage",r.jStorage),a.save("jStorage")),"cookie"===d&&e.vakata.cookie("__vjstorage",r.jStorage,{expires:365}),i=r.jStorage?(r.jStorage+"").length:0}catch(t){}}function _(e){if(!e||"string"!=typeof e&&"number"!=typeof e)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"===e)throw new TypeError("Reserved key name");return!0}function u(){var e=+new Date,t,r,a=1/0,i=!1;if(l!==!1&&clearTimeout(l),n.__jstorage_meta&&"object"==typeof n.__jstorage_meta.TTL){r=n.__jstorage_meta.TTL;for(t in r)r.hasOwnProperty(t)&&(e>=r[t]?(delete r[t],delete n[t],i=!0):a>r[t]&&(a=r[t]));1/0!==a&&(l=setTimeout(u,a-e)),i&&h()}}function g(){var n=!1,i;if(window.hasOwnProperty("localStorage"))try{window.localStorage.setItem("_tmptest","tmpval"),n=!0,window.localStorage.removeItem("_tmptest")}catch(s){}if(n)try{window.localStorage&&(r=window.localStorage,d="localStorage")}catch(s){}else if(window.hasOwnProperty("globalStorage"))try{window.globalStorage&&(r=window.globalStorage[window.location.hostname],d="globalStorage")}catch(s){}else{if(a=document.createElement("link"),a.addBehavior){a.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(a);try{a.load("jStorage"),i="{}",i=a.getAttribute("jStorage"),r.jStorage=i,d="userDataBehavior"}catch(s){}}if(!d&&(e.vakata.cookie("__vjstorage")||e.vakata.cookie("__vjstorage","{}",{expires:365})&&"{}"===e.vakata.cookie("__vjstorage"))&&(a=null,r.jStorage=e.vakata.cookie("__vjstorage"),d="cookie"),!d)return a=null,t}c(),u()}e.vakata.storage={version:"0.3.0",set:function(t,r,a){return _(t),"object"==typeof r&&(r=o(s(r))),n[t]=r,h(),a&&parseInt(a,10)&&e.vakata.storage.setTTL(t,parseInt(a,10)),r},get:function(e,r){return _(e),n.hasOwnProperty(e)?n[e]:r===t?null:r},del:function(e){return _(e),n.hasOwnProperty(e)?(delete n[e],n.__jstorage_meta&&"object"==typeof n.__jstorage_meta.TTL&&n.__jstorage_meta.TTL.hasOwnProperty(e)&&delete n.__jstorage_meta.TTL[e],h(),!0):!1},setTTL:function(e,t){var r=+new Date;return _(e),t=Number(t)||0,n.hasOwnProperty(e)?(n.__jstorage_meta||(n.__jstorage_meta={}),n.__jstorage_meta.TTL||(n.__jstorage_meta.TTL={}),t>0?n.__jstorage_meta.TTL[e]=r+t:delete n.__jstorage_meta.TTL[e],h(),u(),!0):!1},getTTL:function(e){var t=+new Date,r;return _(e),n.hasOwnProperty(e)&&n.__jstorage_meta.TTL&&n.__jstorage_meta.TTL[e]?(r=n.__jstorage_meta.TTL[e]-t,r||0):0},flush:function(){return n={},h(),!0},storageObj:function(){return e.extend(!0,{},n)},index:function(){var t=[];return e.each(n,function(e,n){"__jstorage_meta"!==e&&t.push(e)}),t},storageSize:function(){return i},currentBackend:function(){return d},storageAvailable:function(){return!!d}},g()}(jQuery),e.jstree.defaults.types={"#":{},"default":{}},e.jstree.plugins.types=function(n,r){this.init=function(e,t){r.init.call(this,e,t),this._model.data["#"].type="#"},this.bind=function(){r.bind.call(this),this.element.on("model.jstree",e.proxy(function(e,t){var n=this._model.data,r=t.nodes,a=this.settings.types,i,s,o="default";for(i=0,s=r.length;s>i;i++)o="default",n[r[i]].original&&n[r[i]].original.type&&a[n[r[i]].original.type]&&(o=n[r[i]].original.type),n[r[i]].data&&n[r[i]].data.jstree&&n[r[i]].data.jstree.type&&a[n[r[i]].data.jstree.type]&&(o=n[r[i]].data.jstree.type),n[r[i]].type=o,n[r[i]].icon===!0&&a[o].icon&&(n[r[i]].icon=a[o].icon)},this))},this.check=function(n,a,i,s){if(r.check.call(this,n,a,i,s)===!1)return!1;a=a&&a.id?a:this.get_node(a),i=i&&i.id?i:this.get_node(i);var o=this._model.data,d,l,c,h;switch(n){case"create_node":case"move_node":case"copy_node":if("move_node"!==n||-1===e.inArray(a.id,i.children)){if(d=this.get_rules(i),d.max_children!==t&&-1!==d.max_children&&d.max_children===i.children.length)return!1;if(d.valid_children!==t&&-1!==d.valid_children&&-1===e.inArray(a.type,d.valid_children))return!1;if(a.children_d&&a.parents){for(l=0,c=0,h=a.children_d.length;h>c;c++)l=Math.max(l,o[a.children_d[c]].parents.length);l=l-a.parents.length+1}0>=l&&(l=1);do{if(d.max_depth!==t&&-1!==d.max_depth&&l>d.max_depth)return!1;i=this.get_node(i.parent),d=this.get_rules(i),l++}while(i)}}return!0},this.get_rules=function(e){if(e=this.get_node(e),!e)return!1;var n=this.get_type(e,!0);return n.max_depth===t&&(n.max_depth=-1),n.max_children===t&&(n.max_children=-1),n.valid_children===t&&(n.valid_children=-1),n},this.get_type=function(t,n){return t=this.get_node(t),t?n?e.extend({type:t.type},this.settings.types[t.type]):t.type:!1},this.set_type=function(t,n){var r,a,i;if(e.isArray(t)){for(t=t.slice(),a=0,i=t.length;i>a;a++)this.set_type(t[a],n);return!0}return r=this.settings.types,t=this.get_node(t),r[n]&&t?(t.type=n,r[n].icon&&this.get_icon(t)===!0&&this.set_icon(t,r[n].icon),!0):!1}},e.jstree.plugins.unique=function(t,n){this.check=function(t,r,a,i){if(n.check.call(this,t,r,a,i)===!1)return!1;if(r=r&&r.id?r:this.get_node(r),a=a&&a.id?a:this.get_node(a),!a||!a.children)return!0;var s="rename_node"===t?i:r.text,o=[],d=this._model.data,l,c;for(l=0,c=a.children.length;c>l;l++)o.push(d[a.children[l]].text);switch(t){case"delete_node":return!0;case"rename_node":case"copy_node":return-1===e.inArray(s,o);case"move_node":return r.parent===a.id||-1===e.inArray(s,o)}return!0}};var f=document.createElement("DIV");f.setAttribute("unselectable","on"),f.className="jstree-wholerow",f.innerHTML="&#160;",e.jstree.plugins.wholerow=function(t,n){this.bind=function(){n.bind.call(this),this.element.on("loading",e.proxy(function(){f.style.height=this._data.core.li_height+"px"},this)).on("ready.jstree set_state.jstree",e.proxy(function(){this.hide_dots()},this)).on("ready.jstree",e.proxy(function(){this.get_container_ul().addClass("jstree-wholerow-ul")},this)).on("deselect_all.jstree",e.proxy(function(e,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")},this)).on("changed.jstree",e.proxy(function(e,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");var n=!1,r,a;for(r=0,a=t.selected.length;a>r;r++)n=this.get_node(t.selected[r],!0),n&&n.length&&n.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("open_node.jstree",e.proxy(function(e,t){this.get_node(t.node,!0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("hover_node.jstree dehover_node.jstree",e.proxy(function(t,n){this.element.find(".jstree-wholerow-hovered").removeClass("jstree-wholerow-hovered"),"hover_node"===t.type&&this.get_node(n.node,!0).each(function(){e(this).children(".jstree-wholerow").addClass("jstree-wholerow-hovered")})},this)).on("contextmenu.jstree",".jstree-wholerow",e.proxy(function(t){t.preventDefault(),e(t.currentTarget).closest("li").children("a:eq(0)").trigger("contextmenu",t)},this)).on("click.jstree",".jstree-wholerow",function(t){t.stopImmediatePropagation();var n=e.Event("click",{metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey});e(t.currentTarget).closest("li").children("a:eq(0)").trigger(n).focus()}).on("click.jstree",".jstree-leaf > .jstree-ocl",e.proxy(function(t){t.stopImmediatePropagation();var n=e.Event("click",{metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey});e(t.currentTarget).closest("li").children("a:eq(0)").trigger(n).focus()},this)).on("mouseover.jstree",".jstree-wholerow, .jstree-icon",e.proxy(function(e){return e.stopImmediatePropagation(),this.hover_node(e.currentTarget),!1},this)).on("mouseleave.jstree","li",e.proxy(function(e){this.dehover_node(e.currentTarget)},this))},this.teardown=function(){this.settings.wholerow&&(this.element.find(".jstree-wholerow").remove(),n.teardown.call(this))},this.redraw_node=function(t,r,a){if(t=n.redraw_node.call(this,t,r,a)){var i=f.cloneNode(!0);-1!==e.inArray(t.id,this._data.core.selected)&&(i.className+=" jstree-wholerow-clicked"),t.insertBefore(i,t.childNodes[0])}return t}}}});
// three.js - http://github.com/mrdoob/three.js
var THREE={REVISION:"64"};self.console=self.console||{info:function(){},log:function(){},debug:function(){},warn:function(){},error:function(){}};String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")};THREE.extend=function(a,b){if(Object.keys)for(var c=Object.keys(b),d=0,e=c.length;d<e;d++){var f=c[d];Object.defineProperty(a,f,Object.getOwnPropertyDescriptor(b,f))}else for(f in c={}.hasOwnProperty,b)c.call(b,f)&&(a[f]=b[f]);return a};
(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!self.requestAnimationFrame;++c)self.requestAnimationFrame=self[b[c]+"RequestAnimationFrame"],self.cancelAnimationFrame=self[b[c]+"CancelAnimationFrame"]||self[b[c]+"CancelRequestAnimationFrame"];void 0===self.requestAnimationFrame&&void 0!==self.setTimeout&&(self.requestAnimationFrame=function(b){var c=Date.now(),f=Math.max(0,16-(c-a)),h=self.setTimeout(function(){b(c+f)},f);a=c+f;return h});void 0===self.cancelAnimationFrame&&void 0!==
self.clearTimeout&&(self.cancelAnimationFrame=function(a){self.clearTimeout(a)})})();THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;
THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;
THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;
THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;
THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Color=function(a){void 0!==a&&this.set(a);return this};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},b=0.5>=c?c*(1+b):c+b-c*b,c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<
8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){var a=a||{h:0,s:0,l:0},b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),h,g=(f+e)/2;if(f===e)f=h=0;else{var i=e-f,f=0.5>=g?i/(e+f):i/(2-e-f);switch(e){case b:h=(c-d)/i+(c<d?6:0);break;case c:h=(d-b)/i+2;break;case d:h=(b-c)/i+4}h/=6}a.h=h;a.s=f;a.l=g;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,
b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;
this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(){return[this.r,this.g,this.b]},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,_euler:void 0,_updateEuler:function(){void 0!==this._euler&&this._euler.setFromQuaternion(this,void 0,!1)},get x(){return this._x},set x(a){this._x=a;this._updateEuler()},get y(){return this._y},set y(a){this._y=a;this._updateEuler()},get z(){return this._z},set z(a){this._z=a;this._updateEuler()},get w(){return this._w},set w(a){this._w=a;this._updateEuler()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;
this._updateEuler();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._w=a._w;this._updateEuler();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),h=Math.sin(a._y/2),g=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*h*g,this._y=c*h*
e-f*d*g,this._z=c*d*g+f*h*e,this._w=c*d*e-f*h*g):"YXZ"===a.order?(this._x=f*d*e+c*h*g,this._y=c*h*e-f*d*g,this._z=c*d*g-f*h*e,this._w=c*d*e+f*h*g):"ZXY"===a.order?(this._x=f*d*e-c*h*g,this._y=c*h*e+f*d*g,this._z=c*d*g+f*h*e,this._w=c*d*e-f*h*g):"ZYX"===a.order?(this._x=f*d*e-c*h*g,this._y=c*h*e+f*d*g,this._z=c*d*g-f*h*e,this._w=c*d*e+f*h*g):"YZX"===a.order?(this._x=f*d*e+c*h*g,this._y=c*h*e+f*d*g,this._z=c*d*g-f*h*e,this._w=c*d*e-f*h*g):"XZY"===a.order&&(this._x=f*d*e-c*h*g,this._y=c*h*e-f*d*g,this._z=
c*d*g+f*h*e,this._w=c*d*e+f*h*g);!1!==b&&this._updateEuler();return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this._updateEuler();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0],a=b[4],d=b[8],e=b[1],f=b[5],h=b[9],g=b[2],i=b[6],b=b[10],k=c+f+b;0<k?(c=0.5/Math.sqrt(k+1),this._w=0.25/c,this._x=(i-h)*c,this._y=(d-g)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(i-h)/c,this._x=0.25*c,
this._y=(a+e)/c,this._z=(d+g)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-g)/c,this._x=(a+e)/c,this._y=0.25*c,this._z=(h+i)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+g)/c,this._y=(h+i)/c,this._z=0.25*c);this._updateEuler();return this},inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this._updateEuler();return this},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*
this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);return this},multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=
a._w,h=b._x,g=b._y,i=b._z,k=b._w;this._x=c*k+f*h+d*i-e*g;this._y=d*k+f*g+e*h-c*i;this._z=e*k+f*i+c*g-d*h;this._w=f*k-c*h-d*g-e*i;this._updateEuler();return this},multiplyVector3:function(a){console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)},slerp:function(a,b){var c=this._x,d=this._y,e=this._z,f=this._w,h=f*a._w+c*a._x+d*a._y+e*a._z;0>h?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=
-a._z,h=-h):this.copy(a);if(1<=h)return this._w=f,this._x=c,this._y=d,this._z=e,this;var g=Math.acos(h),i=Math.sqrt(1-h*h);if(0.001>Math.abs(i))return this._w=0.5*(f+this._w),this._x=0.5*(c+this._x),this._y=0.5*(d+this._y),this._z=0.5*(e+this._z),this;h=Math.sin((1-b)*g)/i;g=Math.sin(b*g)/i;this._w=f*h+this._w*g;this._x=c*h+this._x*g;this._y=d*h+this._y*g;this._z=e*h+this._z*g;this._updateEuler();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},
fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];this._w=a[3];this._updateEuler();return this},toArray:function(){return[this._x,this._y,this._z,this._w]},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=
a.y;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);
return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/
b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a){this.x=a[0];this.y=a[1];return this},toArray:function(){return[this.x,this.y]},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*
b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements,e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);
this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,h=a.z,a=a.w,g=a*b+f*d-h*c,i=a*c+h*b-e*d,k=a*d+e*c-f*b,b=-e*b-f*c-h*d;this.x=g*a+b*-e+i*-h-k*-f;this.y=i*a+b*-f+k*-e-g*-h;this.z=k*a+b*-h+g*-f-i*-e;return this},transformDirection:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*
b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<
a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=
a.x,d=a.y,e=a.z,f=b.x,h=b.y,g=b.z;this.x=d*g-e*h;this.y=e*f-c*g;this.z=c*h-d*f;return this},angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y,a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(){console.error("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.")},
setEulerFromQuaternion:function(){console.error("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.")},getPositionFromMatrix:function(a){console.warn("DEPRECATED: Vector3's .getPositionFromMatrix() has been renamed to .setFromMatrixPosition(). Please update your code.");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("DEPRECATED: Vector3's .getScaleFromMatrix() has been renamed to .setFromMatrixScale(). Please update your code.");
return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("DEPRECATED: Vector3's .getColumnFromMatrix() has been renamed to .setFromMatrixColumn(). Please update your code.");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length(),
a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];return this},toArray:function(){return[this.x,this.y,this.z]},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};
THREE.extend(THREE.Vector3.prototype,{applyEuler:function(){var a=new THREE.Quaternion;return function(b){!1===b instanceof THREE.Euler&&console.error("ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a=new THREE.Quaternion;return function(b,c){this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),projectOnVector:function(){var a=new THREE.Vector3;
return function(b){a.copy(b).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a=new THREE.Vector3;return function(b){a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a=new THREE.Vector3;return function(b){a.copy(this).projectOnVector(b).multiplyScalar(2);return this.subVectors(a,this)}}()});THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},
applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,
this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d,a=a.elements,e=a[0];d=a[4];var f=a[8],h=a[1],g=a[5],i=a[9];c=a[2];b=a[6];var k=a[10];if(0.01>Math.abs(d-h)&&0.01>Math.abs(f-c)&&0.01>Math.abs(i-b)){if(0.1>Math.abs(d+h)&&0.1>Math.abs(f+c)&&0.1>Math.abs(i+b)&&0.1>Math.abs(e+g+k-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;g=(g+1)/2;k=(k+1)/2;d=(d+h)/4;f=(f+c)/4;i=(i+b)/4;e>g&&e>k?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):g>k?0.01>g?
(b=0.707106781,c=0,d=0.707106781):(c=Math.sqrt(g),b=d/c,d=i/c):0.01>k?(c=b=0.707106781,d=0):(d=Math.sqrt(k),b=f/d,c=i/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-i)*(b-i)+(f-c)*(f-c)+(h-d)*(h-d));0.001>Math.abs(a)&&(a=1);this.x=(b-i)/a;this.y=(f-c)/a;this.z=(h-d)/a;this.w=Math.acos((e+g+k-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=
a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*
this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&
a.w===this.w},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];this.w=a[3];return this},toArray:function(){return[this.x,this.y,this.z,this.w]},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,_quaternion:void 0,_updateQuaternion:function(){void 0!==this._quaternion&&this._quaternion.setFromEuler(this,!1)},get x(){return this._x},set x(a){this._x=a;this._updateQuaternion()},get y(){return this._y},set y(a){this._y=a;this._updateQuaternion()},get z(){return this._z},set z(a){this._z=a;this._updateQuaternion()},get order(){return this._order},set order(a){this._order=a;this._updateQuaternion()},
set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._updateQuaternion();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._updateQuaternion();return this},setFromRotationMatrix:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.elements,e=d[0],f=d[4],h=d[8],g=d[1],i=d[5],k=d[9],m=d[2],l=d[6],d=d[10],b=b||this._order;"XYZ"===b?(this._y=Math.asin(c(h)),0.99999>Math.abs(h)?(this._x=Math.atan2(-k,d),this._z=
Math.atan2(-f,e)):(this._x=Math.atan2(l,i),this._z=0)):"YXZ"===b?(this._x=Math.asin(-c(k)),0.99999>Math.abs(k)?(this._y=Math.atan2(h,d),this._z=Math.atan2(g,i)):(this._y=Math.atan2(-m,e),this._z=0)):"ZXY"===b?(this._x=Math.asin(c(l)),0.99999>Math.abs(l)?(this._y=Math.atan2(-m,d),this._z=Math.atan2(-f,i)):(this._y=0,this._z=Math.atan2(g,e))):"ZYX"===b?(this._y=Math.asin(-c(m)),0.99999>Math.abs(m)?(this._x=Math.atan2(l,d),this._z=Math.atan2(g,e)):(this._x=0,this._z=Math.atan2(-f,i))):"YZX"===b?(this._z=
Math.asin(c(g)),0.99999>Math.abs(g)?(this._x=Math.atan2(-k,i),this._y=Math.atan2(-m,e)):(this._x=0,this._y=Math.atan2(h,d))):"XZY"===b?(this._z=Math.asin(-c(f)),0.99999>Math.abs(f)?(this._x=Math.atan2(l,i),this._y=Math.atan2(h,e)):(this._x=Math.atan2(-k,d),this._y=0)):console.warn("WARNING: Euler.setFromRotationMatrix() given unsupported order: "+b);this._order=b;this._updateQuaternion();return this},setFromQuaternion:function(a,b,c){function d(a){return Math.min(Math.max(a,-1),1)}var e=a.x*a.x,f=
a.y*a.y,h=a.z*a.z,g=a.w*a.w,b=b||this._order;"XYZ"===b?(this._x=Math.atan2(2*(a.x*a.w-a.y*a.z),g-e-f+h),this._y=Math.asin(d(2*(a.x*a.z+a.y*a.w))),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),g+e-f-h)):"YXZ"===b?(this._x=Math.asin(d(2*(a.x*a.w-a.y*a.z))),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),g-e-f+h),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),g-e+f-h)):"ZXY"===b?(this._x=Math.asin(d(2*(a.x*a.w+a.y*a.z))),this._y=Math.atan2(2*(a.y*a.w-a.z*a.x),g-e-f+h),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),g-e+f-h)):"ZYX"===
b?(this._x=Math.atan2(2*(a.x*a.w+a.z*a.y),g-e-f+h),this._y=Math.asin(d(2*(a.y*a.w-a.x*a.z))),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),g+e-f-h)):"YZX"===b?(this._x=Math.atan2(2*(a.x*a.w-a.z*a.y),g-e+f-h),this._y=Math.atan2(2*(a.y*a.w-a.x*a.z),g+e-f-h),this._z=Math.asin(d(2*(a.x*a.y+a.z*a.w)))):"XZY"===b?(this._x=Math.atan2(2*(a.x*a.w+a.y*a.z),g-e+f-h),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),g+e-f-h),this._z=Math.asin(d(2*(a.z*a.w-a.x*a.y)))):console.warn("WARNING: Euler.setFromQuaternion() given unsupported order: "+
b);this._order=b;!1!==c&&this._updateQuaternion();return this},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._updateQuaternion();return this},toArray:function(){return[this._x,this._y,this._z,this._order]},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},clone:function(){return new THREE.Euler(this._x,
this._y,this._z,this._order)}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(0.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var c=1,d=a.length;c<d;c++)b=a[c],b.x<this.min.x?this.min.x=b.x:b.x>this.max.x&&(this.max.x=b.x),b.y<this.min.y?this.min.y=b.y:b.y>this.max.y&&(this.max.y=b.y)}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);
this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);
this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),
(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);
return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},addPoint:function(a){a.x<this.min.x?this.min.x=a.x:a.x>this.max.x&&(this.max.x=a.x);a.y<this.min.y?this.min.y=a.y:a.y>this.max.y&&(this.max.y=a.y);a.z<this.min.z?this.min.z=a.z:a.z>this.max.z&&(this.max.z=a.z)},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var b=1,c=a.length;b<c;b++)this.addPoint(a[b])}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=
new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);this.makeEmpty();b.traverse(function(b){if(void 0!==b.geometry&&void 0!==b.geometry.vertices)for(var e=b.geometry.vertices,f=0,h=e.length;f<h;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);
this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=0.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};THREE.Matrix3=function(a,b,c,d,e,f,h,g,i){this.elements=new Float32Array(9);this.set(void 0!==a?a:1,b||0,c||0,d||0,void 0!==e?e:1,f||0,h||0,g||0,void 0!==i?i:1)};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,h,g,i){var k=this.elements;k[0]=a;k[3]=b;k[6]=c;k[1]=d;k[4]=e;k[7]=f;k[2]=h;k[5]=g;k[8]=i;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],h=a[5],g=a[6],i=a[7],a=a[8];return b*f*a-b*h*i-c*e*a+c*h*g+d*e*i-d*f*g},getInverse:function(a,
b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/
c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},clone:function(){var a=this.elements;return new THREE.Matrix3(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8])}};THREE.Matrix4=function(a,b,c,d,e,f,h,g,i,k,m,l,p,t,s,q){var n=this.elements=new Float32Array(16);n[0]=void 0!==a?a:1;n[4]=b||0;n[8]=c||0;n[12]=d||0;n[1]=e||0;n[5]=void 0!==f?f:1;n[9]=h||0;n[13]=g||0;n[2]=i||0;n[6]=k||0;n[10]=void 0!==m?m:1;n[14]=l||0;n[3]=p||0;n[7]=t||0;n[11]=s||0;n[15]=void 0!==q?q:1};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,h,g,i,k,m,l,p,t,s,q){var n=this.elements;n[0]=a;n[4]=b;n[8]=c;n[12]=d;n[1]=e;n[5]=f;n[9]=h;n[13]=g;n[2]=i;n[6]=k;n[10]=m;n[14]=l;n[3]=p;n[7]=t;n[11]=s;n[15]=q;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},copyPosition:function(a){var b=this.elements,a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements,b=b.elements,d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===
a instanceof THREE.Euler&&console.error("ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),h=Math.cos(d),d=Math.sin(d),g=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){var a=f*g,i=f*e,k=c*g,m=c*e;b[0]=h*g;b[4]=-h*e;b[8]=d;b[1]=i+k*d;b[5]=a-m*d;b[9]=-c*h;b[2]=m-a*d;b[6]=k+i*d;b[10]=f*h}else"YXZ"===a.order?(a=h*g,i=h*e,k=d*g,m=d*e,b[0]=a+m*c,b[4]=k*c-i,b[8]=
f*d,b[1]=f*e,b[5]=f*g,b[9]=-c,b[2]=i*c-k,b[6]=m+a*c,b[10]=f*h):"ZXY"===a.order?(a=h*g,i=h*e,k=d*g,m=d*e,b[0]=a-m*c,b[4]=-f*e,b[8]=k+i*c,b[1]=i+k*c,b[5]=f*g,b[9]=m-a*c,b[2]=-f*d,b[6]=c,b[10]=f*h):"ZYX"===a.order?(a=f*g,i=f*e,k=c*g,m=c*e,b[0]=h*g,b[4]=k*d-i,b[8]=a*d+m,b[1]=h*e,b[5]=m*d+a,b[9]=i*d-k,b[2]=-d,b[6]=c*h,b[10]=f*h):"YZX"===a.order?(a=f*h,i=f*d,k=c*h,m=c*d,b[0]=h*g,b[4]=m-a*e,b[8]=k*e+i,b[1]=e,b[5]=f*g,b[9]=-c*g,b[2]=-d*g,b[6]=i*e+k,b[10]=a-m*e):"XZY"===a.order&&(a=f*h,i=f*d,k=c*h,m=c*d,b[0]=
h*g,b[4]=-e,b[8]=d*g,b[1]=a*e+m,b[5]=f*g,b[9]=i*e-k,b[2]=k*e-i,b[6]=c*g,b[10]=m*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.");return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,h=c+c,g=d+d,i=e+e,a=c*h,k=c*g,c=
c*i,m=d*g,d=d*i,e=e*i,h=f*h,g=f*g,f=f*i;b[0]=1-(m+e);b[4]=k-f;b[8]=c+g;b[1]=k+f;b[5]=1-(a+e);b[9]=d-h;b[2]=c-g;b[6]=d+h;b[10]=1-(a+m);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var h=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);h[0]=a.x;
h[4]=b.x;h[8]=c.x;h[1]=a.y;h[5]=b.y;h[9]=c.y;h[2]=a.z;h[6]=b.z;h[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],h=c[4],g=c[8],i=c[12],k=c[1],m=c[5],l=c[9],p=c[13],t=c[2],s=c[6],q=c[10],n=c[14],u=c[3],r=c[7],v=c[11],c=c[15],
z=d[0],G=d[4],w=d[8],y=d[12],E=d[1],A=d[5],K=d[9],D=d[13],F=d[2],O=d[6],x=d[10],I=d[14],B=d[3],M=d[7],J=d[11],d=d[15];e[0]=f*z+h*E+g*F+i*B;e[4]=f*G+h*A+g*O+i*M;e[8]=f*w+h*K+g*x+i*J;e[12]=f*y+h*D+g*I+i*d;e[1]=k*z+m*E+l*F+p*B;e[5]=k*G+m*A+l*O+p*M;e[9]=k*w+m*K+l*x+p*J;e[13]=k*y+m*D+l*I+p*d;e[2]=t*z+s*E+q*F+n*B;e[6]=t*G+s*A+q*O+n*M;e[10]=t*w+s*K+q*x+n*J;e[14]=t*y+s*D+q*I+n*d;e[3]=u*z+r*E+v*F+c*B;e[7]=u*G+r*A+v*O+c*M;e[11]=u*w+r*K+v*x+c*J;e[15]=u*y+r*D+v*I+c*d;return this},multiplyToArray:function(a,b,
c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)},multiplyVector4:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyProjection(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
a.transformDirection(this)},crossVector:function(a){console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],h=a[5],g=a[9],i=a[13],k=a[2],m=a[6],l=a[10],p=a[14];return a[3]*(+e*g*m-d*i*m-e*h*l+c*i*l+d*h*p-c*g*p)+a[7]*(+b*g*p-b*i*l+e*f*l-d*f*p+d*i*k-e*g*k)+a[11]*(+b*i*m-b*h*p-e*f*m+c*f*p+e*h*k-c*i*k)+a[15]*(-d*h*k-b*g*m+b*h*l+d*f*m-c*f*
l+c*g*k)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a},flattenToArrayOffset:function(a,b){var c=this.elements;
a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;
b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],h=d[8],g=d[12],i=d[1],k=d[5],m=d[9],l=d[13],p=d[2],t=d[6],s=d[10],q=d[14],n=d[3],u=d[7],r=d[11],d=d[15];c[0]=m*q*u-l*s*u+l*t*r-k*q*r-m*t*d+k*s*d;c[4]=g*s*u-h*q*u-g*t*r+f*q*r+h*t*d-f*s*d;c[8]=h*l*u-g*m*u+g*k*r-f*l*r-h*k*d+f*m*d;c[12]=g*m*t-h*l*t-g*k*s+f*l*s+h*k*q-f*m*q;c[1]=l*s*n-m*q*n-l*p*r+i*q*r+m*p*d-i*s*d;c[5]=h*q*n-g*s*n+g*p*r-e*q*r-h*p*d+e*s*d;c[9]=g*m*n-h*l*n-g*i*r+e*l*r+h*i*d-
e*m*d;c[13]=h*l*p-g*m*p+g*i*s-e*l*s-h*i*q+e*m*q;c[2]=k*q*n-l*t*n+l*p*u-i*q*u-k*p*d+i*t*d;c[6]=g*t*n-f*q*n-g*p*u+e*q*u+f*p*d-e*t*d;c[10]=f*l*n-g*k*n+g*i*u-e*l*u-f*i*d+e*k*d;c[14]=g*k*p-f*l*p-g*i*t+e*l*t+f*i*q-e*k*q;c[3]=m*t*n-k*s*n-m*p*u+i*s*u+k*p*r-i*t*r;c[7]=f*s*n-h*t*n+h*p*u-e*s*u-f*p*r+e*t*r;c[11]=h*k*n-f*m*n-h*i*u+e*m*u+f*i*r-e*k*r;c[15]=f*m*p-h*k*p+h*i*t-e*m*t-f*i*s+e*k*s;c=e*c[0]+i*c[4]+p*c[8]+n*c[12];if(0==c){if(b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(){console.warn("DEPRECATED: Matrix4's .translate() has been removed.")},rotateX:function(){console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.")},rotateY:function(){console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.")},rotateZ:function(){console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.")},rotateByAxis:function(){console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")},
scale:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(1,
0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,h=a.y,g=a.z,i=e*f,k=e*h;this.set(i*f+c,i*h-d*g,i*g+d*h,0,i*h+d*g,k*h+c,k*g-d*f,0,i*g-d*h,k*g+d*f,e*g*g+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,
0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,h=a.set(f[0],f[1],f[2]).length(),g=a.set(f[4],f[5],f[6]).length(),i=a.set(f[8],f[9],f[10]).length();c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);var c=1/h,f=1/g,k=1/i;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=
f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=k;b.elements[9]*=k;b.elements[10]*=k;d.setFromRotationMatrix(b);e.x=h;e.y=g;e.z=i;return this}}(),makeFrustum:function(a,b,c,d,e,f){var h=this.elements;h[0]=2*e/(b-a);h[4]=0;h[8]=(b+a)/(b-a);h[12]=0;h[1]=0;h[5]=2*e/(d-c);h[9]=(d+c)/(d-c);h[13]=0;h[2]=0;h[6]=0;h[10]=-(f+e)/(f-e);h[14]=-2*f*e/(f-e);h[3]=0;h[7]=0;h[11]=-1;h[15]=0;return this},makePerspective:function(a,b,c,d){var a=c*Math.tan(THREE.Math.degToRad(0.5*a)),e=-a;return this.makeFrustum(e*
b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var h=this.elements,g=b-a,i=c-d,k=f-e;h[0]=2/g;h[4]=0;h[8]=0;h[12]=-((b+a)/g);h[1]=0;h[5]=2/i;h[9]=0;h[13]=-((c+d)/i);h[2]=0;h[6]=0;h[10]=-2/k;h[14]=-((f+e)/k);h[3]=0;h[7]=0;h[11]=0;h[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){var a=this.elements;return new THREE.Matrix4(a[0],
a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(a,b,c,d){var e=a.clone().add(b).multiplyScalar(0.5),f=b.clone().sub(a).normalize(),h=0.5*a.distanceTo(b),
g=this.origin.clone().sub(e),a=-this.direction.dot(f),b=g.dot(this.direction),i=-g.dot(f),k=g.lengthSq(),m=Math.abs(1-a*a),l,p;0<=m?(g=a*i-b,l=a*b-i,p=h*m,0<=g?l>=-p?l<=p?(h=1/m,g*=h,l*=h,a=g*(g+a*l+2*b)+l*(a*g+l+2*i)+k):(l=h,g=Math.max(0,-(a*l+b)),a=-g*g+l*(l+2*i)+k):(l=-h,g=Math.max(0,-(a*l+b)),a=-g*g+l*(l+2*i)+k):l<=-p?(g=Math.max(0,-(-a*h+b)),l=0<g?-h:Math.min(Math.max(-h,-i),h),a=-g*g+l*(l+2*i)+k):l<=p?(g=0,l=Math.min(Math.max(-h,-i),h),a=l*(l+2*i)+k):(g=Math.max(0,-(a*h+b)),l=0<g?h:Math.min(Math.max(-h,
-i),h),a=-g*g+l*(l+2*i)+k)):(l=0<a?-h:h,g=Math.max(0,-(a*l+b)),a=-g*g+l*(l+2*i)+k);c&&c.copy(this.direction.clone().multiplyScalar(g).add(this.origin));d&&d.copy(f.clone().multiplyScalar(l).add(e));return a},isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?
0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,h;d=1/this.direction.x;f=1/this.direction.y;h=1/this.direction.z;var g=this.origin;0<=d?(c=(a.min.x-g.x)*d,d*=a.max.x-g.x):(c=(a.max.x-g.x)*d,d*=a.min.x-g.x);0<=f?(e=(a.min.y-g.y)*f,f*=
a.max.y-g.y):(e=(a.max.y-g.y)*f,f*=a.min.y-g.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=h?(e=(a.min.z-g.z)*h,h*=a.max.z-g.z):(e=(a.max.z-g.z)*h,h*=a.min.z-g.z);if(c>h||e>d)return null;if(e>c||c!==c)c=e;if(h<d||d!==d)d=h;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,h,g,i){b.subVectors(f,e);c.subVectors(h,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<
f){if(g)return null;g=1}else if(0>f)g=-1,f=-f;else return null;a.subVectors(this.origin,e);e=g*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;h=g*this.direction.dot(b.cross(a));if(0>h||e+h>f)return null;e=-g*a.dot(d);return 0>e?null:this.at(e/f,i)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},
clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,h=b.length;f<h;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var h=this.planes;h[0].copy(a);h[1].copy(b);h[2].copy(c);h[3].copy(d);h[4].copy(e);h[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements,a=c[0],d=c[1],e=c[2],f=c[3],h=c[4],g=c[5],i=c[6],k=c[7],m=c[8],l=c[9],p=c[10],t=c[11],s=c[12],q=c[13],n=c[14],c=c[15];b[0].setComponents(f-a,k-h,t-m,c-s).normalize();b[1].setComponents(f+
a,k+h,t+m,c+s).normalize();b[2].setComponents(f+d,k+g,t+l,c+q).normalize();b[3].setComponents(f-d,k-g,t-l,c-q).normalize();b[4].setComponents(f-e,k-i,t-p,c-n).normalize();b[5].setComponents(f+e,k+i,t+p,c+n).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){for(var b=this.planes,
c=a.center,a=-a.radius,d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var h=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>h&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=
this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start),a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),h=this.coplanarPoint(b);h.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,h);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};THREE.Math={PI2:2*Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0},degToRad:function(){var a=Math.PI/
180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}()};THREE.Spline=function(a){function b(a,b,c,d,e,f,h){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*h+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,h,g,i,k,m,l,p;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);h=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;k=this.points[c[0]];m=this.points[c[1]];l=this.points[c[2]];p=this.points[c[3]];g=h*h;i=h*g;d.x=b(k.x,m.x,l.x,p.x,h,g,i);d.y=b(k.y,m.y,l.y,p.y,h,g,i);d.z=b(k.z,m.z,l.z,p.z,h,g,i);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,h=new THREE.Vector3,g=[],i=0;g[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),h.copy(d),i+=h.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(g[b]=i,e=b);g[g.length]=i;return{chunks:g,total:i}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,h,g=[],i=new THREE.Vector3,k=this.getLength();g.push(i.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=k.chunks[b]-k.chunks[b-1];h=Math.ceil(a*c/k.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<h-1;c++)d=e+c*(1/h)*(f-e),d=this.getPoint(d),
g.push(i.copy(d).clone());g.push(i.copy(this.points[b]).clone())}this.points=g}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,h,g){a.subVectors(h,e);b.subVectors(f,e);c.subVectors(d,e);var d=a.dot(a),e=a.dot(b),f=a.dot(c),i=b.dot(b),h=b.dot(c),k=d*i-e*e,g=g||new THREE.Vector3;if(0==k)return g.set(-2,-1,-1);k=1/k;i=(i*f-e*h)*k;d=(d*h-e*f)*k;return g.set(1-i-d,d,i)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return 0.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Vertex=function(a){console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");return a};THREE.UV=function(a,b){console.warn("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.");return new THREE.Vector2(a,b)};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(){var a=[];return function(b){if(void 0!==this._listeners){var c=this._listeners[b.type];if(void 0!==c){b.target=this;for(var d=c.length,e=0;e<d;e++)a[e]=c[e];for(e=0;e<d;e++)a[e].call(this,
b)}}}}()};(function(a){a.Raycaster=function(b,c,d,e){this.ray=new a.Ray(b,c);this.near=d||0;this.far=e||Infinity};var b=new a.Sphere,c=new a.Ray;new a.Plane;new a.Vector3;var d=new a.Vector3,e=new a.Matrix4,f=function(a,b){return a.distance-b.distance},h=new a.Vector3,g=new a.Vector3,i=new a.Vector3,k=function(f,m,t){if(f instanceof a.Sprite){d.setFromMatrixPosition(f.matrixWorld);var s=m.ray.distanceToPoint(d);if(s>f.scale.x)return t;t.push({distance:s,point:f.position,face:null,object:f})}else if(f instanceof
a.LOD)d.setFromMatrixPosition(f.matrixWorld),s=m.ray.origin.distanceTo(d),k(f.getObjectForDistance(s),m,t);else if(f instanceof a.Mesh){var q=f.geometry;null===q.boundingSphere&&q.computeBoundingSphere();b.copy(q.boundingSphere);b.applyMatrix4(f.matrixWorld);if(!1===m.ray.isIntersectionSphere(b))return t;e.getInverse(f.matrixWorld);c.copy(m.ray).applyMatrix4(e);if(null!==q.boundingBox&&!1===c.isIntersectionBox(q.boundingBox))return t;if(q instanceof a.BufferGeometry){var n=f.material;if(void 0===
n||!1===q.dynamic)return t;var u,r,v=m.precision;if(void 0!==q.attributes.index)for(var z=q.offsets,G=q.attributes.index.array,w=q.attributes.position.array,y=q.offsets.length,E=q.attributes.index.array.length/3,E=0;E<y;++E)for(var s=z[E].start,A=z[E].index,q=s,K=s+z[E].count;q<K;q+=3)s=A+G[q],u=A+G[q+1],r=A+G[q+2],h.set(w[3*s],w[3*s+1],w[3*s+2]),g.set(w[3*u],w[3*u+1],w[3*u+2]),i.set(w[3*r],w[3*r+1],w[3*r+2]),u=n.side===a.BackSide?c.intersectTriangle(i,g,h,!0):c.intersectTriangle(h,g,i,n.side!==a.DoubleSide),
null!==u&&(u.applyMatrix4(f.matrixWorld),s=m.ray.origin.distanceTo(u),s<v||(s<m.near||s>m.far)||t.push({distance:s,point:u,face:null,faceIndex:null,object:f}));else{w=q.attributes.position.array;E=q.attributes.position.array.length;for(q=0;q<E;q+=3)s=q,u=q+1,r=q+2,h.set(w[3*s],w[3*s+1],w[3*s+2]),g.set(w[3*u],w[3*u+1],w[3*u+2]),i.set(w[3*r],w[3*r+1],w[3*r+2]),u=n.side===a.BackSide?c.intersectTriangle(i,g,h,!0):c.intersectTriangle(h,g,i,n.side!==a.DoubleSide),null!==u&&(u.applyMatrix4(f.matrixWorld),
s=m.ray.origin.distanceTo(u),s<v||(s<m.near||s>m.far)||t.push({distance:s,point:u,face:null,faceIndex:null,object:f}))}}else if(q instanceof a.Geometry){G=f.material instanceof a.MeshFaceMaterial;w=!0===G?f.material.materials:null;v=m.precision;z=q.vertices;y=0;for(E=q.faces.length;y<E;y++)A=q.faces[y],n=!0===G?w[A.materialIndex]:f.material,void 0!==n&&(s=z[A.a],u=z[A.b],r=z[A.c],u=n.side===a.BackSide?c.intersectTriangle(r,u,s,!0):c.intersectTriangle(s,u,r,n.side!==a.DoubleSide),null!==u&&(u.applyMatrix4(f.matrixWorld),
s=m.ray.origin.distanceTo(u),s<v||(s<m.near||s>m.far)||t.push({distance:s,point:u,face:A,faceIndex:y,object:f})))}}else if(f instanceof a.Line){v=m.linePrecision;n=v*v;q=f.geometry;null===q.boundingSphere&&q.computeBoundingSphere();b.copy(q.boundingSphere);b.applyMatrix4(f.matrixWorld);if(!1===m.ray.isIntersectionSphere(b))return t;e.getInverse(f.matrixWorld);c.copy(m.ray).applyMatrix4(e);if(q instanceof a.Geometry){z=q.vertices;v=z.length;u=new a.Vector3;r=new a.Vector3;E=f.type===a.LineStrip?1:
2;for(q=0;q<v-1;q+=E)c.distanceSqToSegment(z[q],z[q+1],r,u)>n||(s=c.origin.distanceTo(r),s<m.near||s>m.far||t.push({distance:s,point:u.clone().applyMatrix4(f.matrixWorld),face:null,faceIndex:null,object:f}))}}},m=function(a,b,c){for(var a=a.getDescendants(),d=0,e=a.length;d<e;d++)k(a[d],b,c)};a.Raycaster.prototype.precision=1E-4;a.Raycaster.prototype.linePrecision=1;a.Raycaster.prototype.set=function(a,b){this.ray.set(a,b)};a.Raycaster.prototype.intersectObject=function(a,b){var c=[];!0===b&&m(a,
this,c);k(a,this,c);c.sort(f);return c};a.Raycaster.prototype.intersectObjects=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)k(a[d],this,c),!0===b&&m(a[d],this,c);c.sort(f);return c}})(THREE);THREE.Object3D=function(){this.id=THREE.Object3DIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this._rotation=new THREE.Euler;this._quaternion=new THREE.Quaternion;this.scale=new THREE.Vector3(1,1,1);this._rotation._quaternion=this.quaternion;this._quaternion._euler=this.rotation;this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;
this.visible=this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.userData={}};
THREE.Object3D.prototype={constructor:THREE.Object3D,get rotation(){return this._rotation},set rotation(a){this._rotation=a;this._rotation._quaternion=this._quaternion;this._quaternion._euler=this._rotation;this._rotation._updateQuaternion()},get quaternion(){return this._quaternion},set quaternion(a){this._quaternion=a;this._quaternion._euler=this._rotation;this._rotation._quaternion=this._quaternion;this._quaternion._updateEuler()},get eulerOrder(){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");
return this.rotation.order},set eulerOrder(a){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},applyMatrix:function(){var a=new THREE.Matrix4;return function(b){this.matrix.multiplyMatrices(b,
this.matrix);this.position.setFromMatrixPosition(this.matrix);this.scale.setFromMatrixScale(this.matrix);a.extractRotation(this.matrix);this.quaternion.setFromRotationMatrix(a)}}(),setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;
return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b);a.applyQuaternion(this.quaternion);
this.position.add(a.multiplyScalar(c));return this}}(),translate:function(a,b){console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=
new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(a===this)console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");
else if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;a.dispatchEvent({type:"added"});this.children.push(a);for(var b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}},remove:function(a){var b=this.children.indexOf(a);if(-1!==b){a.parent=void 0;a.dispatchEvent({type:"removed"});this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},traverse:function(a){a(this);
for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},getObjectById:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.id===a||!0===b&&(e=e.getObjectById(a,b),void 0!==e))return e}},getObjectByName:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getObjectByName(a,b),void 0!==e))return e}},getChildByName:function(a,b){console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName().");
return this.getObjectByName(a,b)},getDescendants:function(a){void 0===a&&(a=[]);Array.prototype.push.apply(a,this.children);for(var b=0,c=this.children.length;b<c;b++)this.children[b].getDescendants(a);return a},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):
this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);
a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));if(!0===b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;THREE.Projector=function(){function a(){if(i===m){var a=new THREE.RenderableVertex;k.push(a);m++;i++;return a}return k[i++]}function b(a,b){return a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function c(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,h=-a.z+a.w,g=-b.z+b.w;if(0<=e&&0<=f&&0<=h&&0<=g)return!0;if(0>e&&0>f||0>h&&0>g)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>h?c=Math.max(c,h/(h-g)):0>g&&(d=Math.min(d,h/(h-g)));if(d<c)return!1;a.lerp(b,c);b.lerp(a,1-d);return!0}var d,e,f=[],h=
0,g,i,k=[],m=0,l,p,t=[],s=0,q,n,u=[],r=0,v,z,G=[],w=0,y={objects:[],sprites:[],lights:[],elements:[]},E=new THREE.Vector3,A=new THREE.Vector4,K=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),D=new THREE.Box3,F=Array(3),O=new THREE.Matrix4,x=new THREE.Matrix4,I,B=new THREE.Matrix4,M=new THREE.Matrix3,J=new THREE.Matrix3,ca=new THREE.Vector3,na=new THREE.Frustum,pa=new THREE.Vector4,C=new THREE.Vector4;this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);
x.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);return a.applyProjection(x)};this.unprojectVector=function(a,b){b.projectionMatrixInverse.getInverse(b.projectionMatrix);x.multiplyMatrices(b.matrixWorld,b.projectionMatrixInverse);return a.applyProjection(x)};this.pickingRay=function(a,b){a.z=-1;var c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.sub(a).normalize();return new THREE.Raycaster(a,c)};var Q=function(a){if(e===h){var b=new THREE.RenderableObject;
f.push(b);h++;e++;d=b}else d=f[e++];d.id=a.id;d.object=a;null!==a.renderDepth?d.z=a.renderDepth:(E.setFromMatrixPosition(a.matrixWorld),E.applyProjection(x),d.z=E.z);return d},R=function(a){if(!1!==a.visible){a instanceof THREE.Light?y.lights.push(a):a instanceof THREE.Mesh||a instanceof THREE.Line?(!1===a.frustumCulled||!0===na.intersectsObject(a))&&y.objects.push(Q(a)):a instanceof THREE.Sprite&&y.sprites.push(Q(a));for(var b=0,c=a.children.length;b<c;b++)R(a.children[b])}};this.projectScene=function(d,
f,h,m){var E=!1,Q,$,ea,V,P,Y,U,ja,sa,ha,Ka,Ga;z=n=p=0;y.elements.length=0;!0===d.autoUpdate&&d.updateMatrixWorld();void 0===f.parent&&f.updateMatrixWorld();O.copy(f.matrixWorldInverse.getInverse(f.matrixWorld));x.multiplyMatrices(f.projectionMatrix,O);J.getNormalMatrix(O);na.setFromMatrix(x);e=0;y.objects.length=0;y.sprites.length=0;y.lights.length=0;R(d);!0===h&&y.objects.sort(b);d=0;for(h=y.objects.length;d<h;d++)if(U=y.objects[d].object,I=U.matrixWorld,i=0,U instanceof THREE.Mesh){ja=U.geometry;
ea=ja.vertices;sa=ja.faces;ja=ja.faceVertexUvs;M.getNormalMatrix(I);Ka=U.material instanceof THREE.MeshFaceMaterial;Ga=!0===Ka?U.material:null;Q=0;for($=ea.length;Q<$;Q++){g=a();g.positionWorld.copy(ea[Q]).applyMatrix4(I);g.positionScreen.copy(g.positionWorld).applyMatrix4(x);var ka=1/g.positionScreen.w;g.positionScreen.x*=ka;g.positionScreen.y*=ka;g.positionScreen.z*=ka;g.visible=!(-1>g.positionScreen.x||1<g.positionScreen.x||-1>g.positionScreen.y||1<g.positionScreen.y||-1>g.positionScreen.z||1<
g.positionScreen.z)}ea=0;for(Q=sa.length;ea<Q;ea++)if($=sa[ea],ka=!0===Ka?Ga.materials[$.materialIndex]:U.material,void 0!==ka&&(Y=ka.side,V=k[$.a],P=k[$.b],ha=k[$.c],F[0]=V.positionScreen,F[1]=P.positionScreen,F[2]=ha.positionScreen,!0===V.visible||!0===P.visible||!0===ha.visible||K.isIntersectionBox(D.setFromPoints(F))))if(E=0>(ha.positionScreen.x-V.positionScreen.x)*(P.positionScreen.y-V.positionScreen.y)-(ha.positionScreen.y-V.positionScreen.y)*(P.positionScreen.x-V.positionScreen.x),Y===THREE.DoubleSide||
E===(Y===THREE.FrontSide)){if(p===s){var Da=new THREE.RenderableFace3;t.push(Da);s++;p++;l=Da}else l=t[p++];l.id=U.id;l.v1.copy(V);l.v2.copy(P);l.v3.copy(ha);l.normalModel.copy($.normal);!1===E&&(Y===THREE.BackSide||Y===THREE.DoubleSide)&&l.normalModel.negate();l.normalModel.applyMatrix3(M).normalize();l.normalModelView.copy(l.normalModel).applyMatrix3(J);l.centroidModel.copy($.centroid).applyMatrix4(I);ha=$.vertexNormals;V=0;for(P=Math.min(ha.length,3);V<P;V++)Da=l.vertexNormalsModel[V],Da.copy(ha[V]),
!1===E&&(Y===THREE.BackSide||Y===THREE.DoubleSide)&&Da.negate(),Da.applyMatrix3(M).normalize(),l.vertexNormalsModelView[V].copy(Da).applyMatrix3(J);l.vertexNormalsLength=ha.length;E=0;for(V=Math.min(ja.length,3);E<V;E++)if(ha=ja[E][ea],void 0!==ha){P=0;for(Y=ha.length;P<Y;P++)l.uvs[E][P]=ha[P]}l.color=$.color;l.material=ka;ca.copy(l.centroidModel).applyProjection(x);l.z=ca.z;y.elements.push(l)}}else if(U instanceof THREE.Line){B.multiplyMatrices(x,I);ea=U.geometry.vertices;V=a();V.positionScreen.copy(ea[0]).applyMatrix4(B);
sa=U.type===THREE.LinePieces?2:1;Q=1;for($=ea.length;Q<$;Q++)V=a(),V.positionScreen.copy(ea[Q]).applyMatrix4(B),0<(Q+1)%sa||(P=k[i-2],pa.copy(V.positionScreen),C.copy(P.positionScreen),!0===c(pa,C)&&(pa.multiplyScalar(1/pa.w),C.multiplyScalar(1/C.w),n===r?(ja=new THREE.RenderableLine,u.push(ja),r++,n++,q=ja):q=u[n++],q.id=U.id,q.v1.positionScreen.copy(pa),q.v2.positionScreen.copy(C),q.z=Math.max(pa.z,C.z),q.material=U.material,U.material.vertexColors===THREE.VertexColors&&(q.vertexColors[0].copy(U.geometry.colors[Q]),
q.vertexColors[1].copy(U.geometry.colors[Q-1])),y.elements.push(q)))}d=0;for(h=y.sprites.length;d<h;d++)U=y.sprites[d].object,I=U.matrixWorld,A.set(I.elements[12],I.elements[13],I.elements[14],1),A.applyMatrix4(x),ka=1/A.w,A.z*=ka,-1<=A.z&&1>=A.z&&(z===w?(sa=new THREE.RenderableSprite,G.push(sa),w++,z++,v=sa):v=G[z++],v.id=U.id,v.x=A.x*ka,v.y=A.y*ka,v.z=A.z,v.object=U,v.rotation=U.rotation,v.scale.x=U.scale.x*Math.abs(v.x-(A.x+f.projectionMatrix.elements[0])/(A.w+f.projectionMatrix.elements[12])),
v.scale.y=U.scale.y*Math.abs(v.y-(A.y+f.projectionMatrix.elements[5])/(A.w+f.projectionMatrix.elements[13])),v.material=U.material,y.elements.push(v));!0===m&&y.elements.sort(b);return y}};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0;this.centroid=new THREE.Vector3};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Face4=function(a,b,c,d,e,f,h){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,h)};THREE.Geometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=
this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){var e=this.faces[c];e.normal.applyMatrix3(b).normalize();for(var f=0,h=e.vertexNormals.length;f<h;f++)e.vertexNormals[f].applyMatrix3(b).normalize();e.centroid.applyMatrix4(a)}this.boundingBox instanceof THREE.Box3&&this.computeBoundingBox();this.boundingSphere instanceof
THREE.Sphere&&this.computeBoundingSphere()},computeCentroids:function(){var a,b,c;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.centroid.set(0,0,0),c.centroid.add(this.vertices[c.a]),c.centroid.add(this.vertices[c.b]),c.centroid.add(this.vertices[c.c]),c.centroid.divideScalar(3)},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],h=this.vertices[e.b];a.subVectors(this.vertices[e.c],h);b.subVectors(f,
h);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d,e;if(void 0===this.__tmpVertices){e=this.__tmpVertices=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)e[b]=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3]}else{e=this.__tmpVertices;b=0;for(c=this.vertices.length;b<c;b++)e[b].set(0,0,0)}if(a){var f,h,g=new THREE.Vector3,i=new THREE.Vector3;new THREE.Vector3;
new THREE.Vector3;new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],a=this.vertices[d.a],f=this.vertices[d.b],h=this.vertices[d.c],g.subVectors(h,f),i.subVectors(a,f),g.cross(i),e[d.a].add(g),e[d.b].add(g),e[d.c].add(g)}else{b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],e[d.a].add(d.normal),e[d.b].add(d.normal),e[d.c].add(d.normal)}b=0;for(c=this.vertices.length;b<c;b++)e[b].normalize();b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d.vertexNormals[0].copy(e[d.a]),d.vertexNormals[1].copy(e[d.b]),
d.vertexNormals[2].copy(e[d.c])},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++){e=this.faces[c];e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone();e.__originalVertexNormals||(e.__originalVertexNormals=[]);a=0;for(b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone()}var f=new THREE.Geometry;f.faces=
this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var h=this.morphNormals[a].vertexNormals,g,i;c=0;for(d=this.faces.length;c<d;c++)g=new THREE.Vector3,i={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(g),h.push(i)}h=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();
c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],g=h.faceNormals[c],i=h.vertexNormals[c],g.copy(e.normal),i.a.copy(e.vertexNormals[0]),i.b.copy(e.vertexNormals[1]),i.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,h,g,i,k,m,l,p,t,s,q,n,u=[],r=[];c=new THREE.Vector3;var v=new THREE.Vector3,z=new THREE.Vector3,G=new THREE.Vector3,w=new THREE.Vector3;
a=0;for(b=this.vertices.length;a<b;a++)u[a]=new THREE.Vector3,r[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,n=e.b,e=e.c,h=this.vertices[d],g=this.vertices[n],i=this.vertices[e],k=f[0],m=f[1],l=f[2],f=g.x-h.x,p=i.x-h.x,t=g.y-h.y,s=i.y-h.y,g=g.z-h.z,h=i.z-h.z,i=m.x-k.x,q=l.x-k.x,m=m.y-k.y,k=l.y-k.y,l=1/(i*k-q*m),c.set((k*f-m*p)*l,(k*t-m*s)*l,(k*g-m*h)*l),v.set((i*p-q*f)*l,(i*s-q*t)*l,(i*h-q*g)*l),u[d].add(c),u[n].add(c),u[e].add(c),r[d].add(v),
r[n].add(v),r[e].add(v);v=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++){e=this.faces[a];for(c=0;c<Math.min(e.vertexNormals.length,3);c++)w.copy(e.vertexNormals[c]),d=e[v[c]],n=u[d],z.copy(n),z.sub(w.multiplyScalar(w.dot(n))).normalize(),G.crossVectors(e.vertexNormals[c],n),d=G.dot(r[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(z.x,z.y,z.z,d)}this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=
a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);this.boundingSphere.setFromPoints(this.vertices)},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,h;this.__tmpVertices=void 0;f=0;for(h=this.vertices.length;f<h;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*
e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(h=this.faces.length;f<h;f++){e=this.faces[f];e.a=c[e.a];e.b=c[e.b];e.c=c[e.c];e=[e.a,e.b,e.c];for(d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}}for(f=a.length-1;0<=f;f--){e=a[f];this.faces.splice(e,1);c=0;for(h=this.faceVertexUvs.length;c<h;c++)this.faceVertexUvs[c].splice(e,1)}f=this.vertices.length-b.length;this.vertices=b;return f},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=
b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],h=0,g=e.length;h<g;h++)f.push(new THREE.Vector2(e[h].x,e[h].y));a.faceVertexUvs[0].push(f)}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;THREE.BufferGeometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.attributes={};this.dynamic=!0;this.offsets=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.morphTargets=[]};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c,d){this.attributes[a]={itemSize:d,array:new b(c*d)}},applyMatrix:function(a){var b,c;this.attributes.position&&(b=this.attributes.position.array);this.attributes.normal&&(c=this.attributes.normal.array);void 0!==b&&(a.multiplyVector3Array(b),this.verticesNeedUpdate=!0);void 0!==c&&((new THREE.Matrix3).getNormalMatrix(a).multiplyVector3Array(c),this.normalizeNormals(),this.normalsNeedUpdate=!0)},computeBoundingBox:function(){null===
this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.attributes.position.array;if(a){var b=this.boundingBox,c,d,e;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var f=3,h=a.length;f<h;f+=3)c=a[f],d=a[f+1],e=a[f+2],c<b.min.x?b.min.x=c:c>b.max.x&&(b.max.x=c),d<b.min.y?b.min.y=d:d>b.max.y&&(b.max.y=d),e<b.min.z?b.min.z=e:e>b.max.z&&(b.max.z=e)}if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){var a=
new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.addPoint(b);a.center(d);for(var h=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),h=Math.max(h,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(h)}}}(),computeVertexNormals:function(){if(this.attributes.position){var a,b,c,d;a=this.attributes.position.array.length;
if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a)};else{a=0;for(b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=0}var e=this.attributes.position.array,f=this.attributes.normal.array,h,g,i,k,m,l,p=new THREE.Vector3,t=new THREE.Vector3,s=new THREE.Vector3,q=new THREE.Vector3,n=new THREE.Vector3;if(this.attributes.index){var u=this.attributes.index.array,r=this.offsets;c=0;for(d=r.length;c<d;++c){b=r[c].start;h=r[c].count;var v=
r[c].index;a=b;for(b+=h;a<b;a+=3)h=v+u[a],g=v+u[a+1],i=v+u[a+2],k=e[3*h],m=e[3*h+1],l=e[3*h+2],p.set(k,m,l),k=e[3*g],m=e[3*g+1],l=e[3*g+2],t.set(k,m,l),k=e[3*i],m=e[3*i+1],l=e[3*i+2],s.set(k,m,l),q.subVectors(s,t),n.subVectors(p,t),q.cross(n),f[3*h]+=q.x,f[3*h+1]+=q.y,f[3*h+2]+=q.z,f[3*g]+=q.x,f[3*g+1]+=q.y,f[3*g+2]+=q.z,f[3*i]+=q.x,f[3*i+1]+=q.y,f[3*i+2]+=q.z}}else{a=0;for(b=e.length;a<b;a+=9)k=e[a],m=e[a+1],l=e[a+2],p.set(k,m,l),k=e[a+3],m=e[a+4],l=e[a+5],t.set(k,m,l),k=e[a+6],m=e[a+7],l=e[a+8],
s.set(k,m,l),q.subVectors(s,t),n.subVectors(p,t),q.cross(n),f[a]=q.x,f[a+1]=q.y,f[a+2]=q.z,f[a+3]=q.x,f[a+4]=q.y,f[a+5]=q.z,f[a+6]=q.x,f[a+7]=q.y,f[a+8]=q.z}this.normalizeNormals();this.normalsNeedUpdate=!0}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},computeTangents:function(){function a(a){na.x=d[3*a];na.y=d[3*a+1];na.z=d[3*a+2];pa.copy(na);Q=g[a];J.copy(Q);J.sub(na.multiplyScalar(na.dot(Q))).normalize();
ca.crossVectors(pa,Q);R=ca.dot(i[a]);C=0>R?-1:1;h[4*a]=J.x;h[4*a+1]=J.y;h[4*a+2]=J.z;h[4*a+3]=C}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var b=this.attributes.index.array,c=this.attributes.position.array,d=this.attributes.normal.array,e=this.attributes.uv.array,f=c.length/3;void 0===this.attributes.tangent&&
(this.attributes.tangent={itemSize:4,array:new Float32Array(4*f)});for(var h=this.attributes.tangent.array,g=[],i=[],k=0;k<f;k++)g[k]=new THREE.Vector3,i[k]=new THREE.Vector3;var m,l,p,t,s,q,n,u,r,v,z,G,w,y,E,f=new THREE.Vector3,k=new THREE.Vector3,A,K,D,F,O,x,I,B=this.offsets;D=0;for(F=B.length;D<F;++D){K=B[D].start;O=B[D].count;var M=B[D].index;A=K;for(K+=O;A<K;A+=3)O=M+b[A],x=M+b[A+1],I=M+b[A+2],m=c[3*O],l=c[3*O+1],p=c[3*O+2],t=c[3*x],s=c[3*x+1],q=c[3*x+2],n=c[3*I],u=c[3*I+1],r=c[3*I+2],v=e[2*
O],z=e[2*O+1],G=e[2*x],w=e[2*x+1],y=e[2*I],E=e[2*I+1],t-=m,m=n-m,s-=l,l=u-l,q-=p,p=r-p,G-=v,v=y-v,w-=z,z=E-z,E=1/(G*z-v*w),f.set((z*t-w*m)*E,(z*s-w*l)*E,(z*q-w*p)*E),k.set((G*m-v*t)*E,(G*l-v*s)*E,(G*p-v*q)*E),g[O].add(f),g[x].add(f),g[I].add(f),i[O].add(k),i[x].add(k),i[I].add(k)}var J=new THREE.Vector3,ca=new THREE.Vector3,na=new THREE.Vector3,pa=new THREE.Vector3,C,Q,R;D=0;for(F=B.length;D<F;++D){K=B[D].start;O=B[D].count;M=B[D].index;A=K;for(K+=O;A<K;A+=3)O=M+b[A],x=M+b[A+1],I=M+b[A+2],a(O),a(x),
a(I)}this.tangentsNeedUpdate=this.hasTangents=!0}},clone:function(){var a=new THREE.BufferGeometry,b=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],c;for(c in this.attributes){for(var d=this.attributes[c],e=d.array,f={itemSize:d.itemSize,numItems:d.numItems,array:null},d=0,h=b.length;d<h;d++){var g=b[d];if(e instanceof g){f.array=new g(e);break}}a.attributes[c]=f}d=0;for(h=this.offsets.length;d<h;d++)b=this.offsets[d],a.offsets.push({start:b.start,
index:b.index,count:b.count});return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4;this.projectionMatrixInverse=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();
THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);a.projectionMatrixInverse.copy(this.projectionMatrixInverse);return a};THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};
THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;return a};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(THREE.Math.degToRad(0.5*this.fov))*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;return a};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=0.5;this.quadraticAttenuation=0.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=new THREE.Vector3(0,
0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;return a};THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=
this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:"anonymous",addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/
a.total).toFixed(0)+"%"):b+((a.loaded/1E3).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");a.pop();return(1>a.length?".":a.join("/"))+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=THREE.Loader.prototype.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.floor(a)==
a}function d(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function e(a,e,f,g,i,k,n){var u=/\.dds$/i.test(f),r=b+"/"+f;if(u){var v=THREE.ImageUtils.loadCompressedTexture(r);a[e]=v}else v=document.createElement("canvas"),a[e]=new THREE.Texture(v);a[e].sourceFile=f;g&&(a[e].repeat.set(g[0],g[1]),1!==g[0]&&(a[e].wrapS=THREE.RepeatWrapping),1!==g[1]&&(a[e].wrapT=THREE.RepeatWrapping));i&&a[e].offset.set(i[0],i[1]);k&&(f={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==
f[k[0]]&&(a[e].wrapS=f[k[0]]),void 0!==f[k[1]]&&(a[e].wrapT=f[k[1]]));n&&(a[e].anisotropy=n);if(!u){var z=a[e],a=new Image;a.onload=function(){if(!c(this.width)||!c(this.height)){var a=d(this.width),b=d(this.height);z.image.width=a;z.image.height=b;z.image.getContext("2d").drawImage(this,0,0,a,b)}else z.image=this;z.needsUpdate=!0};a.crossOrigin=h.crossOrigin;a.src=r}}function f(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var h=this,g="MeshLambertMaterial",i={color:15658734,opacity:1,map:null,
lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?g="MeshPhongMaterial":"basic"===k&&(g="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(i.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)i.transparent=a.transparent;void 0!==a.depthTest&&(i.depthTest=a.depthTest);void 0!==a.depthWrite&&(i.depthWrite=a.depthWrite);void 0!==a.visible&&(i.visible=a.visible);void 0!==a.flipSided&&(i.side=THREE.BackSide);
void 0!==a.doubleSided&&(i.side=THREE.DoubleSide);void 0!==a.wireframe&&(i.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===a.vertexColors?i.vertexColors=THREE.FaceColors:a.vertexColors&&(i.vertexColors=THREE.VertexColors));a.colorDiffuse?i.color=f(a.colorDiffuse):a.DbgColor&&(i.color=a.DbgColor);a.colorSpecular&&(i.specular=f(a.colorSpecular));a.colorAmbient&&(i.ambient=f(a.colorAmbient));a.transparency&&(i.opacity=a.transparency);a.specularCoef&&(i.shininess=a.specularCoef);a.mapDiffuse&&
b&&e(i,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&e(i,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&e(i,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&e(i,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&e(i,"specularMap",a.mapSpecular,a.mapSpecularRepeat,
a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapBumpScale&&(i.bumpScale=a.mapBumpScale);a.mapNormal?(g=THREE.ShaderLib.normalmap,k=THREE.UniformsUtils.clone(g.uniforms),k.tNormal.value=i.normalMap,a.mapNormalFactor&&k.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),i.map&&(k.tDiffuse.value=i.map,k.enableDiffuse.value=!0),i.specularMap&&(k.tSpecular.value=i.specularMap,k.enableSpecular.value=!0),i.lightMap&&(k.tAO.value=i.lightMap,k.enableAO.value=!0),k.uDiffuseColor.value.setHex(i.color),
k.uSpecularColor.value.setHex(i.specular),k.uAmbientColor.value.setHex(i.ambient),k.uShininess.value=i.shininess,void 0!==i.opacity&&(k.uOpacity.value=i.opacity),g=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:k,lights:!0,fog:!0}),i.transparent&&(g.transparent=!0)):g=new THREE[g](i);void 0!==a.DbgName&&(g.name=a.DbgName);return g}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=new XMLHttpRequest;void 0!==b&&f.addEventListener("load",function(c){b(c.target.responseText);e.manager.itemEnd(a)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.open("GET",a,!0);f.send(null);e.manager.itemStart(a)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=document.createElement("img");void 0!==b&&f.addEventListener("load",function(){e.manager.itemEnd(a);b(this)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.src=a;e.manager.itemStart(a);return f},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,h=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var g=JSON.parse(f.responseText),g=a.parse(g,d);c(g.geometry,g.materials)}else console.warn("THREE.JSONLoader: ["+b+"] seems to be unreachable or file there is empty");a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load ["+b+"] ["+f.status+"]");else f.readyState===f.LOADING?e&&(0===h&&
(h=f.getResponseHeader("Content-Length")),e({total:h,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(h=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1,e,f,h,g,i,k,m,l,p,t,s,q,n,u,r=a.faces;p=a.vertices;var v=a.normals,z=a.colors,G=0;if(void 0!==a.uvs){for(e=0;e<a.uvs.length;e++)a.uvs[e].length&&G++;for(e=0;e<G;e++)c.faceVertexUvs[e]=[]}g=0;for(i=p.length;g<i;)k=new THREE.Vector3,k.x=p[g++]*d,k.y=p[g++]*d,k.z=p[g++]*d,c.vertices.push(k);g=0;for(i=r.length;g<i;)if(p=r[g++],t=p&1,h=p&2,e=p&8,m=p&16,s=p&32,k=p&64,p&=128,t){t=new THREE.Face3;t.a=r[g];
t.b=r[g+1];t.c=r[g+3];q=new THREE.Face3;q.a=r[g+1];q.b=r[g+2];q.c=r[g+3];g+=4;h&&(h=r[g++],t.materialIndex=h,q.materialIndex=h);h=c.faces.length;if(e)for(e=0;e<G;e++){n=a.uvs[e];c.faceVertexUvs[e][h]=[];c.faceVertexUvs[e][h+1]=[];for(f=0;4>f;f++)l=r[g++],u=n[2*l],l=n[2*l+1],u=new THREE.Vector2(u,l),2!==f&&c.faceVertexUvs[e][h].push(u),0!==f&&c.faceVertexUvs[e][h+1].push(u)}m&&(m=3*r[g++],t.normal.set(v[m++],v[m++],v[m]),q.normal.copy(t.normal));if(s)for(e=0;4>e;e++)m=3*r[g++],s=new THREE.Vector3(v[m++],
v[m++],v[m]),2!==e&&t.vertexNormals.push(s),0!==e&&q.vertexNormals.push(s);k&&(k=r[g++],k=z[k],t.color.setHex(k),q.color.setHex(k));if(p)for(e=0;4>e;e++)k=r[g++],k=z[k],2!==e&&t.vertexColors.push(new THREE.Color(k)),0!==e&&q.vertexColors.push(new THREE.Color(k));c.faces.push(t);c.faces.push(q)}else{t=new THREE.Face3;t.a=r[g++];t.b=r[g++];t.c=r[g++];h&&(h=r[g++],t.materialIndex=h);h=c.faces.length;if(e)for(e=0;e<G;e++){n=a.uvs[e];c.faceVertexUvs[e][h]=[];for(f=0;3>f;f++)l=r[g++],u=n[2*l],l=n[2*l+1],
u=new THREE.Vector2(u,l),c.faceVertexUvs[e][h].push(u)}m&&(m=3*r[g++],t.normal.set(v[m++],v[m++],v[m]));if(s)for(e=0;3>e;e++)m=3*r[g++],s=new THREE.Vector3(v[m++],v[m++],v[m]),t.vertexNormals.push(s);k&&(k=r[g++],t.color.setHex(z[k]));if(p)for(e=0;3>e;e++)k=r[g++],t.vertexColors.push(new THREE.Color(z[k]));c.faces.push(t)}if(a.skinWeights){g=0;for(i=a.skinWeights.length;g<i;g+=2)r=a.skinWeights[g],v=a.skinWeights[g+1],c.skinWeights.push(new THREE.Vector4(r,v,0,0))}if(a.skinIndices){g=0;for(i=a.skinIndices.length;g<
i;g+=2)r=a.skinIndices[g],v=a.skinIndices[g+1],c.skinIndices.push(new THREE.Vector4(r,v,0,0))}c.bones=a.bones;c.animation=a.animation;c.animations=a.animations;if(void 0!==a.morphTargets){g=0;for(i=a.morphTargets.length;g<i;g++){c.morphTargets[g]={};c.morphTargets[g].name=a.morphTargets[g].name;c.morphTargets[g].vertices=[];z=c.morphTargets[g].vertices;G=a.morphTargets[g].vertices;r=0;for(v=G.length;r<v;r+=3)p=new THREE.Vector3,p.x=G[r]*d,p.y=G[r+1]*d,p.z=G[r+2]*d,z.push(p)}}if(void 0!==a.morphColors){g=
0;for(i=a.morphColors.length;g<i;g++){c.morphColors[g]={};c.morphColors[g].name=a.morphColors[g].name;c.morphColors[g].colors=[];v=c.morphColors[g].colors;z=a.morphColors[g].colors;d=0;for(r=z.length;d<r;d+=3)G=new THREE.Color(16755200),G.setRGB(z[d],z[d+1],z[d+2]),v.push(G)}}c.computeCentroids();c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,materials:d}};THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.attributes,d=a.offsets,a=a.boundingSphere,e;for(e in c){var f=c[e];b.attributes[e]={itemSize:f.itemSize,array:new self[f.type](f.array)}}void 0!==d&&(b.offsets=JSON.parse(JSON.stringify(d)));
void 0!==a&&(b.boundingSphere=new THREE.Sphere((new THREE.Vector3).fromArray(void 0!==a.center?a.center:[0,0,0]),a.radius));return b}};THREE.GeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.GeometryLoader.prototype={constructor:THREE.GeometryLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(){}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.ambient&&b.ambient.setHex(a.ambient);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&
(b.shininess=a.shininess);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader(c.manager);d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=this.parseGeometries(a.geometries),c=this.parseMaterials(a.materials);return this.parseObject(a.object,b,c)},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,
e=0,f=a.length;e<f;e++){var h,g=a[e];switch(g.type){case "PlaneGeometry":h=new THREE.PlaneGeometry(g.width,g.height,g.widthSegments,g.heightSegments);break;case "CircleGeometry":h=new THREE.CircleGeometry(g.radius,g.segments);break;case "CubeGeometry":h=new THREE.CubeGeometry(g.width,g.height,g.depth,g.widthSegments,g.heightSegments,g.depthSegments);break;case "CylinderGeometry":h=new THREE.CylinderGeometry(g.radiusTop,g.radiusBottom,g.height,g.radialSegments,g.heightSegments,g.openEnded);break;case "SphereGeometry":h=
new THREE.SphereGeometry(g.radius,g.widthSegments,g.heightSegments,g.phiStart,g.phiLength,g.thetaStart,g.thetaLength);break;case "IcosahedronGeometry":h=new THREE.IcosahedronGeometry(g.radius,g.detail);break;case "TorusGeometry":h=new THREE.TorusGeometry(g.radius,g.tube,g.radialSegments,g.tubularSegments,g.arc);break;case "TorusKnotGeometry":h=new THREE.TorusKnotGeometry(g.radius,g.tube,g.radialSegments,g.tubularSegments,g.p,g.q,g.heightScale);break;case "BufferGeometry":h=d.parse(g.data);break;case "Geometry":h=
c.parse(g.data).geometry}h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);b[g.uuid]=h}return b},parseMaterials:function(a){var b={};if(void 0!==a)for(var c=new THREE.MaterialLoader,d=0,e=a.length;d<e;d++){var f=a[d],h=c.parse(f);h.uuid=f.uuid;void 0!==f.name&&(h.name=f.name);b[f.uuid]=h}return b},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,
b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance);break;case "SpotLight":e=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,
b.intensity);break;case "Mesh":e=c[b.geometry];var f=d[b.material];void 0===e&&console.error("THREE.ObjectLoader: Undefined geometry "+b.geometry);void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Mesh(e,f);break;case "Sprite":f=d[b.material];void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Sprite(f);break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),
a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var h in b.children)e.add(this.parseObject(b.children[h],c,d));return e}}()};THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){};this.geometryHandlers={};this.hierarchyHandlers={};this.addGeometryHandler("ascii",THREE.JSONLoader)};
THREE.SceneLoader.prototype={constructor:THREE.SceneLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader(c.manager);d.setCrossOrigin(this.crossOrigin);d.load(a,function(d){c.parse(JSON.parse(d),b,a)})},setCrossOrigin:function(a){this.crossOrigin=a},addGeometryHandler:function(a,b){this.geometryHandlers[a]={loaderClass:b}},addHierarchyHandler:function(a,b){this.hierarchyHandlers[a]={loaderClass:b}},parse:function(a,b,c){function d(a,b){return"relativeToHTML"==b?a:p+"/"+a}function e(){f(y.scene,
A.objects)}function f(a,b){var c,e,h,i,k,m;for(m in b){var p=y.objects[m],n=b[m];if(void 0===p){if(n.type&&n.type in l.hierarchyHandlers){if(void 0===n.loading){c={type:1,url:1,material:1,position:1,rotation:1,scale:1,visible:1,children:1,userData:1,skin:1,morph:1,mirroredLoop:1,duration:1};var u={},v;for(v in n)v in c||(u[v]=n[v]);s=y.materials[n.material];n.loading=!0;c=l.hierarchyHandlers[n.type].loaderObject;c.options?c.load(d(n.url,A.urlBaseType),g(m,a,s,n)):c.load(d(n.url,A.urlBaseType),g(m,
a,s,n),u)}}else if(void 0!==n.geometry){if(t=y.geometries[n.geometry]){p=!1;s=y.materials[n.material];p=s instanceof THREE.ShaderMaterial;e=n.position;h=n.rotation;i=n.scale;c=n.matrix;k=n.quaternion;n.material||(s=new THREE.MeshFaceMaterial(y.face_materials[n.geometry]));s instanceof THREE.MeshFaceMaterial&&0===s.materials.length&&(s=new THREE.MeshFaceMaterial(y.face_materials[n.geometry]));if(s instanceof THREE.MeshFaceMaterial)for(u=0;u<s.materials.length;u++)p=p||s.materials[u]instanceof THREE.ShaderMaterial;
p&&t.computeTangents();n.skin?p=new THREE.SkinnedMesh(t,s):n.morph?(p=new THREE.MorphAnimMesh(t,s),void 0!==n.duration&&(p.duration=n.duration),void 0!==n.time&&(p.time=n.time),void 0!==n.mirroredLoop&&(p.mirroredLoop=n.mirroredLoop),s.morphNormals&&t.computeMorphNormals()):p=new THREE.Mesh(t,s);p.name=m;c?(p.matrixAutoUpdate=!1,p.matrix.set(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15])):(p.position.fromArray(e),k?p.quaternion.fromArray(k):p.rotation.fromArray(h),
p.scale.fromArray(i));p.visible=n.visible;p.castShadow=n.castShadow;p.receiveShadow=n.receiveShadow;a.add(p);y.objects[m]=p}}else if("AmbientLight"===n.type||"PointLight"===n.type||"DirectionalLight"===n.type||"SpotLight"===n.type||"HemisphereLight"===n.type||"AreaLight"===n.type){u=n.color;c=n.intensity;e=n.distance;h=n.position;i=n.rotation;switch(n.type){case "AmbientLight":r=new THREE.AmbientLight(u);break;case "PointLight":r=new THREE.PointLight(u,c,e);r.position.fromArray(h);break;case "DirectionalLight":r=
new THREE.DirectionalLight(u,c);r.position.fromArray(n.direction);break;case "SpotLight":r=new THREE.SpotLight(u,c,e,1);r.angle=n.angle;r.position.fromArray(h);r.target.set(h[0],h[1]-e,h[2]);r.target.applyEuler(new THREE.Euler(i[0],i[1],i[2],"XYZ"));break;case "HemisphereLight":r=new THREE.DirectionalLight(u,c,e);r.target.set(h[0],h[1]-e,h[2]);r.target.applyEuler(new THREE.Euler(i[0],i[1],i[2],"XYZ"));break;case "AreaLight":r=new THREE.AreaLight(u,c),r.position.fromArray(h),r.width=n.size,r.height=
n.size_y}a.add(r);r.name=m;y.lights[m]=r;y.objects[m]=r}else"PerspectiveCamera"===n.type||"OrthographicCamera"===n.type?(e=n.position,h=n.rotation,k=n.quaternion,"PerspectiveCamera"===n.type?q=new THREE.PerspectiveCamera(n.fov,n.aspect,n.near,n.far):"OrthographicCamera"===n.type&&(q=new THREE.OrthographicCamera(n.left,n.right,n.top,n.bottom,n.near,n.far)),q.name=m,q.position.fromArray(e),void 0!==k?q.quaternion.fromArray(k):void 0!==h&&q.rotation.fromArray(h),a.add(q),y.cameras[m]=q,y.objects[m]=
q):(e=n.position,h=n.rotation,i=n.scale,k=n.quaternion,p=new THREE.Object3D,p.name=m,p.position.fromArray(e),k?p.quaternion.fromArray(k):p.rotation.fromArray(h),p.scale.fromArray(i),p.visible=void 0!==n.visible?n.visible:!1,a.add(p),y.objects[m]=p,y.empties[m]=p);if(p){if(void 0!==n.userData)for(var z in n.userData)p.userData[z]=n.userData[z];if(void 0!==n.groups)for(u=0;u<n.groups.length;u++)c=n.groups[u],void 0===y.groups[c]&&(y.groups[c]=[]),y.groups[c].push(m)}}void 0!==p&&void 0!==n.children&&
f(p,n.children)}}function h(a){return function(b,c){b.name=a;y.geometries[a]=b;y.face_materials[a]=c;e();v-=1;l.onLoadComplete();k()}}function g(a,b,c,d){return function(f){var f=f.content?f.content:f.dae?f.scene:f,h=d.rotation,g=d.quaternion,i=d.scale;f.position.fromArray(d.position);g?f.quaternion.fromArray(g):f.rotation.fromArray(h);f.scale.fromArray(i);c&&f.traverse(function(a){a.material=c});var m=void 0!==d.visible?d.visible:!0;f.traverse(function(a){a.visible=m});b.add(f);f.name=a;y.objects[a]=
f;e();v-=1;l.onLoadComplete();k()}}function i(a){return function(b,c){b.name=a;y.geometries[a]=b;y.face_materials[a]=c}}function k(){l.callbackProgress({totalModels:G,totalTextures:w,loadedModels:G-v,loadedTextures:w-z},y);l.onLoadProgress();if(0===v&&0===z){for(var a=0;a<E.length;a++){var c=E[a],d=y.objects[c.targetName];d?c.object.target=d:(c.object.target=new THREE.Object3D,y.scene.add(c.object.target));c.object.target.userData.targetInverse=c.object}b(y)}}function m(a,b){b(a);if(void 0!==a.children)for(var c in a.children)m(a.children[c],
b)}var l=this,p=THREE.Loader.prototype.extractUrlBase(c),t,s,q,n,u,r,v,z,G,w,y,E=[],A=a,K;for(K in this.geometryHandlers)a=this.geometryHandlers[K].loaderClass,this.geometryHandlers[K].loaderObject=new a;for(K in this.hierarchyHandlers)a=this.hierarchyHandlers[K].loaderClass,this.hierarchyHandlers[K].loaderObject=new a;z=v=0;y={scene:new THREE.Scene,geometries:{},face_materials:{},materials:{},textures:{},objects:{},cameras:{},lights:{},fogs:{},empties:{},groups:{}};if(A.transform&&(K=A.transform.position,
a=A.transform.rotation,c=A.transform.scale,K&&y.scene.position.fromArray(K),a&&y.scene.rotation.fromArray(a),c&&y.scene.scale.fromArray(c),K||a||c))y.scene.updateMatrix(),y.scene.updateMatrixWorld();K=function(a){return function(){z-=a;k();l.onLoadComplete()}};for(var D in A.fogs)a=A.fogs[D],"linear"===a.type?n=new THREE.Fog(0,a.near,a.far):"exp2"===a.type&&(n=new THREE.FogExp2(0,a.density)),a=a.color,n.color.setRGB(a[0],a[1],a[2]),y.fogs[D]=n;for(var F in A.geometries)n=A.geometries[F],n.type in
this.geometryHandlers&&(v+=1,l.onLoadStart());for(var O in A.objects)m(A.objects[O],function(a){a.type&&a.type in l.hierarchyHandlers&&(v+=1,l.onLoadStart())});G=v;for(F in A.geometries)if(n=A.geometries[F],"cube"===n.type)t=new THREE.CubeGeometry(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments),t.name=F,y.geometries[F]=t;else if("plane"===n.type)t=new THREE.PlaneGeometry(n.width,n.height,n.widthSegments,n.heightSegments),t.name=F,y.geometries[F]=t;else if("sphere"===n.type)t=
new THREE.SphereGeometry(n.radius,n.widthSegments,n.heightSegments),t.name=F,y.geometries[F]=t;else if("cylinder"===n.type)t=new THREE.CylinderGeometry(n.topRad,n.botRad,n.height,n.radSegs,n.heightSegs),t.name=F,y.geometries[F]=t;else if("torus"===n.type)t=new THREE.TorusGeometry(n.radius,n.tube,n.segmentsR,n.segmentsT),t.name=F,y.geometries[F]=t;else if("icosahedron"===n.type)t=new THREE.IcosahedronGeometry(n.radius,n.subdivisions),t.name=F,y.geometries[F]=t;else if(n.type in this.geometryHandlers){O=
{};for(u in n)"type"!==u&&"url"!==u&&(O[u]=n[u]);this.geometryHandlers[n.type].loaderObject.load(d(n.url,A.urlBaseType),h(F),O)}else"embedded"===n.type&&(O=A.embeds[n.id],O.metadata=A.metadata,O&&(O=this.geometryHandlers.ascii.loaderObject.parse(O,""),i(F)(O.geometry,O.materials)));for(var x in A.textures)if(F=A.textures[x],F.url instanceof Array){z+=F.url.length;for(u=0;u<F.url.length;u++)l.onLoadStart()}else z+=1,l.onLoadStart();w=z;for(x in A.textures){F=A.textures[x];void 0!==F.mapping&&void 0!==
THREE[F.mapping]&&(F.mapping=new THREE[F.mapping]);if(F.url instanceof Array){O=F.url.length;n=[];for(u=0;u<O;u++)n[u]=d(F.url[u],A.urlBaseType);u=(u=/\.dds$/i.test(n[0]))?THREE.ImageUtils.loadCompressedTextureCube(n,F.mapping,K(O)):THREE.ImageUtils.loadTextureCube(n,F.mapping,K(O))}else u=/\.dds$/i.test(F.url),O=d(F.url,A.urlBaseType),n=K(1),u=u?THREE.ImageUtils.loadCompressedTexture(O,F.mapping,n):THREE.ImageUtils.loadTexture(O,F.mapping,n),void 0!==THREE[F.minFilter]&&(u.minFilter=THREE[F.minFilter]),
void 0!==THREE[F.magFilter]&&(u.magFilter=THREE[F.magFilter]),F.anisotropy&&(u.anisotropy=F.anisotropy),F.repeat&&(u.repeat.set(F.repeat[0],F.repeat[1]),1!==F.repeat[0]&&(u.wrapS=THREE.RepeatWrapping),1!==F.repeat[1]&&(u.wrapT=THREE.RepeatWrapping)),F.offset&&u.offset.set(F.offset[0],F.offset[1]),F.wrap&&(O={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==O[F.wrap[0]]&&(u.wrapS=O[F.wrap[0]]),void 0!==O[F.wrap[1]]&&(u.wrapT=O[F.wrap[1]]));y.textures[x]=u}var I,B;for(I in A.materials){x=
A.materials[I];for(B in x.parameters)"envMap"===B||"map"===B||"lightMap"===B||"bumpMap"===B?x.parameters[B]=y.textures[x.parameters[B]]:"shading"===B?x.parameters[B]="flat"===x.parameters[B]?THREE.FlatShading:THREE.SmoothShading:"side"===B?x.parameters[B]="double"==x.parameters[B]?THREE.DoubleSide:"back"==x.parameters[B]?THREE.BackSide:THREE.FrontSide:"blending"===B?x.parameters[B]=x.parameters[B]in THREE?THREE[x.parameters[B]]:THREE.NormalBlending:"combine"===B?x.parameters[B]=x.parameters[B]in THREE?
THREE[x.parameters[B]]:THREE.MultiplyOperation:"vertexColors"===B?"face"==x.parameters[B]?x.parameters[B]=THREE.FaceColors:x.parameters[B]&&(x.parameters[B]=THREE.VertexColors):"wrapRGB"===B&&(K=x.parameters[B],x.parameters[B]=new THREE.Vector3(K[0],K[1],K[2]));void 0!==x.parameters.opacity&&1>x.parameters.opacity&&(x.parameters.transparent=!0);x.parameters.normalMap?(K=THREE.ShaderLib.normalmap,F=THREE.UniformsUtils.clone(K.uniforms),u=x.parameters.color,O=x.parameters.specular,n=x.parameters.ambient,
D=x.parameters.shininess,F.tNormal.value=y.textures[x.parameters.normalMap],x.parameters.normalScale&&F.uNormalScale.value.set(x.parameters.normalScale[0],x.parameters.normalScale[1]),x.parameters.map&&(F.tDiffuse.value=x.parameters.map,F.enableDiffuse.value=!0),x.parameters.envMap&&(F.tCube.value=x.parameters.envMap,F.enableReflection.value=!0,F.uReflectivity.value=x.parameters.reflectivity),x.parameters.lightMap&&(F.tAO.value=x.parameters.lightMap,F.enableAO.value=!0),x.parameters.specularMap&&
(F.tSpecular.value=y.textures[x.parameters.specularMap],F.enableSpecular.value=!0),x.parameters.displacementMap&&(F.tDisplacement.value=y.textures[x.parameters.displacementMap],F.enableDisplacement.value=!0,F.uDisplacementBias.value=x.parameters.displacementBias,F.uDisplacementScale.value=x.parameters.displacementScale),F.uDiffuseColor.value.setHex(u),F.uSpecularColor.value.setHex(O),F.uAmbientColor.value.setHex(n),F.uShininess.value=D,x.parameters.opacity&&(F.uOpacity.value=x.parameters.opacity),
s=new THREE.ShaderMaterial({fragmentShader:K.fragmentShader,vertexShader:K.vertexShader,uniforms:F,lights:!0,fog:!0})):s=new THREE[x.type](x.parameters);s.name=I;y.materials[I]=s}for(I in A.materials)if(x=A.materials[I],x.parameters.materials){B=[];for(u=0;u<x.parameters.materials.length;u++)B.push(y.materials[x.parameters.materials[u]]);y.materials[I].materials=B}e();y.cameras&&A.defaults.camera&&(y.currentCamera=y.cameras[A.defaults.camera]);y.fogs&&A.defaults.fog&&(y.scene.fog=y.fogs[A.defaults.fog]);
l.callbackSync(y);k()}};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b){var c=new THREE.ImageLoader(this.manager);c.setCrossOrigin(this.crossOrigin);c.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)})},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.Material=function(){this.id=THREE.MaterialIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;
a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=
this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;
a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.metal=!1;this.perPixel=!0;this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;
this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.perPixel=this.perPixel;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a};THREE.ParticleSystemMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.ParticleSystemMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleSystemMaterial.prototype.clone=function(){var a=new THREE.ParticleSystemMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=THREE.ParticleSystemMaterial;THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.vertexShader=this.fragmentShader="void main() {}";this.uniforms={};this.defines={};this.attributes=null;this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName="position";this.setValues(a)};
THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.uvOffset=new THREE.Vector2(0,0);this.uvScale=new THREE.Vector2(1,1);this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.uvOffset.copy(this.uvOffset);a.uvScale.copy(this.uvScale);a.fog=this.fog;return a};THREE.SpriteCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(){};this.setValues(a)};THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteCanvasMaterial.prototype.clone=function(){var a=new THREE.SpriteCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleCanvasMaterial=THREE.SpriteCanvasMaterial;THREE.Texture=function(a,b,c,d,e,f,h,g,i){this.id=THREE.TextureIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.image=a;this.mipmaps=[];this.mapping=void 0!==b?b:new THREE.UVMapping;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==i?i:1;this.format=void 0!==h?h:THREE.RGBAFormat;this.type=void 0!==g?g:THREE.UnsignedByteType;
this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.needsUpdate=!1;this.onUpdate=null};
THREE.Texture.prototype={constructor:THREE.Texture,clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=
this.unpackAlignment;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CompressedTexture=function(a,b,c,d,e,f,h,g,i,k,m){THREE.Texture.call(this,null,f,h,g,i,k,d,e,m);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,h,g,i,k,m){THREE.Texture.call(this,null,f,h,g,i,k,d,e,m);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.ParticleSystemMaterial({color:16777215*Math.random()});this.frustumCulled=this.sortParticles=!1};THREE.ParticleSystem.prototype=Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone=function(a){void 0===a&&(a=new THREE.ParticleSystem(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets=function(){if(0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};THREE.Mesh.prototype.clone=function(a){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.update=function(a,b){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiplyMatrices(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.skinMatrix,b)};THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var d,e,f;if(this.geometry&&void 0!==this.geometry.bones){for(a=0;a<this.geometry.bones.length;a++)c=this.geometry.bones[a],d=c.pos,e=c.rotq,f=c.scl,b=this.addBone(),b.name=c.name,b.position.set(d[0],d[1],d[2]),b.quaternion.set(e[0],e[1],e[2],e[3]),void 0!==f?b.scale.set(f[0],f[1],f[2]):b.scale.set(1,1,1);for(a=0;a<this.bones.length;a++)c=
this.geometry.bones[a],b=this.bones[a],-1===c.parent?this.add(b):this.bones[c.parent].add(b);a=this.bones.length;this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<a?64:64<a?32:16<a?16:8,this.boneMatrices=new Float32Array(4*this.boneTextureWidth*this.boneTextureHeight),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=
THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*a);this.pose()}};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.addBone=function(a){void 0===a&&(a=new THREE.Bone(this));this.bones.push(a);return a};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(){var a=new THREE.Matrix4;return function(b){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||b)this.parent?this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1;for(var b=0,c=this.children.length;b<c;b++){var d=this.children[b];d instanceof THREE.Bone?d.update(this.identityMatrix,!1):d.updateMatrixWorld(!0)}if(void 0==this.boneInverses){this.boneInverses=
[];b=0;for(c=this.bones.length;b<c;b++)d=new THREE.Matrix4,d.getInverse(this.bones[b].skinMatrix),this.boneInverses.push(d)}b=0;for(c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b].skinMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();THREE.SkinnedMesh.prototype.pose=function(){this.updateMatrixWorld(!0);this.normalizeSkinWeights()};
THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};
THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var h=a.morphTargets[e].name.match(d);if(h&&1<h.length){h=h[1];c[h]||(c[h]={start:Infinity,end:-Infinity});var g=c[h];e<g.start&&(g.start=e);e>g.end&&(g.end=e);b||(b=h)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=1E3*((c.end-c.start)/b),this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);for(var b=Math.abs(b),c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();THREE.LOD.prototype.clone=function(){};THREE.Sprite=function(a){THREE.Object3D.call(this);this.material=void 0!==a?a:new THREE.SpriteMaterial};THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.updateMatrix=function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0};THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Particle=THREE.Sprite;THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.autoUpdate=!0;this.matrixAutoUpdate=!1;this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)){this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1);if(a.shadowCascadeArray)for(b=0;b<a.shadowCascadeArray.length;b++)this.__removeObject(a.shadowCascadeArray[b])}else a instanceof THREE.Camera||(this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1));for(b=0;b<a.children.length;b++)this.__removeObject(a.children[b])};
THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.CanvasRenderer=function(a){function b(a,b,c){for(var d=0,e=z.length;d<e;d++){var f=z[d];Ka.copy(f.color);if(f instanceof THREE.DirectionalLight){var h=ta.setFromMatrixPosition(f.matrixWorld).normalize(),g=b.dot(h);0>=g||(g*=f.intensity,c.add(Ka.multiplyScalar(g)))}else f instanceof THREE.PointLight&&(h=ta.setFromMatrixPosition(f.matrixWorld),g=b.dot(ta.subVectors(h,a).normalize()),0>=g||(g*=0==f.distance?1:1-Math.min(a.distanceTo(h)/f.distance,1),0!=g&&(g*=f.intensity,c.add(Ka.multiplyScalar(g)))))}}
function c(a,b,c,d){m(b);l(c);p(d);t(a.getStyle());D.stroke();Ea.expandByScalar(2*b)}function d(a){s(a.getStyle());D.fill()}function e(a,b,c,e,f,h,g,j,i,k,m,l,n){if(!(n instanceof THREE.DataTexture||void 0===n.image||0===n.image.width)){if(!0===n.needsUpdate){var p=n.wrapS===THREE.RepeatWrapping,q=n.wrapT===THREE.RepeatWrapping;Ga[n.id]=D.createPattern(n.image,!0===p&&!0===q?"repeat":!0===p&&!1===q?"repeat-x":!1===p&&!0===q?"repeat-y":"no-repeat");n.needsUpdate=!1}void 0===Ga[n.id]?s("rgba(0,0,0,1)"):
s(Ga[n.id]);var p=n.offset.x/n.repeat.x,q=n.offset.y/n.repeat.y,t=n.image.width*n.repeat.x,r=n.image.height*n.repeat.y,g=(g+p)*t,j=(1-j+q)*r,c=c-a,e=e-b,f=f-a,h=h-b,i=(i+p)*t-g,k=(1-k+q)*r-j,m=(m+p)*t-g,l=(1-l+q)*r-j,p=i*l-m*k;0===p?(void 0===ka[n.id]&&(b=document.createElement("canvas"),b.width=n.image.width,b.height=n.image.height,b=b.getContext("2d"),b.drawImage(n.image,0,0),ka[n.id]=b.getImageData(0,0,n.image.width,n.image.height).data),b=ka[n.id],g=4*(Math.floor(g)+Math.floor(j)*n.image.width),
V.setRGB(b[g]/255,b[g+1]/255,b[g+2]/255),d(V)):(p=1/p,n=(l*c-k*f)*p,k=(l*e-k*h)*p,c=(i*f-m*c)*p,e=(i*h-m*e)*p,a=a-n*g-c*j,g=b-k*g-e*j,D.save(),D.transform(n,k,c,e,a,g),D.fill(),D.restore())}}function f(a,b,c,d,e,f,h,g,j,i,k,m,n){var l,p;l=n.width-1;p=n.height-1;h*=l;g*=p;c-=a;d-=b;e-=a;f-=b;j=j*l-h;i=i*p-g;k=k*l-h;m=m*p-g;p=1/(j*m-k*i);l=(m*c-i*e)*p;i=(m*d-i*f)*p;c=(j*e-k*c)*p;d=(j*f-k*d)*p;a=a-l*h-c*g;b=b-i*h-d*g;D.save();D.transform(l,i,c,d,a,b);D.clip();D.drawImage(n,0,0);D.restore()}function h(a,
b,c,d){ua[0]=255*a.r|0;ua[1]=255*a.g|0;ua[2]=255*a.b|0;ua[4]=255*b.r|0;ua[5]=255*b.g|0;ua[6]=255*b.b|0;ua[8]=255*c.r|0;ua[9]=255*c.g|0;ua[10]=255*c.b|0;ua[12]=255*d.r|0;ua[13]=255*d.g|0;ua[14]=255*d.b|0;j.putImageData(Oa,0,0);Fa.drawImage(Pa,0,0);return La}function g(a,b,c){var d=b.x-a.x,e=b.y-a.y,f=d*d+e*e;0!==f&&(c/=Math.sqrt(f),d*=c,e*=c,b.x+=d,b.y+=e,a.x-=d,a.y-=e)}function i(a){x!==a&&(x=D.globalAlpha=a)}function k(a){I!==a&&(a===THREE.NormalBlending?D.globalCompositeOperation="source-over":
a===THREE.AdditiveBlending?D.globalCompositeOperation="lighter":a===THREE.SubtractiveBlending&&(D.globalCompositeOperation="darker"),I=a)}function m(a){J!==a&&(J=D.lineWidth=a)}function l(a){ca!==a&&(ca=D.lineCap=a)}function p(a){na!==a&&(na=D.lineJoin=a)}function t(a){B!==a&&(B=D.strokeStyle=a)}function s(a){M!==a&&(M=D.fillStyle=a)}function q(a,b){if(pa!==a||C!==b)D.setLineDash([a,b]),pa=a,C=b}console.log("THREE.CanvasRenderer",THREE.REVISION);var n=THREE.Math.smoothstep,a=a||{},u=this,r,v,z,G=
new THREE.Projector,w=void 0!==a.canvas?a.canvas:document.createElement("canvas"),y=w.width,E=w.height,A=Math.floor(y/2),K=Math.floor(E/2),D=w.getContext("2d"),F=new THREE.Color(0),O=0,x=1,I=0,B=null,M=null,J=null,ca=null,na=null,pa=null,C=0,Q,R,L,da;new THREE.RenderableVertex;new THREE.RenderableVertex;var za,Ba,ba,Aa,$,ea,V=new THREE.Color,P=new THREE.Color,Y=new THREE.Color,U=new THREE.Color,ja=new THREE.Color,sa=new THREE.Color,ha=new THREE.Color,Ka=new THREE.Color,Ga={},ka={},Da,Ua,Qa,wa,bb,
cb,Ma,fb,sb,pb,va=new THREE.Box2,la=new THREE.Box2,Ea=new THREE.Box2,gb=new THREE.Color,ra=new THREE.Color,fa=new THREE.Color,ta=new THREE.Vector3,Pa,j,Oa,ua,La,Fa,Ra=16;Pa=document.createElement("canvas");Pa.width=Pa.height=2;j=Pa.getContext("2d");j.fillStyle="rgba(0,0,0,1)";j.fillRect(0,0,2,2);Oa=j.getImageData(0,0,2,2);ua=Oa.data;La=document.createElement("canvas");La.width=La.height=Ra;Fa=La.getContext("2d");Fa.translate(-Ra/2,-Ra/2);Fa.scale(Ra,Ra);Ra--;void 0===D.setLineDash&&(D.setLineDash=
void 0!==D.mozDash?function(a){D.mozDash=null!==a[0]?a:null}:function(){});this.domElement=w;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.supportsVertexTextures=function(){};this.setFaceCulling=function(){};this.setSize=function(a,b,c){y=a*this.devicePixelRatio;E=b*this.devicePixelRatio;A=Math.floor(y/2);K=Math.floor(E/2);
w.width=y;w.height=E;1!==this.devicePixelRatio&&!1!==c&&(w.style.width=a+"px",w.style.height=b+"px");va.set(new THREE.Vector2(-A,-K),new THREE.Vector2(A,K));la.set(new THREE.Vector2(-A,-K),new THREE.Vector2(A,K));x=1;I=0;na=ca=J=M=B=null};this.setClearColor=function(a,b){F.set(a);O=void 0!==b?b:1;la.set(new THREE.Vector2(-A,-K),new THREE.Vector2(A,K))};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,
b)};this.getMaxAnisotropy=function(){return 0};this.clear=function(){D.setTransform(1,0,0,-1,A,K);!1===la.empty()&&(la.intersect(va),la.expandByScalar(2),1>O&&D.clearRect(la.min.x|0,la.min.y|0,la.max.x-la.min.x|0,la.max.y-la.min.y|0),0<O&&(k(THREE.NormalBlending),i(1),s("rgba("+Math.floor(255*F.r)+","+Math.floor(255*F.g)+","+Math.floor(255*F.b)+","+O+")"),D.fillRect(la.min.x|0,la.min.y|0,la.max.x-la.min.x|0,la.max.y-la.min.y|0)),la.makeEmpty())};this.clearColor=function(){};this.clearDepth=function(){};
this.clearStencil=function(){};this.render=function(a,j){if(!1===j instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");else{!0===this.autoClear&&this.clear();D.setTransform(1,0,0,-1,A,K);u.info.render.vertices=0;u.info.render.faces=0;r=G.projectScene(a,j,this.sortObjects,this.sortElements);v=r.elements;z=r.lights;Q=j;gb.setRGB(0,0,0);ra.setRGB(0,0,0);fa.setRGB(0,0,0);for(var y=0,F=z.length;y<F;y++){var B=z[y],E=B.color;B instanceof THREE.AmbientLight?
gb.add(E):B instanceof THREE.DirectionalLight?ra.add(E):B instanceof THREE.PointLight&&fa.add(E)}y=0;for(F=v.length;y<F;y++){var x=v[y],w=x.material;if(!(void 0===w||!1===w.visible)){Ea.makeEmpty();if(x instanceof THREE.RenderableSprite){R=x;R.x*=A;R.y*=K;var B=R,E=x,I=w;i(I.opacity);k(I.blending);var x=E.scale.x*A,w=E.scale.y*K,O=0.5*Math.sqrt(x*x+w*w);Ea.min.set(B.x-O,B.y-O);Ea.max.set(B.x+O,B.y+O);!1===va.isIntersectionBox(Ea)?Ea.makeEmpty():I instanceof THREE.SpriteMaterial||I instanceof THREE.ParticleSystemMaterial?
(null!==I.map?(E=I.map.image,D.save(),D.translate(B.x,B.y),D.rotate(I.rotation),D.scale(x,-w),D.drawImage(E,0,0,E.width,E.height,-0.5,-0.5,1,1)):(s(I.color.getStyle()),D.save(),D.translate(B.x,B.y),D.rotate(I.rotation),D.scale(x,-w),D.fillRect(-0.5,-0.5,1,1)),D.restore()):I instanceof THREE.SpriteCanvasMaterial&&(t(I.color.getStyle()),s(I.color.getStyle()),D.save(),D.translate(B.x,B.y),D.rotate(-E.rotation),D.scale(x,w),I.program(D),D.restore())}else if(x instanceof THREE.RenderableLine){if(R=x.v1,
L=x.v2,R.positionScreen.x*=A,R.positionScreen.y*=K,L.positionScreen.x*=A,L.positionScreen.y*=K,Ea.setFromPoints([R.positionScreen,L.positionScreen]),!0===va.isIntersectionBox(Ea))if(B=R,E=L,I=x,x=w,i(x.opacity),k(x.blending),D.beginPath(),D.moveTo(B.positionScreen.x,B.positionScreen.y),D.lineTo(E.positionScreen.x,E.positionScreen.y),x instanceof THREE.LineBasicMaterial){m(x.linewidth);l(x.linecap);p(x.linejoin);if(x.vertexColors!==THREE.VertexColors)t(x.color.getStyle());else if(w=I.vertexColors[0].getStyle(),
I=I.vertexColors[1].getStyle(),w===I)t(w);else{try{var C=D.createLinearGradient(B.positionScreen.x,B.positionScreen.y,E.positionScreen.x,E.positionScreen.y);C.addColorStop(0,w);C.addColorStop(1,I)}catch(J){C=w}t(C)}D.stroke();Ea.expandByScalar(2*x.linewidth)}else x instanceof THREE.LineDashedMaterial&&(m(x.linewidth),l(x.linecap),p(x.linejoin),t(x.color.getStyle()),q(x.dashSize,x.gapSize),D.stroke(),Ea.expandByScalar(2*x.linewidth),q(null,null))}else if(x instanceof THREE.RenderableFace3){R=x.v1;
L=x.v2;da=x.v3;if(-1>R.positionScreen.z||1<R.positionScreen.z)continue;if(-1>L.positionScreen.z||1<L.positionScreen.z)continue;if(-1>da.positionScreen.z||1<da.positionScreen.z)continue;R.positionScreen.x*=A;R.positionScreen.y*=K;L.positionScreen.x*=A;L.positionScreen.y*=K;da.positionScreen.x*=A;da.positionScreen.y*=K;0<w.overdraw&&(g(R.positionScreen,L.positionScreen,w.overdraw),g(L.positionScreen,da.positionScreen,w.overdraw),g(da.positionScreen,R.positionScreen,w.overdraw));Ea.setFromPoints([R.positionScreen,
L.positionScreen,da.positionScreen]);if(!0===va.isIntersectionBox(Ea)){B=R;E=L;I=da;u.info.render.vertices+=3;u.info.render.faces++;i(w.opacity);k(w.blending);za=B.positionScreen.x;Ba=B.positionScreen.y;ba=E.positionScreen.x;Aa=E.positionScreen.y;$=I.positionScreen.x;ea=I.positionScreen.y;var O=za,M=Ba,ca=ba,ka=Aa,na=$,pa=ea;D.beginPath();D.moveTo(O,M);D.lineTo(ca,ka);D.lineTo(na,pa);D.closePath();(w instanceof THREE.MeshLambertMaterial||w instanceof THREE.MeshPhongMaterial)&&null===w.map?(sa.copy(w.color),
ha.copy(w.emissive),w.vertexColors===THREE.FaceColors&&sa.multiply(x.color),!1===w.wireframe&&w.shading===THREE.SmoothShading&&3===x.vertexNormalsLength?(P.copy(gb),Y.copy(gb),U.copy(gb),b(x.v1.positionWorld,x.vertexNormalsModel[0],P),b(x.v2.positionWorld,x.vertexNormalsModel[1],Y),b(x.v3.positionWorld,x.vertexNormalsModel[2],U),P.multiply(sa).add(ha),Y.multiply(sa).add(ha),U.multiply(sa).add(ha),ja.addColors(Y,U).multiplyScalar(0.5),Qa=h(P,Y,U,ja),f(za,Ba,ba,Aa,$,ea,0,0,1,0,0,1,Qa)):(V.copy(gb),
b(x.centroidModel,x.normalModel,V),V.multiply(sa).add(ha),!0===w.wireframe?c(V,w.wireframeLinewidth,w.wireframeLinecap,w.wireframeLinejoin):d(V))):w instanceof THREE.MeshBasicMaterial||w instanceof THREE.MeshLambertMaterial||w instanceof THREE.MeshPhongMaterial?null!==w.map?w.map.mapping instanceof THREE.UVMapping&&(wa=x.uvs[0],e(za,Ba,ba,Aa,$,ea,wa[0].x,wa[0].y,wa[1].x,wa[1].y,wa[2].x,wa[2].y,w.map)):null!==w.envMap?w.envMap.mapping instanceof THREE.SphericalReflectionMapping&&(ta.copy(x.vertexNormalsModelView[0]),
bb=0.5*ta.x+0.5,cb=0.5*ta.y+0.5,ta.copy(x.vertexNormalsModelView[1]),Ma=0.5*ta.x+0.5,fb=0.5*ta.y+0.5,ta.copy(x.vertexNormalsModelView[2]),sb=0.5*ta.x+0.5,pb=0.5*ta.y+0.5,e(za,Ba,ba,Aa,$,ea,bb,cb,Ma,fb,sb,pb,w.envMap)):(V.copy(w.color),w.vertexColors===THREE.FaceColors&&V.multiply(x.color),!0===w.wireframe?c(V,w.wireframeLinewidth,w.wireframeLinecap,w.wireframeLinejoin):d(V)):w instanceof THREE.MeshDepthMaterial?(Da=Q.near,Ua=Q.far,P.r=P.g=P.b=1-n(B.positionScreen.z*B.positionScreen.w,Da,Ua),Y.r=Y.g=
Y.b=1-n(E.positionScreen.z*E.positionScreen.w,Da,Ua),U.r=U.g=U.b=1-n(I.positionScreen.z*I.positionScreen.w,Da,Ua),ja.addColors(Y,U).multiplyScalar(0.5),Qa=h(P,Y,U,ja),f(za,Ba,ba,Aa,$,ea,0,0,1,0,0,1,Qa)):w instanceof THREE.MeshNormalMaterial&&(B=void 0,w.shading===THREE.FlatShading?(B=x.normalModelView,V.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),!0===w.wireframe?c(V,w.wireframeLinewidth,w.wireframeLinecap,w.wireframeLinejoin):d(V)):w.shading===THREE.SmoothShading&&(B=x.vertexNormalsModelView[0],
P.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),B=x.vertexNormalsModelView[1],Y.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),B=x.vertexNormalsModelView[2],U.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),ja.addColors(Y,U).multiplyScalar(0.5),Qa=h(P,Y,U,ja),f(za,Ba,ba,Aa,$,ea,0,0,1,0,0,1,Qa)))}}la.union(Ea)}}D.setTransform(1,0,0,1,0,0)}}};THREE.ShaderChunk={fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
envmap_pars_fragment:"#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",envmap_fragment:"#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
envmap_pars_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
envmap_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",map_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",map_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",map_fragment:"#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",lights_lambert_pars_vertex:"uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
lights_lambert_vertex:"vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
lights_phong_pars_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
lights_phong_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",
lights_phong_pars_fragment:"uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
lights_phong_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nuniform int boneTextureWidth;\nuniform int boneTextureHeight;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, float( boneTextureWidth ) );\nfloat y = floor( j / float( boneTextureWidth ) );\nfloat dx = 1.0 / float( boneTextureWidth );\nfloat dy = 1.0 / float( boneTextureHeight );\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
skinbase_vertex:"#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
default_vertex:"vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
skinnormal_vertex:"#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",defaultnormal_vertex:"vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",shadowmap_fragment:"#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#if defined( SHADOWMAP_TYPE_PCF )\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\nfloat shadow = 0.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.0 * xPixelOffset;\nfloat dy0 = -1.0 * yPixelOffset;\nfloat dx1 = 1.0 * xPixelOffset;\nfloat dy1 = 1.0 * yPixelOffset;\nmat3 shadowKernel;\nmat3 depthKernel;\ndepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\ndepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\ndepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\ndepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\ndepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\ndepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\ndepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\ndepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\ndepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nvec3 shadowZ = vec3( shadowCoord.z );\nshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\nshadowKernel[0] *= vec3(0.25);\nshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\nshadowKernel[1] *= vec3(0.25);\nshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\nshadowKernel[2] *= vec3(0.25);\nvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\nshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\nshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\nvec4 shadowValues;\nshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\nshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\nshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\nshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\nshadow = dot( shadowValues, vec4( 1.0 ) );\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",alphatest_fragment:"#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",linear_to_gamma_fragment:"#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"};THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",
value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",
value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",
value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,
THREE.ShaderChunk.skinbase_vertex,"#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,
THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,
THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,
THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif",THREE.ShaderChunk.lightmap_fragment,
THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",
value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"vNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,
THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",
value:1}},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvNormal = normalize( normalMatrix * normal );",
THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"},normalmap:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",
value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},uDiffuseColor:{type:"c",value:new THREE.Color(16777215)},uSpecularColor:{type:"c",value:new THREE.Color(1118481)},uAmbientColor:{type:"c",value:new THREE.Color(16777215)},uShininess:{type:"f",
value:30},uOpacity:{type:"f",value:1},useRefract:{type:"i",value:0},uRefractionRatio:{type:"f",value:0.98},uReflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"].join("\n")},
cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:"varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"},
depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"}};THREE.WebGLRenderer=function(a){function b(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var h=1;"v2"===f.type?h=2:"v3"===f.type?h=3:"v4"===f.type?h=4:"c"===f.type&&(h=3);f.size=h;f.array=new Float32Array(c*h);f.buffer=j.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}
function c(a,b){var c=b.geometry,h=a.faces3,g=3*h.length,i=1*h.length,k=3*h.length,h=d(b,a),m=f(h),l=e(h),n=h.vertexColors?h.vertexColors:!1;a.__vertexArray=new Float32Array(3*g);l&&(a.__normalArray=new Float32Array(3*g));c.hasTangents&&(a.__tangentArray=new Float32Array(4*g));n&&(a.__colorArray=new Float32Array(3*g));m&&(0<c.faceVertexUvs.length&&(a.__uvArray=new Float32Array(2*g)),1<c.faceVertexUvs.length&&(a.__uv2Array=new Float32Array(2*g)));b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&
(a.__skinIndexArray=new Float32Array(4*g),a.__skinWeightArray=new Float32Array(4*g));a.__faceArray=new Uint16Array(3*i);a.__lineArray=new Uint16Array(2*k);if(a.numMorphTargets){a.__morphTargetsArrays=[];c=0;for(m=a.numMorphTargets;c<m;c++)a.__morphTargetsArrays.push(new Float32Array(3*g))}if(a.numMorphNormals){a.__morphNormalsArrays=[];c=0;for(m=a.numMorphNormals;c<m;c++)a.__morphNormalsArrays.push(new Float32Array(3*g))}a.__webglFaceCount=3*i;a.__webglLineCount=2*k;if(h.attributes){void 0===a.__webglCustomAttributesList&&
(a.__webglCustomAttributesList=[]);for(var p in h.attributes){var i=h.attributes[p],k={},q;for(q in i)k[q]=i[q];if(!k.__webglInitialized||k.createUniqueBuffers)k.__webglInitialized=!0,c=1,"v2"===k.type?c=2:"v3"===k.type?c=3:"v4"===k.type?c=4:"c"===k.type&&(c=3),k.size=c,k.array=new Float32Array(g*c),k.buffer=j.createBuffer(),k.buffer.belongsToAttribute=p,i.needsUpdate=!0,k.__original=i;a.__webglCustomAttributesList.push(k)}}a.__inittedArrays=!0}function d(a,b){return a.material instanceof THREE.MeshFaceMaterial?
a.material.materials[b.materialIndex]:a.material}function e(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function f(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a instanceof THREE.ShaderMaterial?!0:!1}function h(a){va[a]||(j.enableVertexAttribArray(a),va[a]=!0)}function g(){for(var a in va)va[a]&&(j.disableVertexAttribArray(a),va[a]=
!1)}function i(a,b){return a.z!==b.z?b.z-a.z:a.id-b.id}function k(a,b){return b[0]-a[0]}function m(a,b,c){if(a.length)for(var d=0,e=a.length;d<e;d++)ea=Ba=null,Aa=$=U=Y=ka=Ga=ja=-1,ta=!0,a[d].render(b,c,sb,pb),ea=Ba=null,Aa=$=U=Y=ka=Ga=ja=-1,ta=!0}function l(a,b,c,d,e,f,h,g){var j,i,k,m;b?(i=a.length-1,m=b=-1):(i=0,b=a.length,m=1);for(var l=i;l!==b;l+=m)if(j=a[l],j.render){i=j.object;k=j.buffer;if(g)j=g;else{j=j[c];if(!j)continue;h&&L.setBlending(j.blending,j.blendEquation,j.blendSrc,j.blendDst);
L.setDepthTest(j.depthTest);L.setDepthWrite(j.depthWrite);A(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits)}L.setMaterialFaces(j);k instanceof THREE.BufferGeometry?L.renderBufferDirect(d,e,f,j,k,i):L.renderBuffer(d,e,f,j,k,i)}}function p(a,b,c,d,e,f,h){for(var g,j,i=0,k=a.length;i<k;i++)if(g=a[i],j=g.object,j.visible){if(h)g=h;else{g=g[b];if(!g)continue;f&&L.setBlending(g.blending,g.blendEquation,g.blendSrc,g.blendDst);L.setDepthTest(g.depthTest);L.setDepthWrite(g.depthWrite);A(g.polygonOffset,
g.polygonOffsetFactor,g.polygonOffsetUnits)}L.renderImmediateObject(c,d,e,g,j)}}function t(a,d){var e,f,h,g;if(void 0===a.__webglInit&&(a.__webglInit=!0,a._modelViewMatrix=new THREE.Matrix4,a._normalMatrix=new THREE.Matrix3,void 0!==a.geometry&&void 0===a.geometry.__webglInit&&(a.geometry.__webglInit=!0,a.geometry.addEventListener("dispose",Cb)),f=a.geometry,void 0!==f))if(f instanceof THREE.BufferGeometry){var i,k;for(i in f.attributes)k="index"===i?j.ELEMENT_ARRAY_BUFFER:j.ARRAY_BUFFER,g=f.attributes[i],
void 0===g.numItems&&(g.numItems=g.array.length),g.buffer=j.createBuffer(),j.bindBuffer(k,g.buffer),j.bufferData(k,g.array,j.STATIC_DRAW)}else if(a instanceof THREE.Mesh){h=a.material;if(void 0===f.geometryGroups){i=f;var m,l,n;k={};var p=i.morphTargets.length,q=i.morphNormals.length,t=h instanceof THREE.MeshFaceMaterial;i.geometryGroups={};h=0;for(m=i.faces.length;h<m;h++)l=i.faces[h],l=t?l.materialIndex:0,void 0===k[l]&&(k[l]={hash:l,counter:0}),n=k[l].hash+"_"+k[l].counter,void 0===i.geometryGroups[n]&&
(i.geometryGroups[n]={faces3:[],materialIndex:l,vertices:0,numMorphTargets:p,numMorphNormals:q}),65535<i.geometryGroups[n].vertices+3&&(k[l].counter+=1,n=k[l].hash+"_"+k[l].counter,void 0===i.geometryGroups[n]&&(i.geometryGroups[n]={faces3:[],materialIndex:l,vertices:0,numMorphTargets:p,numMorphNormals:q})),i.geometryGroups[n].faces3.push(h),i.geometryGroups[n].vertices+=3;i.geometryGroupsList=[];for(g in i.geometryGroups)i.geometryGroups[g].id=V++,i.geometryGroupsList.push(i.geometryGroups[g])}for(e in f.geometryGroups)if(g=
f.geometryGroups[e],!g.__webglVertexBuffer){i=g;i.__webglVertexBuffer=j.createBuffer();i.__webglNormalBuffer=j.createBuffer();i.__webglTangentBuffer=j.createBuffer();i.__webglColorBuffer=j.createBuffer();i.__webglUVBuffer=j.createBuffer();i.__webglUV2Buffer=j.createBuffer();i.__webglSkinIndicesBuffer=j.createBuffer();i.__webglSkinWeightsBuffer=j.createBuffer();i.__webglFaceBuffer=j.createBuffer();i.__webglLineBuffer=j.createBuffer();p=k=void 0;if(i.numMorphTargets){i.__webglMorphTargetsBuffers=[];
k=0;for(p=i.numMorphTargets;k<p;k++)i.__webglMorphTargetsBuffers.push(j.createBuffer())}if(i.numMorphNormals){i.__webglMorphNormalsBuffers=[];k=0;for(p=i.numMorphNormals;k<p;k++)i.__webglMorphNormalsBuffers.push(j.createBuffer())}L.info.memory.geometries++;c(g,a);f.verticesNeedUpdate=!0;f.morphTargetsNeedUpdate=!0;f.elementsNeedUpdate=!0;f.uvsNeedUpdate=!0;f.normalsNeedUpdate=!0;f.tangentsNeedUpdate=!0;f.colorsNeedUpdate=!0}}else a instanceof THREE.Line?f.__webglVertexBuffer||(g=f,g.__webglVertexBuffer=
j.createBuffer(),g.__webglColorBuffer=j.createBuffer(),g.__webglLineDistanceBuffer=j.createBuffer(),L.info.memory.geometries++,g=f,i=g.vertices.length,g.__vertexArray=new Float32Array(3*i),g.__colorArray=new Float32Array(3*i),g.__lineDistanceArray=new Float32Array(1*i),g.__webglLineCount=i,b(g,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0,f.lineDistancesNeedUpdate=!0):a instanceof THREE.ParticleSystem&&!f.__webglVertexBuffer&&(g=f,g.__webglVertexBuffer=j.createBuffer(),g.__webglColorBuffer=j.createBuffer(),
L.info.memory.geometries++,g=f,i=g.vertices.length,g.__vertexArray=new Float32Array(3*i),g.__colorArray=new Float32Array(3*i),g.__sortArray=[],g.__webglParticleCount=i,b(g,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0);if(void 0===a.__webglActive){if(a instanceof THREE.Mesh)if(f=a.geometry,f instanceof THREE.BufferGeometry)s(d.__webglObjects,f,a);else{if(f instanceof THREE.Geometry)for(e in f.geometryGroups)g=f.geometryGroups[e],s(d.__webglObjects,g,a)}else a instanceof THREE.Line||a instanceof
THREE.ParticleSystem?(f=a.geometry,s(d.__webglObjects,f,a)):a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback?d.__webglObjectsImmediate.push({id:null,object:a,opaque:null,transparent:null,z:0}):a instanceof THREE.Sprite?d.__webglSprites.push(a):a instanceof THREE.LensFlare&&d.__webglFlares.push(a);a.__webglActive=!0}}function s(a,b,c){a.push({id:null,buffer:b,object:c,opaque:null,transparent:null,z:0})}function q(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;
return!1}function n(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function u(a,b){a instanceof THREE.Mesh||a instanceof THREE.ParticleSystem||a instanceof THREE.Line?r(b.__webglObjects,a):a instanceof THREE.Sprite?v(b.__webglSprites,a):a instanceof THREE.LensFlare?v(b.__webglFlares,a):(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)&&r(b.__webglObjectsImmediate,a);delete a.__webglActive}function r(a,b){for(var c=a.length-1;0<=c;c--)a[c].object===b&&a.splice(c,1)}
function v(a,b){for(var c=a.length-1;0<=c;c--)a[c]===b&&a.splice(c,1)}function z(a,b,c,d,e){P=0;d.needsUpdate&&(d.program&&Gb(d),L.initMaterial(d,b,c,e),d.needsUpdate=!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(L.maxMorphTargets));var f=!1,h=d.program,g=h.uniforms,i=d.uniforms;h!==Ba&&(j.useProgram(h),Ba=h,f=!0);d.id!==Aa&&(Aa=d.id,f=!0);if(f||a!==ea)j.uniformMatrix4fv(g.projectionMatrix,!1,a.projectionMatrix.elements),a!==ea&&(ea=a);if(d.skinning)if(yb&&
e.useVertexTexture){if(null!==g.boneTexture){var k=G();j.uniform1i(g.boneTexture,k);L.setTexture(e.boneTexture,k)}null!==g.boneTextureWidth&&j.uniform1i(g.boneTextureWidth,e.boneTextureWidth);null!==g.boneTextureHeight&&j.uniform1i(g.boneTextureHeight,e.boneTextureHeight)}else null!==g.boneGlobalMatrices&&j.uniformMatrix4fv(g.boneGlobalMatrices,!1,e.boneMatrices);if(f){c&&d.fog&&(i.fogColor.value=c.color,c instanceof THREE.Fog?(i.fogNear.value=c.near,i.fogFar.value=c.far):c instanceof THREE.FogExp2&&
(i.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(ta){for(var m,l=k=0,n=0,p,q,t,r=Pa,s=r.directional.colors,u=r.directional.positions,v=r.point.colors,z=r.point.positions,x=r.point.distances,A=r.spot.colors,E=r.spot.positions,D=r.spot.distances,K=r.spot.directions,O=r.spot.anglesCos,C=r.spot.exponents,J=r.hemi.skyColors,V=r.hemi.groundColors,M=r.hemi.positions,Q=0,U=0,Y=0,za=0,$=0,dc=0,X=0,W=0,R=m=0,c=t=R=0,f=b.length;c<f;c++)m=
b[c],m.onlyShadow||(p=m.color,q=m.intensity,t=m.distance,m instanceof THREE.AmbientLight?m.visible&&(L.gammaInput?(k+=p.r*p.r,l+=p.g*p.g,n+=p.b*p.b):(k+=p.r,l+=p.g,n+=p.b)):m instanceof THREE.DirectionalLight?($+=1,m.visible&&(fa.setFromMatrixPosition(m.matrixWorld),ra.setFromMatrixPosition(m.target.matrixWorld),fa.sub(ra),fa.normalize(),0===fa.x&&0===fa.y&&0===fa.z||(m=3*Q,u[m]=fa.x,u[m+1]=fa.y,u[m+2]=fa.z,L.gammaInput?w(s,m,p,q*q):y(s,m,p,q),Q+=1))):m instanceof THREE.PointLight?(dc+=1,m.visible&&
(R=3*U,L.gammaInput?w(v,R,p,q*q):y(v,R,p,q),ra.setFromMatrixPosition(m.matrixWorld),z[R]=ra.x,z[R+1]=ra.y,z[R+2]=ra.z,x[U]=t,U+=1)):m instanceof THREE.SpotLight?(X+=1,m.visible&&(R=3*Y,L.gammaInput?w(A,R,p,q*q):y(A,R,p,q),ra.setFromMatrixPosition(m.matrixWorld),E[R]=ra.x,E[R+1]=ra.y,E[R+2]=ra.z,D[Y]=t,fa.copy(ra),ra.setFromMatrixPosition(m.target.matrixWorld),fa.sub(ra),fa.normalize(),K[R]=fa.x,K[R+1]=fa.y,K[R+2]=fa.z,O[Y]=Math.cos(m.angle),C[Y]=m.exponent,Y+=1)):m instanceof THREE.HemisphereLight&&
(W+=1,m.visible&&(fa.setFromMatrixPosition(m.matrixWorld),fa.normalize(),0===fa.x&&0===fa.y&&0===fa.z||(t=3*za,M[t]=fa.x,M[t+1]=fa.y,M[t+2]=fa.z,p=m.color,m=m.groundColor,L.gammaInput?(q*=q,w(J,t,p,q),w(V,t,m,q)):(y(J,t,p,q),y(V,t,m,q)),za+=1))));c=3*Q;for(f=Math.max(s.length,3*$);c<f;c++)s[c]=0;c=3*U;for(f=Math.max(v.length,3*dc);c<f;c++)v[c]=0;c=3*Y;for(f=Math.max(A.length,3*X);c<f;c++)A[c]=0;c=3*za;for(f=Math.max(J.length,3*W);c<f;c++)J[c]=0;c=3*za;for(f=Math.max(V.length,3*W);c<f;c++)V[c]=0;r.directional.length=
Q;r.point.length=U;r.spot.length=Y;r.hemi.length=za;r.ambient[0]=k;r.ambient[1]=l;r.ambient[2]=n;ta=!1}c=Pa;i.ambientLightColor.value=c.ambient;i.directionalLightColor.value=c.directional.colors;i.directionalLightDirection.value=c.directional.positions;i.pointLightColor.value=c.point.colors;i.pointLightPosition.value=c.point.positions;i.pointLightDistance.value=c.point.distances;i.spotLightColor.value=c.spot.colors;i.spotLightPosition.value=c.spot.positions;i.spotLightDistance.value=c.spot.distances;
i.spotLightDirection.value=c.spot.directions;i.spotLightAngleCos.value=c.spot.anglesCos;i.spotLightExponent.value=c.spot.exponents;i.hemisphereLightSkyColor.value=c.hemi.skyColors;i.hemisphereLightGroundColor.value=c.hemi.groundColors;i.hemisphereLightDirection.value=c.hemi.positions}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){i.opacity.value=d.opacity;L.gammaInput?i.diffuse.value.copyGammaToLinear(d.color):i.diffuse.value=
d.color;i.map.value=d.map;i.lightMap.value=d.lightMap;i.specularMap.value=d.specularMap;d.bumpMap&&(i.bumpMap.value=d.bumpMap,i.bumpScale.value=d.bumpScale);d.normalMap&&(i.normalMap.value=d.normalMap,i.normalScale.value.copy(d.normalScale));var ba;d.map?ba=d.map:d.specularMap?ba=d.specularMap:d.normalMap?ba=d.normalMap:d.bumpMap&&(ba=d.bumpMap);void 0!==ba&&(c=ba.offset,ba=ba.repeat,i.offsetRepeat.value.set(c.x,c.y,ba.x,ba.y));i.envMap.value=d.envMap;i.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?
1:-1;i.reflectivity.value=d.reflectivity;i.refractionRatio.value=d.refractionRatio;i.combine.value=d.combine;i.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity,i.dashSize.value=d.dashSize,i.totalSize.value=d.dashSize+d.gapSize,i.scale.value=d.scale):d instanceof THREE.ParticleSystemMaterial?
(i.psColor.value=d.color,i.opacity.value=d.opacity,i.size.value=d.size,i.scale.value=B.height/2,i.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(i.shininess.value=d.shininess,L.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive),i.specular.value.copyGammaToLinear(d.specular)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive,i.specular.value=d.specular),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?
(L.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(i.mNear.value=a.near,i.mFar.value=a.far,i.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(i.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&i.shadowMatrix){c=ba=0;for(f=b.length;c<f;c++)if(k=b[c],k.castShadow&&(k instanceof
THREE.SpotLight||k instanceof THREE.DirectionalLight&&!k.shadowCascade))i.shadowMap.value[ba]=k.shadowMap,i.shadowMapSize.value[ba]=k.shadowMapSize,i.shadowMatrix.value[ba]=k.shadowMatrix,i.shadowDarkness.value[ba]=k.shadowDarkness,i.shadowBias.value[ba]=k.shadowBias,ba++}b=d.uniformsList;i=0;for(ba=b.length;i<ba;i++)if(f=h.uniforms[b[i][1]])if(c=b[i][0],l=c.type,k=c.value,"i"===l)j.uniform1i(f,k);else if("f"===l)j.uniform1f(f,k);else if("v2"===l)j.uniform2f(f,k.x,k.y);else if("v3"===l)j.uniform3f(f,
k.x,k.y,k.z);else if("v4"===l)j.uniform4f(f,k.x,k.y,k.z,k.w);else if("c"===l)j.uniform3f(f,k.r,k.g,k.b);else if("iv1"===l)j.uniform1iv(f,k);else if("iv"===l)j.uniform3iv(f,k);else if("fv1"===l)j.uniform1fv(f,k);else if("fv"===l)j.uniform3fv(f,k);else if("v2v"===l){void 0===c._array&&(c._array=new Float32Array(2*k.length));l=0;for(n=k.length;l<n;l++)r=2*l,c._array[r]=k[l].x,c._array[r+1]=k[l].y;j.uniform2fv(f,c._array)}else if("v3v"===l){void 0===c._array&&(c._array=new Float32Array(3*k.length));l=
0;for(n=k.length;l<n;l++)r=3*l,c._array[r]=k[l].x,c._array[r+1]=k[l].y,c._array[r+2]=k[l].z;j.uniform3fv(f,c._array)}else if("v4v"===l){void 0===c._array&&(c._array=new Float32Array(4*k.length));l=0;for(n=k.length;l<n;l++)r=4*l,c._array[r]=k[l].x,c._array[r+1]=k[l].y,c._array[r+2]=k[l].z,c._array[r+3]=k[l].w;j.uniform4fv(f,c._array)}else if("m4"===l)void 0===c._array&&(c._array=new Float32Array(16)),k.flattenToArray(c._array),j.uniformMatrix4fv(f,!1,c._array);else if("m4v"===l){void 0===c._array&&
(c._array=new Float32Array(16*k.length));l=0;for(n=k.length;l<n;l++)k[l].flattenToArrayOffset(c._array,16*l);j.uniformMatrix4fv(f,!1,c._array)}else if("t"===l){if(r=k,k=G(),j.uniform1i(f,k),r)if(r.image instanceof Array&&6===r.image.length){if(c=r,f=k,6===c.image.length)if(c.needsUpdate){c.image.__webglTextureCube||(c.addEventListener("dispose",Db),c.image.__webglTextureCube=j.createTexture(),L.info.memory.textures++);j.activeTexture(j.TEXTURE0+f);j.bindTexture(j.TEXTURE_CUBE_MAP,c.image.__webglTextureCube);
j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,c.flipY);f=c instanceof THREE.CompressedTexture;k=[];for(l=0;6>l;l++)L.autoScaleCubemaps&&!f?(n=k,r=l,s=c.image[l],v=ac,s.width<=v&&s.height<=v||(z=Math.max(s.width,s.height),u=Math.floor(s.width*v/z),v=Math.floor(s.height*v/z),z=document.createElement("canvas"),z.width=u,z.height=v,z.getContext("2d").drawImage(s,0,0,s.width,s.height,0,0,u,v),s=z),n[r]=s):k[l]=c.image[l];l=k[0];n=0===(l.width&l.width-1)&&0===(l.height&l.height-1);r=I(c.format);s=I(c.type);F(j.TEXTURE_CUBE_MAP,
c,n);for(l=0;6>l;l++)if(f){v=k[l].mipmaps;z=0;for(x=v.length;z<x;z++)u=v[z],c.format!==THREE.RGBAFormat?j.compressedTexImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+l,z,r,u.width,u.height,0,u.data):j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+l,z,r,u.width,u.height,0,r,s,u.data)}else j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+l,0,r,r,s,k[l]);c.generateMipmaps&&n&&j.generateMipmap(j.TEXTURE_CUBE_MAP);c.needsUpdate=!1;if(c.onUpdate)c.onUpdate()}else j.activeTexture(j.TEXTURE0+f),j.bindTexture(j.TEXTURE_CUBE_MAP,
c.image.__webglTextureCube)}else r instanceof THREE.WebGLRenderTargetCube?(c=r,j.activeTexture(j.TEXTURE0+k),j.bindTexture(j.TEXTURE_CUBE_MAP,c.__webglTexture)):L.setTexture(r,k)}else if("tv"===l){void 0===c._array&&(c._array=[]);l=0;for(n=c.value.length;l<n;l++)c._array[l]=G();j.uniform1iv(f,c._array);l=0;for(n=c.value.length;l<n;l++)r=c.value[l],k=c._array[l],r&&L.setTexture(r,k)}else console.warn("THREE.WebGLRenderer: Unknown uniform type: "+l);if((d instanceof THREE.ShaderMaterial||d instanceof
THREE.MeshPhongMaterial||d.envMap)&&null!==g.cameraPosition)ra.setFromMatrixPosition(a.matrixWorld),j.uniform3f(g.cameraPosition,ra.x,ra.y,ra.z);(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==g.viewMatrix&&j.uniformMatrix4fv(g.viewMatrix,!1,a.matrixWorldInverse.elements)}j.uniformMatrix4fv(g.modelViewMatrix,!1,e._modelViewMatrix.elements);g.normalMatrix&&j.uniformMatrix3fv(g.normalMatrix,!1,e._normalMatrix.elements);
null!==g.modelMatrix&&j.uniformMatrix4fv(g.modelMatrix,!1,e.matrixWorld.elements);return h}function G(){var a=P;a>=Mb&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+Mb);P+=1;return a}function w(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function y(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function E(a){a!==wa&&(j.lineWidth(a),wa=a)}function A(a,b,c){Da!==a&&(a?j.enable(j.POLYGON_OFFSET_FILL):j.disable(j.POLYGON_OFFSET_FILL),Da=a);
if(a&&(Ua!==b||Qa!==c))j.polygonOffset(b,c),Ua=b,Qa=c}function K(a){for(var a=a.split("\n"),b=0,c=a.length;b<c;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function D(a,b){var c;"fragment"===a?c=j.createShader(j.FRAGMENT_SHADER):"vertex"===a&&(c=j.createShader(j.VERTEX_SHADER));j.shaderSource(c,b);j.compileShader(c);return!j.getShaderParameter(c,j.COMPILE_STATUS)?(console.error(j.getShaderInfoLog(c)),console.error(K(b)),null):c}function F(a,b,c){c?(j.texParameteri(a,j.TEXTURE_WRAP_S,I(b.wrapS)),j.texParameteri(a,
j.TEXTURE_WRAP_T,I(b.wrapT)),j.texParameteri(a,j.TEXTURE_MAG_FILTER,I(b.magFilter)),j.texParameteri(a,j.TEXTURE_MIN_FILTER,I(b.minFilter))):(j.texParameteri(a,j.TEXTURE_WRAP_S,j.CLAMP_TO_EDGE),j.texParameteri(a,j.TEXTURE_WRAP_T,j.CLAMP_TO_EDGE),j.texParameteri(a,j.TEXTURE_MAG_FILTER,x(b.magFilter)),j.texParameteri(a,j.TEXTURE_MIN_FILTER,x(b.minFilter)));if(La&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy))j.texParameterf(a,La.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Nb)),b.__oldAnisotropy=
b.anisotropy}function O(a,b){j.bindRenderbuffer(j.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(j.renderbufferStorage(j.RENDERBUFFER,j.DEPTH_COMPONENT16,b.width,b.height),j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_ATTACHMENT,j.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(j.renderbufferStorage(j.RENDERBUFFER,j.DEPTH_STENCIL,b.width,b.height),j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_STENCIL_ATTACHMENT,j.RENDERBUFFER,a)):j.renderbufferStorage(j.RENDERBUFFER,j.RGBA4,b.width,b.height)}
function x(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?j.NEAREST:j.LINEAR}function I(a){if(a===THREE.RepeatWrapping)return j.REPEAT;if(a===THREE.ClampToEdgeWrapping)return j.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return j.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return j.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return j.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return j.NEAREST_MIPMAP_LINEAR;if(a===
THREE.LinearFilter)return j.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return j.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return j.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return j.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return j.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return j.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return j.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return j.BYTE;if(a===THREE.ShortType)return j.SHORT;if(a===
THREE.UnsignedShortType)return j.UNSIGNED_SHORT;if(a===THREE.IntType)return j.INT;if(a===THREE.UnsignedIntType)return j.UNSIGNED_INT;if(a===THREE.FloatType)return j.FLOAT;if(a===THREE.AlphaFormat)return j.ALPHA;if(a===THREE.RGBFormat)return j.RGB;if(a===THREE.RGBAFormat)return j.RGBA;if(a===THREE.LuminanceFormat)return j.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return j.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return j.FUNC_ADD;if(a===THREE.SubtractEquation)return j.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return j.FUNC_REVERSE_SUBTRACT;
if(a===THREE.ZeroFactor)return j.ZERO;if(a===THREE.OneFactor)return j.ONE;if(a===THREE.SrcColorFactor)return j.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return j.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return j.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return j.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return j.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return j.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return j.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return j.ONE_MINUS_DST_COLOR;
if(a===THREE.SrcAlphaSaturateFactor)return j.SRC_ALPHA_SATURATE;if(void 0!==Fa){if(a===THREE.RGB_S3TC_DXT1_Format)return Fa.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return Fa.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return Fa.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return Fa.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);var a=a||{},B=void 0!==a.canvas?a.canvas:document.createElement("canvas"),
M=void 0!==a.precision?a.precision:"highp",J=void 0!==a.alpha?a.alpha:!1,ca=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,na=void 0!==a.antialias?a.antialias:!1,pa=void 0!==a.stencil?a.stencil:!0,C=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,Q=new THREE.Color(0),R=0;this.domElement=B;this.context=null;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.autoUpdateObjects=this.sortObjects=this.autoClearStencil=
this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.physicallyBasedShading=this.gammaOutput=this.gammaInput=!1;this.shadowMapAutoUpdate=!0;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,
faces:0,points:0}};var L=this,da=[],za=0,Ba=null,ba=null,Aa=-1,$=null,ea=null,V=0,P=0,Y=-1,U=-1,ja=-1,sa=-1,ha=-1,Ka=-1,Ga=-1,ka=-1,Da=null,Ua=null,Qa=null,wa=null,bb=0,cb=0,Ma=B.width,fb=B.height,sb=0,pb=0,va={},la=new THREE.Frustum,Ea=new THREE.Matrix4,gb=new THREE.Matrix4,ra=new THREE.Vector3,fa=new THREE.Vector3,ta=!0,Pa={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],
anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},j,Oa,ua,La,Fa;try{var Ra={alpha:J,premultipliedAlpha:ca,antialias:na,stencil:pa,preserveDrawingBuffer:C};j=B.getContext("webgl",Ra)||B.getContext("experimental-webgl",Ra);if(null===j)throw"Error creating WebGL context.";}catch(Zb){console.error(Zb)}Oa=j.getExtension("OES_texture_float");j.getExtension("OES_texture_float_linear");ua=j.getExtension("OES_standard_derivatives");La=j.getExtension("EXT_texture_filter_anisotropic")||
j.getExtension("MOZ_EXT_texture_filter_anisotropic")||j.getExtension("WEBKIT_EXT_texture_filter_anisotropic");Fa=j.getExtension("WEBGL_compressed_texture_s3tc")||j.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||j.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");Oa||console.log("THREE.WebGLRenderer: Float textures not supported.");ua||console.log("THREE.WebGLRenderer: Standard derivatives not supported.");La||console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");
Fa||console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");void 0===j.getShaderPrecisionFormat&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});j.clearColor(0,0,0,1);j.clearDepth(1);j.clearStencil(0);j.enable(j.DEPTH_TEST);j.depthFunc(j.LEQUAL);j.frontFace(j.CCW);j.cullFace(j.BACK);j.enable(j.CULL_FACE);j.enable(j.BLEND);j.blendEquation(j.FUNC_ADD);j.blendFunc(j.SRC_ALPHA,j.ONE_MINUS_SRC_ALPHA);j.viewport(bb,cb,Ma,fb);j.clearColor(Q.r,Q.g,Q.b,
R);this.context=j;var Mb=j.getParameter(j.MAX_TEXTURE_IMAGE_UNITS),$b=j.getParameter(j.MAX_VERTEX_TEXTURE_IMAGE_UNITS);j.getParameter(j.MAX_TEXTURE_SIZE);var ac=j.getParameter(j.MAX_CUBE_MAP_TEXTURE_SIZE),Nb=La?j.getParameter(La.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,Bb=0<$b,yb=Bb&&Oa;Fa&&j.getParameter(j.COMPRESSED_TEXTURE_FORMATS);var bc=j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.HIGH_FLOAT),cc=j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.MEDIUM_FLOAT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.LOW_FLOAT);
var qc=j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.HIGH_FLOAT),rc=j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.MEDIUM_FLOAT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.LOW_FLOAT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.HIGH_INT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.MEDIUM_INT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.LOW_INT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.HIGH_INT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.MEDIUM_INT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,
j.LOW_INT);var sc=0<bc.precision&&0<qc.precision,Ob=0<cc.precision&&0<rc.precision;"highp"===M&&!sc&&(Ob?(M="mediump",console.warn("WebGLRenderer: highp not supported, using mediump")):(M="lowp",console.warn("WebGLRenderer: highp and mediump not supported, using lowp")));"mediump"===M&&!Ob&&(M="lowp",console.warn("WebGLRenderer: mediump not supported, using lowp"));this.getContext=function(){return j};this.supportsVertexTextures=function(){return Bb};this.supportsFloatTextures=function(){return Oa};
this.supportsStandardDerivatives=function(){return ua};this.supportsCompressedTextureS3TC=function(){return Fa};this.getMaxAnisotropy=function(){return Nb};this.getPrecision=function(){return M};this.setSize=function(a,b,c){B.width=a*this.devicePixelRatio;B.height=b*this.devicePixelRatio;1!==this.devicePixelRatio&&!1!==c&&(B.style.width=a+"px",B.style.height=b+"px");this.setViewport(0,0,B.width,B.height)};this.setViewport=function(a,b,c,d){bb=void 0!==a?a:0;cb=void 0!==b?b:0;Ma=void 0!==c?c:B.width;
fb=void 0!==d?d:B.height;j.viewport(bb,cb,Ma,fb)};this.setScissor=function(a,b,c,d){j.scissor(a,b,c,d)};this.enableScissorTest=function(a){a?j.enable(j.SCISSOR_TEST):j.disable(j.SCISSOR_TEST)};this.setClearColor=function(a,b){Q.set(a);R=void 0!==b?b:1;j.clearColor(Q.r,Q.g,Q.b,R)};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return Q};this.getClearAlpha=function(){return R};
this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=j.COLOR_BUFFER_BIT;if(void 0===b||b)d|=j.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=j.STENCIL_BUFFER_BIT;j.clear(d)};this.clearColor=function(){j.clear(j.COLOR_BUFFER_BIT)};this.clearDepth=function(){j.clear(j.DEPTH_BUFFER_BIT)};this.clearStencil=function(){j.clear(j.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=
function(a){a.init(this);this.renderPluginsPre.push(a)};this.updateShadowMap=function(a,b){Ba=null;Aa=$=ka=Ga=ja=-1;ta=!0;U=Y=-1;this.shadowMapPlugin.update(a,b)};var Cb=function(a){a=a.target;a.removeEventListener("dispose",Cb);a.__webglInit=void 0;if(a instanceof THREE.BufferGeometry){var b=a.attributes,c;for(c in b)void 0!==b[c].buffer&&j.deleteBuffer(b[c].buffer);L.info.memory.geometries--}else if(void 0!==a.geometryGroups)for(b in a.geometryGroups){c=a.geometryGroups[b];if(void 0!==c.numMorphTargets)for(var d=
0,e=c.numMorphTargets;d<e;d++)j.deleteBuffer(c.__webglMorphTargetsBuffers[d]);if(void 0!==c.numMorphNormals){d=0;for(e=c.numMorphNormals;d<e;d++)j.deleteBuffer(c.__webglMorphNormalsBuffers[d])}Hb(c)}else Hb(a)},Db=function(a){a=a.target;a.removeEventListener("dispose",Db);a.image&&a.image.__webglTextureCube?j.deleteTexture(a.image.__webglTextureCube):a.__webglInit&&(a.__webglInit=!1,j.deleteTexture(a.__webglTexture));L.info.memory.textures--},Eb=function(a){a=a.target;a.removeEventListener("dispose",
Eb);if(a&&a.__webglTexture)if(j.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)j.deleteFramebuffer(a.__webglFramebuffer[b]),j.deleteRenderbuffer(a.__webglRenderbuffer[b]);else j.deleteFramebuffer(a.__webglFramebuffer),j.deleteRenderbuffer(a.__webglRenderbuffer);L.info.memory.textures--},Fb=function(a){a=a.target;a.removeEventListener("dispose",Fb);Gb(a)},Hb=function(a){void 0!==a.__webglVertexBuffer&&j.deleteBuffer(a.__webglVertexBuffer);void 0!==a.__webglNormalBuffer&&
j.deleteBuffer(a.__webglNormalBuffer);void 0!==a.__webglTangentBuffer&&j.deleteBuffer(a.__webglTangentBuffer);void 0!==a.__webglColorBuffer&&j.deleteBuffer(a.__webglColorBuffer);void 0!==a.__webglUVBuffer&&j.deleteBuffer(a.__webglUVBuffer);void 0!==a.__webglUV2Buffer&&j.deleteBuffer(a.__webglUV2Buffer);void 0!==a.__webglSkinIndicesBuffer&&j.deleteBuffer(a.__webglSkinIndicesBuffer);void 0!==a.__webglSkinWeightsBuffer&&j.deleteBuffer(a.__webglSkinWeightsBuffer);void 0!==a.__webglFaceBuffer&&j.deleteBuffer(a.__webglFaceBuffer);
void 0!==a.__webglLineBuffer&&j.deleteBuffer(a.__webglLineBuffer);void 0!==a.__webglLineDistanceBuffer&&j.deleteBuffer(a.__webglLineDistanceBuffer);if(void 0!==a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)j.deleteBuffer(a.__webglCustomAttributesList[b].buffer);L.info.memory.geometries--},Gb=function(a){var b=a.program;if(void 0!==b){a.program=void 0;var c,d,e=!1,a=0;for(c=da.length;a<c;a++)if(d=da[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=
[];a=0;for(c=da.length;a<c;a++)d=da[a],d.program!==b&&e.push(d);da=e;j.deleteProgram(b);L.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=j.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=j.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=j.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=j.createBuffer());a.hasPositions&&(j.bindBuffer(j.ARRAY_BUFFER,
a.__webglVertexBuffer),j.bufferData(j.ARRAY_BUFFER,a.positionArray,j.DYNAMIC_DRAW),j.enableVertexAttribArray(b.attributes.position),j.vertexAttribPointer(b.attributes.position,3,j.FLOAT,!1,0,0));if(a.hasNormals){j.bindBuffer(j.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,e,f,g,h,i,k,l,m,n,p,q=3*a.count;for(p=0;p<q;p+=9)n=a.normalArray,d=n[p],e=n[p+1],f=n[p+2],g=n[p+3],i=n[p+4],l=n[p+5],h=n[p+6],k=n[p+7],m=n[p+8],d=(d+g+h)/3,e=(e+i+k)/3,f=(f+l+m)/3,n[p]=d,n[p+1]=e,n[p+
2]=f,n[p+3]=d,n[p+4]=e,n[p+5]=f,n[p+6]=d,n[p+7]=e,n[p+8]=f}j.bufferData(j.ARRAY_BUFFER,a.normalArray,j.DYNAMIC_DRAW);j.enableVertexAttribArray(b.attributes.normal);j.vertexAttribPointer(b.attributes.normal,3,j.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(j.bindBuffer(j.ARRAY_BUFFER,a.__webglUvBuffer),j.bufferData(j.ARRAY_BUFFER,a.uvArray,j.DYNAMIC_DRAW),j.enableVertexAttribArray(b.attributes.uv),j.vertexAttribPointer(b.attributes.uv,2,j.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(j.bindBuffer(j.ARRAY_BUFFER,
a.__webglColorBuffer),j.bufferData(j.ARRAY_BUFFER,a.colorArray,j.DYNAMIC_DRAW),j.enableVertexAttribArray(b.attributes.color),j.vertexAttribPointer(b.attributes.color,3,j.FLOAT,!1,0,0));j.drawArrays(j.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible){var i,k,l,m;i=z(a,b,c,d,f);b=i.attributes;a=e.attributes;c=!1;i=16777215*e.id+2*i.id+(d.wireframe?1:0);i!==$&&($=i,c=!0);c&&g();if(f instanceof THREE.Mesh)if(f=a.index){e=e.offsets;1<e.length&&(c=!0);for(var n=
0,p=e.length;n<p;n++){var q=e[n].index;if(c){for(k in b)l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),h(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,4*q*m)):d.defaultAttributeValues&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k])));j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,f.buffer)}j.drawElements(j.TRIANGLES,e[n].count,j.UNSIGNED_SHORT,2*e[n].start);
L.info.render.calls++;L.info.render.vertices+=e[n].count;L.info.render.faces+=e[n].count/3}}else{if(c)for(k in b)"index"!==k&&(l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),h(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[k]&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k]))));d=e.attributes.position;
j.drawArrays(j.TRIANGLES,0,d.numItems/3);L.info.render.calls++;L.info.render.vertices+=d.numItems/3;L.info.render.faces+=d.numItems/3/3}else if(f instanceof THREE.ParticleSystem){if(c){for(k in b)l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),h(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[k]&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&
j.vertexAttrib3fv(l,d.defaultAttributeValues[k])));d=a.position;j.drawArrays(j.POINTS,0,d.numItems/3);L.info.render.calls++;L.info.render.points+=d.numItems/3}}else if(f instanceof THREE.Line&&c){for(k in b)l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),h(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[k]&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&
j.vertexAttrib3fv(l,d.defaultAttributeValues[k])));k=f.type===THREE.LineStrip?j.LINE_STRIP:j.LINES;E(d.linewidth);d=a.position;j.drawArrays(k,0,d.numItems/3);L.info.render.calls++;L.info.render.points+=d.numItems}}};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var i,l,c=z(a,b,c,d,f),a=c.attributes,b=!1,c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==$&&($=c,b=!0);b&&g();if(!d.morphTargets&&0<=a.position)b&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglVertexBuffer),h(a.position),j.vertexAttribPointer(a.position,
3,j.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),h(c.position),j.vertexAttribPointer(c.position,3,j.FLOAT,!1,0,0)):0<=c.position&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglVertexBuffer),h(c.position),j.vertexAttribPointer(c.position,3,j.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var m=0;l=f.morphTargetForcedOrder;for(i=f.morphTargetInfluences;m<d.numSupportedMorphTargets&&
m<l.length;)0<=c["morphTarget"+m]&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[l[m]]),h(c["morphTarget"+m]),j.vertexAttribPointer(c["morphTarget"+m],3,j.FLOAT,!1,0,0)),0<=c["morphNormal"+m]&&d.morphNormals&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[l[m]]),h(c["morphNormal"+m]),j.vertexAttribPointer(c["morphNormal"+m],3,j.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[m]=i[l[m]],m++}else{l=[];i=f.morphTargetInfluences;var n,p=i.length;for(n=0;n<p;n++)m=i[n],0<m&&l.push([m,
n]);l.length>d.numSupportedMorphTargets?(l.sort(k),l.length=d.numSupportedMorphTargets):l.length>d.numSupportedMorphNormals?l.sort(k):0===l.length&&l.push([0,0]);for(m=0;m<d.numSupportedMorphTargets;)l[m]?(n=l[m][1],0<=c["morphTarget"+m]&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[n]),h(c["morphTarget"+m]),j.vertexAttribPointer(c["morphTarget"+m],3,j.FLOAT,!1,0,0)),0<=c["morphNormal"+m]&&d.morphNormals&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[n]),h(c["morphNormal"+
m]),j.vertexAttribPointer(c["morphNormal"+m],3,j.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[m]=i[n]):f.__webglMorphTargetInfluences[m]=0,m++}null!==d.program.uniforms.morphTargetInfluences&&j.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(b){if(e.__webglCustomAttributesList){i=0;for(l=e.__webglCustomAttributesList.length;i<l;i++)c=e.__webglCustomAttributesList[i],0<=a[c.buffer.belongsToAttribute]&&(j.bindBuffer(j.ARRAY_BUFFER,c.buffer),h(a[c.buffer.belongsToAttribute]),
j.vertexAttribPointer(a[c.buffer.belongsToAttribute],c.size,j.FLOAT,!1,0,0))}0<=a.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?(j.bindBuffer(j.ARRAY_BUFFER,e.__webglColorBuffer),h(a.color),j.vertexAttribPointer(a.color,3,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&j.vertexAttrib3fv(a.color,d.defaultAttributeValues.color));0<=a.normal&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglNormalBuffer),h(a.normal),j.vertexAttribPointer(a.normal,3,j.FLOAT,!1,0,0));0<=a.tangent&&(j.bindBuffer(j.ARRAY_BUFFER,
e.__webglTangentBuffer),h(a.tangent),j.vertexAttribPointer(a.tangent,4,j.FLOAT,!1,0,0));0<=a.uv&&(f.geometry.faceVertexUvs[0]?(j.bindBuffer(j.ARRAY_BUFFER,e.__webglUVBuffer),h(a.uv),j.vertexAttribPointer(a.uv,2,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&j.vertexAttrib2fv(a.uv,d.defaultAttributeValues.uv));0<=a.uv2&&(f.geometry.faceVertexUvs[1]?(j.bindBuffer(j.ARRAY_BUFFER,e.__webglUV2Buffer),h(a.uv2),j.vertexAttribPointer(a.uv2,2,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&j.vertexAttrib2fv(a.uv2,
d.defaultAttributeValues.uv2));d.skinning&&(0<=a.skinIndex&&0<=a.skinWeight)&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),h(a.skinIndex),j.vertexAttribPointer(a.skinIndex,4,j.FLOAT,!1,0,0),j.bindBuffer(j.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),h(a.skinWeight),j.vertexAttribPointer(a.skinWeight,4,j.FLOAT,!1,0,0));0<=a.lineDistance&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglLineDistanceBuffer),h(a.lineDistance),j.vertexAttribPointer(a.lineDistance,1,j.FLOAT,!1,0,0))}f instanceof THREE.Mesh?
(d.wireframe?(E(d.wireframeLinewidth),b&&j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),j.drawElements(j.LINES,e.__webglLineCount,j.UNSIGNED_SHORT,0)):(b&&j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),j.drawElements(j.TRIANGLES,e.__webglFaceCount,j.UNSIGNED_SHORT,0)),L.info.render.calls++,L.info.render.vertices+=e.__webglFaceCount,L.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?j.LINE_STRIP:j.LINES,E(d.linewidth),j.drawArrays(f,0,
e.__webglLineCount),L.info.render.calls++):f instanceof THREE.ParticleSystem&&(j.drawArrays(j.POINTS,0,e.__webglParticleCount),L.info.render.calls++,L.info.render.points+=e.__webglParticleCount)}};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e,f,g,h,k=a.__lights,n=a.fog;Aa=-1;ta=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);
Ea.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);la.setFromMatrix(Ea);this.autoUpdateObjects&&this.initWebGLObjects(a);m(this.renderPluginsPre,a,b);L.info.render.calls=0;L.info.render.vertices=0;L.info.render.faces=0;L.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);h=a.__webglObjects;d=0;for(e=h.length;d<e;d++)if(f=h[d],g=f.object,f.id=d,f.render=!1,g.visible&&(!(g instanceof THREE.Mesh||g instanceof
THREE.ParticleSystem)||!g.frustumCulled||la.intersectsObject(g))){var q=g;q._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,q.matrixWorld);q._normalMatrix.getNormalMatrix(q._modelViewMatrix);var q=f,r=q.buffer,t=void 0,s=t=void 0,s=q.object.material;if(s instanceof THREE.MeshFaceMaterial)t=r.materialIndex,t=s.materials[t],t.transparent?(q.transparent=t,q.opaque=null):(q.opaque=t,q.transparent=null);else if(t=s)t.transparent?(q.transparent=t,q.opaque=null):(q.opaque=t,q.transparent=null);f.render=
!0;!0===this.sortObjects&&(null!==g.renderDepth?f.z=g.renderDepth:(ra.setFromMatrixPosition(g.matrixWorld),ra.applyProjection(Ea),f.z=ra.z))}this.sortObjects&&h.sort(i);h=a.__webglObjectsImmediate;d=0;for(e=h.length;d<e;d++)f=h[d],g=f.object,g.visible&&(g._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,g.matrixWorld),g._normalMatrix.getNormalMatrix(g._modelViewMatrix),g=f.object.material,g.transparent?(f.transparent=g,f.opaque=null):(f.opaque=g,f.transparent=null));a.overrideMaterial?(d=a.overrideMaterial,
this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),A(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),l(a.__webglObjects,!1,"",b,k,n,!0,d),p(a.__webglObjectsImmediate,"",b,k,n,!1,d)):(d=null,this.setBlending(THREE.NoBlending),l(a.__webglObjects,!0,"opaque",b,k,n,!1,d),p(a.__webglObjectsImmediate,"opaque",b,k,n,!1,d),l(a.__webglObjects,!1,"transparent",b,k,n,!0,d),p(a.__webglObjectsImmediate,"transparent",b,
k,n,!0,d));m(this.renderPluginsPost,a,b);c&&(c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter)&&(c instanceof THREE.WebGLRenderTargetCube?(j.bindTexture(j.TEXTURE_CUBE_MAP,c.__webglTexture),j.generateMipmap(j.TEXTURE_CUBE_MAP),j.bindTexture(j.TEXTURE_CUBE_MAP,null)):(j.bindTexture(j.TEXTURE_2D,c.__webglTexture),j.generateMipmap(j.TEXTURE_2D),j.bindTexture(j.TEXTURE_2D,null)));this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,
b,c,d,e){var f=z(a,b,c,d,e);$=-1;L.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,j,la):e.render(function(a){L.renderBufferImmediate(a,f,d)})};this.initWebGLObjects=function(a){a.__webglObjects||(a.__webglObjects=[],a.__webglObjectsImmediate=[],a.__webglSprites=[],a.__webglFlares=[]);for(;a.__objectsAdded.length;)t(a.__objectsAdded[0],a),a.__objectsAdded.splice(0,1);for(;a.__objectsRemoved.length;)u(a.__objectsRemoved[0],a),a.__objectsRemoved.splice(0,1);for(var b=0,g=a.__webglObjects.length;b<
g;b++){var h=a.__webglObjects[b].object;void 0===h.__webglInit&&(void 0!==h.__webglActive&&u(h,a),t(h,a));var i=h,l=i.geometry,m=void 0,p=void 0,r=void 0;if(l instanceof THREE.BufferGeometry){var s=j.DYNAMIC_DRAW,v=!l.dynamic,z=l.attributes,y=void 0,x=void 0;for(y in z)x=z[y],x.needsUpdate&&("index"===y?(j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,x.buffer),j.bufferData(j.ELEMENT_ARRAY_BUFFER,x.array,s)):(j.bindBuffer(j.ARRAY_BUFFER,x.buffer),j.bufferData(j.ARRAY_BUFFER,x.array,s)),x.needsUpdate=!1),v&&!x.dynamic&&
(x.array=null)}else if(i instanceof THREE.Mesh){for(var A=0,B=l.geometryGroupsList.length;A<B;A++)if(m=l.geometryGroupsList[A],r=d(i,m),l.buffersNeedUpdate&&c(m,i),p=r.attributes&&q(r),l.verticesNeedUpdate||l.morphTargetsNeedUpdate||l.elementsNeedUpdate||l.uvsNeedUpdate||l.normalsNeedUpdate||l.colorsNeedUpdate||l.tangentsNeedUpdate||p){var w=m,E=i,D=j.DYNAMIC_DRAW,G=!l.dynamic,F=r;if(w.__inittedArrays){var K=e(F),I=F.vertexColors?F.vertexColors:!1,L=f(F),O=K===THREE.SmoothShading,C=void 0,J=void 0,
V=void 0,M=void 0,Q=void 0,ba=void 0,R=void 0,U=void 0,Y=void 0,za=void 0,$=void 0,P=void 0,X=void 0,W=void 0,Ba=void 0,ea=void 0,Aa=void 0,ca=void 0,da=void 0,ha=void 0,fa=void 0,ja=void 0,ka=void 0,la=void 0,na=void 0,pa=void 0,sa=void 0,ta=void 0,ua=void 0,Ca=void 0,Da=void 0,Ga=void 0,Fa=void 0,Ka=void 0,Sa=void 0,La=void 0,va=void 0,wa=void 0,Qa=void 0,Ra=void 0,db=0,eb=0,Oa=0,Pa=0,Ua=0,hb=0,Ta=0,tb=0,Za=0,qa=0,xa=0,N=0,Na=void 0,ib=w.__vertexArray,bb=w.__uvArray,cb=w.__uv2Array,Ma=w.__normalArray,
Va=w.__tangentArray,jb=w.__colorArray,Wa=w.__skinIndexArray,Xa=w.__skinWeightArray,fb=w.__morphTargetsArrays,sb=w.__morphNormalsArrays,pb=w.__webglCustomAttributesList,H=void 0,Pb=w.__faceArray,vb=w.__lineArray,Ha=E.geometry,Bb=Ha.elementsNeedUpdate,yb=Ha.uvsNeedUpdate,Db=Ha.normalsNeedUpdate,Mb=Ha.tangentsNeedUpdate,Nb=Ha.colorsNeedUpdate,Ob=Ha.morphTargetsNeedUpdate,ec=Ha.vertices,aa=w.faces3,kb=Ha.faces,Cb=Ha.faceVertexUvs[0],Eb=Ha.faceVertexUvs[1],fc=Ha.skinIndices,Qb=Ha.skinWeights,Rb=Ha.morphTargets,
Fb=Ha.morphNormals;if(Ha.verticesNeedUpdate){C=0;for(J=aa.length;C<J;C++)M=kb[aa[C]],P=ec[M.a],X=ec[M.b],W=ec[M.c],ib[eb]=P.x,ib[eb+1]=P.y,ib[eb+2]=P.z,ib[eb+3]=X.x,ib[eb+4]=X.y,ib[eb+5]=X.z,ib[eb+6]=W.x,ib[eb+7]=W.y,ib[eb+8]=W.z,eb+=9;j.bindBuffer(j.ARRAY_BUFFER,w.__webglVertexBuffer);j.bufferData(j.ARRAY_BUFFER,ib,D)}if(Ob){Sa=0;for(La=Rb.length;Sa<La;Sa++){C=xa=0;for(J=aa.length;C<J;C++)Qa=aa[C],M=kb[Qa],P=Rb[Sa].vertices[M.a],X=Rb[Sa].vertices[M.b],W=Rb[Sa].vertices[M.c],va=fb[Sa],va[xa]=P.x,
va[xa+1]=P.y,va[xa+2]=P.z,va[xa+3]=X.x,va[xa+4]=X.y,va[xa+5]=X.z,va[xa+6]=W.x,va[xa+7]=W.y,va[xa+8]=W.z,F.morphNormals&&(O?(Ra=Fb[Sa].vertexNormals[Qa],ca=Ra.a,da=Ra.b,ha=Ra.c):ha=da=ca=Fb[Sa].faceNormals[Qa],wa=sb[Sa],wa[xa]=ca.x,wa[xa+1]=ca.y,wa[xa+2]=ca.z,wa[xa+3]=da.x,wa[xa+4]=da.y,wa[xa+5]=da.z,wa[xa+6]=ha.x,wa[xa+7]=ha.y,wa[xa+8]=ha.z),xa+=9;j.bindBuffer(j.ARRAY_BUFFER,w.__webglMorphTargetsBuffers[Sa]);j.bufferData(j.ARRAY_BUFFER,fb[Sa],D);F.morphNormals&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglMorphNormalsBuffers[Sa]),
j.bufferData(j.ARRAY_BUFFER,sb[Sa],D))}}if(Qb.length){C=0;for(J=aa.length;C<J;C++)M=kb[aa[C]],la=Qb[M.a],na=Qb[M.b],pa=Qb[M.c],Xa[qa]=la.x,Xa[qa+1]=la.y,Xa[qa+2]=la.z,Xa[qa+3]=la.w,Xa[qa+4]=na.x,Xa[qa+5]=na.y,Xa[qa+6]=na.z,Xa[qa+7]=na.w,Xa[qa+8]=pa.x,Xa[qa+9]=pa.y,Xa[qa+10]=pa.z,Xa[qa+11]=pa.w,sa=fc[M.a],ta=fc[M.b],ua=fc[M.c],Wa[qa]=sa.x,Wa[qa+1]=sa.y,Wa[qa+2]=sa.z,Wa[qa+3]=sa.w,Wa[qa+4]=ta.x,Wa[qa+5]=ta.y,Wa[qa+6]=ta.z,Wa[qa+7]=ta.w,Wa[qa+8]=ua.x,Wa[qa+9]=ua.y,Wa[qa+10]=ua.z,Wa[qa+11]=ua.w,qa+=12;
0<qa&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglSkinIndicesBuffer),j.bufferData(j.ARRAY_BUFFER,Wa,D),j.bindBuffer(j.ARRAY_BUFFER,w.__webglSkinWeightsBuffer),j.bufferData(j.ARRAY_BUFFER,Xa,D))}if(Nb&&I){C=0;for(J=aa.length;C<J;C++)M=kb[aa[C]],R=M.vertexColors,U=M.color,3===R.length&&I===THREE.VertexColors?(fa=R[0],ja=R[1],ka=R[2]):ka=ja=fa=U,jb[Za]=fa.r,jb[Za+1]=fa.g,jb[Za+2]=fa.b,jb[Za+3]=ja.r,jb[Za+4]=ja.g,jb[Za+5]=ja.b,jb[Za+6]=ka.r,jb[Za+7]=ka.g,jb[Za+8]=ka.b,Za+=9;0<Za&&(j.bindBuffer(j.ARRAY_BUFFER,
w.__webglColorBuffer),j.bufferData(j.ARRAY_BUFFER,jb,D))}if(Mb&&Ha.hasTangents){C=0;for(J=aa.length;C<J;C++)M=kb[aa[C]],Y=M.vertexTangents,Ba=Y[0],ea=Y[1],Aa=Y[2],Va[Ta]=Ba.x,Va[Ta+1]=Ba.y,Va[Ta+2]=Ba.z,Va[Ta+3]=Ba.w,Va[Ta+4]=ea.x,Va[Ta+5]=ea.y,Va[Ta+6]=ea.z,Va[Ta+7]=ea.w,Va[Ta+8]=Aa.x,Va[Ta+9]=Aa.y,Va[Ta+10]=Aa.z,Va[Ta+11]=Aa.w,Ta+=12;j.bindBuffer(j.ARRAY_BUFFER,w.__webglTangentBuffer);j.bufferData(j.ARRAY_BUFFER,Va,D)}if(Db&&K){C=0;for(J=aa.length;C<J;C++)if(M=kb[aa[C]],Q=M.vertexNormals,ba=M.normal,
3===Q.length&&O)for(Ca=0;3>Ca;Ca++)Ga=Q[Ca],Ma[hb]=Ga.x,Ma[hb+1]=Ga.y,Ma[hb+2]=Ga.z,hb+=3;else for(Ca=0;3>Ca;Ca++)Ma[hb]=ba.x,Ma[hb+1]=ba.y,Ma[hb+2]=ba.z,hb+=3;j.bindBuffer(j.ARRAY_BUFFER,w.__webglNormalBuffer);j.bufferData(j.ARRAY_BUFFER,Ma,D)}if(yb&&Cb&&L){C=0;for(J=aa.length;C<J;C++)if(V=aa[C],za=Cb[V],void 0!==za)for(Ca=0;3>Ca;Ca++)Fa=za[Ca],bb[Oa]=Fa.x,bb[Oa+1]=Fa.y,Oa+=2;0<Oa&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglUVBuffer),j.bufferData(j.ARRAY_BUFFER,bb,D))}if(yb&&Eb&&L){C=0;for(J=aa.length;C<
J;C++)if(V=aa[C],$=Eb[V],void 0!==$)for(Ca=0;3>Ca;Ca++)Ka=$[Ca],cb[Pa]=Ka.x,cb[Pa+1]=Ka.y,Pa+=2;0<Pa&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglUV2Buffer),j.bufferData(j.ARRAY_BUFFER,cb,D))}if(Bb){C=0;for(J=aa.length;C<J;C++)Pb[Ua]=db,Pb[Ua+1]=db+1,Pb[Ua+2]=db+2,Ua+=3,vb[tb]=db,vb[tb+1]=db+1,vb[tb+2]=db,vb[tb+3]=db+2,vb[tb+4]=db+1,vb[tb+5]=db+2,tb+=6,db+=3;j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,w.__webglFaceBuffer);j.bufferData(j.ELEMENT_ARRAY_BUFFER,Pb,D);j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,w.__webglLineBuffer);
j.bufferData(j.ELEMENT_ARRAY_BUFFER,vb,D)}if(pb){Ca=0;for(Da=pb.length;Ca<Da;Ca++)if(H=pb[Ca],H.__original.needsUpdate){N=0;if(1===H.size)if(void 0===H.boundTo||"vertices"===H.boundTo){C=0;for(J=aa.length;C<J;C++)M=kb[aa[C]],H.array[N]=H.value[M.a],H.array[N+1]=H.value[M.b],H.array[N+2]=H.value[M.c],N+=3}else{if("faces"===H.boundTo){C=0;for(J=aa.length;C<J;C++)Na=H.value[aa[C]],H.array[N]=Na,H.array[N+1]=Na,H.array[N+2]=Na,N+=3}}else if(2===H.size)if(void 0===H.boundTo||"vertices"===H.boundTo){C=
0;for(J=aa.length;C<J;C++)M=kb[aa[C]],P=H.value[M.a],X=H.value[M.b],W=H.value[M.c],H.array[N]=P.x,H.array[N+1]=P.y,H.array[N+2]=X.x,H.array[N+3]=X.y,H.array[N+4]=W.x,H.array[N+5]=W.y,N+=6}else{if("faces"===H.boundTo){C=0;for(J=aa.length;C<J;C++)W=X=P=Na=H.value[aa[C]],H.array[N]=P.x,H.array[N+1]=P.y,H.array[N+2]=X.x,H.array[N+3]=X.y,H.array[N+4]=W.x,H.array[N+5]=W.y,N+=6}}else if(3===H.size){var oa;oa="c"===H.type?["r","g","b"]:["x","y","z"];if(void 0===H.boundTo||"vertices"===H.boundTo){C=0;for(J=
aa.length;C<J;C++)M=kb[aa[C]],P=H.value[M.a],X=H.value[M.b],W=H.value[M.c],H.array[N]=P[oa[0]],H.array[N+1]=P[oa[1]],H.array[N+2]=P[oa[2]],H.array[N+3]=X[oa[0]],H.array[N+4]=X[oa[1]],H.array[N+5]=X[oa[2]],H.array[N+6]=W[oa[0]],H.array[N+7]=W[oa[1]],H.array[N+8]=W[oa[2]],N+=9}else if("faces"===H.boundTo){C=0;for(J=aa.length;C<J;C++)W=X=P=Na=H.value[aa[C]],H.array[N]=P[oa[0]],H.array[N+1]=P[oa[1]],H.array[N+2]=P[oa[2]],H.array[N+3]=X[oa[0]],H.array[N+4]=X[oa[1]],H.array[N+5]=X[oa[2]],H.array[N+6]=W[oa[0]],
H.array[N+7]=W[oa[1]],H.array[N+8]=W[oa[2]],N+=9}else if("faceVertices"===H.boundTo){C=0;for(J=aa.length;C<J;C++)Na=H.value[aa[C]],P=Na[0],X=Na[1],W=Na[2],H.array[N]=P[oa[0]],H.array[N+1]=P[oa[1]],H.array[N+2]=P[oa[2]],H.array[N+3]=X[oa[0]],H.array[N+4]=X[oa[1]],H.array[N+5]=X[oa[2]],H.array[N+6]=W[oa[0]],H.array[N+7]=W[oa[1]],H.array[N+8]=W[oa[2]],N+=9}}else if(4===H.size)if(void 0===H.boundTo||"vertices"===H.boundTo){C=0;for(J=aa.length;C<J;C++)M=kb[aa[C]],P=H.value[M.a],X=H.value[M.b],W=H.value[M.c],
H.array[N]=P.x,H.array[N+1]=P.y,H.array[N+2]=P.z,H.array[N+3]=P.w,H.array[N+4]=X.x,H.array[N+5]=X.y,H.array[N+6]=X.z,H.array[N+7]=X.w,H.array[N+8]=W.x,H.array[N+9]=W.y,H.array[N+10]=W.z,H.array[N+11]=W.w,N+=12}else if("faces"===H.boundTo){C=0;for(J=aa.length;C<J;C++)W=X=P=Na=H.value[aa[C]],H.array[N]=P.x,H.array[N+1]=P.y,H.array[N+2]=P.z,H.array[N+3]=P.w,H.array[N+4]=X.x,H.array[N+5]=X.y,H.array[N+6]=X.z,H.array[N+7]=X.w,H.array[N+8]=W.x,H.array[N+9]=W.y,H.array[N+10]=W.z,H.array[N+11]=W.w,N+=12}else if("faceVertices"===
H.boundTo){C=0;for(J=aa.length;C<J;C++)Na=H.value[aa[C]],P=Na[0],X=Na[1],W=Na[2],H.array[N]=P.x,H.array[N+1]=P.y,H.array[N+2]=P.z,H.array[N+3]=P.w,H.array[N+4]=X.x,H.array[N+5]=X.y,H.array[N+6]=X.z,H.array[N+7]=X.w,H.array[N+8]=W.x,H.array[N+9]=W.y,H.array[N+10]=W.z,H.array[N+11]=W.w,N+=12}j.bindBuffer(j.ARRAY_BUFFER,H.buffer);j.bufferData(j.ARRAY_BUFFER,H.array,D)}}G&&(delete w.__inittedArrays,delete w.__colorArray,delete w.__normalArray,delete w.__tangentArray,delete w.__uvArray,delete w.__uv2Array,
delete w.__faceArray,delete w.__vertexArray,delete w.__lineArray,delete w.__skinIndexArray,delete w.__skinWeightArray)}}l.verticesNeedUpdate=!1;l.morphTargetsNeedUpdate=!1;l.elementsNeedUpdate=!1;l.uvsNeedUpdate=!1;l.normalsNeedUpdate=!1;l.colorsNeedUpdate=!1;l.tangentsNeedUpdate=!1;l.buffersNeedUpdate=!1;r.attributes&&n(r)}else if(i instanceof THREE.Line){r=d(i,l);p=r.attributes&&q(r);if(l.verticesNeedUpdate||l.colorsNeedUpdate||l.lineDistancesNeedUpdate||p){var Ya=l,Sb=j.DYNAMIC_DRAW,Ib=void 0,
Jb=void 0,Kb=void 0,Tb=void 0,ma=void 0,Ub=void 0,Gb=Ya.vertices,Hb=Ya.colors,kc=Ya.lineDistances,Zb=Gb.length,$b=Hb.length,ac=kc.length,Vb=Ya.__vertexArray,Wb=Ya.__colorArray,lc=Ya.__lineDistanceArray,bc=Ya.colorsNeedUpdate,cc=Ya.lineDistancesNeedUpdate,gc=Ya.__webglCustomAttributesList,Xb=void 0,mc=void 0,ya=void 0,zb=void 0,Ia=void 0,ia=void 0;if(Ya.verticesNeedUpdate){for(Ib=0;Ib<Zb;Ib++)Tb=Gb[Ib],ma=3*Ib,Vb[ma]=Tb.x,Vb[ma+1]=Tb.y,Vb[ma+2]=Tb.z;j.bindBuffer(j.ARRAY_BUFFER,Ya.__webglVertexBuffer);
j.bufferData(j.ARRAY_BUFFER,Vb,Sb)}if(bc){for(Jb=0;Jb<$b;Jb++)Ub=Hb[Jb],ma=3*Jb,Wb[ma]=Ub.r,Wb[ma+1]=Ub.g,Wb[ma+2]=Ub.b;j.bindBuffer(j.ARRAY_BUFFER,Ya.__webglColorBuffer);j.bufferData(j.ARRAY_BUFFER,Wb,Sb)}if(cc){for(Kb=0;Kb<ac;Kb++)lc[Kb]=kc[Kb];j.bindBuffer(j.ARRAY_BUFFER,Ya.__webglLineDistanceBuffer);j.bufferData(j.ARRAY_BUFFER,lc,Sb)}if(gc){Xb=0;for(mc=gc.length;Xb<mc;Xb++)if(ia=gc[Xb],ia.needsUpdate&&(void 0===ia.boundTo||"vertices"===ia.boundTo)){ma=0;zb=ia.value.length;if(1===ia.size)for(ya=
0;ya<zb;ya++)ia.array[ya]=ia.value[ya];else if(2===ia.size)for(ya=0;ya<zb;ya++)Ia=ia.value[ya],ia.array[ma]=Ia.x,ia.array[ma+1]=Ia.y,ma+=2;else if(3===ia.size)if("c"===ia.type)for(ya=0;ya<zb;ya++)Ia=ia.value[ya],ia.array[ma]=Ia.r,ia.array[ma+1]=Ia.g,ia.array[ma+2]=Ia.b,ma+=3;else for(ya=0;ya<zb;ya++)Ia=ia.value[ya],ia.array[ma]=Ia.x,ia.array[ma+1]=Ia.y,ia.array[ma+2]=Ia.z,ma+=3;else if(4===ia.size)for(ya=0;ya<zb;ya++)Ia=ia.value[ya],ia.array[ma]=Ia.x,ia.array[ma+1]=Ia.y,ia.array[ma+2]=Ia.z,ia.array[ma+
3]=Ia.w,ma+=4;j.bindBuffer(j.ARRAY_BUFFER,ia.buffer);j.bufferData(j.ARRAY_BUFFER,ia.array,Sb)}}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;l.lineDistancesNeedUpdate=!1;r.attributes&&n(r)}else if(i instanceof THREE.ParticleSystem){r=d(i,l);p=r.attributes&&q(r);if(l.verticesNeedUpdate||l.colorsNeedUpdate||i.sortParticles||p){var lb=l,hc=j.DYNAMIC_DRAW,Lb=i,Ja=void 0,mb=void 0,nb=void 0,T=void 0,ob=void 0,ub=void 0,Yb=lb.vertices,ic=Yb.length,jc=lb.colors,nc=jc.length,wb=lb.__vertexArray,xb=lb.__colorArray,
qb=lb.__sortArray,oc=lb.verticesNeedUpdate,pc=lb.colorsNeedUpdate,rb=lb.__webglCustomAttributesList,$a=void 0,Ab=void 0,Z=void 0,ab=void 0,ga=void 0,S=void 0;if(Lb.sortParticles){gb.copy(Ea);gb.multiply(Lb.matrixWorld);for(Ja=0;Ja<ic;Ja++)nb=Yb[Ja],ra.copy(nb),ra.applyProjection(gb),qb[Ja]=[ra.z,Ja];qb.sort(k);for(Ja=0;Ja<ic;Ja++)nb=Yb[qb[Ja][1]],T=3*Ja,wb[T]=nb.x,wb[T+1]=nb.y,wb[T+2]=nb.z;for(mb=0;mb<nc;mb++)T=3*mb,ub=jc[qb[mb][1]],xb[T]=ub.r,xb[T+1]=ub.g,xb[T+2]=ub.b;if(rb){$a=0;for(Ab=rb.length;$a<
Ab;$a++)if(S=rb[$a],void 0===S.boundTo||"vertices"===S.boundTo)if(T=0,ab=S.value.length,1===S.size)for(Z=0;Z<ab;Z++)ob=qb[Z][1],S.array[Z]=S.value[ob];else if(2===S.size)for(Z=0;Z<ab;Z++)ob=qb[Z][1],ga=S.value[ob],S.array[T]=ga.x,S.array[T+1]=ga.y,T+=2;else if(3===S.size)if("c"===S.type)for(Z=0;Z<ab;Z++)ob=qb[Z][1],ga=S.value[ob],S.array[T]=ga.r,S.array[T+1]=ga.g,S.array[T+2]=ga.b,T+=3;else for(Z=0;Z<ab;Z++)ob=qb[Z][1],ga=S.value[ob],S.array[T]=ga.x,S.array[T+1]=ga.y,S.array[T+2]=ga.z,T+=3;else if(4===
S.size)for(Z=0;Z<ab;Z++)ob=qb[Z][1],ga=S.value[ob],S.array[T]=ga.x,S.array[T+1]=ga.y,S.array[T+2]=ga.z,S.array[T+3]=ga.w,T+=4}}else{if(oc)for(Ja=0;Ja<ic;Ja++)nb=Yb[Ja],T=3*Ja,wb[T]=nb.x,wb[T+1]=nb.y,wb[T+2]=nb.z;if(pc)for(mb=0;mb<nc;mb++)ub=jc[mb],T=3*mb,xb[T]=ub.r,xb[T+1]=ub.g,xb[T+2]=ub.b;if(rb){$a=0;for(Ab=rb.length;$a<Ab;$a++)if(S=rb[$a],S.needsUpdate&&(void 0===S.boundTo||"vertices"===S.boundTo))if(ab=S.value.length,T=0,1===S.size)for(Z=0;Z<ab;Z++)S.array[Z]=S.value[Z];else if(2===S.size)for(Z=
0;Z<ab;Z++)ga=S.value[Z],S.array[T]=ga.x,S.array[T+1]=ga.y,T+=2;else if(3===S.size)if("c"===S.type)for(Z=0;Z<ab;Z++)ga=S.value[Z],S.array[T]=ga.r,S.array[T+1]=ga.g,S.array[T+2]=ga.b,T+=3;else for(Z=0;Z<ab;Z++)ga=S.value[Z],S.array[T]=ga.x,S.array[T+1]=ga.y,S.array[T+2]=ga.z,T+=3;else if(4===S.size)for(Z=0;Z<ab;Z++)ga=S.value[Z],S.array[T]=ga.x,S.array[T+1]=ga.y,S.array[T+2]=ga.z,S.array[T+3]=ga.w,T+=4}}if(oc||Lb.sortParticles)j.bindBuffer(j.ARRAY_BUFFER,lb.__webglVertexBuffer),j.bufferData(j.ARRAY_BUFFER,
wb,hc);if(pc||Lb.sortParticles)j.bindBuffer(j.ARRAY_BUFFER,lb.__webglColorBuffer),j.bufferData(j.ARRAY_BUFFER,xb,hc);if(rb){$a=0;for(Ab=rb.length;$a<Ab;$a++)if(S=rb[$a],S.needsUpdate||Lb.sortParticles)j.bindBuffer(j.ARRAY_BUFFER,S.buffer),j.bufferData(j.ARRAY_BUFFER,S.array,hc)}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;r.attributes&&n(r)}}};this.initMaterial=function(a,b,c,d){var e,f,g,h;a.addEventListener("dispose",Fb);var i,k,l,m,n;a instanceof THREE.MeshDepthMaterial?n="depth":a instanceof
THREE.MeshNormalMaterial?n="normal":a instanceof THREE.MeshBasicMaterial?n="basic":a instanceof THREE.MeshLambertMaterial?n="lambert":a instanceof THREE.MeshPhongMaterial?n="phong":a instanceof THREE.LineBasicMaterial?n="basic":a instanceof THREE.LineDashedMaterial?n="dashed":a instanceof THREE.ParticleSystemMaterial&&(n="particle_basic");if(n){var p=THREE.ShaderLib[n];a.uniforms=THREE.UniformsUtils.clone(p.uniforms);a.vertexShader=p.vertexShader;a.fragmentShader=p.fragmentShader}var q=e=0,r=0,t=
p=0;for(f=b.length;t<f;t++)g=b[t],g.onlyShadow||(g instanceof THREE.DirectionalLight&&e++,g instanceof THREE.PointLight&&q++,g instanceof THREE.SpotLight&&r++,g instanceof THREE.HemisphereLight&&p++);f=q;g=r;h=p;r=p=0;for(q=b.length;r<q;r++)t=b[r],t.castShadow&&(t instanceof THREE.SpotLight&&p++,t instanceof THREE.DirectionalLight&&!t.shadowCascade&&p++);m=p;yb&&d&&d.useVertexTexture?l=1024:(b=j.getParameter(j.MAX_VERTEX_UNIFORM_VECTORS),b=Math.floor((b-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&
(b=Math.min(d.bones.length,b),b<d.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.bones.length+", this GPU supports just "+b+" (try OpenGL instead of ANGLE)")),l=b);a:{var r=a.fragmentShader,q=a.vertexShader,p=a.uniforms,b=a.attributes,t=a.defines,c={map:!!a.map,envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,
skinning:a.skinning,maxBones:l,useVertexTexture:yb&&d&&d.useVertexTexture,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,maxDirLights:e,maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:m,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow,shadowMapType:this.shadowMapType,shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,perPixel:a.perPixel,wrapAround:a.wrapAround,
doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide},d=a.index0AttributeName,s,u,v;e=[];n?e.push(n):(e.push(r),e.push(q));for(u in t)e.push(u),e.push(t[u]);for(s in c)e.push(s),e.push(c[s]);n=e.join();s=0;for(u=da.length;s<u;s++)if(e=da[s],e.code===n){e.usedTimes++;k=e.program;break a}s="SHADOWMAP_TYPE_BASIC";c.shadowMapType===THREE.PCFShadowMap?s="SHADOWMAP_TYPE_PCF":c.shadowMapType===THREE.PCFSoftShadowMap&&(s="SHADOWMAP_TYPE_PCF_SOFT");u=[];for(v in t)e=t[v],!1!==e&&(e="#define "+
v+" "+e,u.push(e));e=u.join("\n");v=j.createProgram();u=["precision "+M+" float;","precision "+M+" int;",e,Bb?"#define VERTEX_TEXTURES":"",L.gammaInput?"#define GAMMA_INPUT":"",L.gammaOutput?"#define GAMMA_OUTPUT":"",L.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":"","#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,"#define MAX_BONES "+
c.maxBones,c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals?"#define USE_MORPHNORMALS":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":
"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+s:"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",c.sizeAttenuation?"#define USE_SIZEATTENUATION":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
s=["precision "+M+" float;","precision "+M+" int;",c.bumpMap||c.normalMap?"#extension GL_OES_standard_derivatives : enable":"",e,"#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,c.alphaTest?"#define ALPHATEST "+c.alphaTest:"",L.gammaInput?"#define GAMMA_INPUT":"",L.gammaOutput?"#define GAMMA_OUTPUT":"",L.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":
"",c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.metal?"#define METAL":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":
"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+s:"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");u=D("vertex",u+q);s=D("fragment",s+r);j.attachShader(v,u);j.attachShader(v,s);d&&j.bindAttribLocation(v,0,d);j.linkProgram(v);j.getProgramParameter(v,j.LINK_STATUS)||(console.error("Could not initialise shader\nVALIDATE_STATUS: "+j.getProgramParameter(v,
j.VALIDATE_STATUS)+", gl error ["+j.getError()+"]"),console.error("Program Info Log: "+j.getProgramInfoLog(v)));j.deleteShader(s);j.deleteShader(u);v.uniforms={};v.attributes={};var w;s="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");c.useVertexTexture?(s.push("boneTexture"),s.push("boneTextureWidth"),s.push("boneTextureHeight")):s.push("boneGlobalMatrices");for(w in p)s.push(w);w=s;s=0;for(u=w.length;s<u;s++)p=w[s],v.uniforms[p]=
j.getUniformLocation(v,p);s="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(w=0;w<c.maxMorphTargets;w++)s.push("morphTarget"+w);for(w=0;w<c.maxMorphNormals;w++)s.push("morphNormal"+w);for(k in b)s.push(k);k=s;w=0;for(b=k.length;w<b;w++)s=k[w],v.attributes[s]=j.getAttribLocation(v,s);v.id=za++;da.push({program:v,code:n,usedTimes:1});L.info.memory.programs=da.length;k=v}a.program=k;w=a.program.attributes;if(a.morphTargets){a.numSupportedMorphTargets=0;b="morphTarget";
for(k=0;k<this.maxMorphTargets;k++)v=b+k,0<=w[v]&&a.numSupportedMorphTargets++}if(a.morphNormals){a.numSupportedMorphNormals=0;b="morphNormal";for(k=0;k<this.maxMorphNormals;k++)v=b+k,0<=w[v]&&a.numSupportedMorphNormals++}a.uniformsList=[];for(i in a.uniforms)a.uniformsList.push([a.uniforms[i],i])};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?j.disable(j.CULL_FACE):(b===THREE.FrontFaceDirectionCW?j.frontFace(j.CW):j.frontFace(j.CCW),a===THREE.CullFaceBack?j.cullFace(j.BACK):a===THREE.CullFaceFront?
j.cullFace(j.FRONT):j.cullFace(j.FRONT_AND_BACK),j.enable(j.CULL_FACE))};this.setMaterialFaces=function(a){var b=a.side===THREE.DoubleSide,a=a.side===THREE.BackSide;Y!==b&&(b?j.disable(j.CULL_FACE):j.enable(j.CULL_FACE),Y=b);U!==a&&(a?j.frontFace(j.CW):j.frontFace(j.CCW),U=a)};this.setDepthTest=function(a){Ga!==a&&(a?j.enable(j.DEPTH_TEST):j.disable(j.DEPTH_TEST),Ga=a)};this.setDepthWrite=function(a){ka!==a&&(j.depthMask(a),ka=a)};this.setBlending=function(a,b,c,d){a!==ja&&(a===THREE.NoBlending?j.disable(j.BLEND):
a===THREE.AdditiveBlending?(j.enable(j.BLEND),j.blendEquation(j.FUNC_ADD),j.blendFunc(j.SRC_ALPHA,j.ONE)):a===THREE.SubtractiveBlending?(j.enable(j.BLEND),j.blendEquation(j.FUNC_ADD),j.blendFunc(j.ZERO,j.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(j.enable(j.BLEND),j.blendEquation(j.FUNC_ADD),j.blendFunc(j.ZERO,j.SRC_COLOR)):a===THREE.CustomBlending?j.enable(j.BLEND):(j.enable(j.BLEND),j.blendEquationSeparate(j.FUNC_ADD,j.FUNC_ADD),j.blendFuncSeparate(j.SRC_ALPHA,j.ONE_MINUS_SRC_ALPHA,j.ONE,
j.ONE_MINUS_SRC_ALPHA)),ja=a);if(a===THREE.CustomBlending){if(b!==sa&&(j.blendEquation(I(b)),sa=b),c!==ha||d!==Ka)j.blendFunc(I(c),I(d)),ha=c,Ka=d}else Ka=ha=sa=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.addEventListener("dispose",Db),a.__webglTexture=j.createTexture(),L.info.memory.textures++);j.activeTexture(j.TEXTURE0+b);j.bindTexture(j.TEXTURE_2D,a.__webglTexture);j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,a.flipY);j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
a.premultiplyAlpha);j.pixelStorei(j.UNPACK_ALIGNMENT,a.unpackAlignment);var c=a.image,d=0===(c.width&c.width-1)&&0===(c.height&c.height-1),e=I(a.format),f=I(a.type);F(j.TEXTURE_2D,a,d);var g=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<g.length&&d){for(var h=0,i=g.length;h<i;h++)c=g[h],j.texImage2D(j.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data);a.generateMipmaps=!1}else j.texImage2D(j.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data);else if(a instanceof THREE.CompressedTexture){h=0;for(i=g.length;h<
i;h++)c=g[h],a.format!==THREE.RGBAFormat?j.compressedTexImage2D(j.TEXTURE_2D,h,e,c.width,c.height,0,c.data):j.texImage2D(j.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data)}else if(0<g.length&&d){h=0;for(i=g.length;h<i;h++)c=g[h],j.texImage2D(j.TEXTURE_2D,h,e,e,f,c);a.generateMipmaps=!1}else j.texImage2D(j.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&j.generateMipmap(j.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else j.activeTexture(j.TEXTURE0+b),j.bindTexture(j.TEXTURE_2D,a.__webglTexture)};
this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",Eb);a.__webglTexture=j.createTexture();L.info.memory.textures++;var c=0===(a.width&a.width-1)&&0===(a.height&a.height-1),d=I(a.format),e=I(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];j.bindTexture(j.TEXTURE_CUBE_MAP,a.__webglTexture);F(j.TEXTURE_CUBE_MAP,
a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=j.createFramebuffer();a.__webglRenderbuffer[f]=j.createRenderbuffer();j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=j.TEXTURE_CUBE_MAP_POSITIVE_X+f;j.bindFramebuffer(j.FRAMEBUFFER,a.__webglFramebuffer[f]);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,h,g.__webglTexture,0);O(a.__webglRenderbuffer[f],a)}c&&j.generateMipmap(j.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=j.createFramebuffer(),a.__webglRenderbuffer=
a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:j.createRenderbuffer(),j.bindTexture(j.TEXTURE_2D,a.__webglTexture),F(j.TEXTURE_2D,a,c),j.texImage2D(j.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=j.TEXTURE_2D,j.bindFramebuffer(j.FRAMEBUFFER,a.__webglFramebuffer),j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_ATTACHMENT,j.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&
a.stencilBuffer&&j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_STENCIL_ATTACHMENT,j.RENDERBUFFER,a.__webglRenderbuffer):O(a.__webglRenderbuffer,a),c&&j.generateMipmap(j.TEXTURE_2D);b?j.bindTexture(j.TEXTURE_CUBE_MAP,null):j.bindTexture(j.TEXTURE_2D,null);j.bindRenderbuffer(j.RENDERBUFFER,null);j.bindFramebuffer(j.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=Ma,a=fb,d=bb,e=cb);b!==ba&&(j.bindFramebuffer(j.FRAMEBUFFER,b),
j.viewport(d,e,c,a),ba=b);sb=c;pb=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;a.shareDepthFrom=this.shareDepthFrom;
return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.RenderableVertex=function(){this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};THREE.RenderableFace3=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.centroidModel=new THREE.Vector3;this.normalModel=new THREE.Vector3;this.normalModelView=new THREE.Vector3;this.vertexNormalsLength=0;this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsModelView=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.material=this.color=null;this.uvs=[[]];this.z=
0};THREE.RenderableObject=function(){this.id=0;this.object=null;this.z=0};THREE.RenderableSprite=function(){this.id=0;this.object=null;this.rotation=this.z=this.y=this.x=0;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.vertexColors=[new THREE.Color,new THREE.Color];this.material=null;this.z=0};THREE.GeometryUtils={merge:function(a,b,c){var d,e,f=a.vertices.length,h=b instanceof THREE.Mesh?b.geometry:b,g=a.vertices,i=h.vertices,k=a.faces,m=h.faces,a=a.faceVertexUvs[0],h=h.faceVertexUvs[0];void 0===c&&(c=0);b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,e=(new THREE.Matrix3).getNormalMatrix(d));for(var b=0,l=i.length;b<l;b++){var p=i[b].clone();d&&p.applyMatrix4(d);g.push(p)}b=0;for(l=m.length;b<l;b++){var p=m[b],t,s,q=p.vertexNormals,n=p.vertexColors;t=new THREE.Face3(p.a+
f,p.b+f,p.c+f);t.normal.copy(p.normal);e&&t.normal.applyMatrix3(e).normalize();g=0;for(i=q.length;g<i;g++)s=q[g].clone(),e&&s.applyMatrix3(e).normalize(),t.vertexNormals.push(s);t.color.copy(p.color);g=0;for(i=n.length;g<i;g++)s=n[g],t.vertexColors.push(s.clone());t.materialIndex=p.materialIndex+c;t.centroid.copy(p.centroid);d&&t.centroid.applyMatrix4(d);k.push(t)}b=0;for(l=h.length;b<l;b++){c=h[b];d=[];g=0;for(i=c.length;g<i;g++)d.push(new THREE.Vector2(c[g].x,c[g].y));a.push(d)}},randomPointInTriangle:function(){var a=
new THREE.Vector3;return function(b,c,d){var e=new THREE.Vector3,f=THREE.Math.random16(),h=THREE.Math.random16();1<f+h&&(f=1-f,h=1-h);var g=1-f-h;e.copy(b);e.multiplyScalar(f);a.copy(c);a.multiplyScalar(h);e.add(a);a.copy(d);a.multiplyScalar(g);e.add(a);return e}}(),randomPointInFace:function(a,b){return THREE.GeometryUtils.randomPointInTriangle(b.vertices[a.a],b.vertices[a.b],b.vertices[a.c])},randomPointsInGeometry:function(a,b){function c(a){function b(c,d){if(d<c)return c;var e=c+Math.floor((d-
c)/2);return k[e]>a?b(c,e-1):k[e]<a?b(e+1,d):e}return b(0,k.length-1)}var d,e,f=a.faces,h=a.vertices,g=f.length,i=0,k=[],m,l,p;for(e=0;e<g;e++)d=f[e],m=h[d.a],l=h[d.b],p=h[d.c],d._area=THREE.GeometryUtils.triangleArea(m,l,p),i+=d._area,k[e]=i;d=[];for(e=0;e<b;e++)h=THREE.Math.random16()*i,h=c(h),d[e]=THREE.GeometryUtils.randomPointInFace(f[h],a,!0);return d},triangleArea:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){a.subVectors(d,c);b.subVectors(e,c);a.cross(b);return 0.5*
a.length()}}(),center:function(a){a.computeBoundingBox();var b=a.boundingBox,c=new THREE.Vector3;c.addVectors(b.min,b.max);c.multiplyScalar(-0.5);a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x,c.y,c.z));a.computeBoundingBox();return c},triangulateQuads:function(a){var b,c,d,e,f=[],h=[];b=0;for(c=a.faceVertexUvs.length;b<c;b++)h[b]=[];b=0;for(c=a.faces.length;b<c;b++){f.push(a.faces[b]);d=0;for(e=a.faceVertexUvs.length;d<e;d++)h[d].push(a.faceVertexUvs[d][b])}a.faces=f;a.faceVertexUvs=h;a.computeCentroids();
a.computeFaceNormals();a.computeVertexNormals();a.hasTangents&&a.computeTangents()}};THREE.ImageUtils={crossOrigin:"anonymous",loadTexture:function(a,b,c){var d=new THREE.ImageLoader;d.crossOrigin=this.crossOrigin;var e=new THREE.Texture(void 0,b),b=d.load(a,function(){e.needsUpdate=!0;c&&c(e)});e.image=b;e.sourceFile=a;return e},loadCompressedTexture:function(a,b,c,d){var e=new THREE.CompressedTexture;e.mapping=b;var f=new XMLHttpRequest;f.onload=function(){var a=THREE.ImageUtils.parseDDS(f.response,!0);e.format=a.format;e.mipmaps=a.mipmaps;e.image.width=a.width;e.image.height=a.height;
e.generateMipmaps=!1;e.needsUpdate=!0;c&&c(e)};f.onerror=d;f.open("GET",a,!0);f.responseType="arraybuffer";f.send(null);return e},loadTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.Texture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;for(var b=0,h=a.length;b<h;++b){var g=new Image;e[b]=g;g.onload=function(){e.loadCount+=1;6===e.loadCount&&(f.needsUpdate=!0,c&&c(f))};g.onerror=d;g.crossOrigin=this.crossOrigin;g.src=a[b]}return f},loadCompressedTextureCube:function(a,b,c,d){var e=
[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;b=function(a,b){return function(){var d=THREE.ImageUtils.parseDDS(a.response,!0);b.format=d.format;b.mipmaps=d.mipmaps;b.width=d.width;b.height=d.height;e.loadCount+=1;6===e.loadCount&&(f.format=d.format,f.needsUpdate=!0,c&&c(f))}};if(a instanceof Array)for(var h=0,g=a.length;h<g;++h){var i={};e[h]=i;var k=new XMLHttpRequest;k.onload=b(k,i);k.onerror=d;i=a[h];k.open("GET",i,!0);k.responseType=
"arraybuffer";k.send(null)}else k=new XMLHttpRequest,k.onload=function(){var a=THREE.ImageUtils.parseDDS(k.response,!0);if(a.isCubemap){for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var g=0;g<a.mipmapCount;g++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+g]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}f.format=a.format;f.needsUpdate=!0;c&&c(f)}},k.onerror=d,k.open("GET",a,!0),k.responseType="arraybuffer",k.send(null);return f},loadDDSTexture:function(a,
b,c,d){var e=[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;var h=new XMLHttpRequest;h.onload=function(){var a=THREE.ImageUtils.parseDDS(h.response,!0);if(a.isCubemap)for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var m=0;m<a.mipmapCount;m++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+m]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}else f.image.width=a.width,f.image.height=a.height,
f.mipmaps=a.mipmaps;f.format=a.format;f.needsUpdate=!0;c&&c(f)};h.onerror=d;h.open("GET",a,!0);h.responseType="arraybuffer";h.send(null);return f},parseDDS:function(a,b){function c(a){return a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)}var d={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},e=c("DXT1"),f=c("DXT3"),h=c("DXT5"),g=new Int32Array(a,0,31);if(542327876!==g[0])return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"),d;if(!g[20]&
4)return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"),d;var i=g[21],k=!1;switch(i){case e:e=8;d.format=THREE.RGB_S3TC_DXT1_Format;break;case f:e=16;d.format=THREE.RGBA_S3TC_DXT3_Format;break;case h:e=16;d.format=THREE.RGBA_S3TC_DXT5_Format;break;default:if(32==g[22]&&g[23]&16711680&&g[24]&65280&&g[25]&255&&g[26]&4278190080)k=!0,e=64,d.format=THREE.RGBAFormat;else return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ",String.fromCharCode(i&
255,i>>8&255,i>>16&255,i>>24&255)),d}d.mipmapCount=1;g[2]&131072&&!1!==b&&(d.mipmapCount=Math.max(1,g[7]));d.isCubemap=g[28]&512?!0:!1;d.width=g[4];d.height=g[3];for(var g=g[1]+4,f=d.width,h=d.height,i=d.isCubemap?6:1,m=0;m<i;m++){for(var l=0;l<d.mipmapCount;l++){if(k){var p;p=f;for(var t=h,s=4*p*t,q=new Uint8Array(a,g,s),s=new Uint8Array(s),n=0,u=0,r=0;r<t;r++)for(var v=0;v<p;v++){var z=q[u];u++;var G=q[u];u++;var w=q[u];u++;var y=q[u];u++;s[n]=w;n++;s[n]=G;n++;s[n]=z;n++;s[n]=y;n++}p=s;t=p.length}else t=
Math.max(4,f)/4*Math.max(4,h)/4*e,p=new Uint8Array(a,g,t);d.mipmaps.push({data:p,width:f,height:h});g+=t;f=Math.max(0.5*f,1);h=Math.max(0.5*h,1)}f=d.width;h=d.height}return d},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]},b=b|1,d=a.width,e=a.height,f=document.createElement("canvas");f.width=d;f.height=e;var h=f.getContext("2d");h.drawImage(a,0,0);for(var g=h.getImageData(0,0,d,e).data,i=h.createImageData(d,e),k=i.data,m=0;m<
d;m++)for(var l=0;l<e;l++){var p=0>l-1?0:l-1,t=l+1>e-1?e-1:l+1,s=0>m-1?0:m-1,q=m+1>d-1?d-1:m+1,n=[],u=[0,0,g[4*(l*d+m)]/255*b];n.push([-1,0,g[4*(l*d+s)]/255*b]);n.push([-1,-1,g[4*(p*d+s)]/255*b]);n.push([0,-1,g[4*(p*d+m)]/255*b]);n.push([1,-1,g[4*(p*d+q)]/255*b]);n.push([1,0,g[4*(l*d+q)]/255*b]);n.push([1,1,g[4*(t*d+q)]/255*b]);n.push([0,1,g[4*(t*d+m)]/255*b]);n.push([-1,1,g[4*(t*d+s)]/255*b]);p=[];s=n.length;for(t=0;t<s;t++){var q=n[t],r=n[(t+1)%s],q=[q[0]-u[0],q[1]-u[1],q[2]-u[2]],r=[r[0]-u[0],
r[1]-u[1],r[2]-u[2]];p.push(c([q[1]*r[2]-q[2]*r[1],q[2]*r[0]-q[0]*r[2],q[0]*r[1]-q[1]*r[0]]))}n=[0,0,0];for(t=0;t<p.length;t++)n[0]+=p[t][0],n[1]+=p[t][1],n[2]+=p[t][2];n[0]/=p.length;n[1]/=p.length;n[2]/=p.length;u=4*(l*d+m);k[u]=255*((n[0]+1)/2)|0;k[u+1]=255*((n[1]+1)/2)|0;k[u+2]=255*n[2]|0;k[u+3]=255}h.putImageData(i,0,0);return f},generateDataTexture:function(a,b,c){for(var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),h=Math.floor(255*c.g),c=Math.floor(255*c.b),g=0;g<d;g++)e[3*g]=f,e[3*g+
1]=h,e[3*g+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){return this.faces[this.face][this.weight][this.style]},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=a},drawText:function(a){for(var b=this.getFace(),c=this.size/b.resolution,d=
0,e=String(a).split(""),f=e.length,h=[],a=0;a<f;a++){var g=new THREE.Path,g=this.extractGlyphPoints(e[a],b,c,d,g),d=d+g.offset;h.push(g.path)}return{paths:h,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],h,g,i,k,m,l,p,t,s,q,n,u=b.glyphs[a]||b.glyphs["?"];if(u){if(u.o){b=u._cachedOutline||(u._cachedOutline=u.o.split(" "));k=b.length;for(a=0;a<k;)switch(i=b[a++],i){case "m":i=b[a++]*c+d;m=b[a++]*c;e.moveTo(i,m);break;case "l":i=b[a++]*c+d;m=b[a++]*c;e.lineTo(i,m);break;case "q":i=b[a++]*
c+d;m=b[a++]*c;t=b[a++]*c+d;s=b[a++]*c;e.quadraticCurveTo(t,s,i,m);if(h=f[f.length-1]){l=h.x;p=h.y;h=1;for(g=this.divisions;h<=g;h++){var r=h/g;THREE.Shape.Utils.b2(r,l,t,i);THREE.Shape.Utils.b2(r,p,s,m)}}break;case "b":if(i=b[a++]*c+d,m=b[a++]*c,t=b[a++]*c+d,s=b[a++]*-c,q=b[a++]*c+d,n=b[a++]*-c,e.bezierCurveTo(i,m,t,s,q,n),h=f[f.length-1]){l=h.x;p=h.y;h=1;for(g=this.divisions;h<=g;h++)r=h/g,THREE.Shape.Utils.b3(r,l,t,q,i),THREE.Shape.Utils.b3(r,p,s,n,m)}}}return{offset:u.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){var b=b||{},c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,h=0;h<b;f=h++)e+=a[f].x*a[h].y-a[h].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],h=[],g=[],i,k,m;if(0<b(a))for(k=0;k<e;k++)h[k]=k;else for(k=0;k<e;k++)h[k]=e-1-k;var l=2*e;for(k=e-1;2<e;){if(0>=l--){console.log("Warning, unable to triangulate polygon!");break}i=k;e<=i&&(i=0);k=i+1;e<=k&&(k=0);m=k+1;e<=m&&(m=0);var p;a:{var t=p=void 0,s=void 0,q=void 0,n=void 0,u=void 0,r=void 0,v=void 0,z=
void 0,t=a[h[i]].x,s=a[h[i]].y,q=a[h[k]].x,n=a[h[k]].y,u=a[h[m]].x,r=a[h[m]].y;if(1E-10>(q-t)*(r-s)-(n-s)*(u-t))p=!1;else{var G=void 0,w=void 0,y=void 0,E=void 0,A=void 0,K=void 0,D=void 0,F=void 0,O=void 0,x=void 0,O=F=D=z=v=void 0,G=u-q,w=r-n,y=t-u,E=s-r,A=q-t,K=n-s;for(p=0;p<e;p++)if(!(p===i||p===k||p===m))if(v=a[h[p]].x,z=a[h[p]].y,D=v-t,F=z-s,O=v-q,x=z-n,v-=u,z-=r,O=G*x-w*O,D=A*F-K*D,F=y*z-E*v,-1E-10<=O&&-1E-10<=F&&-1E-10<=D){p=!1;break a}p=!0}}if(p){f.push([a[h[i]],a[h[k]],a[h[m]]]);g.push([h[i],
h[k],h[m]]);i=k;for(m=k+1;m<e;i++,m++)h[i]=h[m];e--;l=2*e}}return d?g:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var h=0,g=e-1,i;h<=g;)if(d=Math.floor(h+(g-h)/2),i=c[d]-f,0>i)h=d+1;else if(0<i)g=d-1;else{g=d;break}d=g;if(c[d]==f)return d/(e-1);h=c[d];return c=(d+(f-h)/(c[d+1]-h))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4,a=a+1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){var a=0.5*(c-a),d=0.5*(d-b),f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};
THREE.CurvePath.prototype.getPoint=function(a){for(var b=a*this.getLength(),c=this.getCurveLengths(),a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,h;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var g,i,k,m,l=a[0]instanceof THREE.Vector3;m=l?new THREE.Vector3:new THREE.Vector2;i=0;for(k=a.length;i<k;i++)g=a[i],g.x>b?b=g.x:g.x<e&&(e=g.x),g.y>c?c=g.y:g.y<f&&(f=g.y),l&&(g.z>d?d=g.z:g.z<h&&(h=g.z)),m.add(g);a={minX:e,minY:f,maxX:b,maxY:c,centroid:m.divideScalar(k)};l&&(a.maxZ=d,a.minZ=h);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,h,g,i;d=0;for(e=a.length;d<e;d++)f=a[d],h=f.x,g=f.y,i=h/c.maxX,i=b.getUtoTmapping(i,h),h=b.getPoint(i),i=b.getTangent(i),i.set(-i.y,i.x).multiplyScalar(g),f.x=h.x+i.x,f.y=h.y+i.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.quaternionWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.quaternionObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.quaternionObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),
this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.quaternionWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.quaternionObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var h=Array.prototype.slice.call(arguments),g=this.actions[this.actions.length-1].args,g=new THREE.CubicBezierCurve(new THREE.Vector2(g[g.length-2],g[g.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(g);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:h})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var h=this.actions[this.actions.length-1].args;this.absarc(a+h[h.length-2],b+h[h.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,h){var g=this.actions[this.actions.length-1].args;this.absellipse(a+g[g.length-2],b+g[g.length-1],c,d,e,f,h)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,h){var g=Array.prototype.slice.call(arguments),i=new THREE.EllipseCurve(a,b,c,d,e,f,h);this.curves.push(i);i=i.getPoint(1);g.push(i.x);g.push(i.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:g})};
THREE.Path.prototype.getSpacedPoints=function(a){a||(a=40);for(var b=[],c=0;c<a;c++)b.push(this.getPoint(c/a));return b};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);var a=a||12,c=[],d,e,f,h,g,i,k,m,l,p,t,s,q;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],h=f.action,f=f.args,h){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:g=f[2];i=f[3];l=f[0];p=f[1];0<c.length?(h=c[c.length-1],t=h.x,
s=h.y):(h=this.actions[d-1].args,t=h[h.length-2],s=h[h.length-1]);for(f=1;f<=a;f++)q=f/a,h=THREE.Shape.Utils.b2(q,t,l,g),q=THREE.Shape.Utils.b2(q,s,p,i),c.push(new THREE.Vector2(h,q));break;case THREE.PathActions.BEZIER_CURVE_TO:g=f[4];i=f[5];l=f[0];p=f[1];k=f[2];m=f[3];0<c.length?(h=c[c.length-1],t=h.x,s=h.y):(h=this.actions[d-1].args,t=h[h.length-2],s=h[h.length-1]);for(f=1;f<=a;f++)q=f/a,h=THREE.Shape.Utils.b3(q,t,l,k,g),q=THREE.Shape.Utils.b3(q,s,p,m,i),c.push(new THREE.Vector2(h,q));break;case THREE.PathActions.CSPLINE_THRU:h=
this.actions[d-1].args;q=[new THREE.Vector2(h[h.length-2],h[h.length-1])];h=a*f[0].length;q=q.concat(f[0]);q=new THREE.SplineCurve(q);for(f=1;f<=h;f++)c.push(q.getPointAt(f/h));break;case THREE.PathActions.ARC:g=f[0];i=f[1];p=f[2];k=f[3];h=f[4];l=!!f[5];t=h-k;s=2*a;for(f=1;f<=s;f++)q=f/s,l||(q=1-q),q=k+q*t,h=g+p*Math.cos(q),q=i+p*Math.sin(q),c.push(new THREE.Vector2(h,q));break;case THREE.PathActions.ELLIPSE:g=f[0];i=f[1];p=f[2];m=f[3];k=f[4];h=f[5];l=!!f[6];t=h-k;s=2*a;for(f=1;f<=s;f++)q=f/s,l||
(q=1-q),q=k+q*t,h=g+p*Math.cos(q),q=i+m*Math.sin(q),c.push(new THREE.Vector2(h,q))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a){var b,c,d,e,f=[],h=new THREE.Path;b=0;for(c=this.actions.length;b<c;b++)d=this.actions[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=h.actions.length&&(f.push(h),h=new THREE.Path),h[d].apply(h,e);0!=h.actions.length&&f.push(h);if(0==f.length)return[];var g;e=[];if(1==f.length)return d=f[0],g=new THREE.Shape,g.actions=d.actions,g.curves=d.curves,e.push(g),e;b=!THREE.Shape.Utils.isClockWise(f[0].getPoints());if(a?!b:b){g=new THREE.Shape;b=0;for(c=
f.length;b<c;b++)d=f[b],h=THREE.Shape.Utils.isClockWise(d.getPoints()),(h=a?!h:h)?(g.actions=d.actions,g.curves=d.curves,e.push(g),g=new THREE.Shape):g.holes.push(d)}else{g=void 0;b=0;for(c=f.length;b<c;b++)d=f[b],h=THREE.Shape.Utils.isClockWise(d.getPoints()),(h=a?!h:h)?(g&&e.push(g),g=new THREE.Shape,g.actions=d.actions,g.curves=d.curves):g.holes.push(d);e.push(g)}return e};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};
THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};
THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={removeHoles:function(a,b){var c=a.concat(),d=c.concat(),e,f,h,g,i,k,m,l,p,t,s=[];for(i=0;i<b.length;i++){k=b[i];Array.prototype.push.apply(d,k);f=Number.POSITIVE_INFINITY;for(e=0;e<k.length;e++){p=k[e];t=[];for(l=0;l<c.length;l++)m=c[l],m=p.distanceToSquared(m),t.push(m),m<f&&(f=m,h=e,g=l)}e=0<=g-1?g-1:c.length-1;f=0<=h-1?h-1:k.length-1;var q=[k[h],c[g],c[e]];l=THREE.FontUtils.Triangulate.area(q);var n=[k[h],k[f],c[g]];p=THREE.FontUtils.Triangulate.area(n);t=g;m=h;g+=1;h+=-1;0>
g&&(g+=c.length);g%=c.length;0>h&&(h+=k.length);h%=k.length;e=0<=g-1?g-1:c.length-1;f=0<=h-1?h-1:k.length-1;q=[k[h],c[g],c[e]];q=THREE.FontUtils.Triangulate.area(q);n=[k[h],k[f],c[g]];n=THREE.FontUtils.Triangulate.area(n);l+p>q+n&&(g=t,h=m,0>g&&(g+=c.length),g%=c.length,0>h&&(h+=k.length),h%=k.length,e=0<=g-1?g-1:c.length-1,f=0<=h-1?h-1:k.length-1);l=c.slice(0,g);p=c.slice(g);t=k.slice(h);m=k.slice(0,h);f=[k[h],k[f],c[g]];s.push([k[h],c[g],c[e]]);s.push(f);c=l.concat(t).concat(m).concat(p)}return{shape:c,
isolatedPts:s,allpoints:d}},triangulateShape:function(a,b){var c=THREE.Shape.Utils.removeHoles(a,b),d=c.allpoints,e=c.isolatedPts,c=THREE.FontUtils.Triangulate(c.shape,!1),f,h,g,i,k={};f=0;for(h=d.length;f<h;f++)i=d[f].x+":"+d[f].y,void 0!==k[i]&&console.log("Duplicate point",i),k[i]=f;f=0;for(h=c.length;f<h;f++){g=c[f];for(d=0;3>d;d++)i=g[d].x+":"+g[d].y,i=k[i],void 0!==i&&(g[d]=i)}f=0;for(h=e.length;f<h;f++){g=e[f];for(d=0;3>d;d++)i=g[d].x+":"+g[d].y,i=k[i],void 0!==i&&(g[d]=i)}return c.concat(e)},
isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+
this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};THREE.EllipseCurve=function(a,b,c,d,e,f,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=h};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint=function(a){var b;b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e,a=(d.length-1)*a;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],h=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,h.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,h.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,h.z,c.z,a);return b});THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});THREE.AnimationHandler=function(){var a=[],b={},c={update:function(b){for(var c=0;c<a.length;c++)a[c].update(b)},addToUpdate:function(b){-1===a.indexOf(b)&&a.push(b)},removeFromUpdate:function(b){b=a.indexOf(b);-1!==b&&a.splice(b,1)},add:function(a){void 0!==b[a.name]&&console.log("THREE.AnimationHandler.add: Warning! "+a.name+" already exists in library. Overwriting.");b[a.name]=a;if(!0!==a.initialized){for(var c=0;c<a.hierarchy.length;c++){for(var d=0;d<a.hierarchy[c].keys.length;d++)if(0>a.hierarchy[c].keys[d].time&&
(a.hierarchy[c].keys[d].time=0),void 0!==a.hierarchy[c].keys[d].rot&&!(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)){var g=a.hierarchy[c].keys[d].rot;a.hierarchy[c].keys[d].rot=new THREE.Quaternion(g[0],g[1],g[2],g[3])}if(a.hierarchy[c].keys.length&&void 0!==a.hierarchy[c].keys[0].morphTargets){g={};for(d=0;d<a.hierarchy[c].keys.length;d++)for(var i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++){var k=a.hierarchy[c].keys[d].morphTargets[i];g[k]=-1}a.hierarchy[c].usedMorphTargets=g;
for(d=0;d<a.hierarchy[c].keys.length;d++){var m={};for(k in g){for(i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++)if(a.hierarchy[c].keys[d].morphTargets[i]===k){m[k]=a.hierarchy[c].keys[d].morphTargetsInfluences[i];break}i===a.hierarchy[c].keys[d].morphTargets.length&&(m[k]=0)}a.hierarchy[c].keys[d].morphTargetsInfluences=m}}for(d=1;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].time===a.hierarchy[c].keys[d-1].time&&(a.hierarchy[c].keys.splice(d,1),d--);for(d=0;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].index=
d}d=parseInt(a.length*a.fps,10);a.JIT={};a.JIT.hierarchy=[];for(c=0;c<a.hierarchy.length;c++)a.JIT.hierarchy.push(Array(d));a.initialized=!0}},get:function(a){if("string"===typeof a){if(b[a])return b[a];console.log("THREE.AnimationHandler.get: Couldn't find animation "+a);return null}},parse:function(a){var b=[];if(a instanceof THREE.SkinnedMesh)for(var c=0;c<a.bones.length;c++)b.push(a.bones[c]);else d(a,b);return b}},d=function(a,b){b.push(a);for(var c=0;c<a.children.length;c++)d(a.children[c],
b)};c.LINEAR=0;c.CATMULLROM=1;c.CATMULLROM_FORWARD=2;return c}();THREE.Animation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=this.isPaused=!0;this.interpolationType=void 0!==c?c:THREE.AnimationHandler.LINEAR;this.points=[];this.target=new THREE.Vector3};
THREE.Animation.prototype.play=function(a,b){if(!1===this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;var c,d=this.hierarchy.length,e;for(c=0;c<d;c++){e=this.hierarchy[c];e.matrixAutoUpdate=!0;void 0===e.animationCache&&(e.animationCache={},e.animationCache.prevKey={pos:0,rot:0,scl:0},e.animationCache.nextKey={pos:0,rot:0,scl:0},e.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:e.matrix);var f=e.animationCache.prevKey;e=e.animationCache.nextKey;
f.pos=this.data.hierarchy[c].keys[0];f.rot=this.data.hierarchy[c].keys[0];f.scl=this.data.hierarchy[c].keys[0];e.pos=this.getNextKeyWith("pos",c,1);e.rot=this.getNextKeyWith("rot",c,1);e.scl=this.getNextKeyWith("scl",c,1)}this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.Animation.prototype.pause=function(){!0===this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.Animation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this)};
THREE.Animation.prototype.update=function(a){if(!1!==this.isPlaying){var b=["pos","rot","scl"],c,d,e,f,h,g,i,k,m;for(m=this.currentTime+=a*this.timeScale;this.currentTime>this.data.length;)this.currentTime-=this.data.length;k=this.currentTime%=this.data.length;parseInt(Math.min(k*this.data.fps,this.data.length*this.data.fps),10);for(var l=0,p=this.hierarchy.length;l<p;l++){a=this.hierarchy[l];i=a.animationCache;for(var t=0;3>t;t++){c=b[t];h=i.prevKey[c];g=i.nextKey[c];if(g.time<=m){if(k<=m)if(this.loop){h=
this.data.hierarchy[l].keys[0];for(g=this.getNextKeyWith(c,l,1);null!==g&&g.time<k&&g.index>h.index;)h=g,g=this.getNextKeyWith(c,l,g.index+1)}else{this.stop();return}else{do h=g,g=this.getNextKeyWith(c,l,g.index+1);while(null!==g&&g.time<k&&g.index>h.index)}i.prevKey[c]=h;i.nextKey[c]=g}a.matrixAutoUpdate=!0;a.matrixWorldNeedsUpdate=!0;d=(k-h.time)/(g.time-h.time);e=h[c];f=g[c];if(0>d||1<d)console.log("THREE.Animation.update: Warning! Scale out of bounds:"+d+" on bone "+l),d=0>d?0:1;if("pos"===c)if(c=
a.position,this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+(f[2]-e[2])*d;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)this.points[0]=this.getPrevKeyWith("pos",l,h.index-1).pos,this.points[1]=e,this.points[2]=f,this.points[3]=this.getNextKeyWith("pos",l,g.index+1).pos,d=0.33*d+0.33,e=this.interpolateCatmullRom(this.points,d),c.x=e[0],c.y=e[1],c.z=e[2],
this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(d=this.interpolateCatmullRom(this.points,1.01*d),this.target.set(d[0],d[1],d[2]),this.target.sub(c),this.target.y=0,this.target.normalize(),d=Math.atan2(this.target.x,this.target.z),a.rotation.set(0,d,0))}else"rot"===c?THREE.Quaternion.slerp(e,f,a.quaternion,d):"scl"===c&&(c=a.scale,c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+(f[2]-e[2])*d)}}}};
THREE.Animation.prototype.interpolateCatmullRom=function(a,b){var c=[],d=[],e,f,h,g,i,k;e=(a.length-1)*b;f=Math.floor(e);e-=f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>a.length-2?f:f+1;c[3]=f>a.length-3?f:f+2;f=a[c[0]];g=a[c[1]];i=a[c[2]];k=a[c[3]];c=e*e;h=e*c;d[0]=this.interpolate(f[0],g[0],i[0],k[0],e,c,h);d[1]=this.interpolate(f[1],g[1],i[1],k[1],e,c,h);d[2]=this.interpolate(f[2],g[2],i[2],k[2],e,c,h);return d};
THREE.Animation.prototype.interpolate=function(a,b,c,d,e,f,h){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*h+(-3*(b-c)-2*a-d)*f+a*e+b};THREE.Animation.prototype.getNextKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};THREE.KeyFrameAnimation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;this.JITCompile=void 0!==c?c:!0;a=0;for(b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],h=this.getNextKeyWith(f,a,0);h&&h.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a,b){if(!this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;this.startTimeMs=b;this.startTime=1E7;this.endTime=-this.startTime;var c,d=this.hierarchy.length,e,f;for(c=0;c<d;c++)e=this.hierarchy[c],f=this.data.hierarchy[c],void 0===f.animationCache&&(f.animationCache={},f.animationCache.prevKey=null,f.animationCache.nextKey=null,f.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:e.matrix),e=this.data.hierarchy[c].keys,
e.length&&(f.animationCache.prevKey=e[0],f.animationCache.nextKey=e[1],this.startTime=Math.min(e[0].time,this.startTime),this.endTime=Math.max(e[e.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.KeyFrameAnimation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;b instanceof THREE.Bone?(d.copy(b.skinMatrix),b.skinMatrix=d):(d.copy(b.matrix),b.matrix=d);delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(this.isPlaying){var b,c,d,e,f=this.data.JIT.hierarchy,h,g,i;g=this.currentTime+=a*this.timeScale;h=this.currentTime%=this.data.length;h<this.startTimeMs&&(h=this.currentTime=this.startTimeMs+h);e=parseInt(Math.min(h*this.data.fps,this.data.length*this.data.fps),10);if((i=h<g)&&!this.loop){for(var a=0,k=this.hierarchy.length;a<k;a++){var m=this.data.hierarchy[a].keys,f=this.data.hierarchy[a].sids;d=m.length-1;e=this.hierarchy[a];if(m.length){for(m=
0;m<f.length;m++)h=f[m],(g=this.getPrevKeyWith(h,a,d))&&g.apply(h);this.data.hierarchy[a].node.updateMatrix();e.matrixWorldNeedsUpdate=!0}}this.stop()}else if(!(h<this.startTime)){a=0;for(k=this.hierarchy.length;a<k;a++){d=this.hierarchy[a];b=this.data.hierarchy[a];var m=b.keys,l=b.animationCache;if(this.JITCompile&&void 0!==f[a][e])d instanceof THREE.Bone?(d.skinMatrix=f[a][e],d.matrixWorldNeedsUpdate=!1):(d.matrix=f[a][e],d.matrixWorldNeedsUpdate=!0);else if(m.length){this.JITCompile&&l&&(d instanceof
THREE.Bone?d.skinMatrix=l.originalMatrix:d.matrix=l.originalMatrix);b=l.prevKey;c=l.nextKey;if(b&&c){if(c.time<=g){if(i&&this.loop){b=m[0];for(c=m[1];c.time<h;)b=c,c=m[b.index+1]}else if(!i)for(var p=m.length-1;c.time<h&&c.index!==p;)b=c,c=m[b.index+1];l.prevKey=b;l.nextKey=c}c.time>=h?b.interpolate(c,h):b.interpolate(c,c.time)}this.data.hierarchy[a].node.updateMatrix();d.matrixWorldNeedsUpdate=!0}}if(this.JITCompile&&void 0===f[0][e]){this.hierarchy[0].updateMatrixWorld(!0);for(a=0;a<this.hierarchy.length;a++)f[a][e]=
this.hierarchy[a]instanceof THREE.Bone?this.hierarchy[a].skinMatrix.clone():this.hierarchy[a].matrix.clone()}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,0,-1);h.lookAt(new THREE.Vector3(0,-1,0));this.add(h);var g=new THREE.PerspectiveCamera(90,
1,a,b);g.up.set(0,-1,0);g.lookAt(new THREE.Vector3(0,0,1));this.add(g);var i=new THREE.PerspectiveCamera(90,1,a,b);i.up.set(0,-1,0);i.lookAt(new THREE.Vector3(0,0,-1));this.add(i);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,p=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,h,c);c.activeCubeFace=4;a.render(b,g,c);c.generateMipmaps=p;c.activeCubeFace=5;a.render(b,i,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CombinedCamera=function(a,b,c,d,e,f,h){THREE.Camera.call(this);this.fov=c;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2;this.cameraO=new THREE.OrthographicCamera(a/-2,a/2,b/2,b/-2,f,h);this.cameraP=new THREE.PerspectiveCamera(c,a/b,d,e);this.zoom=1;this.toPerspective()};THREE.CombinedCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective=function(){this.near=this.cameraP.near;this.far=this.cameraP.far;this.cameraP.fov=this.fov/this.zoom;this.cameraP.updateProjectionMatrix();this.projectionMatrix=this.cameraP.projectionMatrix;this.inPerspectiveMode=!0;this.inOrthographicMode=!1};
THREE.CombinedCamera.prototype.toOrthographic=function(){var a=this.cameraP.aspect,b=(this.cameraP.near+this.cameraP.far)/2,b=Math.tan(this.fov/2)*b,a=2*b*a/2,b=b/this.zoom,a=a/this.zoom;this.cameraO.left=-a;this.cameraO.right=a;this.cameraO.top=b;this.cameraO.bottom=-b;this.cameraO.updateProjectionMatrix();this.near=this.cameraO.near;this.far=this.cameraO.far;this.projectionMatrix=this.cameraO.projectionMatrix;this.inPerspectiveMode=!1;this.inOrthographicMode=!0};
THREE.CombinedCamera.prototype.setSize=function(a,b){this.cameraP.aspect=a/b;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2};THREE.CombinedCamera.prototype.setFov=function(a){this.fov=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.updateProjectionMatrix=function(){this.inPerspectiveMode?this.toPerspective():(this.toPerspective(),this.toOrthographic())};
THREE.CombinedCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);var c=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.setFov(c);return c};THREE.CombinedCamera.prototype.setZoom=function(a){this.zoom=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.toFrontView=function(){this.rotation.x=0;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toBackView=function(){this.rotation.x=0;this.rotation.y=Math.PI;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toLeftView=function(){this.rotation.x=0;this.rotation.y=-Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toRightView=function(){this.rotation.x=0;this.rotation.y=Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toTopView=function(){this.rotation.x=-Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toBottomView=function(){this.rotation.x=Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.radius=a=a||50;this.segments=b=void 0!==b?Math.max(3,b):8;this.thetaStart=c=void 0!==c?c:0;this.thetaLength=d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var h=new THREE.Vector2(0.5,0.5);this.vertices.push(e);f.push(h);for(e=0;e<=b;e++){var g=new THREE.Vector3,i=c+e/b*d;g.x=a*Math.cos(i);g.y=a*Math.sin(i);this.vertices.push(g);f.push(new THREE.Vector2((g.x/a+1)/2,(g.y/a+1)/2))}c=new THREE.Vector3(0,0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,
e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),h.clone()]);this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CubeGeometry=function(a,b,c,d,e,f){function h(a,b,c,d,e,f,h,q){var n,u=g.widthSegments,r=g.heightSegments,v=e/2,z=f/2,G=g.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)n="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)n="y",r=g.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)n="x",u=g.depthSegments;var w=u+1,y=r+1,E=e/u,A=f/r,K=new THREE.Vector3;K[n]=0<h?1:-1;for(e=0;e<y;e++)for(f=0;f<w;f++){var D=new THREE.Vector3;D[a]=(f*E-v)*c;D[b]=(e*A-z)*d;D[n]=h;g.vertices.push(D)}for(e=
0;e<r;e++)for(f=0;f<u;f++)z=f+w*e,a=f+w*(e+1),b=f+1+w*(e+1),c=f+1+w*e,d=new THREE.Vector2(f/u,1-e/r),h=new THREE.Vector2(f/u,1-(e+1)/r),n=new THREE.Vector2((f+1)/u,1-(e+1)/r),v=new THREE.Vector2((f+1)/u,1-e/r),z=new THREE.Face3(z+G,a+G,c+G),z.normal.copy(K),z.vertexNormals.push(K.clone(),K.clone(),K.clone()),z.materialIndex=q,g.faces.push(z),g.faceVertexUvs[0].push([d,h,v]),z=new THREE.Face3(a+G,b+G,c+G),z.normal.copy(K),z.vertexNormals.push(K.clone(),K.clone(),K.clone()),z.materialIndex=q,g.faces.push(z),
g.faceVertexUvs[0].push([h.clone(),n,v.clone()])}THREE.Geometry.call(this);var g=this;this.width=a;this.height=b;this.depth=c;this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;a=this.width/2;b=this.height/2;c=this.depth/2;h("z","y",-1,-1,this.depth,this.height,a,0);h("z","y",1,-1,this.depth,this.height,-a,1);h("x","z",1,1,this.width,this.depth,b,2);h("x","z",1,-1,this.width,this.depth,-b,3);h("x","y",1,-1,this.width,this.height,c,4);h("x","y",-1,-1,this.width,this.height,-c,
5);this.computeCentroids();this.mergeVertices()};THREE.CubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.radiusTop=a=void 0!==a?a:20;this.radiusBottom=b=void 0!==b?b:20;this.height=c=void 0!==c?c:100;this.radialSegments=d=d||8;this.heightSegments=e=e||1;this.openEnded=f=void 0!==f?f:!1;var h=c/2,g,i,k=[],m=[];for(i=0;i<=e;i++){var l=[],p=[],t=i/e,s=t*(b-a)+a;for(g=0;g<=d;g++){var q=g/d,n=new THREE.Vector3;n.x=s*Math.sin(2*q*Math.PI);n.y=-t*c+h;n.z=s*Math.cos(2*q*Math.PI);this.vertices.push(n);l.push(this.vertices.length-1);p.push(new THREE.Vector2(q,
1-t))}k.push(l);m.push(p)}c=(b-a)/c;for(g=0;g<d;g++){0!==a?(l=this.vertices[k[0][g]].clone(),p=this.vertices[k[0][g+1]].clone()):(l=this.vertices[k[1][g]].clone(),p=this.vertices[k[1][g+1]].clone());l.setY(Math.sqrt(l.x*l.x+l.z*l.z)*c).normalize();p.setY(Math.sqrt(p.x*p.x+p.z*p.z)*c).normalize();for(i=0;i<e;i++){var t=k[i][g],s=k[i+1][g],q=k[i+1][g+1],n=k[i][g+1],u=l.clone(),r=l.clone(),v=p.clone(),z=p.clone(),G=m[i][g].clone(),w=m[i+1][g].clone(),y=m[i+1][g+1].clone(),E=m[i][g+1].clone();this.faces.push(new THREE.Face3(t,
s,n,[u,r,z]));this.faceVertexUvs[0].push([G,w,E]);this.faces.push(new THREE.Face3(s,q,n,[r.clone(),v,z.clone()]));this.faceVertexUvs[0].push([w.clone(),y,E.clone()])}}if(!1===f&&0<a){this.vertices.push(new THREE.Vector3(0,h,0));for(g=0;g<d;g++)t=k[0][g],s=k[0][g+1],q=this.vertices.length-1,u=new THREE.Vector3(0,1,0),r=new THREE.Vector3(0,1,0),v=new THREE.Vector3(0,1,0),G=m[0][g].clone(),w=m[0][g+1].clone(),y=new THREE.Vector2(w.x,0),this.faces.push(new THREE.Face3(t,s,q,[u,r,v])),this.faceVertexUvs[0].push([G,
w,y])}if(!1===f&&0<b){this.vertices.push(new THREE.Vector3(0,-h,0));for(g=0;g<d;g++)t=k[i][g+1],s=k[i][g],q=this.vertices.length-1,u=new THREE.Vector3(0,-1,0),r=new THREE.Vector3(0,-1,0),v=new THREE.Vector3(0,-1,0),G=m[i][g+1].clone(),w=m[i][g].clone(),y=new THREE.Vector2(w.x,1),this.faces.push(new THREE.Face3(t,s,q,[u,r,v])),this.faceVertexUvs[0].push([G,w,y])}this.computeCentroids();this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.shapebb=a[a.length-1].getBoundingBox(),this.addShapeList(a,b),this.computeCentroids(),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=THREE.ExtrudeGeometry.__v1,e=THREE.ExtrudeGeometry.__v2,f=THREE.ExtrudeGeometry.__v3,g=THREE.ExtrudeGeometry.__v4,h=THREE.ExtrudeGeometry.__v5,i=THREE.ExtrudeGeometry.__v6;d.set(a.x-b.x,a.y-b.y);e.set(a.x-c.x,a.y-c.y);d=d.normalize();e=e.normalize();f.set(-d.y,d.x);g.set(e.y,-e.x);h.copy(a).add(f);i.copy(a).add(g);if(h.equals(i))return g.clone();
h.copy(b).add(f);i.copy(c).add(g);f=d.dot(g);g=i.sub(h).dot(g);0===f&&(console.log("Either infinite or no solutions!"),0===g?console.log("Its finite solutions."):console.log("Too bad, no solutions."));g/=f;return 0>g?(b=Math.atan2(b.y-a.y,b.x-a.x),a=Math.atan2(c.y-a.y,c.x-a.x),b>a&&(a+=2*Math.PI),c=(b+a)/2,a=-Math.cos(c),c=-Math.sin(c),new THREE.Vector2(a,c)):d.multiplyScalar(g).add(h).sub(a).clone()}function e(c,d){var e,f;for(C=c.length;0<=--C;){e=C;f=C-1;0>f&&(f=c.length-1);for(var g=0,h=t+2*m,
g=0;g<h;g++){var i=ca*g,k=ca*(g+1),l=d+e+i,i=d+f+i,n=d+f+k,k=d+e+k,p=c,q=g,s=h,u=e,w=f,l=l+F,i=i+F,n=n+F,k=k+F;D.faces.push(new THREE.Face3(l,i,k,null,null,r));D.faces.push(new THREE.Face3(i,n,k,null,null,r));l=v.generateSideWallUV(D,a,p,b,l,i,n,k,q,s,u,w);D.faceVertexUvs[0].push([l[0],l[1],l[3]]);D.faceVertexUvs[0].push([l[1],l[2],l[3]])}}}function f(a,b,c){D.vertices.push(new THREE.Vector3(a,b,c))}function h(c,d,e,f){c+=F;d+=F;e+=F;D.faces.push(new THREE.Face3(c,d,e,null,null,u));c=f?v.generateBottomUV(D,
a,b,c,d,e):v.generateTopUV(D,a,b,c,d,e);D.faceVertexUvs[0].push(c)}var g=void 0!==b.amount?b.amount:100,i=void 0!==b.bevelThickness?b.bevelThickness:6,k=void 0!==b.bevelSize?b.bevelSize:i-2,m=void 0!==b.bevelSegments?b.bevelSegments:3,l=void 0!==b.bevelEnabled?b.bevelEnabled:!0,p=void 0!==b.curveSegments?b.curveSegments:12,t=void 0!==b.steps?b.steps:1,s=b.extrudePath,q,n=!1,u=b.material,r=b.extrudeMaterial,v=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,z,G,w,y;s&&(q=
s.getSpacedPoints(t),n=!0,l=!1,z=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(s,t,!1),G=new THREE.Vector3,w=new THREE.Vector3,y=new THREE.Vector3);l||(k=i=m=0);var E,A,K,D=this,F=this.vertices.length,p=a.extractPoints(p),O=p.shape,p=p.holes;if(s=!THREE.Shape.Utils.isClockWise(O)){O=O.reverse();A=0;for(K=p.length;A<K;A++)E=p[A],THREE.Shape.Utils.isClockWise(E)&&(p[A]=E.reverse());s=!1}var x=THREE.Shape.Utils.triangulateShape(O,p),s=O;A=0;for(K=p.length;A<K;A++)E=p[A],O=O.concat(E);
var I,B,M,J,ca=O.length,na=x.length,pa=[],C=0,Q=s.length;I=Q-1;for(B=C+1;C<Q;C++,I++,B++)I===Q&&(I=0),B===Q&&(B=0),pa[C]=d(s[C],s[I],s[B]);var R=[],L,da=pa.concat();A=0;for(K=p.length;A<K;A++){E=p[A];L=[];C=0;Q=E.length;I=Q-1;for(B=C+1;C<Q;C++,I++,B++)I===Q&&(I=0),B===Q&&(B=0),L[C]=d(E[C],E[I],E[B]);R.push(L);da=da.concat(L)}for(I=0;I<m;I++){E=I/m;M=i*(1-E);B=k*Math.sin(E*Math.PI/2);C=0;for(Q=s.length;C<Q;C++)J=c(s[C],pa[C],B),f(J.x,J.y,-M);A=0;for(K=p.length;A<K;A++){E=p[A];L=R[A];C=0;for(Q=E.length;C<
Q;C++)J=c(E[C],L[C],B),f(J.x,J.y,-M)}}B=k;for(C=0;C<ca;C++)J=l?c(O[C],da[C],B):O[C],n?(w.copy(z.normals[0]).multiplyScalar(J.x),G.copy(z.binormals[0]).multiplyScalar(J.y),y.copy(q[0]).add(w).add(G),f(y.x,y.y,y.z)):f(J.x,J.y,0);for(E=1;E<=t;E++)for(C=0;C<ca;C++)J=l?c(O[C],da[C],B):O[C],n?(w.copy(z.normals[E]).multiplyScalar(J.x),G.copy(z.binormals[E]).multiplyScalar(J.y),y.copy(q[E]).add(w).add(G),f(y.x,y.y,y.z)):f(J.x,J.y,g/t*E);for(I=m-1;0<=I;I--){E=I/m;M=i*(1-E);B=k*Math.sin(E*Math.PI/2);C=0;for(Q=
s.length;C<Q;C++)J=c(s[C],pa[C],B),f(J.x,J.y,g+M);A=0;for(K=p.length;A<K;A++){E=p[A];L=R[A];C=0;for(Q=E.length;C<Q;C++)J=c(E[C],L[C],B),n?f(J.x,J.y+q[t-1].y,q[t-1].x+M):f(J.x,J.y,g+M)}}if(l){i=0*ca;for(C=0;C<na;C++)g=x[C],h(g[2]+i,g[1]+i,g[0]+i,!0);i=ca*(t+2*m);for(C=0;C<na;C++)g=x[C],h(g[0]+i,g[1]+i,g[2]+i,!1)}else{for(C=0;C<na;C++)g=x[C],h(g[2],g[1],g[0],!0);for(C=0;C<na;C++)g=x[C],h(g[0]+ca*t,g[1]+ca*t,g[2]+ca*t,!1)}g=0;e(s,g);g+=s.length;A=0;for(K=p.length;A<K;A++)E=p[A],e(E,g),g+=E.length};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.Vector2(a.vertices[d].x,a.vertices[d].y),new THREE.Vector2(b,e),new THREE.Vector2(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,h,g){var b=a.vertices[e].x,c=a.vertices[e].y,e=a.vertices[e].z,d=a.vertices[f].x,i=a.vertices[f].y,f=a.vertices[f].z,k=a.vertices[h].x,
m=a.vertices[h].y,h=a.vertices[h].z,l=a.vertices[g].x,p=a.vertices[g].y,a=a.vertices[g].z;return 0.01>Math.abs(c-i)?[new THREE.Vector2(b,1-e),new THREE.Vector2(d,1-f),new THREE.Vector2(k,1-h),new THREE.Vector2(l,1-a)]:[new THREE.Vector2(c,1-e),new THREE.Vector2(i,1-f),new THREE.Vector2(m,1-h),new THREE.Vector2(p,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;
THREE.ExtrudeGeometry.__v5=new THREE.Vector2;THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.shapebb=a[a.length-1].getBoundingBox();this.addShapeList(a,b);this.computeCentroids();this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,h,g=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var i=e.shape,k=e.holes;if(!THREE.Shape.Utils.isClockWise(i)){i=i.reverse();e=0;for(f=k.length;e<f;e++)h=k[e],THREE.Shape.Utils.isClockWise(h)&&(k[e]=h.reverse())}var m=THREE.Shape.Utils.triangulateShape(i,k);e=0;for(f=k.length;e<f;e++)h=k[e],
i=i.concat(h);k=i.length;f=m.length;for(e=0;e<k;e++)h=i[e],this.vertices.push(new THREE.Vector3(h.x,h.y,0));for(e=0;e<f;e++)k=m[e],i=k[0]+g,h=k[1]+g,k=k[2]+g,this.faces.push(new THREE.Face3(i,h,k,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,i,h,k))};THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);for(var b=b||12,c=c||0,d=d||2*Math.PI,e=1/(a.length-1),f=1/b,h=0,g=b;h<=g;h++)for(var i=c+h*f*d,k=Math.cos(i),m=Math.sin(i),i=0,l=a.length;i<l;i++){var p=a[i],t=new THREE.Vector3;t.x=k*p.x-m*p.y;t.y=m*p.x+k*p.y;t.z=p.z;this.vertices.push(t)}c=a.length;h=0;for(g=b;h<g;h++){i=0;for(l=a.length-1;i<l;i++){var b=m=i+c*h,d=m+c,k=m+1+c,m=m+1,p=h*f,t=i*e,s=p+f,q=t+e;this.faces.push(new THREE.Face3(b,d,m));this.faceVertexUvs[0].push([new THREE.Vector2(p,
t),new THREE.Vector2(s,t),new THREE.Vector2(p,q)]);this.faces.push(new THREE.Face3(d,k,m));this.faceVertexUvs[0].push([new THREE.Vector2(s,t),new THREE.Vector2(s,q),new THREE.Vector2(p,q)])}}this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.width=a;this.height=b;this.widthSegments=c||1;this.heightSegments=d||1;for(var e=a/2,f=b/2,c=this.widthSegments,d=this.heightSegments,h=c+1,g=d+1,i=this.width/c,k=this.height/d,m=new THREE.Vector3(0,0,1),a=0;a<g;a++)for(b=0;b<h;b++)this.vertices.push(new THREE.Vector3(b*i-e,-(a*k-f),0));for(a=0;a<d;a++)for(b=0;b<c;b++){var l=b+h*a,e=b+h*(a+1),f=b+1+h*(a+1),g=b+1+h*a,i=new THREE.Vector2(b/c,1-a/d),k=new THREE.Vector2(b/c,1-(a+1)/
d),p=new THREE.Vector2((b+1)/c,1-(a+1)/d),t=new THREE.Vector2((b+1)/c,1-a/d),l=new THREE.Face3(l,e,g);l.normal.copy(m);l.vertexNormals.push(m.clone(),m.clone(),m.clone());this.faces.push(l);this.faceVertexUvs[0].push([i,k,t]);l=new THREE.Face3(e,f,g);l.normal.copy(m);l.vertexNormals.push(m.clone(),m.clone(),m.clone());this.faces.push(l);this.faceVertexUvs[0].push([k.clone(),p,t.clone()])}this.computeCentroids()};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);for(var a=a||0,b=b||50,e=void 0!==e?e:0,f=void 0!==f?f:2*Math.PI,c=void 0!==c?Math.max(3,c):8,d=void 0!==d?Math.max(3,d):8,h,g=[],i=a,k=(b-a)/d,a=0;a<=d;a++){for(h=0;h<=c;h++){var m=new THREE.Vector3,l=e+h/c*f;m.x=i*Math.cos(l);m.y=i*Math.sin(l);this.vertices.push(m);g.push(new THREE.Vector2((m.x/b+1)/2,(m.y/b+1)/2))}i+=k}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++){e=a*c;for(h=0;h<=c;h++)l=h+e,f=l+a,k=l+c+a,m=l+c+1+a,this.faces.push(new THREE.Face3(f,
k,m,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([g[f].clone(),g[k].clone(),g[m].clone()]),f=l+a,k=l+c+1+a,m=l+1+a,this.faces.push(new THREE.Face3(f,k,m,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([g[f].clone(),g[k].clone(),g[m].clone()])}this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,i)};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry=function(a,b,c,d,e,f,h){THREE.Geometry.call(this);this.radius=a=a||50;this.widthSegments=b=Math.max(3,Math.floor(b)||8);this.heightSegments=c=Math.max(2,Math.floor(c)||6);this.phiStart=d=void 0!==d?d:0;this.phiLength=e=void 0!==e?e:2*Math.PI;this.thetaStart=f=void 0!==f?f:0;this.thetaLength=h=void 0!==h?h:Math.PI;var g,i,k=[],m=[];for(i=0;i<=c;i++){var l=[],p=[];for(g=0;g<=b;g++){var t=g/b,s=i/c,q=new THREE.Vector3;q.x=-a*Math.cos(d+t*e)*Math.sin(f+s*h);q.y=a*Math.cos(f+s*h);
q.z=a*Math.sin(d+t*e)*Math.sin(f+s*h);this.vertices.push(q);l.push(this.vertices.length-1);p.push(new THREE.Vector2(t,1-s))}k.push(l);m.push(p)}for(i=0;i<this.heightSegments;i++)for(g=0;g<this.widthSegments;g++){var b=k[i][g+1],c=k[i][g],d=k[i+1][g],e=k[i+1][g+1],f=this.vertices[b].clone().normalize(),h=this.vertices[c].clone().normalize(),l=this.vertices[d].clone().normalize(),p=this.vertices[e].clone().normalize(),t=m[i][g+1].clone(),s=m[i][g].clone(),q=m[i+1][g].clone(),n=m[i+1][g+1].clone();Math.abs(this.vertices[b].y)===
this.radius?(t.x=(t.x+s.x)/2,this.faces.push(new THREE.Face3(b,d,e,[f,l,p])),this.faceVertexUvs[0].push([t,q,n])):Math.abs(this.vertices[d].y)===this.radius?(q.x=(q.x+n.x)/2,this.faces.push(new THREE.Face3(b,c,d,[f,h,l])),this.faceVertexUvs[0].push([t,s,q])):(this.faces.push(new THREE.Face3(b,c,e,[f,h,p])),this.faceVertexUvs[0].push([t,s,n]),this.faces.push(new THREE.Face3(c,d,e,[h.clone(),l,p.clone()])),this.faceVertexUvs[0].push([s.clone(),q,n.clone()]))}this.computeCentroids();this.computeFaceNormals();
this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TextGeometry=function(a,b){var b=b||{},c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||8;this.tubularSegments=d||6;this.arc=e||2*Math.PI;e=new THREE.Vector3;a=[];b=[];for(c=0;c<=this.radialSegments;c++)for(d=0;d<=this.tubularSegments;d++){var f=d/this.tubularSegments*this.arc,h=2*c/this.radialSegments*Math.PI;e.x=this.radius*Math.cos(f);e.y=this.radius*Math.sin(f);var g=new THREE.Vector3;g.x=(this.radius+this.tube*Math.cos(h))*Math.cos(f);g.y=(this.radius+this.tube*
Math.cos(h))*Math.sin(f);g.z=this.tube*Math.sin(h);this.vertices.push(g);a.push(new THREE.Vector2(d/this.tubularSegments,c/this.radialSegments));b.push(g.clone().sub(e).normalize())}for(c=1;c<=this.radialSegments;c++)for(d=1;d<=this.tubularSegments;d++){var e=(this.tubularSegments+1)*c+d-1,f=(this.tubularSegments+1)*(c-1)+d-1,h=(this.tubularSegments+1)*(c-1)+d,g=(this.tubularSegments+1)*c+d,i=new THREE.Face3(e,f,g,[b[e],b[f],b[g]]);i.normal.add(b[e]);i.normal.add(b[f]);i.normal.add(b[g]);i.normal.normalize();
this.faces.push(i);this.faceVertexUvs[0].push([a[e].clone(),a[f].clone(),a[g].clone()]);i=new THREE.Face3(f,h,g,[b[f],b[h],b[g]]);i.normal.add(b[f]);i.normal.add(b[h]);i.normal.add(b[g]);i.normal.normalize();this.faces.push(i);this.faceVertexUvs[0].push([a[f].clone(),a[h].clone(),a[g].clone()])}this.computeCentroids()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry=function(a,b,c,d,e,f,h){function g(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a),a=b/c*a,b=Math.cos(a),f=0.5*(d*(2+b))*f,g=0.5*d*(2+b)*g,d=0.5*e*d*Math.sin(a);return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||64;this.tubularSegments=d||8;this.p=e||2;this.q=f||3;this.heightScale=h||1;this.grid=Array(this.radialSegments);c=new THREE.Vector3;d=new THREE.Vector3;e=new THREE.Vector3;for(a=0;a<this.radialSegments;++a){this.grid[a]=
Array(this.tubularSegments);b=2*(a/this.radialSegments)*this.p*Math.PI;f=g(b,this.q,this.p,this.radius,this.heightScale);b=g(b+0.01,this.q,this.p,this.radius,this.heightScale);c.subVectors(b,f);d.addVectors(b,f);e.crossVectors(c,d);d.crossVectors(e,c);e.normalize();d.normalize();for(b=0;b<this.tubularSegments;++b){var i=2*(b/this.tubularSegments)*Math.PI,h=-this.tube*Math.cos(i),i=this.tube*Math.sin(i),k=new THREE.Vector3;k.x=f.x+h*d.x+i*e.x;k.y=f.y+h*d.y+i*e.y;k.z=f.z+h*d.z+i*e.z;this.grid[a][b]=
this.vertices.push(k)-1}}for(a=0;a<this.radialSegments;++a)for(b=0;b<this.tubularSegments;++b){var e=(a+1)%this.radialSegments,f=(b+1)%this.tubularSegments,c=this.grid[a][b],d=this.grid[e][b],e=this.grid[e][f],f=this.grid[a][f],h=new THREE.Vector2(a/this.radialSegments,b/this.tubularSegments),i=new THREE.Vector2((a+1)/this.radialSegments,b/this.tubularSegments),k=new THREE.Vector2((a+1)/this.radialSegments,(b+1)/this.tubularSegments),m=new THREE.Vector2(a/this.radialSegments,(b+1)/this.tubularSegments);
this.faces.push(new THREE.Face3(c,d,f));this.faceVertexUvs[0].push([h,i,m]);this.faces.push(new THREE.Face3(d,e,f));this.faceVertexUvs[0].push([i.clone(),k,m.clone()])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.path=a;this.segments=b||64;this.radius=c||1;this.radialSegments=d||8;this.closed=e||!1;this.grid=[];var f,h,d=this.segments+1,g,i,k,e=new THREE.Vector3,m,l,b=new THREE.TubeGeometry.FrenetFrames(this.path,this.segments,this.closed);m=b.normals;l=b.binormals;this.tangents=b.tangents;this.normals=m;this.binormals=l;for(b=0;b<d;b++){this.grid[b]=[];c=b/(d-1);k=a.getPointAt(c);f=m[b];h=l[b];for(c=0;c<this.radialSegments;c++)g=2*(c/this.radialSegments)*
Math.PI,i=-this.radius*Math.cos(g),g=this.radius*Math.sin(g),e.copy(k),e.x+=i*f.x+g*h.x,e.y+=i*f.y+g*h.y,e.z+=i*f.z+g*h.z,this.grid[b][c]=this.vertices.push(new THREE.Vector3(e.x,e.y,e.z))-1}for(b=0;b<this.segments;b++)for(c=0;c<this.radialSegments;c++)e=this.closed?(b+1)%this.segments:b+1,m=(c+1)%this.radialSegments,a=this.grid[b][c],d=this.grid[e][c],e=this.grid[e][m],m=this.grid[b][m],l=new THREE.Vector2(b/this.segments,c/this.radialSegments),f=new THREE.Vector2((b+1)/this.segments,c/this.radialSegments),
h=new THREE.Vector2((b+1)/this.segments,(c+1)/this.radialSegments),i=new THREE.Vector2(b/this.segments,(c+1)/this.radialSegments),this.faces.push(new THREE.Face3(a,d,m)),this.faceVertexUvs[0].push([l,f,i]),this.faces.push(new THREE.Face3(d,e,m)),this.faceVertexUvs[0].push([f.clone(),h,i.clone()]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],h=[],g=new THREE.Vector3,i=new THREE.Matrix4,b=b+1,k,m,l;this.tangents=e;this.normals=f;this.binormals=h;for(k=0;k<b;k++)m=k/(b-1),e[k]=a.getTangentAt(m),e[k].normalize();f[0]=new THREE.Vector3;h[0]=new THREE.Vector3;a=Number.MAX_VALUE;k=Math.abs(e[0].x);m=Math.abs(e[0].y);l=Math.abs(e[0].z);k<=a&&(a=k,d.set(1,0,0));m<=a&&(a=m,d.set(0,1,0));l<=a&&d.set(0,0,1);g.crossVectors(e[0],
d).normalize();f[0].crossVectors(e[0],g);h[0].crossVectors(e[0],f[0]);for(k=1;k<b;k++)f[k]=f[k-1].clone(),h[k]=h[k-1].clone(),g.crossVectors(e[k-1],e[k]),1E-4<g.length()&&(g.normalize(),d=Math.acos(THREE.Math.clamp(e[k-1].dot(e[k]),-1,1)),f[k].applyMatrix4(i.makeRotationAxis(g,d))),h[k].crossVectors(e[k],f[k]);if(c){d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1));d/=b-1;0<e[0].dot(g.crossVectors(f[0],f[b-1]))&&(d=-d);for(k=1;k<b;k++)f[k].applyMatrix4(i.makeRotationAxis(e[k],d*k)),h[k].crossVectors(e[k],
f[k])}};THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=g.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5,a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);d.centroid.add(a).add(b).add(c).divideScalar(3);g.faces.push(d);d=Math.atan2(d.centroid.z,-d.centroid.x);g.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),
h(c.uv,c,d)])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+0.5,a.y));return a.clone()}THREE.Geometry.call(this);for(var c=c||1,d=d||0,g=this,i=0,k=a.length;i<k;i++)e(new THREE.Vector3(a[i][0],a[i][1],a[i][2]));for(var m=this.vertices,a=[],i=0,k=b.length;i<k;i++){var l=m[b[i][0]],p=m[b[i][1]],t=m[b[i][2]];a[i]=new THREE.Face3(l.index,p.index,t.index,[l.clone(),p.clone(),t.clone()])}i=0;for(k=a.length;i<k;i++){p=a[i];m=d;b=Math.pow(2,
m);Math.pow(4,m);for(var m=e(g.vertices[p.a]),l=e(g.vertices[p.b]),s=e(g.vertices[p.c]),p=[],t=0;t<=b;t++){p[t]=[];for(var q=e(m.clone().lerp(s,t/b)),n=e(l.clone().lerp(s,t/b)),u=b-t,r=0;r<=u;r++)p[t][r]=0==r&&t==b?q:e(q.clone().lerp(n,r/u))}for(t=0;t<b;t++)for(r=0;r<2*(b-t)-1;r++)m=Math.floor(r/2),0==r%2?f(p[t][m+1],p[t+1][m],p[t][m]):f(p[t][m+1],p[t+1][m+1],p[t+1][m])}i=0;for(k=this.faceVertexUvs[0].length;i<k;i++)d=this.faceVertexUvs[0][i],a=d[0].x,b=d[1].x,m=d[2].x,l=Math.max(a,Math.max(b,m)),
p=Math.min(a,Math.min(b,m)),0.9<l&&0.1>p&&(0.2>a&&(d[0].x+=1),0.2>b&&(d[1].x+=1),0.2>m&&(d[2].x+=1));i=0;for(k=this.vertices.length;i<k;i++)this.vertices[i].multiplyScalar(c);this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.IcosahedronGeometry=function(a,b){this.radius=a;this.detail=b;var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[[-1,c,0],[1,c,0],[-1,-c,0],[1,-c,0],[0,-1,c],[0,1,c],[0,-1,-c],[0,1,-c],[c,0,-1],[c,0,1],[-c,0,-1],[-c,0,1]],[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],[[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],[[2,1,0],[0,3,2],[1,3,0],[2,3,1]],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],h,g,i,k,m=b+1;for(h=0;h<=c;h++){k=h/c;for(g=0;g<=b;g++)i=g/b,i=a(i,k),d.push(i)}var l,p,t,s;for(h=0;h<c;h++)for(g=0;g<b;g++)a=h*m+g,d=h*m+g+1,k=(h+1)*m+g+1,i=(h+1)*m+g,l=new THREE.Vector2(g/b,h/c),p=new THREE.Vector2((g+1)/b,h/c),t=new THREE.Vector2((g+1)/b,(h+1)/c),s=new THREE.Vector2(g/b,(h+1)/c),e.push(new THREE.Face3(a,d,i)),f.push([l,p,s]),e.push(new THREE.Face3(d,k,i)),
f.push([p.clone(),t,s.clone()]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.AxisHelper=function(a){var a=a||1,b=new THREE.Geometry;b.vertices.push(new THREE.Vector3,new THREE.Vector3(a,0,0),new THREE.Vector3,new THREE.Vector3(0,a,0),new THREE.Vector3,new THREE.Vector3(0,0,a));b.colors.push(new THREE.Color(16711680),new THREE.Color(16755200),new THREE.Color(65280),new THREE.Color(11206400),new THREE.Color(255),new THREE.Color(43775));a=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,b,a,THREE.LinePieces)};
THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);THREE.ArrowHelper=function(a,b,c,d,e,f){THREE.Object3D.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=0.2*c);void 0===f&&(f=0.2*e);this.position=b;b=new THREE.Geometry;b.vertices.push(new THREE.Vector3(0,0,0));b.vertices.push(new THREE.Vector3(0,1,0));this.line=new THREE.Line(b,new THREE.LineBasicMaterial({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);b=new THREE.CylinderGeometry(0,0.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));this.cone=
new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)};THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){0.99999<c.y?this.quaternion.set(0,0,0,1):-0.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=0.2*a);void 0===c&&(c=0.2*b);this.line.scale.set(1,a,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.setHex(a);this.cone.material.color.setHex(a)};THREE.BoxHelper=function(a){var b=[new THREE.Vector3(1,1,1),new THREE.Vector3(-1,1,1),new THREE.Vector3(-1,-1,1),new THREE.Vector3(1,-1,1),new THREE.Vector3(1,1,-1),new THREE.Vector3(-1,1,-1),new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,-1,-1)];this.vertices=b;var c=new THREE.Geometry;c.vertices.push(b[0],b[1],b[1],b[2],b[2],b[3],b[3],b[0],b[4],b[5],b[5],b[6],b[6],b[7],b[7],b[4],b[0],b[4],b[1],b[5],b[2],b[6],b[3],b[7]);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);
void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.vertices;d[0].set(b.x,b.y,b.z);d[1].set(c.x,b.y,b.z);d[2].set(c.x,c.y,b.z);d[3].set(b.x,c.y,b.z);d[4].set(b.x,b.y,c.z);d[5].set(c.x,b.y,c.z);d[6].set(c.x,c.y,c.z);d[7].set(b.x,c.y,c.z);this.geometry.computeBoundingSphere();this.geometry.verticesNeedUpdate=!0;this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.BoundingBoxHelper=function(a,b){var c=b||8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.CubeGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Camera,c=new THREE.Projector;return function(){function d(d,h,g,i){a.set(h,g,i);c.unprojectVector(a,b);d=e.pointMap[d];if(void 0!==d){h=0;for(g=d.length;h<g;h++)e.geometry.vertices[d[h]].copy(a)}}var e=this;b.projectionMatrix.copy(this.camera.projectionMatrix);d("c",0,0,-1);d("t",0,0,1);d("n1",-1,-1,-1);d("n2",1,-1,-1);d("n3",-1,1,-1);d("n4",1,1,-1);d("f1",-1,-1,1);d("f2",1,-1,1);d("f3",-1,1,1);d("f4",1,1,1);d("u1",
0.7,1.1,-1);d("u2",-0.7,1.1,-1);d("u3",0,2,-1);d("cf1",-1,0,1);d("cf2",1,0,1);d("cf3",0,-1,1);d("cf4",0,1,1);d("cn1",-1,0,-1);d("cn2",1,0,-1);d("cn3",0,-1,-1);d("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0}}();THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;var b=b||1,c=new THREE.PlaneGeometry(b,b),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Mesh(c,d);this.add(this.lightPlane);c=new THREE.Geometry;c.vertices.push(new THREE.Vector3);c.vertices.push(new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});
d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=b||1;for(var a=c||16776960,d=d||1,b=new THREE.Geometry,c=0,e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var b=this.geometry.vertices,c=this.object.geometry.faces,d=this.object.matrixWorld,e=0,f=c.length;e<f;e++){var h=c[e];a.copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);var g=2*e;b[g].copy(h.centroid).applyMatrix4(d);b[g+1].addVectors(b[g],a)}this.geometry.verticesNeedUpdate=
!0;return this}}();THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrixWorld=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};
THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=b||1;for(var b=c||16711680,d=d||1,c=new THREE.Geometry,a=a.geometry.faces,e=0,f=a.length;e<f;e++)for(var h=0,g=a[e].vertexNormals.length;h<g;h++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){var b=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var c=this.geometry.vertices,d=this.object.geometry.vertices,e=this.object.geometry.faces,f=this.object.matrixWorld,h=0,g=0,i=e.length;g<i;g++)for(var k=e[g],m=0,l=k.vertexNormals.length;m<l;m++){var p=k.vertexNormals[m];c[h].copy(d[k[b[m]]]).applyMatrix4(f);a.copy(p).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
a.add(c[h]);h+=1;c[h].copy(a);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=b||1;for(var b=c||255,d=d||1,c=new THREE.Geometry,a=a.geometry.faces,e=0,f=a.length;e<f;e++)for(var h=0,g=a[e].vertexTangents.length;h<g;h++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){var b=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var c=this.geometry.vertices,d=this.object.geometry.vertices,e=this.object.geometry.faces,f=this.object.matrixWorld,h=0,g=0,i=e.length;g<i;g++)for(var k=e[g],m=0,l=k.vertexTangents.length;m<l;m++){var p=k.vertexTangents[m];c[h].copy(d[k[b[m]]]).applyMatrix4(f);a.copy(p).transformDirection(f).multiplyScalar(this.size);a.add(c[h]);h+=1;c[h].copy(a);
h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.WireframeHelper=function(a){var b=[0,0],c={},d=function(a,b){return a-b},e=["a","b","c","d"],f=new THREE.BufferGeometry,h=0;if(a.geometry instanceof THREE.Geometry){for(var g=a.geometry.vertices,i=a.geometry.faces,k=new Uint32Array(6*i.length),m=0,l=i.length;m<l;m++)for(var p=i[m],t=0;3>t;t++){b[0]=p[e[t]];b[1]=p[e[(t+1)%3]];b.sort(d);var s=b.toString();void 0===c[s]&&(k[2*h]=b[0],k[2*h+1]=b[1],c[s]=!0,h++)}f.addAttribute("position",Float32Array,2*h,3);b=f.attributes.position.array;m=0;for(l=
h;m<l;m++)for(t=0;2>t;t++)h=g[k[2*m+t]],e=6*m+3*t,b[e+0]=h.x,b[e+1]=h.y,b[e+2]=h.z}else{g=a.geometry.attributes.position.array;i=a.geometry.attributes.index.array;k=new Uint32Array(2*i.length);m=0;for(l=i.length/3;m<l;m++)for(t=0;3>t;t++)e=3*m,b[0]=i[e+t],b[1]=i[e+(t+1)%3],b.sort(d),s=b.toString(),void 0===c[s]&&(k[2*h]=b[0],k[2*h+1]=b[1],c[s]=!0,h++);f.addAttribute("position",Float32Array,2*h,3);b=f.attributes.position.array;m=0;for(l=h;m<l;m++)for(t=0;2>t;t++)e=6*m+3*t,h=3*k[2*m+t],b[e+0]=g[h],
b[e+1]=g[h+1],b[e+2]=g[h+2]}THREE.Line.call(this,f,new THREE.LineBasicMaterial({color:16777215}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=0.25*c.x*Math.PI,c.rotation+=0.25*(c.wantedRotation-c.rotation)};THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)(\d+)/,c,d={},e=this.geometry,f=0,h=e.morphTargets.length;f<h;f++){var g=e.morphTargets[f].name.match(b);if(g&&1<g.length){var i=g[1];d[i]||(d[i]={start:Infinity,end:-Infinity});g=d[i];f<g.start&&(g.start=f);f>g.end&&(g.end=f);c||(c=i)}}for(i in d)g=d[i],this.createAnimation(i,g.start,g.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),h=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*h,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*h;this.morphTargetInfluences[d.lastFrame]=(1-e)*h}}};THREE.LensFlarePlugin=function(){function a(a,c){var d=b.createProgram(),e=b.createShader(b.FRAGMENT_SHADER),f=b.createShader(b.VERTEX_SHADER),g="precision "+c+" float;\n";b.shaderSource(e,g+a.fragmentShader);b.shaderSource(f,g+a.vertexShader);b.compileShader(e);b.compileShader(f);b.attachShader(d,e);b.attachShader(d,f);b.linkProgram(d);return d}var b,c,d,e,f,h,g,i,k,m,l,p,t;this.init=function(s){b=s.context;c=s;d=s.getPrecision();e=new Float32Array(16);f=new Uint16Array(6);s=0;e[s++]=-1;e[s++]=-1;
e[s++]=0;e[s++]=0;e[s++]=1;e[s++]=-1;e[s++]=1;e[s++]=0;e[s++]=1;e[s++]=1;e[s++]=1;e[s++]=1;e[s++]=-1;e[s++]=1;e[s++]=0;e[s++]=1;s=0;f[s++]=0;f[s++]=1;f[s++]=2;f[s++]=0;f[s++]=2;f[s++]=3;h=b.createBuffer();g=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,h);b.bufferData(b.ARRAY_BUFFER,e,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.bufferData(b.ELEMENT_ARRAY_BUFFER,f,b.STATIC_DRAW);i=b.createTexture();k=b.createTexture();b.bindTexture(b.TEXTURE_2D,i);b.texImage2D(b.TEXTURE_2D,0,b.RGB,16,16,
0,b.RGB,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.bindTexture(b.TEXTURE_2D,k);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,16,16,0,b.RGBA,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);0>=b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(m=!1,l=a(THREE.ShaderFlares.lensFlare,d)):(m=!0,l=a(THREE.ShaderFlares.lensFlareVertexTexture,d));p={};t={};p.vertex=b.getAttribLocation(l,"position");p.uv=b.getAttribLocation(l,"uv");t.renderType=b.getUniformLocation(l,"renderType");t.map=b.getUniformLocation(l,"map");t.occlusionMap=b.getUniformLocation(l,"occlusionMap");t.opacity=
b.getUniformLocation(l,"opacity");t.color=b.getUniformLocation(l,"color");t.scale=b.getUniformLocation(l,"scale");t.rotation=b.getUniformLocation(l,"rotation");t.screenPosition=b.getUniformLocation(l,"screenPosition")};this.render=function(a,d,e,f){var a=a.__webglFlares,r=a.length;if(r){var v=new THREE.Vector3,z=f/e,G=0.5*e,w=0.5*f,y=16/f,E=new THREE.Vector2(y*z,y),A=new THREE.Vector3(1,1,0),K=new THREE.Vector2(1,1),D=t,y=p;b.useProgram(l);b.enableVertexAttribArray(p.vertex);b.enableVertexAttribArray(p.uv);
b.uniform1i(D.occlusionMap,0);b.uniform1i(D.map,1);b.bindBuffer(b.ARRAY_BUFFER,h);b.vertexAttribPointer(y.vertex,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(y.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.disable(b.CULL_FACE);b.depthMask(!1);var F,O,x,I,B;for(F=0;F<r;F++)if(y=16/f,E.set(y*z,y),I=a[F],v.set(I.matrixWorld.elements[12],I.matrixWorld.elements[13],I.matrixWorld.elements[14]),v.applyMatrix4(d.matrixWorldInverse),v.applyProjection(d.projectionMatrix),A.copy(v),K.x=A.x*G+G,
K.y=A.y*w+w,m||0<K.x&&K.x<e&&0<K.y&&K.y<f){b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,i);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGB,K.x-8,K.y-8,16,16,0);b.uniform1i(D.renderType,0);b.uniform2f(D.scale,E.x,E.y);b.uniform3f(D.screenPosition,A.x,A.y,A.z);b.disable(b.BLEND);b.enable(b.DEPTH_TEST);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,k);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGBA,K.x-8,K.y-8,16,16,0);b.uniform1i(D.renderType,1);b.disable(b.DEPTH_TEST);
b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,i);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);I.positionScreen.copy(A);I.customUpdateCallback?I.customUpdateCallback(I):I.updateLensFlares();b.uniform1i(D.renderType,2);b.enable(b.BLEND);O=0;for(x=I.lensFlares.length;O<x;O++)B=I.lensFlares[O],0.001<B.opacity&&0.001<B.scale&&(A.x=B.x,A.y=B.y,A.z=B.z,y=B.size*B.scale/f,E.x=y*z,E.y=y,b.uniform3f(D.screenPosition,A.x,A.y,A.z),b.uniform2f(D.scale,E.x,E.y),b.uniform1f(D.rotation,B.rotation),b.uniform1f(D.opacity,
B.opacity),b.uniform3f(D.color,B.color.r,B.color.g,B.color.b),c.setBlending(B.blending,B.blendEquation,B.blendSrc,B.blendDst),c.setTexture(B.texture,1),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0))}b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);b.depthMask(!0)}}};THREE.ShadowMapPlugin=function(){var a,b,c,d,e,f,h=new THREE.Frustum,g=new THREE.Matrix4,i=new THREE.Vector3,k=new THREE.Vector3,m=new THREE.Vector3;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,c){b.shadowMapEnabled&&b.shadowMapAutoUpdate&&this.update(a,c)};this.update=function(l,p){var t,s,q,n,u,r,v,z,G,w=[];n=0;a.clearColor(1,1,1,1);a.disable(a.BLEND);a.enable(a.CULL_FACE);a.frontFace(a.CCW);b.shadowMapCullFace===THREE.CullFaceFront?
a.cullFace(a.FRONT):a.cullFace(a.BACK);b.setDepthTest(!0);t=0;for(s=l.__lights.length;t<s;t++)if(q=l.__lights[t],q.castShadow)if(q instanceof THREE.DirectionalLight&&q.shadowCascade)for(u=0;u<q.shadowCascadeCount;u++){var y;if(q.shadowCascadeArray[u])y=q.shadowCascadeArray[u];else{G=q;v=u;y=new THREE.DirectionalLight;y.isVirtual=!0;y.onlyShadow=!0;y.castShadow=!0;y.shadowCameraNear=G.shadowCameraNear;y.shadowCameraFar=G.shadowCameraFar;y.shadowCameraLeft=G.shadowCameraLeft;y.shadowCameraRight=G.shadowCameraRight;
y.shadowCameraBottom=G.shadowCameraBottom;y.shadowCameraTop=G.shadowCameraTop;y.shadowCameraVisible=G.shadowCameraVisible;y.shadowDarkness=G.shadowDarkness;y.shadowBias=G.shadowCascadeBias[v];y.shadowMapWidth=G.shadowCascadeWidth[v];y.shadowMapHeight=G.shadowCascadeHeight[v];y.pointsWorld=[];y.pointsFrustum=[];z=y.pointsWorld;r=y.pointsFrustum;for(var E=0;8>E;E++)z[E]=new THREE.Vector3,r[E]=new THREE.Vector3;z=G.shadowCascadeNearZ[v];G=G.shadowCascadeFarZ[v];r[0].set(-1,-1,z);r[1].set(1,-1,z);r[2].set(-1,
1,z);r[3].set(1,1,z);r[4].set(-1,-1,G);r[5].set(1,-1,G);r[6].set(-1,1,G);r[7].set(1,1,G);y.originalCamera=p;r=new THREE.Gyroscope;r.position=q.shadowCascadeOffset;r.add(y);r.add(y.target);p.add(r);q.shadowCascadeArray[u]=y;console.log("Created virtualLight",y)}v=q;z=u;G=v.shadowCascadeArray[z];G.position.copy(v.position);G.target.position.copy(v.target.position);G.lookAt(G.target);G.shadowCameraVisible=v.shadowCameraVisible;G.shadowDarkness=v.shadowDarkness;G.shadowBias=v.shadowCascadeBias[z];r=v.shadowCascadeNearZ[z];
v=v.shadowCascadeFarZ[z];G=G.pointsFrustum;G[0].z=r;G[1].z=r;G[2].z=r;G[3].z=r;G[4].z=v;G[5].z=v;G[6].z=v;G[7].z=v;w[n]=y;n++}else w[n]=q,n++;t=0;for(s=w.length;t<s;t++){q=w[t];q.shadowMap||(u=THREE.LinearFilter,b.shadowMapType===THREE.PCFSoftShadowMap&&(u=THREE.NearestFilter),q.shadowMap=new THREE.WebGLRenderTarget(q.shadowMapWidth,q.shadowMapHeight,{minFilter:u,magFilter:u,format:THREE.RGBAFormat}),q.shadowMapSize=new THREE.Vector2(q.shadowMapWidth,q.shadowMapHeight),q.shadowMatrix=new THREE.Matrix4);
if(!q.shadowCamera){if(q instanceof THREE.SpotLight)q.shadowCamera=new THREE.PerspectiveCamera(q.shadowCameraFov,q.shadowMapWidth/q.shadowMapHeight,q.shadowCameraNear,q.shadowCameraFar);else if(q instanceof THREE.DirectionalLight)q.shadowCamera=new THREE.OrthographicCamera(q.shadowCameraLeft,q.shadowCameraRight,q.shadowCameraTop,q.shadowCameraBottom,q.shadowCameraNear,q.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}l.add(q.shadowCamera);!0===l.autoUpdate&&l.updateMatrixWorld()}q.shadowCameraVisible&&
!q.cameraHelper&&(q.cameraHelper=new THREE.CameraHelper(q.shadowCamera),q.shadowCamera.add(q.cameraHelper));if(q.isVirtual&&y.originalCamera==p){u=p;n=q.shadowCamera;r=q.pointsFrustum;G=q.pointsWorld;i.set(Infinity,Infinity,Infinity);k.set(-Infinity,-Infinity,-Infinity);for(v=0;8>v;v++)z=G[v],z.copy(r[v]),THREE.ShadowMapPlugin.__projector.unprojectVector(z,u),z.applyMatrix4(n.matrixWorldInverse),z.x<i.x&&(i.x=z.x),z.x>k.x&&(k.x=z.x),z.y<i.y&&(i.y=z.y),z.y>k.y&&(k.y=z.y),z.z<i.z&&(i.z=z.z),z.z>k.z&&
(k.z=z.z);n.left=i.x;n.right=k.x;n.top=k.y;n.bottom=i.y;n.updateProjectionMatrix()}n=q.shadowMap;r=q.shadowMatrix;u=q.shadowCamera;u.position.setFromMatrixPosition(q.matrixWorld);m.setFromMatrixPosition(q.target.matrixWorld);u.lookAt(m);u.updateMatrixWorld();u.matrixWorldInverse.getInverse(u.matrixWorld);q.cameraHelper&&(q.cameraHelper.visible=q.shadowCameraVisible);q.shadowCameraVisible&&q.cameraHelper.update();r.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);r.multiply(u.projectionMatrix);r.multiply(u.matrixWorldInverse);
g.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);h.setFromMatrix(g);b.setRenderTarget(n);b.clear();G=l.__webglObjects;q=0;for(n=G.length;q<n;q++)if(v=G[q],r=v.object,v.render=!1,r.visible&&r.castShadow&&(!(r instanceof THREE.Mesh||r instanceof THREE.ParticleSystem)||!r.frustumCulled||h.intersectsObject(r)))r._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,r.matrixWorld),v.render=!0;q=0;for(n=G.length;q<n;q++)v=G[q],v.render&&(r=v.object,v=v.buffer,E=r.material instanceof THREE.MeshFaceMaterial?
r.material.materials[0]:r.material,z=0<r.geometry.morphTargets.length&&E.morphTargets,E=r instanceof THREE.SkinnedMesh&&E.skinning,z=r.customDepthMaterial?r.customDepthMaterial:E?z?f:e:z?d:c,v instanceof THREE.BufferGeometry?b.renderBufferDirect(u,l.__lights,null,z,v,r):b.renderBuffer(u,l.__lights,null,z,v,r));G=l.__webglObjectsImmediate;q=0;for(n=G.length;q<n;q++)v=G[q],r=v.object,r.visible&&r.castShadow&&(r._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,r.matrixWorld),b.renderImmediateObject(u,
l.__lights,null,c,r))}t=b.getClearColor();s=b.getClearAlpha();a.clearColor(t.r,t.g,t.b,s);a.enable(a.BLEND);b.shadowMapCullFace===THREE.CullFaceFront&&a.cullFace(a.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;THREE.SpritePlugin=function(){var a,b,c,d,e,f,h,g,i,k,m,l,p,t,s,q,n;function u(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var r,v,z,G,w,y,E,A;this.init=function(u){r=u.context;v=u;G=new Float32Array([-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]);w=new Uint16Array([0,1,2,0,2,3]);y=r.createBuffer();E=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,y);r.bufferData(r.ARRAY_BUFFER,G,r.STATIC_DRAW);r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,E);r.bufferData(r.ELEMENT_ARRAY_BUFFER,w,r.STATIC_DRAW);var u=r.createProgram(),
D=r.createShader(r.VERTEX_SHADER),F=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(D,["precision "+v.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
r.shaderSource(F,["precision "+v.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
r.compileShader(D);r.compileShader(F);r.attachShader(u,D);r.attachShader(u,F);r.linkProgram(u);A=u;q=r.getAttribLocation(A,"position");n=r.getAttribLocation(A,"uv");a=r.getUniformLocation(A,"uvOffset");b=r.getUniformLocation(A,"uvScale");c=r.getUniformLocation(A,"rotation");d=r.getUniformLocation(A,"scale");e=r.getUniformLocation(A,"color");f=r.getUniformLocation(A,"map");h=r.getUniformLocation(A,"opacity");g=r.getUniformLocation(A,"modelViewMatrix");i=r.getUniformLocation(A,"projectionMatrix");k=
r.getUniformLocation(A,"fogType");m=r.getUniformLocation(A,"fogDensity");l=r.getUniformLocation(A,"fogNear");p=r.getUniformLocation(A,"fogFar");t=r.getUniformLocation(A,"fogColor");s=r.getUniformLocation(A,"alphaTest");u=document.createElement("canvas");u.width=8;u.height=8;D=u.getContext("2d");D.fillStyle="#ffffff";D.fillRect(0,0,u.width,u.height);z=new THREE.Texture(u);z.needsUpdate=!0};this.render=function(w,D){var F=w.__webglSprites,G=F.length;if(G){r.useProgram(A);r.enableVertexAttribArray(q);
r.enableVertexAttribArray(n);r.disable(r.CULL_FACE);r.enable(r.BLEND);r.bindBuffer(r.ARRAY_BUFFER,y);r.vertexAttribPointer(q,2,r.FLOAT,!1,16,0);r.vertexAttribPointer(n,2,r.FLOAT,!1,16,8);r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,E);r.uniformMatrix4fv(i,!1,D.projectionMatrix.elements);r.activeTexture(r.TEXTURE0);r.uniform1i(f,0);var x=0,I=0,B=w.fog;B?(r.uniform3f(t,B.color.r,B.color.g,B.color.b),B instanceof THREE.Fog?(r.uniform1f(l,B.near),r.uniform1f(p,B.far),r.uniform1i(k,1),I=x=1):B instanceof THREE.FogExp2&&
(r.uniform1f(m,B.density),r.uniform1i(k,2),I=x=2)):(r.uniform1i(k,0),I=x=0);for(var M,J,ca=[],B=0;B<G;B++)M=F[B],!1!==M.visible&&(M._modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld),M.z=-M._modelViewMatrix.elements[14]);F.sort(u);for(B=0;B<G;B++)M=F[B],!1!==M.visible&&(J=M.material,r.uniform1f(s,J.alphaTest),r.uniformMatrix4fv(g,!1,M._modelViewMatrix.elements),ca[0]=M.scale.x,ca[1]=M.scale.y,M=w.fog&&J.fog?I:0,x!==M&&(r.uniform1i(k,M),x=M),r.uniform2f(b,J.uvScale.x,J.uvScale.y),
r.uniform2f(a,J.uvOffset.x,J.uvOffset.y),r.uniform1f(h,J.opacity),r.uniform3f(e,J.color.r,J.color.g,J.color.b),r.uniform1f(c,J.rotation),r.uniform2fv(d,ca),v.setBlending(J.blending,J.blendEquation,J.blendSrc,J.blendDst),v.setDepthTest(J.depthTest),v.setDepthWrite(J.depthWrite),J.map&&J.map.image&&J.map.image.width?v.setTexture(J.map,0):v.setTexture(z,0),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0));r.enable(r.CULL_FACE)}}};THREE.DepthPassPlugin=function(){this.enabled=!1;this.renderTarget=null;var a,b,c,d,e,f,h=new THREE.Frustum,g=new THREE.Matrix4;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(i,k){var m,l,p,t,s,q;a.clearColor(1,1,1,1);a.disable(a.BLEND);b.setDepthTest(!0);!0===i.autoUpdate&&i.updateMatrixWorld();k.matrixWorldInverse.getInverse(k.matrixWorld);g.multiplyMatrices(k.projectionMatrix,
k.matrixWorldInverse);h.setFromMatrix(g);b.setRenderTarget(this.renderTarget);b.clear();q=i.__webglObjects;m=0;for(l=q.length;m<l;m++)if(p=q[m],s=p.object,p.render=!1,s.visible&&(!(s instanceof THREE.Mesh||s instanceof THREE.ParticleSystem)||!s.frustumCulled||h.intersectsObject(s)))s._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,s.matrixWorld),p.render=!0;var n;m=0;for(l=q.length;m<l;m++)if(p=q[m],p.render&&(s=p.object,p=p.buffer,!(s instanceof THREE.ParticleSystem)||s.customDepthMaterial))(n=
s.material instanceof THREE.MeshFaceMaterial?s.material.materials[0]:s.material)&&b.setMaterialFaces(s.material),t=0<s.geometry.morphTargets.length&&n.morphTargets,n=s instanceof THREE.SkinnedMesh&&n.skinning,t=s.customDepthMaterial?s.customDepthMaterial:n?t?f:e:t?d:c,p instanceof THREE.BufferGeometry?b.renderBufferDirect(k,i.__lights,null,t,p,s):b.renderBuffer(k,i.__lights,null,t,p,s);q=i.__webglObjectsImmediate;m=0;for(l=q.length;m<l;m++)p=q[m],s=p.object,s.visible&&(s._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,
s.matrixWorld),b.renderImmediateObject(k,i.__lights,null,c,s));m=b.getClearColor();l=b.getClearAlpha();a.clearColor(m.r,m.g,m.b,l);a.enable(a.BLEND)}};THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},lensFlare:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};

define("THREE", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.THREE;
    };
}(this)));

//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);

define("underscore", (function (global) {
    return function () {
        var ret, fn;
        return ret || global._;
    };
}(this)));

/* G. Hemingway Copyright @2014
 * Context for the overall CAD assembly
 */




/*************************************************************************/


define('assembly',["THREE"], function(THREE) {
    /* config:
        defaultColor
        debug
     */
    function Assembly(rootID, defaultColor, loader) {
        this._rootID = rootID;
        this._defaultColor = defaultColor;
        this._loader = loader;
        this._objects = [];
        this._product = undefined;
    }

    Assembly.prototype.getID = function() {
        if (this._product) {
            return this._product.getID();
        } else {
            return "id0";
        }
    };

    Assembly.prototype.isChild = function(id) {
        return (this._objects[id] !== undefined);
    };

    Assembly.prototype.getChild = function(id) {
        return this._objects[id];
    };

    Assembly.prototype.makeChild = function(id, fallback) {
//        console.log("Assembly.makeChild: " + id);
        if (!id) {
            throw new Error("null id");
        }
        var ret = this._objects[id];
        if (ret) {
            return ret;
        }
        this._objects[id] = fallback;
        return null;
    };

    Assembly.prototype.setRootProduct = function(product) {
        this._product = product;
    };

    Assembly.prototype.name = function() {
        if (this._product) {
            if (this._product._stepFile) return this._product._stepFile;
            else return this._product._name;
        } else {
            return "Assembly";
        }
    };

    Assembly.prototype.getBoundingBox = function() {
        if (this._product) {
            return this._product.getBoundingBox();
        }
        return new THREE.Box3();
    };

    Assembly.prototype.showBoundingBox = function() {
        if (this._product) {
            this._product.showBoundingBox();
        }
    };

    Assembly.prototype.hideBoundingBox = function() {
        if (this._product) {
            this._product.hideBoundingBox();
        }
    };

    Assembly.prototype.getByID = function(id) {
        var obj = undefined;
        // Special case for the root element
        if (id === "id0") {
            obj = this;
        } else {
            var parts = id.split("_");
            obj = this._objects[parts[0]];
            // Looks like an instance was selected
            if (parts.length > 1 && parts[1] !== "0") {
                obj = obj._instances[parts[1]-1];
            }
        }
        return obj;

    };

    Assembly.prototype.showAll = function() {
        if (this._product) {
            this._product.getObject3D().traverse(function(object) {
                object.visible = true;
            });
        }
    };

    Assembly.prototype.hideAll = function() {
        if (this._product) {
            this._product.getObject3D().traverse(function(object) {
                object.visible = false;
            });
        }
    };

    Assembly.prototype.hideAllBoundingBoxes = function() {
        this.dispatchEvent({ type: "_hideBounding" });
    };

    Assembly.prototype.clearHighlights = function() {
        this.dispatchEvent({ type: "_clearHighlights" });
    };

    Assembly.prototype.clearOpacity = function() {
        this.dispatchEvent({ type: "_clearOpacity" });
    };

    Assembly.prototype.getTree = function() {
        var node = {
            id          : "id0",
            text        : this.name(),
            state       : {
                opened    : true,
                disabled  : false,
                selected  : false
            },
            children    : []  // array of strings or objects
        };
        if (this._product) {
            node.children.push(this._product.getTree());
        }
        return node;
    };

    Assembly.prototype.centerGeometry = function() {
        if (this._product) {
            var bbox = this._product.getBoundingBox();
            if (!bbox.empty()) {
                var x = (bbox.max.x + bbox.min.x) / -2.0;
                var y = (bbox.max.y + bbox.min.y) / -2.0;
                var z = (bbox.max.z + bbox.min.z) / -2.0;
                this._product.getObject3D().applyMatrix(new THREE.Matrix4().makeTranslation(x, y, z));
            }
        }
    };

    Assembly.prototype.zoomToFit = function(camera, controls) {
        var bbox = this._product.getBoundingBox();
        var min = this._product.getObject3D().localToWorld(bbox.min);
        var max = this._product.getObject3D().localToWorld(bbox.max);
        var projector = new THREE.Projector();
        min = projector.projectVector(min, camera);
        max = projector.projectVector(max, camera);
        var factor = Math.max(
            Math.abs(max.x - min.x),
            Math.abs(max.y - min.y)
        );
        controls.object.position.multiplyScalar(factor);
    };
    Assembly.prototype.select = function(camera, mouseX, mouseY) {
        if (!this._product) return undefined;
        mouseX = (mouseX / window.innerWidth) * 2 - 1;
        mouseY = -(mouseY / window.innerHeight) * 2 + 1;
        // Convert mouse-space to global
        var vector = new THREE.Vector3(mouseX, mouseY, .999);
        var projector = new THREE.Projector();
        projector.unprojectVector(vector, camera);
        // Cast ray from camera, pointed towards click point
        vector.sub(camera.position).normalize();
        var raycaster = new THREE.Raycaster(camera.position, vector);
        var intersections = raycaster.intersectObjects(this._product.getObject3D().children, true);
        // Did we hit anything?
        var object = undefined;
        if (intersections.length > 0) {
            var hit = undefined;
            for (var i = 0; i < intersections.length; i++) {
                if (intersections[i].object.visible) {
                    if (!hit || intersections[i].distance < hit.distance) {
                        hit = intersections[i];
                    }
                }
            }
            if (hit) {
                object = hit.object.userData;
            }
        }
        return object;
    };

    Assembly.prototype.explode = function(distance, timeS) {
    };

    /***********************************/

    Assembly.prototype.buildBoundingBox = function( box ) {
        if (box.empty()) {
            return undefined;
        }
        // Create the new box buffer
        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute( 'position', Float32Array, 36, 3 );

        var positions = geometry.attributes.position.array;
        //Front face bottom
        positions[0]  = box.min.x;
        positions[1]  = box.min.y;
        positions[2]  = box.min.z;
        positions[3]  = box.max.x;
        positions[4]  = box.min.y;
        positions[5]  = box.min.z;
        //Front face left
        positions[6]  = box.min.x;
        positions[7]  = box.min.y;
        positions[8]  = box.min.z;
        positions[9]  = box.min.x;
        positions[10] = box.max.y;
        positions[11] = box.min.z;
        // Front face top
        positions[12] = box.min.x;
        positions[13] = box.max.y;
        positions[14] = box.min.z;
        positions[15] = box.max.x;
        positions[16] = box.max.y;
        positions[17] = box.min.z;
        // Front face right
        positions[18] = box.max.x;
        positions[19] = box.min.y;
        positions[20] = box.min.z;
        positions[21] = box.max.x;
        positions[22] = box.max.y;
        positions[23] = box.min.z;

        // Lower left ->
        positions[24] = box.min.x;

        positions[25] = box.min.y;
        positions[26] = box.min.z;
        positions[27] = box.min.x;
        positions[28] = box.min.y;
        positions[29] = box.max.z;
        // Lower right ->
        positions[30] = box.max.x;
        positions[31] = box.min.y;
        positions[32] = box.min.z;
        positions[33] = box.max.x;
        positions[34] = box.min.y;
        positions[35] = box.max.z;
        // Upper left ->
        positions[36] = box.min.x;
        positions[37] = box.max.y;
        positions[38] = box.min.z;
        positions[39] = box.min.x;
        positions[40] = box.max.y;
        positions[41] = box.max.z;
        // Upper right ->
        positions[42] = box.max.x;
        positions[43] = box.max.y;
        positions[44] = box.min.z;
        positions[45] = box.max.x;
        positions[46] = box.max.y;
        positions[47] = box.max.z;

        // Back face bottom
        positions[48] = box.min.x;
        positions[49] = box.min.y;
        positions[50] = box.max.z;
        positions[51] = box.max.x;
        positions[52] = box.min.y;
        positions[53] = box.max.z;
        // Back face left
        positions[54] = box.min.x;
        positions[55] = box.min.y;
        positions[56] = box.max.z;
        positions[57] = box.min.x;
        positions[58] = box.max.y;
        positions[59] = box.max.z;
        // Back face top
        positions[60] = box.min.x;
        positions[61] = box.max.y;
        positions[62] = box.max.z;
        positions[63] = box.max.x;
        positions[64] = box.max.y;
        positions[65] = box.max.z;
        // Back face right
        positions[66] = box.max.x;
        positions[67] = box.min.y;
        positions[68] = box.max.z;
        positions[69] = box.max.x;
        positions[70] = box.max.y;
        positions[71] = box.max.z;

        // Return the new Bounding Box Geometry
        var material = new THREE.LineBasicMaterial({
            linewidth: 2,
            color: 0x4f95bc
        });
        return new THREE.Line(geometry, material, THREE.LinePieces);
    };

    /***********************************/

    // Let Assembly have event system
    THREE.EventDispatcher.prototype.apply(Assembly.prototype);
    return Assembly;
});
/* G. Hemingway Copyright @2014
 * Product class for the CAD models
 */




/********************************* Product Class ********************************/


define('product',["THREE"], function(THREE) {
    function Product(id, assembly, name, stepFile, isRoot) {
        assembly.makeChild(id, this);
//        console.log("Make new product: " + id);
        this._id = id;
        this._assembly = assembly;
        this._stepFile = stepFile;
        this._name = name;
        this._isRoot = isRoot;
        this._shapes = [];
        this._children = [];
        this._object3D = new THREE.Object3D();
        return this;
    }

    Product.prototype.addChild = function(childProduct) {
        this._children.push(childProduct);
    };

    Product.prototype.addShape = function(shape) {
        shape.setProduct(this);
        this._shapes.push(shape);
        if (this._isRoot) {
            var self = this;
            this._object3D.add(shape.getObject3D());
            shape.addEventListener("shapeLoaded", function(event) {
                self.dispatchEvent({ type: "shapeLoaded", shell: event.shell });
            });
        }
    };

    Product.prototype.getID = function() {
        return this._id;
    };

    Product.prototype.getProductName = function() {
        return this._name;
    };

    Product.prototype.getObject3D = function() {
        return this._object3D;
    };

    Product.prototype.getStepFile = function() {
        return this._stepFile;
    };

    Product.prototype.getTree = function() {
        // Check if only geometry-aligned Products get added to tree
        var children = [], tmpChild;
        for (var i = 0; i < this._shapes.length; i++) {
            tmpChild = this._shapes[i].getTree();
            if (tmpChild) {
                children.push(tmpChild);
            }
        }
        if (children.length === 0) {
            return undefined;
        } else {
            return {
                id          : this._id,
                text        : this._name,
                state       : {
                    opened    : true,
                    disabled  : false,
                    selected  : false
                },
                children    : children
            };
        }
    };

    Product.prototype.getBoundingBox = function() {
        if (!this.boundingBox) {
            this.boundingBox = new THREE.Box3();
            for (var i = 0; i < this._shapes.length; i++) {
                this.boundingBox.union(this._shapes[i].getBoundingBox(true));
            }
        }
        return this.boundingBox.clone();
    };

    Product.prototype.showBoundingBox = function() {
        var bounds = this.getBoundingBox();
        if (!this.bbox && !bounds.empty()) {
            this.bbox = this._assembly.buildBoundingBox(bounds);
        }
        if (this.bbox) {
            var self = this;
            this._eventFunc = function() {
                self.hideBoundingBox();
            };
            // Start listening for assembly _hideBounding events
            this._assembly.addEventListener("_hideBounding", this._eventFunc);
            this._object3D.add(this.bbox);
        }
    };

    Product.prototype.hideBoundingBox = function() {
        // Stop listening for assembly _hideBounding events
        this._assembly.removeEventListener("_hideBounding", this._eventFunc);
        this._object3D.remove(this.bbox);
    };

    Product.prototype.explode = function(distance, timeS) {
    };

    // Let product have event system
    THREE.EventDispatcher.prototype.apply(Product.prototype);
    return Product;
});
/**
 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */

define('text',['module'], function (module) {
    

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.10',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.indexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1, name.length);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file.indexOf('\uFEFF') === 0) {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                errback(e);
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        errback(err);
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes,
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});

define('text!shaders/VelvetyShader-vertex.glsl',[],function () { return 'varying vec3 fNormal;\nvarying vec3 fPosition;\nvarying vec3 fColor;\n\nconst float minColorBrightness = 0.15;\n\n// This ensures that black colored shapes are not rendered as solid black by\n// effectively making dark colors slightly lighter.\nvec3 applyMinColorBrightness(vec3 color)\n{\n    if (length(color) < minColorBrightness * 3.0) {\n        return color + minColorBrightness;\n    } else {\n        return color;\n    }\n}\n\nvoid main()\n{\n    fColor = applyMinColorBrightness(color);\n    fNormal = normalize(normalMatrix * normal);\n    vec4 pos = modelViewMatrix * vec4(position, 1.0);\n    fPosition = pos.xyz;\n    gl_Position = projectionMatrix * pos;\n}\n';});

define('text!shaders/VelvetyShader-fragment.glsl',[],function () { return 'uniform float opacity;\nuniform float ambientFactor;     // the brightness of edge lighting (suggested defualt: 0.3, prefer 0.0 to 1.0)\nuniform float directFactor;  // the brightness of front lighting (suggested defualt: 1.0, prefer 0.0 to 1.0)\n\nvarying vec3 fPosition;\nvarying vec3 fNormal;\nvarying vec3 fColor;\n\nvoid main()\n{\n    float lightAmount = smoothstep(-ambientFactor, directFactor, dot(fNormal, normalize(-fPosition)));\n    gl_FragColor = vec4(fColor * lightAmount, opacity);\n}\n';});

/**
 * VelvetyShader
 *
 * :author: tannern
 * :date: 2/20/14
 *
 * A THREE.js Shader
 */

define('shaders/VelvetyShader',[
    'THREE',
    'text!shaders/VelvetyShader-vertex.glsl',
    'text!shaders/VelvetyShader-fragment.glsl'
], function (THREE, vertexShaderCode, fragmentShaderCode) {
    THREE.VelvetyShader = {
        side: THREE.DoubleSide,
        vertexColors: THREE.VertexColors,
        transparent: true,
        uniforms: {
            'opacity': {type: 'f', value: 1.0},
            'ambientFactor': {type: 'f', value: 0.3},
            'directFactor': {type: 'f', value: 1.0}
        },
        vertexShader: vertexShaderCode,
        fragmentShader: fragmentShaderCode
    };
});

/* G. Hemingway Copyright @2014
 * Shape class for the CAD models
 */




/********************************* Shape Class ********************************/

define('shape',["THREE"], function(THREE) {
    function Shape(id, assembly, parent, transform, unit) {
        var ret = assembly.makeChild(id, this);
        this._id = id;
        this._assembly = assembly;
        this._parent = parent;
        this._unit = unit;
        this._instances = [];
        if (!ret) {
//            console.log("Make new shape: " + id);
            // If we are here, this is the first one
            this._instanceID = 0;
            // Other setup items
            this._children = [];
            this._annotations = [];
            this._shells = [];
            this._annotations = [];
            // Setup 3D
            this._object3D = new THREE.Object3D();
            // Setup any transform from the parent reference frame
            this._transform = (new THREE.Matrix4()).copy(transform);
            this._object3D.applyMatrix(this._transform);
        } else {
            // Set up the object to be an instance
            this.instance(ret, assembly, parent, transform);
            ret = this;
        }
        return ret;
    }

    Shape.prototype.instance = function(source, assembly, parent, transform) {
        // Setup instance info
        source._instances.push(this);
        this._instanceID = source._instances.length;
//        console.log("Instance existing shape: " + this.getID());
        // Prep the object3D
        this._object3D = new THREE.Object3D();
        this._transform = (new THREE.Matrix4()).copy(transform);
        this._object3D.applyMatrix(this._transform);

        // Need to clone shell & annotation references & events
        this._shells = source._shells;
        this._annotations = source._annotations;
        // Need to clone all child shapes
        this._children = [];
        var self = this;
        for (var i = 0; i < source._children.length; i++) {
            // Clone the child shape
            var shapeID = source._children[i]._id;
            var shape = new Shape(shapeID, this._assembly, this, source._children[i]._transform, this._unit);
            // Bubble the shapeLoaded event
            shape.addEventListener("shapeLoaded", function(event) {
                self.dispatchEvent({ type: "shapeLoaded", shell: event.shell });
            });
            // Add of the child shape to the scene graph
            this._object3D.add(shape.getObject3D());
            this._children.push(shape);
        }
    };

    Shape.prototype.addChild = function(childShape) {
        var self = this;
        this._children.push(childShape);
        // Bubble the shapeLoaded event
        childShape.addEventListener("shapeLoaded", function(event) {
            self.dispatchEvent({ type: "shapeLoaded", shell: event.shell });
        });
        // Add of the child shape to the scene graph
        this._object3D.add(childShape.getObject3D());
    };

    Shape.prototype.addAnnotation = function(annotation) {
        var self = this;
        this._annotations.push(annotation);
        annotation.addEventListener("annotationEndLoad", function(event) {
            var anno = event.annotation;
            self.addAnnotationGeometry(anno.getGeometry());
        });
    };

    Shape.prototype.addShell = function(shell) {
        var self = this;
        this._shells.push(shell);
        shell.addEventListener("shellEndLoad", function(event) {
            var shell = event.shell;
            self.addShellGeometry(shell.getGeometry());
        });
    };

    Shape.prototype.setProduct = function(product) {
        this._product = product;
        // Set the product for all instances
        for (var i = 0; i < this._instances.length; i++) {
            this._instances[i].setProduct(product);
        }
    };
/*
     var vshader = [
        "precision mediump float;",
        "uniform mat4 u_projMatrix;",
        "uniform mat4 u_modelViewMatrix;",
        // is the light on
        "uniform bool u_light_on;",
        "attribute vec3 a_normal;",
        "attribute highp vec4 a_color;",
        "attribute vec4 a_position;",
        "varying vec4 v_eye_loc;",
        "varying highp vec4 v_Color;",
        "varying vec3 v_normal;",
        "void main() {",
        "    v_eye_loc = u_modelViewMatrix * a_position;",
        "    gl_Position = u_projMatrix * v_eye_loc;",
        "    v_Color = a_color;",
        "    v_normal = a_normal;",
        "}"].join("\n");

     var fshader = [
        "precision mediump float;",
        "uniform mat3 u_normalMatrix;",
        "uniform vec3 u_ambient;",
        "uniform bool u_light_on;",
        "varying highp vec4 v_Color;",
        "varying vec4 v_eye_loc;",
        "varying vec3 v_normal;",
        // material properties.  If we want to change these, they should
        // be passed in as uniforms.
        "const float mat_ambient=.15;",
        "const float mat_diffuse=1.;",
        "const float mat_specular=.4;",
        "const float shine=6.;",
         "void main() {",
        "    if (!u_light_on) {",
        "      gl_FragColor = v_Color;",
        "      return;",
        "    }",
        // if u_normalMatrix were normalized, the call to normalize()
        // here would not be necessary
        "    vec3 normal = normalize(u_normalMatrix * v_normal);",
        // ambient color generation
        "    float color_factor = .65 * mat_ambient;",
        "    float light_dot =  dot(normal, vec3(-.4082, .4082, .8165));",
        "    if ( light_dot > 0.)",
        "        color_factor += .45 * mat_diffuse * light_dot;",
        // vector from point to light.  We are placing a point light in the
        // scenegraph at the same level as the near clipping plane.
        // The z value of the vector may want to be a uniform so that it can
        // be derived from the camera_ratio.
        "    vec3 dir = normalize(vec3(0., 1., -3.) - v_eye_loc.xyz);",
        "    light_dot = dot(normal, dir);",
        "    if (light_dot > 0.) {",
        "        color_factor += .4 * mat_diffuse * light_dot;",
        "        vec3 s = normalize(dir + vec3(0.,0.,1.));",
        "        float ndot = dot(s,normal);",
        "        color_factor += mat_specular * max(pow(ndot, shine), 0.);",
        "    ",
        "    }",
        "    gl_FragColor = vec4(color_factor * v_Color.rgb, v_Color.a);",
        "}"].join("\n");
/*
     var prog = create_program(gl, vshader, fshader);
     gl.useProgram(prog);
     gl.proj_mtx = gl.getUniformLocation(prog, "u_projMatrix");
     if (!gl.proj_mtx)
     throw new Error ("Could not get proj matrix");
     gl.mv_mtx = gl.getUniformLocation(prog, "u_modelViewMatrix");
     if (!gl.mv_mtx)
         throw new Error ("Could not get model viewmatrix");
     gl.normal_mtx = gl.getUniformLocation(prog, "u_normalMatrix");
     gl.light_on = gl.getUniformLocation(prog, "u_light_on");
     if (gl.light_on) {
        gl.uniform1i(gl.light_on, true);
        gl.light = true;
     }
     gl.xforms = new GLTransform(gl, gl.proj_mtx, gl.mv_mtx, gl.normal_mtx);
     gl.pos_loc = gl.getAttribLocation(prog, "a_position");
     gl.norm_loc = gl.getAttribLocation(prog, "a_normal");
     gl.color_loc = gl.getAttribLocation(prog, "a_color");
     if (gl.pos_loc < 0 || gl.norm_loc < 0 || gl.color_loc < 0)
        throw new Error ("Could not get location");
*/

    Shape.prototype.addShellGeometry = function(geometry) {
//        console.log("Adding Shell Geo: " + this.getID());
//        var material = new THREE.MeshPhongMaterial({
//            color: 0xaaaaaa,
//            ambient: 0xaaaaaa,
//            specular: 0xffffff,
//            shininess: 255,
////            side: THREE.FrontSide,
//            side: THREE.DoubleSide,
//            vertexColors: THREE.VertexColors,
//            transparent: true
//        });
//        var material = new THREE.MeshBasicMaterial({
//            side: THREE.DoubleSide
//        });
//        var material = new THREE.ShaderMaterial({
//            uniforms: uniforms,
//            attributes: attributes,
//            vertexShader: vshader,
//            fragmentShader: fshader
//        });
//        var material = new THREE.MeshNormalMaterial({
//            side: THREE.DoubleSide,
//            vertexColors: THREE.VertexColors,
//            transparent: true
//        });
        var material = new THREE.ShaderMaterial(THREE.VelvetyShader);
        var mesh = new THREE.SkinnedMesh(geometry, material, false);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = this;
        this._object3D.add(mesh);
        this.dispatchEvent({ type: "shapeLoaded" });
    };

    Shape.prototype.addAnnotationGeometry = function(lineGeometries) {
//        console.log("Adding Annotation Geo: " + lineGeometries.length);
        var material = new THREE.LineBasicMaterial({
            color: 0xffffff,
            linewidth: 1
        });
        for (var i = 0; i < lineGeometries.length; i++) {
            var geometry = lineGeometries[i];
            var lines = new THREE.Line(geometry, material, THREE.LineStrip);
            this._object3D.add(lines);
        }
        this.dispatchEvent({ type: "shapeLoaded" });
    };

    Shape.prototype.getObject3D = function() {
        return this._object3D;
    };

    Shape.prototype.getName = function() {
        return "Shape";
    };

    Shape.prototype.getID = function() {
        return this._id + "_" + this._instanceID;
    };

    Shape.prototype.getSize = function() {
        if (!this._size) {
            this._size = 0;
            var i;
            for (i = 0; i < this._shells.length; i++) {
                this._size += this._shells[i].size;
            }
            for (i = 0; i < this._children.length; i++) {
                this._size += this._children[i].getSize();
            }
        }
        return this._size;
    };

    Shape.prototype.getLabel = function() {
        if (this._product) {
            return this._product.getProductName();
        }
        return "";
    };

    Shape.prototype.getNamedParent = function(includeSelf) {
        if (includeSelf === undefined) includeSelf = true;
        if (includeSelf && this._product) {
            return this;
        } else {
            var obj = this._parent;
            while (!obj.product && obj.parent) {
                console.log(obj.getID());
                obj = obj.parent;
            }
            return obj;
        }
    };

    Shape.prototype.getTree = function() {
        // Check if only geometry-aligned Shapes get added to tree
        var children = [], tmpChild;
        for (var i = 0; i < this._children.length; i++) {
            tmpChild = this._children[i].getTree();
            if (tmpChild) {
                children.push(tmpChild);
            }
        }
        // Only show things that are product-driven
        if (!this._product || this.boundingBox.empty()) {
            return undefined;
        } else {
            var id = this.getID();
            this.name = "Shape " + id;
            if (this._product) {
                this.name = this._product.getProductName();
            }
            // Don't show children if this is an instance
            return {
                id          : id,
                text        : this.name,
                state       : {
                    opened    : this._instanceID === 0,
                    disabled  : false,
                    selected  : false
                },
                children    : children
            };
        }
    };

    Shape.prototype.getBoundingBox = function(transform) {
        if (!this.boundingBox) {
            var i;
            this.boundingBox = new THREE.Box3();
            for (i = 0; i < this._shells.length; i++) {
                var shellBounds = this._shells[i].getBoundingBox(true);
                if (!shellBounds.empty()) this.boundingBox.union(shellBounds);
            }
            for (i = 0; i < this._children.length; i++) {
                var childBounds = this._children[i].getBoundingBox(true);
                if (!childBounds.empty()) {
                    this.boundingBox.union(childBounds);
                }
            }
        }
        var bounds = this.boundingBox.clone();
        if (transform && !bounds.empty()) {
            bounds.applyMatrix4(this._transform);
        }
        return bounds;
    };

    Shape.prototype.toggleVisibility = function() {
        if (this._object3D.visible) this.hide();
        else this.show();
        return this._object3D.visible;
    };

    Shape.prototype.hide = function() {
        this._object3D.traverse(function(object) {
            object.visible = false;
        });
    };

    Shape.prototype.show = function() {
        this._object3D.traverse(function(object) {
            object.visible = true;
        });
    };

    Shape.prototype.highlight = function(colorHex) {
        var self = this;
        this._object3D.traverse(function(object) {
            if (object.material) {
                object.material._color = {
                    ambient: object.material.ambient,
                    color: object.material.color,
                    specular: object.material.specular
                };
                object.material.ambient = new THREE.Color(colorHex);
                object.material.color = object.material.ambient;
                object.material.specular = object.material.ambient;
                self._assembly.addEventListener("_clearHighlights", function() {
                    object.material.ambient = object.material._color.ambient;
                    object.material.color = object.material._color.color;
                    object.material.specular = object.material._color.specular;
                });
            }
        });
    };

    Shape.prototype.setOpacity = function (opacity) {
        var self = this;
        this._object3D.traverse(function(object) {
            if (object.material) {
                object.material.opacity = opacity;
                self._assembly.addEventListener("_clearOpacity", function() {
                    object.material.opacity = 1;
                });
            }
        });
    };

    Shape.prototype.showBoundingBox = function() {
        var bounds = this.getBoundingBox(false);
        if (!this.bbox && !bounds.empty()) {
            this.bbox = this._assembly.buildBoundingBox(bounds);
        }
        if (this.bbox) {
            var self = this;
            this._eventFunc = function() {
                self.hideBoundingBox();
            };
            // Start listening for assembly _hideBounding events
            this._assembly.addEventListener("_hideBounding", this._eventFunc);
            this._object3D.add(this.bbox);
        }
    };

    Shape.prototype.hideBoundingBox = function() {
        // Stop listening for assembly _hideBounding events
        this._assembly.removeEventListener("_hideBounding", this._eventFunc);
        this._object3D.remove(this.bbox);
    };

    Shape.prototype.getCentroid = function(world) {
        if (world === undefined) world = true;
        var bbox = this.getBoundingBox(false);
        if (world) {
            bbox.min.applyMatrix4(this._object3D.matrixWorld);
            bbox.max.applyMatrix4(this._object3D.matrixWorld);
        }
        return bbox.center();
    };

    Shape.prototype.explode = function(distance, timeS) {
        var i, child, self = this;
        // Do we need to determine explosion direction
        if (!this._explodeDistance) {
            this._explodeStates = {};
            this._explodeDistance = 0;
            timeS = timeS ? timeS : 1.0;
            this._explodeStepSize = distance / 60.0 * timeS;
            this._explodeStepRemain = 60.0 * timeS;
            var explosionCenter = this.getCentroid(true);
            for (i = 0; i < this._children.length; i++) {
                child = this._children[i];
                // Convert the objectCenter
                var localExplosionCenter = explosionCenter.clone();
                child.getObject3D().worldToLocal(localExplosionCenter);
                // Get the child's centroid in local frame
                var childCenter = child.getCentroid(false);
                var childDirection = new THREE.Vector3().copy(childCenter);
                // Calculate explosion direction vector in local frame and save it
                childDirection.sub(localExplosionCenter).normalize();
                this._explodeStates[child.getID()] = childDirection;
//                this._object3D.add( new THREE.ArrowHelper(childDirection, childCenter, 1000.0, 0xff0000, 20, 10) );
            }
            // After all children are loaded - start listening for assembly events
//        this._assembly.addEventListener("_updateAnimation", function() {
//            self._updateAnimation();
//        });
        }
        // Make sure explosion distance does not go negative
        if (this._explodeDistance + distance < 0) {
            distance = -this._explodeDistance;
        }
        // Now, do the explosion
        this._explodeDistance += distance;
//    console.log("Exploded Distance: " + this._explodeDistance);
        for (i = 0; i < this._children.length; i++) {
            child = this._children[i];
            var explosionDirection = this._explodeStates[child.getID()];
            child.getObject3D().translateOnAxis(explosionDirection, distance);
        }
        // Clean up after myself
        if (this._explodeDistance === 0) {
            this.resetExplode();
        }
    };

    Shape.prototype._explodeStep = function(distance, step) {

    };

    Shape.prototype._updateAnimation = function() {
        if (this._explodeStepRemain > 0) {
        }
    };

    Shape.prototype.resetExplode = function() {
        if (this._explodeDistance) {
            // Explode by the negative distance
            this.explode(-this._explodeDistance);
            this._explodeDistance = undefined;
            this._explodeStates = undefined;
            this._exploseStep = undefined;
        }
    };

    // Let shape have event system
    THREE.EventDispatcher.prototype.apply(Shape.prototype);
    return Shape;
});
/* G. Hemingway Copyright @2014
 * Annotation object
 */




/********************************* Shape Class ********************************/

define('annotation',["THREE"], function(THREE) {
    function Annotation(id, assembly) {
        var ret = assembly.makeChild(id, this);
        if (!ret) {
//            console.log("Make new annotation: " + id);
            this._id = id;
            this._assembly = assembly;
            this._geometry = undefined;
        }
        return ret;
    }

    Annotation.prototype.getID = function() {
        return  this._id;
    };

    Annotation.prototype.addGeometry = function(data) {
//        console.log("Annotation.addGeometry: " + data.lines.length);
        this._lines =_.map(data.lines, function(line) {
            var linestrip = new THREE.BufferGeometry();
            linestrip.addAttribute('position', Float32Array, line.length / 3, 3);
            linestrip.attributes.position.array.set(line);
            return linestrip;
        });
        // All done - signal completion
        this.dispatchEvent({ type: "annotationEndLoad", annotation: this });
    };

    Annotation.prototype.getGeometry = function() {
        return this._lines;
    };

    // And Graham said, let annotations have events too, for they are good
    THREE.EventDispatcher.prototype.apply(Annotation.prototype);
    return Annotation;
});
/* G. Hemingway Copyright @2014
 * Shell class handles all of the actual geometry - shared between Shapes
 */




/********************************* Helper Functions ********************************/


define('shell',["THREE"], function(THREE) {
    function Shell(id, assembly, parent, size, defaultColor, boundingBox) {
        var ret = assembly.makeChild(id, this);
        if (!ret) {
            this._id = id;
            this._assembly = assembly;
            this._parent = parent;
            this._size = size;
            this._color = defaultColor;
            this._boundingBox = boundingBox;
            if (this._boundingBox.empty()) {
                console.log("Found empty bounding box: " + this._id);
            }
        }
        return ret;
    }

    Shell.prototype.unloadData = function() {
        console.log("Shell.unloadData - Not Implemented");
    };

    Shell.prototype.getID = function() {
        return  this._id;
    };

    Shell.prototype.addGeometry = function(position, normals, colors) {
        this.dispatchEvent({ type: "shellStartLoad", shell: this });
        // Create the geometry to hold the data
        this._geometry = new THREE.BufferGeometry();
        this._geometry.addAttribute('position', Float32Array, this.size * 3, 3);
        this._geometry.addAttribute('normal',   Float32Array, this.size * 3, 3);
        this._geometry.addAttribute('color',    Float32Array, this.size * 3, 3);

        // Setup the offsets
        var chunkSize = 21845;
        var i;
        this._geometry.offsets = [];
        var offsets = this.size / chunkSize;
        for (i = 0; i < offsets; i++) {
            var offset = {
                start: i * chunkSize * 3,
                index: i * chunkSize * 3,
                count: Math.min( this.size - ( i * chunkSize ), chunkSize ) * 3
            };
            this._geometry.offsets.push( offset );
        }

        // Now load the rest of the data
        this._geometry.attributes.position.array = position;
        this._geometry.attributes.normal.array = normals;
        this._geometry.attributes.color.array = colors;
        // Compute bbox
        this._geometry.computeBoundingBox();
        this._boundingBox = this._geometry.boundingBox.clone();
        // All done - signal completion
        this._isLoaded = true;
        this.dispatchEvent({ type: "shellEndLoad", shell: this });
    };

    Shell.prototype.getBoundingBox = function() {
        return this._boundingBox;
    };

    Shell.prototype.getSize = function() {
        return this._size;
    };

    Shell.prototype.getGeometry = function() {
        return this._geometry;
    };

    // And Graham said, let shells have events too, for they are good
    THREE.EventDispatcher.prototype.apply(Shell.prototype);
    return Shell;
});
/* G. Hemingway Copyright @2014
 * Data loader - Specialized for each type of data (e.g. XML or JSON)
 */




/********************************* Helper Functions ********************************/

define('data_loader',["THREE", "underscore", "assembly", "product", "shape", "annotation", "shell"], function(THREE, _, Assembly, Product, Shape, Annotation, Shell) {
    function DataLoader (parent, viewer, config) {
        this._parent = parent;
        this._viewer = viewer;
        this._queue = [];       // The queue of requests to load
        this._loading = [];     // List of active loading jobs
        this._maxWorkers = config.maxWorkers ? config.maxWorkers : 4;
        this._freeWorkers = [];

        var self = this;
        this._workers = [];     // List of workers
        while (this._workers.length < this._maxWorkers) {
            var worker = new Worker("javascript/webworker.js");
            worker.addEventListener("message", function(event) {
                self.workerMessage(event);
            });
            this._freeWorkers.push(this._workers.length);
            this._workers.push(worker);
        }
    }

    DataLoader.parseBoundingBox = function(str) {
        var vals = str;
        if (typeof str === "string") vals = DataLoader.parseFloatVec(str, 6);
        return new THREE.Box3(new THREE.Vector3(vals[0], vals[1], vals[2]), new THREE.Vector3(vals[3], vals[4], vals[5]));
    };

    DataLoader.parseXform = function(str, colOriented) {
        if (str == null) return null;
        var arr = str;
        if (typeof str === "string") {
            // Identity transform compression
            if (str === "I") {
                arr = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            } else {
                arr = DataLoader.parseFloatVec(str);
            }
        }
        if (arr.length !== 16) {
            throw new Error("Invalid Xform found");
        }
        if (colOriented) {
            return new THREE.Matrix4(
                arr[0], arr[4], arr[8],  arr[12],
                arr[1], arr[5], arr[9],  arr[13],
                arr[2], arr[6], arr[10], arr[14],
                arr[3], arr[7], arr[11], arr[15]
            );
        } else {
            return new THREE.Matrix4(
                arr[0],  arr[1],  arr[2],  arr[3],
                arr[4],  arr[5],  arr[6],  arr[7],
                arr[8],  arr[9],  arr[10], arr[11],
                arr[12], arr[13], arr[14], arr[15]
            );
        }
    };

    DataLoader.parseColor = function(hex) {
        var cval = parseInt(hex, 16);
        return (new THREE.Color()).setRGB(
            ((cval >>16) & 0xff) / 255,
            ((cval >>8) & 0xff) / 255,
            ((cval >>0) & 0xff) / 255
        );
    };

    DataLoader.parseUnit = function(str) {
        var unit = str.split(" ")[0];
        var factor = parseFloat(str.split(" ")[1]);
        if (unit !== "mm") {
            console.log("Found non-MM unit: " + unit);
        }
        return factor;
    };

    DataLoader.parseFloatVec = function(str, count) {
        var vals = str.split(" ");
        if (count != null && vals.length != count) {
            throw new Error (
                "parse_float_vec: unexpected number of elements expecting "+count
                    + " have " + vals.length);
        }
        count = vals.length;
        var ret = new Array(count);
        for (var i=0; i<count; i++) {
            var v = parseFloat(vals[i]);
            if (!isFinite(v)) throw new Error ("number is not finite");
            ret[i] = v;
        }
        return ret;
    };

    DataLoader.getArrayFromAttribute = function(el, name) {
        // Get the XML attribute, from an element and split it an array if empty or missing, return empty array.
        var val = el.getAttribute(name);
        if (!val) return [];
        return val.split(" ");
    };

    /************** DataLoader Class Functions ****************************/

    DataLoader.prototype.load = function(url, validateType, callback) {
        var loadErrorCheck = function(error, assembly) {
            if (!error) callback(error, assembly);
            else {
                console.log(error);
            }
        };
        var req = {
            url: url,
            validateType: validateType,
            callback: loadErrorCheck
        };
        // Need to try to get index.json then index.xml then pop error message
        this.resolveUrl(req, "index.json");
        this.addRequest(req);
        this.runLoadQueue();
    };

    // Set the base URL for future requests from the given URL
    DataLoader.prototype.setRequestBase = function(req) {
        var pattern = new RegExp("^(.*)/.*$");
        var m = pattern.exec(req.url);
        if (!m) {
            return;
        }
        var base = m[1];
        if (base == ".") {
            return;
        }
        if (!base.match(/\/$/)) {
            base += "/";
        }
        if (!req.base) req.base = base;
        else if (base.match(/^\//)) req.base = base;
        else if (base.length > 0) req.base += base + "/";
        else req.base = "";
    };

    DataLoader.prototype.resolveUrl = function(req, defaultURL) {
        if (!req.base) {
            this.setRequestBase(req);
        }
        if (req.url.match(/\/$/)) {
            req.url += defaultURL;
        }
        // Determine content type
        var filetype = req.url.split('.').pop();
        switch (filetype) {
            case "xml": req.contentType = "application/xml"; break;
            case "json": req.contentType = "application/json"; break;
            default:
                console.log("DataLoader.resolveUrl error - invalid content type: " + filetype);
        }
        if (!req.url.base || req.url.match(/^\w+:/) || req.url.match(/^\//)) {
            return req.url;
        }
        return req.url.base + req.url;
    };

    DataLoader.prototype.addRequest = function(req) {
        // Push onto the queue and send out a message
        this.resolveUrl(req);
        this._queue.push(req);
        var parts = req.url.split("/");
        this.dispatchEvent({ type: "addRequest", file: parts[parts.length - 1] });
    };

    DataLoader.prototype.sortQueue = function() {
        // Let's sort the req array
//        this._queue.sort(function(a, b) {
//            if (a.shellSize >= b.shellSize) return 1;
//            else return -1;
//        });
        return this._queue.shift();
//        console.log("DataLoader.sortQueue: " + JSON.stringify(_.pick(req, ["shellSize"] )));
//        return req;
    };

    DataLoader.prototype.queueLength = function(onlyLoad) {
        var numWorking = this._maxWorkers - this._freeWorkers.length;
        if (onlyLoad) {
            return numWorking;
        } else {
            return this._queue.length + numWorking;
        }
    };

    DataLoader.prototype.runLoadQueue = function() {
        // Keep issuing loads until no workers left
        while (this._queue.length > 0 && this._freeWorkers.length > 0) {
            var workerID = this._freeWorkers.shift();
            var req = this.sortQueue();
            req.workerID = workerID;
            this._loading[workerID] = req;
            this.initRequest(req);
        }
    };

    DataLoader.prototype.workerMessage = function(event) {
        // Put worker back into the queue - if it is the time
        var req;
        if (_.indexOf(["rootLoad", "shellLoad", "annotationLoad", "loadError"], event.data.type) != -1) {
            // Remove the job from the loading queue
            req = this._loading[event.data.workerID];
            this._loading[event.data.workerID] = undefined;
            this._freeWorkers.push(event.data.workerID);
            this.runLoadQueue();
        }
        var parser = new DOMParser();
        var xmlDoc, data;
        switch(event.data.type) {
            case "rootLoad":
                // Handle the assembly
                switch (req.contentType) {
                    case "application/xml":
                        this.buildAssemblyXML(event.data.data, req);
                        break;
                    case "application/json":
                        this.buildAssemblyJSON(event.data.data, req);
                        break;
                }
                break;
            case "annotationLoad":
                switch (req.contentType) {
                    case "application/xml":
                        xmlDoc = parser.parseFromString(event.data.data, "text/xml").documentElement;
                        data = {
                            id: xmlDoc.getAttribute("id"),
                            lines: this.parseAnnotationXML(xmlDoc)
                        };
                        break;
                    case "application/json":
                        data = JSON.parse(event.data.data);
                        break;
                }
                req.annotation.addGeometry(data);
                this.dispatchEvent({ type: "shellLoad", file: event.data.file });
                break;
            case "shellLoad":
                switch (req.contentType) {
                    case "application/xml":
                        xmlDoc = parser.parseFromString(event.data.data, "text/xml").documentElement;
                        data = this.parseShellXML(xmlDoc, req.shellSize);
                        break;
                    case "application/json":
                        data = event.data.data;
                        break;
                    default:
                        console.log("Blahhlal");
                }
                req.shell.addGeometry(data.position, data.normals, data.colors);
                this.dispatchEvent({ type: "shellLoad", file: event.data.file });
                break;
            case "parseComplete":
            case "loadProgress":
            case "loadComplete":
                this.dispatchEvent(event.data);
                break;
            case "loadError":
                if (req.callback) req.callback("loadError");
                break;
        }
    };

    DataLoader.prototype.initRequest = function(req) {
        // Fetch the worker to use
        var worker = this._workers[req.workerID];
        // Send the request to the worker
        var data = {
            url: req.url,
            workerID: req.workerID,
            type: req.validateType
        };
        if (data.type === "shell") data.shellSize = req.shellSize;
        worker.postMessage(data);
    };

    DataLoader.prototype.buildElementMapXML = function(xmlDoc) {
        var ids = {};
        for (var i=0; i < xmlDoc.childNodes.length; i++) {
            var ch = xmlDoc.childNodes[i];
            if (ch.nodeType != Node.ELEMENT_NODE) continue;
            var id = ch.getAttribute("id");
            if (id) ids[id] = ch;
        }
        return ids;
    };

    DataLoader.prototype.buildAssemblyXML = function(xmlText, req) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlText, "text/xml").documentElement;
        // Get the assembly properties we need
        var rootID = xmlDoc.getAttribute("root");
        var defaultColor = DataLoader.parseColor("7d7d7d");
        var assembly = new Assembly(rootID, defaultColor, this);
        // Process the rest of the index xml
        var map = this.buildElementMapXML(xmlDoc);
        var rootProduct = this.buildProductXML(req, map, assembly, rootID, true);
        assembly.setRootProduct(rootProduct);
        // Add the assembly to the scene
        this._viewer.add3DObject(rootProduct.getObject3D());
        req.callback(undefined, assembly);
    };

    DataLoader.prototype.buildProductXML = function(req, map, assembly, id, isRoot) {
        var self = this;
        var xmlElement = map[id];
        var step = xmlElement.getAttribute ("step");
        var name = xmlElement.getAttribute("name");

        // Have we already seen this product
        if (!assembly.isChild(id)) {
            var product = new Product(id, assembly, name, step, isRoot);
            // Load child shapes first - MUST BE BEFORE CHILD PRODUCTS
            var identityTransform = (new THREE.Matrix4()).identity();
            var shapes = DataLoader.getArrayFromAttribute(xmlElement, "shape");
            _.each(shapes, function(shapeID) {
                var shape = self.buildShapeXML(req, map, assembly, shapeID, undefined, identityTransform, isRoot);
                product.addShape(shape);
            });
            // Load child products
            var childProducts = DataLoader.getArrayFromAttribute(xmlElement, "children");
            _.each(childProducts, function(childID) {
                var child = self.buildProductXML(req, map, assembly, childID, false);
                product.addChild(child);
            });
            return product;
        }
        // Otherwise, just return the existing product
        return assembly.getChild(id);
    };

    DataLoader.prototype.buildShapeXML = function(req, map, assembly, id, parent, transform, isRoot) {
        // We are really only looking up stuff when non-root
        if (!isRoot) return assembly.getChild(id);
        // Ok, now let's really build some stuff
        var self = this;
        var xmlElement = map[id];
        var unit = xmlElement.getAttribute("unit");
        var shape = new Shape(id, assembly, parent, transform, unit, isRoot);
        // Load child shells
        var shells = DataLoader.getArrayFromAttribute(xmlElement, "shell");
        _.each(shells, function(shellID) {
            var shell = self.buildShellXML(req, map, shellID, assembly, shape);
            shape.addShell(shell);
        });
        // Load Child annotations
        var annotations = DataLoader.getArrayFromAttribute(xmlElement, "annotation");
        _.each(annotations, function(annotationID) {
            var annotation = self.buildAnnotationXML(req, map, assembly, annotationID, shape);
            shape.addAnnotation(annotation);
        });
        // Load child shapes
        var childShapes = xmlElement.getElementsByTagName("child");
        _.each(childShapes, function(childEl) {
            // Setup the child's transform
            var localTransform = DataLoader.parseXform(childEl.getAttribute("xform"), true);
            // Build the child
            var child = self.buildShapeXML(req, map, assembly, childEl.getAttribute("ref"), shape, localTransform, isRoot);
            shape.addChild(child);
        });
        return shape;
    };

    DataLoader.prototype.parseAnnotationXML = function(xmlDoc) {
        return _.map(xmlDoc.getElementsByTagName("polyline"), function(polyline) {
            var points = [];
            var ps = polyline.getElementsByTagName("p");
            _.forEach(ps, function(pt) {
                _.forEach(pt.getAttribute("l").split(" "), function(val) {
                    points.push(parseFloat(val));
                });
            });
            return points;
        });
    };

    DataLoader.prototype.buildAnnotationXML = function(req, map, assembly, id, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var xmlElement = map[id];
        var href = xmlElement.getAttribute("href");
        // Do we have to load the shell
        if (href) {
            var anno = new Annotation(id, assembly, parent);
            // Have we already loaded this annotation - if not, request the shell be loaded?
            if (!alreadyLoaded) {
                this.addRequest({
                    url: req.base + href,
                    validateType: "annotation",
                    annotation: anno
                });
            }
            return anno;
        } else {
            console.log("DataLoader.buildAnnotationXML - Online - Not yet implemented");
            return undefined;
        }
    };

    DataLoader.prototype.loadPoints = function(el) {
        // Load all of the point information
        var verts = el.getElementsByTagName("verts")[0].getElementsByTagName("v");
        var points = new Float32Array(verts.length * 3);
        var index = 0, pt, coords;
        for (var i = 0; i < verts.length; i++) {
            pt = verts[i].getAttribute("p");
            coords = pt.split(" ", 3);
            points[index++] = parseFloat(coords[0]);
            points[index++] = parseFloat(coords[1]);
            points[index++] = parseFloat(coords[2]);
        }
        return points;
    };

    DataLoader.prototype.parseShellXML = function(xmlRoot, expectedSize) {
        var size = expectedSize * 9;
 //    console.log("Process XML of shell: " + expectedSize);
        var defaultColor = DataLoader.parseColor("d8d8d8");
        // Load the points array
        var points = this.loadPoints(xmlRoot);
        // Get all of the facet information ready
        var facets = xmlRoot.getElementsByTagName("facets");
        // Now load the rest of the data
        var position = new Float32Array(size);
        var normals = new Float32Array(size);
        var colors = new Float32Array(size);
        var pIndex = 0, nIndex = 0, cIndex = 0, totalTris = 0;
        for (var i = 0; i < facets.length; i++) {
            // Set the color
            var color = facets[i].getAttribute("color");
            color = color ? DataLoader.parseColor(color) : defaultColor;
            // Work through each triangle - an 'F' is one
            var tris = facets[i].getElementsByTagName("f");
            totalTris += tris.length;
            var indexVals, tri, norms, index0, index1, index2, normCoordinates;
            for (var j = 0; j < tris.length; j++) {
                tri = tris[j];
                // Get the index information
                indexVals = tri.getAttribute("v").split(" ", 3);
                index0 = parseInt(indexVals[0]) * 3;
                index1 = parseInt(indexVals[1]) * 3;
                index2 = parseInt(indexVals[2]) * 3;

                position[pIndex++] = points[index0];
                position[pIndex++] = points[index0 + 1];
                position[pIndex++] = points[index0 + 2];
                position[pIndex++] = points[index1];
                position[pIndex++] = points[index1 + 1];
                position[pIndex++] = points[index1 + 2];
                position[pIndex++] = points[index2];
                position[pIndex++] = points[index2 + 1];
                position[pIndex++] = points[index2 + 2];

                // Get the normal information
                norms = tri.getElementsByTagName("n");
                normCoordinates = norms[0].getAttribute("d").split(" ", 3);
                normals[nIndex++] = parseFloat(normCoordinates[0]);
                normals[nIndex++] = parseFloat(normCoordinates[1]);
                normals[nIndex++] = parseFloat(normCoordinates[2]);
                normCoordinates = norms[1].getAttribute("d").split(" ", 3);
                normals[nIndex++] = parseFloat(normCoordinates[0]);
                normals[nIndex++] = parseFloat(normCoordinates[1]);
                normals[nIndex++] = parseFloat(normCoordinates[2]);
                normCoordinates = norms[2].getAttribute("d").split(" ", 3);
                normals[nIndex++] = parseFloat(normCoordinates[0]);
                normals[nIndex++] = parseFloat(normCoordinates[1]);
                normals[nIndex++] = parseFloat(normCoordinates[2]);

                // Set the color information
                colors[cIndex++] = color.r;
                colors[cIndex++] = color.g;
                colors[cIndex++] = color.b;
                colors[cIndex++] = color.r;
                colors[cIndex++] = color.g;
                colors[cIndex++] = color.b;
                colors[cIndex++] = color.r;
                colors[cIndex++] = color.g;
                colors[cIndex++] = color.b;
            }
        }
        return {
            position: position,
            normals: normals,
            colors: colors
        };
    };

    DataLoader.prototype.buildShellXML = function(req, map, id, assembly, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var xmlElement = map[id];
        var href = xmlElement.getAttribute("href");
        // Do we have to load the shell
        if (href) {
            var color = DataLoader.parseColor("7d7d7d");
            var boundingBox = DataLoader.parseBoundingBox(xmlElement.getAttribute("bbox"));
            var size = parseFloat(xmlElement.getAttribute("size"));
            var shell = new Shell(id, assembly, parent, size, color, boundingBox);
            // Have we already loaded this Shell - if not, request the shell be loaded?
            if (!alreadyLoaded) {
                this.addRequest({
                    url: req.base + href,
                    validateType: "shell",
                    shell: shell,
                    shellSize: size
                });
            }
            return shell;
        } else {
            console.log("DataLoader.buildShellXML - Online - Not yet implemented");
            return undefined;
        }
    };

    DataLoader.prototype.buildAssemblyJSON = function(jsonText, req) {
        var doc = JSON.parse(jsonText);
        var rootID = doc.root;
        var defaultColor = DataLoader.parseColor("7d7d7d");
        var assembly = new Assembly(rootID, defaultColor, this);
        // Process the rest of the index JSON - get the product with the root ID
        var rootProduct = this.buildProductJSON(req, doc, assembly, rootID, true);
        assembly.setRootProduct(rootProduct);
        // Add the assembly to the scene
        this._viewer.add3DObject(rootProduct.getObject3D());
        req.callback(undefined, assembly);
    };

    DataLoader.prototype.buildProductJSON = function(req, doc, assembly, id, isRoot) {
        // Create the product
        var self = this;
        var productJSON = _.findWhere(doc.products, { id: id });
        // Have we already seen this product
        if (!assembly.isChild(id)) {
            var product = new Product(id, assembly, productJSON.name, productJSON.step, isRoot);
            // Load child shapes first - MUST BE BEFORE CHILD PRODUCTS
            var identityTransform = (new THREE.Matrix4()).identity();
            _.each(productJSON.shapes, function(shapeID) {
                var shape = self.buildShapeJSON(req, doc, assembly, shapeID, undefined, identityTransform, isRoot);
                product.addShape(shape);
            });
            // Load child products
            _.each(productJSON.children, function(childID) {
                var child = self.buildProductJSON(req, doc, assembly, childID, false);
                product.addChild(child);
            });
            return product;
        }
        // Otherwise, just return the existing product
        return assembly.getChild(id);
    };

    DataLoader.prototype.buildShapeJSON = function(req, doc, assembly, id, parent, transform, isRoot) {
        // We are really only looking up stuff when non-root
        if (!isRoot) return assembly.getChild(id);
        // Ok, now let's really build some stuff
        var self = this;
        var shapeJSON = _.findWhere(doc.shapes, { id: id });
        var unit = shapeJSON.unit ? shapeJSON.unit : "unit 0.01";
        var shape = new Shape(id, assembly, parent, transform, unit, isRoot);
        // Load child shells
        _.each(shapeJSON.shells, function(shellID) {
            var shell = self.buildShellJSON(req, doc, shellID, assembly, shape);
            shape.addShell(shell);
        });
        // Load Child annotations
         _.each(shapeJSON.annotations, function(annotationID) {
            var annotation = self.buildAnnotationJSON(req, doc, annotationID, assembly, shape);
            shape.addAnnotation(annotation);
         });
        // Load child shapes
        _.each(shapeJSON.children, function(childJSON) {
            // Setup the child's transform
            var localTransform = DataLoader.parseXform(childJSON.xform, true);
            // Build the child
            var child = self.buildShapeJSON(req, doc, assembly, childJSON.ref, shape, localTransform, isRoot);
            shape.addChild(child);
        });
        return shape;
    };

    DataLoader.prototype.buildAnnotationJSON = function(req, doc, id, assembly, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var annoJSON = _.findWhere(doc.annotations, { id: id });
        // Do we have to load the shell
        if (annoJSON.href) {
            var anno = new Annotation(id, assembly, parent);
            // Have we already loaded this annotation - if not, request the shell be loaded?
            if (!alreadyLoaded) {
                this.addRequest({
                    url: req.base + annoJSON.href,
                    validateType: "annotation",
                    annotation: anno
                });
            }
            return anno;
        } else {
            console.log("DataLoader.buildAnnotationJSON - Online - Not yet implemented");
            return undefined;
        }
    };

    DataLoader.prototype.buildShellJSON = function(req, doc, id, assembly, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var shellJSON = _.findWhere(doc.shells, { id: id });
        // Do we have to load the shell
        if (shellJSON.href) {
            var color = DataLoader.parseColor("7d7d7d");
            var boundingBox = DataLoader.parseBoundingBox(shellJSON.bbox);
            var shell = new Shell(id, assembly, parent, shellJSON.size, color, boundingBox);
            // Have we already loaded this Shell - if not, request the shell be loaded?
            if (!alreadyLoaded) {
                this.addRequest({
                    url: req.base + shellJSON.href,
                    validateType: "shell",
                    shell: shell,
                    shellSize: shellJSON.size
                });
            }
            return shell;
        } else {
            console.log("DataLoader.buildShellJSON - Online - Not yet implemented");
            return undefined;
        }
    };

    // Give the dataLoader some eventing!
    THREE.EventDispatcher.prototype.apply(DataLoader.prototype);
    return DataLoader;
});

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.EffectComposer = function ( renderer, renderTarget ) {

	this.renderer = renderer;

	if ( renderTarget === undefined ) {

		var width = window.innerWidth || 1;
		var height = window.innerHeight || 1;
		var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

		renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );

	}

	this.renderTarget1 = renderTarget;
	this.renderTarget2 = renderTarget.clone();

	this.writeBuffer = this.renderTarget1;
	this.readBuffer = this.renderTarget2;

	this.passes = [];

	if ( THREE.CopyShader === undefined )
		console.error( "THREE.EffectComposer relies on THREE.CopyShader" );

	this.copyPass = new THREE.ShaderPass( THREE.CopyShader );

};

THREE.EffectComposer.prototype = {

	swapBuffers: function() {

		var tmp = this.readBuffer;
		this.readBuffer = this.writeBuffer;
		this.writeBuffer = tmp;

	},

	addPass: function ( pass ) {

		this.passes.push( pass );

	},

	insertPass: function ( pass, index ) {

		this.passes.splice( index, 0, pass );

	},

	render: function ( delta ) {

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		var maskActive = false;

		var pass, i, il = this.passes.length;

		for ( i = 0; i < il; i ++ ) {

			pass = this.passes[ i ];

			if ( !pass.enabled ) continue;

			pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

			if ( pass.needsSwap ) {

				if ( maskActive ) {

					var context = this.renderer.context;

					context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

					this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

					context.stencilFunc( context.EQUAL, 1, 0xffffffff );

				}

				this.swapBuffers();

			}

			if ( pass instanceof THREE.MaskPass ) {

				maskActive = true;

			} else if ( pass instanceof THREE.ClearMaskPass ) {

				maskActive = false;

			}

		}

	},

	reset: function ( renderTarget ) {

		if ( renderTarget === undefined ) {

			renderTarget = this.renderTarget1.clone();

			renderTarget.width = window.innerWidth;
			renderTarget.height = window.innerHeight;

		}

		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

	},

	setSize: function ( width, height ) {

		var renderTarget = this.renderTarget1.clone();

		renderTarget.width = width;
		renderTarget.height = height;

		this.reset( renderTarget );

	}

};

define("libs/threejs/EffectComposer", ["THREE"], function(){});

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"opacity":  { type: "f", value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform float opacity;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel = texture2D( tDiffuse, vUv );",
			"gl_FragColor = opacity * texel;",

		"}"

	].join("\n")

};

define("libs/threejs/CopyShader", ["THREE"], function(){});

/**
 * @author alteredq / http://alteredqualia.com/
 * @author davidedc / http://www.sketchpatch.net/
 *
 * NVIDIA FXAA by Timothy Lottes
 * http://timothylottes.blogspot.com/2011/06/fxaa3-source-released.html
 * - WebGL port by @supereggbert
 * http://www.glge.org/demos/fxaa/
 */

THREE.FXAAShader = {

	uniforms: {

		"tDiffuse":   { type: "t", value: null },
		"resolution": { type: "v2", value: new THREE.Vector2( 1 / 1024, 1 / 512 )  }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform vec2 resolution;",

		"varying vec2 vUv;",

		"#define FXAA_REDUCE_MIN   (1.0/128.0)",
		"#define FXAA_REDUCE_MUL   (1.0/8.0)",
		"#define FXAA_SPAN_MAX     8.0",

		"void main() {",

			"vec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;",
			"vec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;",
			"vec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;",
			"vec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;",
			"vec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );",
			"vec3 rgbM  = rgbaM.xyz;",
			"float opacity  = rgbaM.w;",

			"vec3 luma = vec3( 0.299, 0.587, 0.114 );",

			"float lumaNW = dot( rgbNW, luma );",
			"float lumaNE = dot( rgbNE, luma );",
			"float lumaSW = dot( rgbSW, luma );",
			"float lumaSE = dot( rgbSE, luma );",
			"float lumaM  = dot( rgbM,  luma );",
			"float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );",
			"float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );",

			"vec2 dir;",
			"dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));",
			"dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));",

			"float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );",

			"float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );",
			"dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),",
				  "max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),",
						"dir * rcpDirMin)) * resolution;",

			"vec3 rgbA = texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ).xyz;",
			"rgbA += texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ).xyz;",
			"rgbA *= 0.5;",

			"vec3 rgbB = texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * -0.5 ).xyz;",
			"rgbB += texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * 0.5 ).xyz;",
			"rgbB *= 0.25;",
			"rgbB += rgbA * 0.5;",

			"float lumaB = dot( rgbB, luma );",

			"if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {",

				"gl_FragColor = vec4( rgbA, opacity );",

			"} else {",

				"gl_FragColor = vec4( rgbB, opacity );",

			"}",

		"}"

	].join("\n")

};

define("libs/threejs/FXAAShader", ["THREE"], function(){});

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Screen-space ambient occlusion shader
 * - ported from
 *   SSAO GLSL shader v1.2
 *   assembled by Martins Upitis (martinsh) (http://devlog-martinsh.blogspot.com)
 *   original technique is made by ArKano22 (http://www.gamedev.net/topic/550699-ssao-no-halo-artifacts/)
 * - modifications
 * - modified to use RGBA packed depth texture (use clear color 1,1,1,1 for depth pass)
 * - made fog more compatible with three.js linear fog
 * - refactoring and optimizations
 */

THREE.SSAOShader = {

	uniforms: {

		"tDiffuse":     { type: "t", value: null },
		"tDepth":       { type: "t", value: null },
		"size":         { type: "v2", value: new THREE.Vector2( 512, 512 ) },
		"cameraNear":   { type: "f", value: 1 },
		"cameraFar":    { type: "f", value: 100 },
		"fogNear":      { type: "f", value: 5 },
		"fogFar":       { type: "f", value: 100 },
		"fogEnabled":   { type: "i", value: 0 },
		"onlyAO":       { type: "i", value: 0 },
		"aoClamp":      { type: "f", value: 0.3 },
		"lumInfluence": { type: "f", value: 0.9 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",

			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform float cameraNear;",
		"uniform float cameraFar;",

		"uniform float fogNear;",
		"uniform float fogFar;",

		"uniform bool fogEnabled;",  // attenuate AO with linear fog
		"uniform bool onlyAO;",      // use only ambient occlusion pass?

		"uniform vec2 size;",        // texture width, height
		"uniform float aoClamp;",    // depth clamp - reduces haloing at screen edges

		"uniform float lumInfluence;",  // how much luminance affects occlusion

		"uniform sampler2D tDiffuse;",
		"uniform sampler2D tDepth;",

		"varying vec2 vUv;",

		// "#define PI 3.14159265",
		"#define DL 2.399963229728653",  // PI * ( 3.0 - sqrt( 5.0 ) )
		"#define EULER 2.718281828459045",

		// helpers

		"float width = size.x;",   // texture width
		"float height = size.y;",  // texture height

		"float cameraFarPlusNear = cameraFar + cameraNear;",
		"float cameraFarMinusNear = cameraFar - cameraNear;",
		"float cameraCoef = 2.0 * cameraNear;",

		// user variables

		"const int samples = 8;",     // ao sample count
		"const float radius = 5.0;",  // ao radius

		"const bool useNoise = false;",      // use noise instead of pattern for sample dithering
		"const float noiseAmount = 0.0003;", // dithering amount

		"const float diffArea = 0.4;",   // self-shadowing reduction
		"const float gDisplace = 0.4;",  // gauss bell center

		"const vec3 onlyAOColor = vec3( 1.0, 0.7, 0.5 );",
		// "const vec3 onlyAOColor = vec3( 1.0, 1.0, 1.0 );",


		// RGBA depth

		"float unpackDepth( const in vec4 rgba_depth ) {",

			"const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );",
			"float depth = dot( rgba_depth, bit_shift );",
			"return depth;",

		"}",

		// generating noise / pattern texture for dithering

		"vec2 rand( const vec2 coord ) {",

			"vec2 noise;",

			"if ( useNoise ) {",

				"float nx = dot ( coord, vec2( 12.9898, 78.233 ) );",
				"float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );",

				"noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );",

			"} else {",

				"float ff = fract( 1.0 - coord.s * ( width / 2.0 ) );",
				"float gg = fract( coord.t * ( height / 2.0 ) );",

				"noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;",

			"}",

			"return ( noise * 2.0  - 1.0 ) * noiseAmount;",

		"}",

		"float doFog() {",

			"float zdepth = unpackDepth( texture2D( tDepth, vUv ) );",
			"float depth = -cameraFar * cameraNear / ( zdepth * cameraFarMinusNear - cameraFar );",

			"return smoothstep( fogNear, fogFar, depth );",

		"}",

		"float readDepth( const in vec2 coord ) {",

			// "return ( 2.0 * cameraNear ) / ( cameraFar + cameraNear - unpackDepth( texture2D( tDepth, coord ) ) * ( cameraFar - cameraNear ) );",
			"return cameraCoef / ( cameraFarPlusNear - unpackDepth( texture2D( tDepth, coord ) ) * cameraFarMinusNear );",


		"}",

		"float compareDepths( const in float depth1, const in float depth2, inout int far ) {",

			"float garea = 2.0;",                         // gauss bell width
			"float diff = ( depth1 - depth2 ) * 100.0;",  // depth difference (0-100)

			// reduce left bell width to avoid self-shadowing

			"if ( diff < gDisplace ) {",

				"garea = diffArea;",

			"} else {",

				"far = 1;",

			"}",

			"float dd = diff - gDisplace;",
			"float gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );",
			"return gauss;",

		"}",

		"float calcAO( float depth, float dw, float dh ) {",

			"float dd = radius - depth * radius;",
			"vec2 vv = vec2( dw, dh );",

			"vec2 coord1 = vUv + dd * vv;",
			"vec2 coord2 = vUv - dd * vv;",

			"float temp1 = 0.0;",
			"float temp2 = 0.0;",

			"int far = 0;",
			"temp1 = compareDepths( depth, readDepth( coord1 ), far );",

			// DEPTH EXTRAPOLATION

			"if ( far > 0 ) {",

				"temp2 = compareDepths( readDepth( coord2 ), depth, far );",
				"temp1 += ( 1.0 - temp1 ) * temp2;",

			"}",

			"return temp1;",

		"}",

		"void main() {",

			"vec2 noise = rand( vUv );",
			"float depth = readDepth( vUv );",

			"float tt = clamp( depth, aoClamp, 1.0 );",

			"float w = ( 1.0 / width )  / tt + ( noise.x * ( 1.0 - noise.x ) );",
			"float h = ( 1.0 / height ) / tt + ( noise.y * ( 1.0 - noise.y ) );",

			"float pw;",
			"float ph;",

			"float ao;",

			"float dz = 1.0 / float( samples );",
			"float z = 1.0 - dz / 2.0;",
			"float l = 0.0;",

			"for ( int i = 0; i <= samples; i ++ ) {",

				"float r = sqrt( 1.0 - z );",

				"pw = cos( l ) * r;",
				"ph = sin( l ) * r;",
				"ao += calcAO( depth, pw * w, ph * h );",
				"z = z - dz;",
				"l = l + DL;",

			"}",

			"ao /= float( samples );",
			"ao = 1.0 - ao;",

			"if ( fogEnabled ) {",

				"ao = mix( ao, 1.0, doFog() );",

			"}",

			"vec3 color = texture2D( tDiffuse, vUv ).rgb;",

			"vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );",
			"float lum = dot( color.rgb, lumcoeff );",
			"vec3 luminance = vec3( lum );",

			"vec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );",  // mix( color * ao, white, luminance )

			"if ( onlyAO ) {",

				"final = onlyAOColor * vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );",  // ambient occlusion only

			"}",

			"gl_FragColor = vec4( final, 1.0 );",

		"}"

	].join("\n")

};

define("libs/threejs/SSAOShader", ["THREE"], function(){});

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

	this.scene = scene;
	this.camera = camera;

	this.overrideMaterial = overrideMaterial;

	this.clearColor = clearColor;
	this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

	this.oldClearColor = new THREE.Color();
	this.oldClearAlpha = 1;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

};

THREE.RenderPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		this.scene.overrideMaterial = this.overrideMaterial;

		if ( this.clearColor ) {

			this.oldClearColor.copy( renderer.getClearColor() );
			this.oldClearAlpha = renderer.getClearAlpha();

			renderer.setClearColor( this.clearColor, this.clearAlpha );

		}

		renderer.render( this.scene, this.camera, readBuffer, this.clear );

		if ( this.clearColor ) {

			renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

		}

		this.scene.overrideMaterial = null;

	}

};

define("libs/threejs/RenderPass", ["THREE"], function(){});

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ShaderPass = function ( shader, textureID ) {

	this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

	this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	this.material = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.renderToScreen = false;

	this.enabled = true;
	this.needsSwap = true;
	this.clear = false;


	this.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
	this.scene  = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), null );
	this.scene.add( this.quad );

};

THREE.ShaderPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer;

		}

		this.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( this.scene, this.camera );

		} else {

			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		}

	}

};

define("libs/threejs/ShaderPass", ["THREE","libs/threejs/RenderPass"], function(){});

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.MaskPass = function ( scene, camera ) {

	this.scene = scene;
	this.camera = camera;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

	this.inverse = false;

};

THREE.MaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		// don't update color or depth

		context.colorMask( false, false, false, false );
		context.depthMask( false );

		// set up stencil

		var writeValue, clearValue;

		if ( this.inverse ) {

			writeValue = 0;
			clearValue = 1;

		} else {

			writeValue = 1;
			clearValue = 0;

		}

		context.enable( context.STENCIL_TEST );
		context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
		context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
		context.clearStencil( clearValue );

		// draw into the stencil buffer

		renderer.render( this.scene, this.camera, readBuffer, this.clear );
		renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		// re-enable update of color and depth

		context.colorMask( true, true, true, true );
		context.depthMask( true );

		// only render where stencil is set to 1

		context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
		context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

	}

};


THREE.ClearMaskPass = function () {

	this.enabled = true;

};

THREE.ClearMaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		context.disable( context.STENCIL_TEST );

	}

};

define("libs/threejs/MaskPass", ["THREE"], function(){});

/* G. Hemingway Copyright @2014
 * Visual model navigator - Helps with orientation and viewing aspects
 */



/************************* Compass Class *********************************************/


define('compass',["THREE"], function(THREE) {
    function Compass(compassParent, camera, controls, config) {
        this.controls = controls;
        this.mainCamera = camera;
        this.config = {
            magnitude: config.magnitude ? config.magnitude : 100,
            width: config.width ? config.width : 200,
            height: config.height ? config.height: 200
        };

        // RENDERER
        this.compassParent = document.getElementById(compassParent);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setSize(200, 200);
        // CANVAS
        this.canvas = this.renderer.domElement;
        this.compassParent.appendChild(this.canvas);
        // SCENE
        this.scene = new THREE.Scene();
        // CAMERA
        this.camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
        this.build();

        var self = this;
        this.renderer.domElement.addEventListener('mousemove', function(event) { self.onMouseMove(event); }, true );
        this.renderer.domElement.addEventListener('mousedown', function(event) { self.onMouseDown(event); }, false );
        this.renderer.domElement.addEventListener('mouseup', function(event) { self.onMouseUp(event); }, false );
    }

    Compass.prototype.build = function() {
        var geometry = new THREE.CubeGeometry( 40, 40, 40 );
        var object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));


        // Axes
        var origin = new THREE.Vector3(0.0, 0.0, 0.0);
        var xAxisArrow = new THREE.ArrowHelper(new THREE.Vector3(1.0, 0.0, 0.0), origin, 100.0, 0xff0000, 20, 10);
        var yAxisArrow = new THREE.ArrowHelper(new THREE.Vector3(0.0, 1.0, 0.0), origin, 100.0, 0x00ff00, 20, 10);
        var zAxisArrow = new THREE.ArrowHelper(new THREE.Vector3(0.0, 0.0, 1.0), origin, 100.0, 0x0000ff, 20, 10);
        this.scene.add(xAxisArrow);
        this.scene.add(yAxisArrow);
        this.scene.add(zAxisArrow);
        this.update();
    };

    Compass.prototype.update = function() {
        this.camera.up.copy(this.mainCamera.up);
        this.camera.position.copy(this.mainCamera.position);
        this.camera.position.sub(this.controls.target);
        this.camera.lookAt(this.scene.position);
        this.camera.position.setLength(300);
        this.renderer.render(this.scene, this.camera);
    };

    Compass.prototype.onMouseMove = function(event) {
        event.preventDefault();
        event.stopPropagation();
//    console.log("MouseMove");
    };

    Compass.prototype.onMouseDown = function(event) {
        event.preventDefault();
//    console.log("MouseDown");
    };

    Compass.prototype.onMouseUp = function(event) {
        event.preventDefault();
//    console.log("MouseUp");
    };

    return Compass;
});
/**
 * @author Eberhard Graether / http://egraether.com/
 * @author Mark Lundin 		 / http://mark-lundin.com
 */

THREE.TrackballControls = function ( object, domElement ) {
    var _this = this;
    var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM: 4, TOUCH_PAN: 5 };
    this.object = object;
    this.domElement = ( domElement !== undefined ) ? domElement : document;

    // API

    this.enabled = true;
    this.screen = { left: 0, top: 0, width: 0, height: 0 };
    this.rotateSpeed = 1.0;
    this.zoomSpeed = 1.2;
    this.panSpeed = 0.3;
    this.noRotate = false;
    this.noZoom = false;
    this.noPan = false;
    this.noRoll = false;
    this.staticMoving = false;
    this.dynamicDampingFactor = 0.2;
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.keys = [ 65 /*A*/, 83 /*S*/, 68 /*D*/ ];

    // internals

    this.target = new THREE.Vector3();
    var lastPosition = new THREE.Vector3();
    var _state = STATE.NONE,
        _prevState = STATE.NONE,
        _eye = new THREE.Vector3(),
        _rotateStart = new THREE.Vector3(),
        _rotateEnd = new THREE.Vector3(),
        _zoomStart = new THREE.Vector2(),
        _zoomEnd = new THREE.Vector2(),
        _touchZoomDistanceStart = 0,
        _touchZoomDistanceEnd = 0,
        _panStart = new THREE.Vector2(),
        _panEnd = new THREE.Vector2();

    // for reset

    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.up0 = this.object.up.clone();

    // events

    var changeEvent = { type: 'change' };
    var startEvent = { type: 'start' };
    var endEvent = { type: 'end' };


    // methods

    this.handleResize = function () {
        if ( this.domElement === document ) {
            this.screen.left = 0;
            this.screen.top = 0;
            this.screen.width = window.innerWidth;
            this.screen.height = window.innerHeight;
        } else {
            this.screen = this.domElement.getBoundingClientRect();
            // adjustments come from similar code in the jquery offset() function
            var d = this.domElement.ownerDocument.documentElement;
            this.screen.left += window.pageXOffset - d.clientLeft;
            this.screen.top += window.pageYOffset - d.clientTop;
        }
    };

    this.handleEvent = function ( event ) {
        if ( typeof this[ event.type ] == 'function' ) {
            this[ event.type ]( event );
        }
    };

    this.getMouseOnScreen = function ( pageX, pageY, optionalTarget ) {
        return ( optionalTarget || new THREE.Vector2() ).set(
            ( pageX - _this.screen.left ) / _this.screen.width,
            ( pageY - _this.screen.top ) / _this.screen.height
        );
    };

    this.getMouseProjectionOnBall = (function(){
        var objectUp = new THREE.Vector3();

        return function ( pageX, pageY, projection ) {
            var mouseOnBall = new THREE.Vector3(
                ( pageX - _this.screen.width * 0.5 - _this.screen.left ) / (_this.screen.width*.5),
                ( _this.screen.height * 0.5 + _this.screen.top - pageY ) / (_this.screen.height*.5),
                0.0
            );
            var length = mouseOnBall.length();
            if ( _this.noRoll ) {
                if ( length < Math.SQRT1_2 ) {
                    mouseOnBall.z = Math.sqrt( 1.0 - length*length );
                } else {
                    mouseOnBall.z = .5 / length;
                }
            } else if ( length > 1.0 ) {
                mouseOnBall.normalize();
            } else {
                mouseOnBall.z = Math.sqrt( 1.0 - length * length );
            }
            _eye.copy( _this.object.position ).sub( _this.target );
            projection.copy( _this.object.up ).setLength( mouseOnBall.y )
            projection.add( objectUp.copy( _this.object.up ).cross( _eye ).setLength( mouseOnBall.x ) );
            projection.add( _eye.setLength( mouseOnBall.z ) );
            return projection;
        }

    }());

    this.rotateCamera = (function(){
        var axis = new THREE.Vector3(),
            quaternion = new THREE.Quaternion();

        return function () {
            var angle = Math.acos( _rotateStart.dot( _rotateEnd ) / _rotateStart.length() / _rotateEnd.length() );
            if ( angle ) {
                axis.crossVectors( _rotateStart, _rotateEnd ).normalize();
                angle *= _this.rotateSpeed;
                quaternion.setFromAxisAngle( axis, -angle );
                _eye.applyQuaternion( quaternion );
                _this.object.up.applyQuaternion( quaternion );
                _rotateEnd.applyQuaternion( quaternion );
                if ( _this.staticMoving ) {
                    _rotateStart.copy( _rotateEnd );
                } else {
                    quaternion.setFromAxisAngle( axis, angle * ( _this.dynamicDampingFactor - 1.0 ) );
                    _rotateStart.applyQuaternion( quaternion );
                }
            }
        }
    }());

    this.zoomCamera = function () {
        var factor;
        if ( _state === STATE.TOUCH_ZOOM ) {
            factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
            _touchZoomDistanceStart = _touchZoomDistanceEnd;
            _eye.multiplyScalar( factor );
        } else {
            factor = 1.0 + ( _zoomEnd.y - _zoomStart.y ) * _this.zoomSpeed;
            if ( factor !== 1.0 && factor > 0.0 ) {
                _eye.multiplyScalar( factor );
                if ( _this.staticMoving ) {
                    _zoomStart.copy( _zoomEnd );
                } else {
                    _zoomStart.y += ( _zoomEnd.y - _zoomStart.y ) * this.dynamicDampingFactor;
                }
            }
        }
    };

    this.panCamera = (function(){
        var mouseChange = new THREE.Vector2(),
            objectUp = new THREE.Vector3(),
            pan = new THREE.Vector3();

        return function () {
            mouseChange.copy( _panEnd ).sub( _panStart );
            if ( mouseChange.lengthSq() ) {
                mouseChange.multiplyScalar( _eye.length() * _this.panSpeed );
                pan.copy( _eye ).cross( _this.object.up ).setLength( mouseChange.x );
                pan.add( objectUp.copy( _this.object.up ).setLength( mouseChange.y ) );
                _this.object.position.add( pan );
                _this.target.add( pan );
                if ( _this.staticMoving ) {
                    _panStart.copy( _panEnd );
                } else {
                    _panStart.add( mouseChange.subVectors( _panEnd, _panStart ).multiplyScalar( _this.dynamicDampingFactor ) );
                }
            }
        }
    }());

    this.checkDistances = function () {
        if ( !_this.noZoom || !_this.noPan ) {
            if ( _eye.lengthSq() > _this.maxDistance * _this.maxDistance ) {
                _this.object.position.addVectors( _this.target, _eye.setLength( _this.maxDistance ) );
            }
            if ( _eye.lengthSq() < _this.minDistance * _this.minDistance ) {
                _this.object.position.addVectors( _this.target, _eye.setLength( _this.minDistance ) );
            }
        }
    };

    this.update = function () {
        _eye.subVectors( _this.object.position, _this.target );
        if ( !_this.noRotate ) {
            _this.rotateCamera();
        }
        if ( !_this.noZoom ) {
            _this.zoomCamera();
        }
        if ( !_this.noPan ) {
            _this.panCamera();
        }
        _this.object.position.addVectors( _this.target, _eye );
        _this.checkDistances();
        _this.object.lookAt( _this.target );
        if ( lastPosition.distanceToSquared( _this.object.position ) > 0 ) {
            _this.dispatchEvent( changeEvent );
            lastPosition.copy( _this.object.position );
        }
    };

    this.reset = function () {
        _state = STATE.NONE;
        _prevState = STATE.NONE;
        _this.target.copy( _this.target0 );
        _this.object.position.copy( _this.position0 );
        _this.object.up.copy( _this.up0 );
        _eye.subVectors( _this.object.position, _this.target );
        _this.object.lookAt( _this.target );
        _this.dispatchEvent( changeEvent );
        lastPosition.copy( _this.object.position );
    };

    // listeners

    function keydown( event ) {
        if ( _this.enabled === false ) return;
        window.removeEventListener( 'keydown', keydown );
        _prevState = _state;
        if ( _state !== STATE.NONE ) {
            return;
        } else if ( event.keyCode === _this.keys[ STATE.ROTATE ] && !_this.noRotate ) {
            _state = STATE.ROTATE;
        } else if ( event.keyCode === _this.keys[ STATE.ZOOM ] && !_this.noZoom ) {
            _state = STATE.ZOOM;
        } else if ( event.keyCode === _this.keys[ STATE.PAN ] && !_this.noPan ) {
            _state = STATE.PAN;
        }
    }

    function keyup( event ) {
        if ( _this.enabled === false ) return;
        _state = _prevState;
        window.addEventListener( 'keydown', keydown, false );
    }

    function mousedown( event ) {
        if ( _this.enabled === false ) return;
        event.preventDefault();
        event.stopPropagation();
        if (_state === STATE.NONE) {
            _state = event.button;
        }
        if (_state === STATE.ROTATE && !_this.noRotate) {
            _rotateStart = _this.getMouseProjectionOnBall(event.pageX, event.pageY, _rotateStart);
            _rotateEnd.copy(_rotateStart)
        } else if (_state === STATE.ZOOM && !_this.noZoom) {
            _zoomStart = _this.getMouseOnScreen( event.pageX, event.pageY, _zoomStart );
            _zoomEnd.copy(_zoomStart);
        } else if ( _state === STATE.PAN && !_this.noPan ) {
            _panStart = _this.getMouseOnScreen( event.pageX, event.pageY, _panStart);
            _panEnd.copy(_panStart)
        }
        document.addEventListener('mousemove', mousemove, false);
        document.addEventListener('mouseup', mouseup, false);
        _this.dispatchEvent(startEvent);
    }

    function mousemove( event ) {
        if ( _this.enabled === false ) return;
        event.preventDefault();
        event.stopPropagation();
        if ( _state === STATE.ROTATE && !_this.noRotate ) {
            _rotateEnd = _this.getMouseProjectionOnBall( event.pageX, event.pageY, _rotateEnd );
        } else if ( _state === STATE.ZOOM && !_this.noZoom ) {
            _zoomEnd = _this.getMouseOnScreen( event.pageX, event.pageY, _zoomEnd );
        } else if ( _state === STATE.PAN && !_this.noPan ) {
            _panEnd = _this.getMouseOnScreen( event.pageX, event.pageY, _panEnd );
        }
    }

    function mouseup( event ) {
        if ( _this.enabled === false ) return;
        event.preventDefault();
        event.stopPropagation();
        _state = STATE.NONE;
        document.removeEventListener( 'mousemove', mousemove );
        document.removeEventListener( 'mouseup', mouseup );
        _this.dispatchEvent( endEvent );
    }

    function mousewheel( event ) {
        if ( _this.enabled === false ) return;
        event.preventDefault();
        event.stopPropagation();
        var delta = 0;
        if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9
            delta = event.wheelDelta / 40;
        } else if ( event.detail ) { // Firefox
            delta = - event.detail / 3;
        }
        _zoomStart.y += delta * 0.01;
        _this.dispatchEvent( startEvent );
        _this.dispatchEvent( endEvent );
    }

    function touchstart( event ) {
        if ( _this.enabled === false ) return;
        switch ( event.touches.length ) {
            case 1:
                _state = STATE.TOUCH_ROTATE;
                _rotateEnd.copy( _this.getMouseProjectionOnBall( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _rotateStart ));
                break;
            case 2:
                _state = STATE.TOUCH_ZOOM;
                var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                _touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt( dx * dx + dy * dy );
                break;
            case 3:
                _state = STATE.TOUCH_PAN;
                _panEnd.copy( _this.getMouseOnScreen( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _panStart ));
                break;
            default:
                _state = STATE.NONE;
        }
        _this.dispatchEvent( startEvent );
    }

    function touchmove( event ) {
        if ( _this.enabled === false ) return;
        event.preventDefault();
        event.stopPropagation();
        switch ( event.touches.length ) {
            case 1:
                _rotateEnd = _this.getMouseProjectionOnBall( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _rotateEnd );
                break;
            case 2:
                var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                _touchZoomDistanceEnd = Math.sqrt( dx * dx + dy * dy )
                break;
            case 3:
                _panEnd = _this.getMouseOnScreen( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _panEnd );
                break;
            default:
                _state = STATE.NONE;
        }
    }

    function touchend( event ) {
        if ( _this.enabled === false ) return;
        switch ( event.touches.length ) {
            case 1:
                _rotateStart.copy( _this.getMouseProjectionOnBall( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _rotateEnd ));
                break;
            case 2:
                _touchZoomDistanceStart = _touchZoomDistanceEnd = 0;
                break;
            case 3:
                _panStart.copy( _this.getMouseOnScreen( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _panEnd ));
                break;
        }
        _state = STATE.NONE;
        _this.dispatchEvent( endEvent );
    }

    this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
    this.domElement.addEventListener('mousedown', mousedown, false);
    this.domElement.addEventListener('mousewheel', mousewheel, false);
    this.domElement.addEventListener('DOMMouseScroll', mousewheel, false); // firefox
    this.domElement.addEventListener('touchstart', touchstart, false);
    this.domElement.addEventListener('touchend', touchend, false);
    this.domElement.addEventListener('touchmove', touchmove, false);
    window.addEventListener('keydown', keydown, false);
    window.addEventListener('keyup', keyup, false);
    this.handleResize();
};

THREE.TrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype);
define("TrackballControls", ["THREE"], function(){});

var dat=dat||{};dat.gui=dat.gui||{};dat.utils=dat.utils||{};dat.controllers=dat.controllers||{};dat.dom=dat.dom||{};dat.color=dat.color||{};dat.utils.css=function(){return{load:function(e,a){a=a||document;var b=a.createElement("link");b.type="text/css";b.rel="stylesheet";b.href=e;a.getElementsByTagName("head")[0].appendChild(b)},inject:function(e,a){a=a||document;var b=document.createElement("style");b.type="text/css";b.innerHTML=e;a.getElementsByTagName("head")[0].appendChild(b)}}}();
dat.utils.common=function(){var e=Array.prototype.forEach,a=Array.prototype.slice;return{BREAK:{},extend:function(b){this.each(a.call(arguments,1),function(a){for(var f in a)this.isUndefined(a[f])||(b[f]=a[f])},this);return b},defaults:function(b){this.each(a.call(arguments,1),function(a){for(var f in a)this.isUndefined(b[f])&&(b[f]=a[f])},this);return b},compose:function(){var b=a.call(arguments);return function(){for(var d=a.call(arguments),f=b.length-1;0<=f;f--)d=[b[f].apply(this,d)];return d[0]}},
each:function(a,d,f){if(e&&a.forEach===e)a.forEach(d,f);else if(a.length===a.length+0)for(var c=0,p=a.length;c<p&&!(c in a&&d.call(f,a[c],c)===this.BREAK);c++);else for(c in a)if(d.call(f,a[c],c)===this.BREAK)break},defer:function(a){setTimeout(a,0)},toArray:function(b){return b.toArray?b.toArray():a.call(b)},isUndefined:function(a){return void 0===a},isNull:function(a){return null===a},isNaN:function(a){return a!==a},isArray:Array.isArray||function(a){return a.constructor===Array},isObject:function(a){return a===
Object(a)},isNumber:function(a){return a===a+0},isString:function(a){return a===a+""},isBoolean:function(a){return!1===a||!0===a},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)}}}();
dat.controllers.Controller=function(e){var a=function(a,d){this.initialValue=a[d];this.domElement=document.createElement("div");this.object=a;this.property=d;this.__onFinishChange=this.__onChange=void 0};e.extend(a.prototype,{onChange:function(a){this.__onChange=a;return this},onFinishChange:function(a){this.__onFinishChange=a;return this},setValue:function(a){this.object[this.property]=a;this.__onChange&&this.__onChange.call(this,a);this.updateDisplay();return this},getValue:function(){return this.object[this.property]},
updateDisplay:function(){return this},isModified:function(){return this.initialValue!==this.getValue()}});return a}(dat.utils.common);
dat.dom.dom=function(e){function a(c){if("0"===c||e.isUndefined(c))return 0;c=c.match(d);return e.isNull(c)?0:parseFloat(c[1])}var b={};e.each({HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},function(c,a){e.each(c,function(c){b[c]=a})});var d=/(\d+(\.\d+)?)px/,f={makeSelectable:function(c,a){void 0!==c&&void 0!==c.style&&(c.onselectstart=a?function(){return!1}:function(){},c.style.MozUserSelect=a?"auto":"none",c.style.KhtmlUserSelect=
a?"auto":"none",c.unselectable=a?"on":"off")},makeFullscreen:function(c,a,d){e.isUndefined(a)&&(a=!0);e.isUndefined(d)&&(d=!0);c.style.position="absolute";a&&(c.style.left=0,c.style.right=0);d&&(c.style.top=0,c.style.bottom=0)},fakeEvent:function(c,a,d,f){d=d||{};var q=b[a];if(!q)throw Error("Event type "+a+" not supported.");var n=document.createEvent(q);switch(q){case "MouseEvents":n.initMouseEvent(a,d.bubbles||!1,d.cancelable||!0,window,d.clickCount||1,0,0,d.x||d.clientX||0,d.y||d.clientY||0,!1,
!1,!1,!1,0,null);break;case "KeyboardEvents":q=n.initKeyboardEvent||n.initKeyEvent;e.defaults(d,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0});q(a,d.bubbles||!1,d.cancelable,window,d.ctrlKey,d.altKey,d.shiftKey,d.metaKey,d.keyCode,d.charCode);break;default:n.initEvent(a,d.bubbles||!1,d.cancelable||!0)}e.defaults(n,f);c.dispatchEvent(n)},bind:function(c,a,d,b){c.addEventListener?c.addEventListener(a,d,b||!1):c.attachEvent&&c.attachEvent("on"+a,d);return f},
unbind:function(c,a,d,b){c.removeEventListener?c.removeEventListener(a,d,b||!1):c.detachEvent&&c.detachEvent("on"+a,d);return f},addClass:function(a,d){if(void 0===a.className)a.className=d;else if(a.className!==d){var b=a.className.split(/ +/);-1==b.indexOf(d)&&(b.push(d),a.className=b.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return f},removeClass:function(a,d){if(d){if(void 0!==a.className)if(a.className===d)a.removeAttribute("class");else{var b=a.className.split(/ +/),e=b.indexOf(d);-1!=
e&&(b.splice(e,1),a.className=b.join(" "))}}else a.className=void 0;return f},hasClass:function(a,d){return RegExp("(?:^|\\s+)"+d+"(?:\\s+|$)").test(a.className)||!1},getWidth:function(c){c=getComputedStyle(c);return a(c["border-left-width"])+a(c["border-right-width"])+a(c["padding-left"])+a(c["padding-right"])+a(c.width)},getHeight:function(c){c=getComputedStyle(c);return a(c["border-top-width"])+a(c["border-bottom-width"])+a(c["padding-top"])+a(c["padding-bottom"])+a(c.height)},getOffset:function(a){var d=
{left:0,top:0};if(a.offsetParent){do d.left+=a.offsetLeft,d.top+=a.offsetTop;while(a=a.offsetParent)}return d},isActive:function(a){return a===document.activeElement&&(a.type||a.href)}};return f}(dat.utils.common);
dat.controllers.OptionController=function(e,a,b){var d=function(f,c,e){d.superclass.call(this,f,c);var k=this;this.__select=document.createElement("select");if(b.isArray(e)){var l={};b.each(e,function(a){l[a]=a});e=l}b.each(e,function(a,c){var d=document.createElement("option");d.innerHTML=c;d.setAttribute("value",a);k.__select.appendChild(d)});this.updateDisplay();a.bind(this.__select,"change",function(){k.setValue(this.options[this.selectedIndex].value)});this.domElement.appendChild(this.__select)};
d.superclass=e;b.extend(d.prototype,e.prototype,{setValue:function(a){a=d.superclass.prototype.setValue.call(this,a);this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue());return a},updateDisplay:function(){this.__select.value=this.getValue();return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.controllers.NumberController=function(e,a){var b=function(d,f,c){b.superclass.call(this,d,f);c=c||{};this.__min=c.min;this.__max=c.max;this.__step=c.step;a.isUndefined(this.__step)?this.__impliedStep=0==this.initialValue?1:Math.pow(10,Math.floor(Math.log(this.initialValue)/Math.LN10))/10:this.__impliedStep=this.__step;d=this.__impliedStep;d=d.toString();d=-1<d.indexOf(".")?d.length-d.indexOf(".")-1:0;this.__precision=d};b.superclass=e;a.extend(b.prototype,e.prototype,{setValue:function(a){void 0!==
this.__min&&a<this.__min?a=this.__min:void 0!==this.__max&&a>this.__max&&(a=this.__max);void 0!==this.__step&&0!=a%this.__step&&(a=Math.round(a/this.__step)*this.__step);return b.superclass.prototype.setValue.call(this,a)},min:function(a){this.__min=a;return this},max:function(a){this.__max=a;return this},step:function(a){this.__step=a;return this}});return b}(dat.controllers.Controller,dat.utils.common);
dat.controllers.NumberControllerBox=function(e,a,b){var d=function(f,c,e){function k(){var a=parseFloat(n.__input.value);b.isNaN(a)||n.setValue(a)}function l(a){var c=r-a.clientY;n.setValue(n.getValue()+c*n.__impliedStep);r=a.clientY}function q(){a.unbind(window,"mousemove",l);a.unbind(window,"mouseup",q)}this.__truncationSuspended=!1;d.superclass.call(this,f,c,e);var n=this,r;this.__input=document.createElement("input");this.__input.setAttribute("type","text");a.bind(this.__input,"change",k);a.bind(this.__input,
"blur",function(){k();n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())});a.bind(this.__input,"mousedown",function(c){a.bind(window,"mousemove",l);a.bind(window,"mouseup",q);r=c.clientY});a.bind(this.__input,"keydown",function(a){13===a.keyCode&&(n.__truncationSuspended=!0,this.blur(),n.__truncationSuspended=!1)});this.updateDisplay();this.domElement.appendChild(this.__input)};d.superclass=e;b.extend(d.prototype,e.prototype,{updateDisplay:function(){var a=this.__input,c;if(this.__truncationSuspended)c=
this.getValue();else{c=this.getValue();var b=Math.pow(10,this.__precision);c=Math.round(c*b)/b}a.value=c;return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.NumberController,dat.dom.dom,dat.utils.common);
dat.controllers.NumberControllerSlider=function(e,a,b,d,f){function c(a,c,d,b,f){return b+(a-c)/(d-c)*(f-b)}var p=function(d,b,f,e,r){function y(d){d.preventDefault();var b=a.getOffset(h.__background),f=a.getWidth(h.__background);h.setValue(c(d.clientX,b.left,b.left+f,h.__min,h.__max));return!1}function g(){a.unbind(window,"mousemove",y);a.unbind(window,"mouseup",g);h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}p.superclass.call(this,d,b,{min:f,max:e,step:r});var h=this;this.__background=
document.createElement("div");this.__foreground=document.createElement("div");a.bind(this.__background,"mousedown",function(c){a.bind(window,"mousemove",y);a.bind(window,"mouseup",g);y(c)});a.addClass(this.__background,"slider");a.addClass(this.__foreground,"slider-fg");this.updateDisplay();this.__background.appendChild(this.__foreground);this.domElement.appendChild(this.__background)};p.superclass=e;p.useDefaultStyles=function(){b.inject(f)};d.extend(p.prototype,e.prototype,{updateDisplay:function(){var a=
(this.getValue()-this.__min)/(this.__max-this.__min);this.__foreground.style.width=100*a+"%";return p.superclass.prototype.updateDisplay.call(this)}});return p}(dat.controllers.NumberController,dat.dom.dom,dat.utils.css,dat.utils.common,"/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
dat.controllers.FunctionController=function(e,a,b){var d=function(b,c,e){d.superclass.call(this,b,c);var k=this;this.__button=document.createElement("div");this.__button.innerHTML=void 0===e?"Fire":e;a.bind(this.__button,"click",function(a){a.preventDefault();k.fire();return!1});a.addClass(this.__button,"button");this.domElement.appendChild(this.__button)};d.superclass=e;b.extend(d.prototype,e.prototype,{fire:function(){this.__onChange&&this.__onChange.call(this);this.__onFinishChange&&this.__onFinishChange.call(this,
this.getValue());this.getValue().call(this.object)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.controllers.BooleanController=function(e,a,b){var d=function(b,c){d.superclass.call(this,b,c);var e=this;this.__prev=this.getValue();this.__checkbox=document.createElement("input");this.__checkbox.setAttribute("type","checkbox");a.bind(this.__checkbox,"change",function(){e.setValue(!e.__prev)},!1);this.domElement.appendChild(this.__checkbox);this.updateDisplay()};d.superclass=e;b.extend(d.prototype,e.prototype,{setValue:function(a){a=d.superclass.prototype.setValue.call(this,a);this.__onFinishChange&&
this.__onFinishChange.call(this,this.getValue());this.__prev=this.getValue();return a},updateDisplay:function(){!0===this.getValue()?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0):this.__checkbox.checked=!1;return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.color.toString=function(e){return function(a){if(1==a.a||e.isUndefined(a.a)){for(a=a.hex.toString(16);6>a.length;)a="0"+a;return"#"+a}return"rgba("+Math.round(a.r)+","+Math.round(a.g)+","+Math.round(a.b)+","+a.a+")"}}(dat.utils.common);
dat.color.interpret=function(e,a){var b,d,f=[{litmus:a.isString,conversions:{THREE_CHAR_HEX:{read:function(a){a=a.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null===a?!1:{space:"HEX",hex:parseInt("0x"+a[1].toString()+a[1].toString()+a[2].toString()+a[2].toString()+a[3].toString()+a[3].toString())}},write:e},SIX_CHAR_HEX:{read:function(a){a=a.match(/^#([A-F0-9]{6})$/i);return null===a?!1:{space:"HEX",hex:parseInt("0x"+a[1].toString())}},write:e},CSS_RGB:{read:function(a){a=a.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
return null===a?!1:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3])}},write:e},CSS_RGBA:{read:function(a){a=a.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);return null===a?!1:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3]),a:parseFloat(a[4])}},write:e}}},{litmus:a.isNumber,conversions:{HEX:{read:function(a){return{space:"HEX",hex:a,conversionName:"HEX"}},write:function(a){return a.hex}}}},{litmus:a.isArray,conversions:{RGB_ARRAY:{read:function(a){return 3!=
a.length?!1:{space:"RGB",r:a[0],g:a[1],b:a[2]}},write:function(a){return[a.r,a.g,a.b]}},RGBA_ARRAY:{read:function(a){return 4!=a.length?!1:{space:"RGB",r:a[0],g:a[1],b:a[2],a:a[3]}},write:function(a){return[a.r,a.g,a.b,a.a]}}}},{litmus:a.isObject,conversions:{RGBA_OBJ:{read:function(c){return a.isNumber(c.r)&&a.isNumber(c.g)&&a.isNumber(c.b)&&a.isNumber(c.a)?{space:"RGB",r:c.r,g:c.g,b:c.b,a:c.a}:!1},write:function(a){return{r:a.r,g:a.g,b:a.b,a:a.a}}},RGB_OBJ:{read:function(c){return a.isNumber(c.r)&&
a.isNumber(c.g)&&a.isNumber(c.b)?{space:"RGB",r:c.r,g:c.g,b:c.b}:!1},write:function(a){return{r:a.r,g:a.g,b:a.b}}},HSVA_OBJ:{read:function(c){return a.isNumber(c.h)&&a.isNumber(c.s)&&a.isNumber(c.v)&&a.isNumber(c.a)?{space:"HSV",h:c.h,s:c.s,v:c.v,a:c.a}:!1},write:function(a){return{h:a.h,s:a.s,v:a.v,a:a.a}}},HSV_OBJ:{read:function(d){return a.isNumber(d.h)&&a.isNumber(d.s)&&a.isNumber(d.v)?{space:"HSV",h:d.h,s:d.s,v:d.v}:!1},write:function(a){return{h:a.h,s:a.s,v:a.v}}}}}];return function(){d=!1;
var c=1<arguments.length?a.toArray(arguments):arguments[0];a.each(f,function(e){if(e.litmus(c))return a.each(e.conversions,function(e,f){b=e.read(c);if(!1===d&&!1!==b)return d=b,b.conversionName=f,b.conversion=e,a.BREAK}),a.BREAK});return d}}(dat.color.toString,dat.utils.common);
dat.GUI=dat.gui.GUI=function(e,a,b,d,f,c,p,k,l,q,n,r,y,g,h){function t(a,c,b,e){if(void 0===c[b])throw Error("Object "+c+' has no property "'+b+'"');e.color?c=new n(c,b):(c=[c,b].concat(e.factoryArgs),c=d.apply(a,c));e.before instanceof f&&(e.before=e.before.__li);v(a,c);g.addClass(c.domElement,"c");b=document.createElement("span");g.addClass(b,"property-name");b.innerHTML=c.property;var q=document.createElement("div");q.appendChild(b);q.appendChild(c.domElement);e=u(a,q,e.before);g.addClass(e,m.CLASS_CONTROLLER_ROW);
g.addClass(e,typeof c.getValue());s(a,e,c);a.__controllers.push(c);return c}function u(a,d,c){var b=document.createElement("li");d&&b.appendChild(d);c?a.__ul.insertBefore(b,params.before):a.__ul.appendChild(b);a.onResize();return b}function s(a,d,b){b.__li=d;b.__gui=a;h.extend(b,{options:function(d){if(1<arguments.length)return b.remove(),t(a,b.object,b.property,{before:b.__li.nextElementSibling,factoryArgs:[h.toArray(arguments)]});if(h.isArray(d)||h.isObject(d))return b.remove(),t(a,b.object,b.property,
{before:b.__li.nextElementSibling,factoryArgs:[d]})},name:function(a){b.__li.firstElementChild.firstElementChild.innerHTML=a;return b},listen:function(){b.__gui.listen(b);return b},remove:function(){b.__gui.remove(b);return b}});if(b instanceof l){var e=new k(b.object,b.property,{min:b.__min,max:b.__max,step:b.__step});h.each(["updateDisplay","onChange","onFinishChange"],function(a){var d=b[a],J=e[a];b[a]=e[a]=function(){var a=Array.prototype.slice.call(arguments);d.apply(b,a);return J.apply(e,a)}});
g.addClass(d,"has-slider");b.domElement.insertBefore(e.domElement,b.domElement.firstElementChild)}else if(b instanceof k){var f=function(d){return h.isNumber(b.__min)&&h.isNumber(b.__max)?(b.remove(),t(a,b.object,b.property,{before:b.__li.nextElementSibling,factoryArgs:[b.__min,b.__max,b.__step]})):d};b.min=h.compose(f,b.min);b.max=h.compose(f,b.max)}else b instanceof c?(g.bind(d,"click",function(){g.fakeEvent(b.__checkbox,"click")}),g.bind(b.__checkbox,"click",function(a){a.stopPropagation()})):
b instanceof p?(g.bind(d,"click",function(){g.fakeEvent(b.__button,"click")}),g.bind(d,"mouseover",function(){g.addClass(b.__button,"hover")}),g.bind(d,"mouseout",function(){g.removeClass(b.__button,"hover")})):b instanceof n&&(g.addClass(d,"color"),b.updateDisplay=h.compose(function(a){d.style.borderLeftColor=b.__color.toString();return a},b.updateDisplay),b.updateDisplay());b.setValue=h.compose(function(d){a.getRoot().__preset_select&&b.isModified()&&D(a.getRoot(),!0);return d},b.setValue)}function v(a,
d){var b=a.getRoot(),c=b.__rememberedObjects.indexOf(d.object);if(-1!=c){var e=b.__rememberedObjectIndecesToControllers[c];void 0===e&&(e={},b.__rememberedObjectIndecesToControllers[c]=e);e[d.property]=d;if(b.load&&b.load.remembered){b=b.load.remembered;if(b[a.preset])b=b[a.preset];else if(b[z])b=b[z];else return;b[c]&&void 0!==b[c][d.property]&&(c=b[c][d.property],d.initialValue=c,d.setValue(c))}}}function K(a){var b=a.__save_row=document.createElement("li");g.addClass(a.domElement,"has-save");a.__ul.insertBefore(b,
a.__ul.firstChild);g.addClass(b,"save-row");var d=document.createElement("span");d.innerHTML="&nbsp;";g.addClass(d,"button gears");var c=document.createElement("span");c.innerHTML="Save";g.addClass(c,"button");g.addClass(c,"save");var e=document.createElement("span");e.innerHTML="New";g.addClass(e,"button");g.addClass(e,"save-as");var f=document.createElement("span");f.innerHTML="Revert";g.addClass(f,"button");g.addClass(f,"revert");var q=a.__preset_select=document.createElement("select");a.load&&
a.load.remembered?h.each(a.load.remembered,function(b,d){E(a,d,d==a.preset)}):E(a,z,!1);g.bind(q,"change",function(){for(var b=0;b<a.__preset_select.length;b++)a.__preset_select[b].innerHTML=a.__preset_select[b].value;a.preset=this.value});b.appendChild(q);b.appendChild(d);b.appendChild(c);b.appendChild(e);b.appendChild(f);if(w){var b=document.getElementById("dg-save-locally"),n=document.getElementById("dg-local-explain");b.style.display="block";b=document.getElementById("dg-local-storage");"true"===
localStorage.getItem(document.location.href+".isLocal")&&b.setAttribute("checked","checked");var k=function(){n.style.display=a.useLocalStorage?"block":"none"};k();g.bind(b,"change",function(){a.useLocalStorage=!a.useLocalStorage;k()})}var r=document.getElementById("dg-new-constructor");g.bind(r,"keydown",function(a){!a.metaKey||67!==a.which&&67!=a.keyCode||A.hide()});g.bind(d,"click",function(){r.innerHTML=JSON.stringify(a.getSaveObject(),void 0,2);A.show();r.focus();r.select()});g.bind(c,"click",
function(){a.save()});g.bind(e,"click",function(){var b=prompt("Enter a new preset name.");b&&a.saveAs(b)});g.bind(f,"click",function(){a.revert()})}function L(a){function b(f){f.preventDefault();e=f.clientX;g.addClass(a.__closeButton,m.CLASS_DRAG);g.bind(window,"mousemove",d);g.bind(window,"mouseup",c);return!1}function d(b){b.preventDefault();a.width+=e-b.clientX;a.onResize();e=b.clientX;return!1}function c(){g.removeClass(a.__closeButton,m.CLASS_DRAG);g.unbind(window,"mousemove",d);g.unbind(window,
"mouseup",c)}a.__resize_handle=document.createElement("div");h.extend(a.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});var e;g.bind(a.__resize_handle,"mousedown",b);g.bind(a.__closeButton,"mousedown",b);a.domElement.insertBefore(a.__resize_handle,a.domElement.firstElementChild)}function F(a,b){a.domElement.style.width=b+"px";a.__save_row&&a.autoPlace&&(a.__save_row.style.width=b+"px");a.__closeButton&&(a.__closeButton.style.width=b+"px")}
function B(a,b){var d={};h.each(a.__rememberedObjects,function(c,e){var f={};h.each(a.__rememberedObjectIndecesToControllers[e],function(a,d){f[d]=b?a.initialValue:a.getValue()});d[e]=f});return d}function E(a,b,d){var c=document.createElement("option");c.innerHTML=b;c.value=b;a.__preset_select.appendChild(c);d&&(a.__preset_select.selectedIndex=a.__preset_select.length-1)}function D(a,b){var d=a.__preset_select[a.__preset_select.selectedIndex];d.innerHTML=b?d.value+"*":d.value}function G(a){0!=a.length&&
r(function(){G(a)});h.each(a,function(a){a.updateDisplay()})}e.inject(b);var z="Default",w;try{w="localStorage"in window&&null!==window.localStorage}catch(M){w=!1}var A,H=!0,x,C=!1,I=[],m=function(a){function b(){localStorage.setItem(document.location.href+".gui",JSON.stringify(c.getSaveObject()))}function d(){var a=c.getRoot();a.width+=1;h.defer(function(){a.width-=1})}var c=this;this.domElement=document.createElement("div");this.__ul=document.createElement("ul");this.domElement.appendChild(this.__ul);
g.addClass(this.domElement,"dg");this.__folders={};this.__controllers=[];this.__rememberedObjects=[];this.__rememberedObjectIndecesToControllers=[];this.__listening=[];a=a||{};a=h.defaults(a,{autoPlace:!0,width:m.DEFAULT_WIDTH});a=h.defaults(a,{resizable:a.autoPlace,hideable:a.autoPlace});h.isUndefined(a.load)?a.load={preset:z}:a.preset&&(a.load.preset=a.preset);h.isUndefined(a.parent)&&a.hideable&&I.push(this);a.resizable=h.isUndefined(a.parent)&&a.resizable;a.autoPlace&&h.isUndefined(a.scrollable)&&
(a.scrollable=!0);var e=w&&"true"===localStorage.getItem(document.location.href+".isLocal");Object.defineProperties(this,{parent:{get:function(){return a.parent}},scrollable:{get:function(){return a.scrollable}},autoPlace:{get:function(){return a.autoPlace}},preset:{get:function(){return c.parent?c.getRoot().preset:a.load.preset},set:function(b){c.parent?c.getRoot().preset=b:a.load.preset=b;for(b=0;b<this.__preset_select.length;b++)this.__preset_select[b].value==this.preset&&(this.__preset_select.selectedIndex=
b);c.revert()}},width:{get:function(){return a.width},set:function(b){a.width=b;F(c,b)}},name:{get:function(){return a.name},set:function(b){a.name=b;q&&(q.innerHTML=a.name)}},closed:{get:function(){return a.closed},set:function(b){a.closed=b;a.closed?g.addClass(c.__ul,m.CLASS_CLOSED):g.removeClass(c.__ul,m.CLASS_CLOSED);this.onResize();c.__closeButton&&(c.__closeButton.innerHTML=b?m.TEXT_OPEN:m.TEXT_CLOSED)}},load:{get:function(){return a.load}},useLocalStorage:{get:function(){return e},set:function(a){w&&
((e=a)?g.bind(window,"unload",b):g.unbind(window,"unload",b),localStorage.setItem(document.location.href+".isLocal",a))}}});if(h.isUndefined(a.parent)){a.closed=!1;g.addClass(this.domElement,m.CLASS_MAIN);g.makeSelectable(this.domElement,!1);if(w&&e){c.useLocalStorage=!0;var f=localStorage.getItem(document.location.href+".gui");f&&(a.load=JSON.parse(f))}this.__closeButton=document.createElement("div");this.__closeButton.innerHTML=m.TEXT_CLOSED;g.addClass(this.__closeButton,m.CLASS_CLOSE_BUTTON);this.domElement.appendChild(this.__closeButton);
g.bind(this.__closeButton,"click",function(){c.closed=!c.closed})}else{void 0===a.closed&&(a.closed=!0);var q=document.createTextNode(a.name);g.addClass(q,"controller-name");f=u(c,q);g.addClass(this.__ul,m.CLASS_CLOSED);g.addClass(f,"title");g.bind(f,"click",function(a){a.preventDefault();c.closed=!c.closed;return!1});a.closed||(this.closed=!1)}a.autoPlace&&(h.isUndefined(a.parent)&&(H&&(x=document.createElement("div"),g.addClass(x,"dg"),g.addClass(x,m.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(x),
H=!1),x.appendChild(this.domElement),g.addClass(this.domElement,m.CLASS_AUTO_PLACE)),this.parent||F(c,a.width));g.bind(window,"resize",function(){c.onResize()});g.bind(this.__ul,"webkitTransitionEnd",function(){c.onResize()});g.bind(this.__ul,"transitionend",function(){c.onResize()});g.bind(this.__ul,"oTransitionEnd",function(){c.onResize()});this.onResize();a.resizable&&L(this);c.getRoot();a.parent||d()};m.toggleHide=function(){C=!C;h.each(I,function(a){a.domElement.style.zIndex=C?-999:999;a.domElement.style.opacity=
C?0:1})};m.CLASS_AUTO_PLACE="a";m.CLASS_AUTO_PLACE_CONTAINER="ac";m.CLASS_MAIN="main";m.CLASS_CONTROLLER_ROW="cr";m.CLASS_TOO_TALL="taller-than-window";m.CLASS_CLOSED="closed";m.CLASS_CLOSE_BUTTON="close-button";m.CLASS_DRAG="drag";m.DEFAULT_WIDTH=245;m.TEXT_CLOSED="Close Controls";m.TEXT_OPEN="Open Controls";g.bind(window,"keydown",function(a){"text"===document.activeElement.type||72!==a.which&&72!=a.keyCode||m.toggleHide()},!1);h.extend(m.prototype,{add:function(a,b){return t(this,a,b,{factoryArgs:Array.prototype.slice.call(arguments,
2)})},addColor:function(a,b){return t(this,a,b,{color:!0})},remove:function(a){this.__ul.removeChild(a.__li);this.__controllers.slice(this.__controllers.indexOf(a),1);var b=this;h.defer(function(){b.onResize()})},destroy:function(){this.autoPlace&&x.removeChild(this.domElement)},addFolder:function(a){if(void 0!==this.__folders[a])throw Error('You already have a folder in this GUI by the name "'+a+'"');var b={name:a,parent:this};b.autoPlace=this.autoPlace;this.load&&this.load.folders&&this.load.folders[a]&&
(b.closed=this.load.folders[a].closed,b.load=this.load.folders[a]);b=new m(b);this.__folders[a]=b;a=u(this,b.domElement);g.addClass(a,"folder");return b},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var a=this.getRoot();if(a.scrollable){var b=g.getOffset(a.__ul).top,d=0;h.each(a.__ul.childNodes,function(b){a.autoPlace&&b===a.__save_row||(d+=g.getHeight(b))});window.innerHeight-b-20<d?(g.addClass(a.domElement,m.CLASS_TOO_TALL),a.__ul.style.height=window.innerHeight-
b-20+"px"):(g.removeClass(a.domElement,m.CLASS_TOO_TALL),a.__ul.style.height="auto")}a.__resize_handle&&h.defer(function(){a.__resize_handle.style.height=a.__ul.offsetHeight+"px"});a.__closeButton&&(a.__closeButton.style.width=a.width+"px")},remember:function(){h.isUndefined(A)&&(A=new y,A.domElement.innerHTML=a);if(this.parent)throw Error("You can only call remember on a top level GUI.");var b=this;h.each(Array.prototype.slice.call(arguments),function(a){0==b.__rememberedObjects.length&&K(b);-1==
b.__rememberedObjects.indexOf(a)&&b.__rememberedObjects.push(a)});this.autoPlace&&F(this,this.width)},getRoot:function(){for(var a=this;a.parent;)a=a.parent;return a},getSaveObject:function(){var a=this.load;a.closed=this.closed;0<this.__rememberedObjects.length&&(a.preset=this.preset,a.remembered||(a.remembered={}),a.remembered[this.preset]=B(this));a.folders={};h.each(this.__folders,function(b,d){a.folders[d]=b.getSaveObject()});return a},save:function(){this.load.remembered||(this.load.remembered=
{});this.load.remembered[this.preset]=B(this);D(this,!1)},saveAs:function(a){this.load.remembered||(this.load.remembered={},this.load.remembered[z]=B(this,!0));this.load.remembered[a]=B(this);this.preset=a;E(this,a,!0)},revert:function(a){h.each(this.__controllers,function(b){this.getRoot().load.remembered?v(a||this.getRoot(),b):b.setValue(b.initialValue)},this);h.each(this.__folders,function(a){a.revert(a)});a||D(this.getRoot(),!1)},listen:function(a){var b=0==this.__listening.length;this.__listening.push(a);
b&&G(this.__listening)}});return m}(dat.utils.css,'<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>',
".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n",
dat.controllers.factory=function(e,a,b,d,f,c,p){return function(k,l,q,n){var r=k[l];if(p.isArray(q)||p.isObject(q))return new e(k,l,q);if(p.isNumber(r))return p.isNumber(q)&&p.isNumber(n)?new b(k,l,q,n):new a(k,l,{min:q,max:n});if(p.isString(r))return new d(k,l);if(p.isFunction(r))return new f(k,l,"");if(p.isBoolean(r))return new c(k,l)}}(dat.controllers.OptionController,dat.controllers.NumberControllerBox,dat.controllers.NumberControllerSlider,dat.controllers.StringController=function(e,a,b){var d=
function(b,c){function e(){k.setValue(k.__input.value)}d.superclass.call(this,b,c);var k=this;this.__input=document.createElement("input");this.__input.setAttribute("type","text");a.bind(this.__input,"keyup",e);a.bind(this.__input,"change",e);a.bind(this.__input,"blur",function(){k.__onFinishChange&&k.__onFinishChange.call(k,k.getValue())});a.bind(this.__input,"keydown",function(a){13===a.keyCode&&this.blur()});this.updateDisplay();this.domElement.appendChild(this.__input)};d.superclass=e;b.extend(d.prototype,
e.prototype,{updateDisplay:function(){a.isActive(this.__input)||(this.__input.value=this.getValue());return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common),dat.controllers.FunctionController,dat.controllers.BooleanController,dat.utils.common),dat.controllers.Controller,dat.controllers.BooleanController,dat.controllers.FunctionController,dat.controllers.NumberControllerBox,dat.controllers.NumberControllerSlider,dat.controllers.OptionController,
dat.controllers.ColorController=function(e,a,b,d,f){function c(a,b,d,c){a.style.background="";f.each(l,function(e){a.style.cssText+="background: "+e+"linear-gradient("+b+", "+d+" 0%, "+c+" 100%); "})}function p(a){a.style.background="";a.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";a.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
a.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";a.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";a.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var k=function(e,n){function r(b){t(b);a.bind(window,"mousemove",t);a.bind(window,
"mouseup",l)}function l(){a.unbind(window,"mousemove",t);a.unbind(window,"mouseup",l)}function g(){var a=d(this.value);!1!==a?(s.__color.__state=a,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function h(){a.unbind(window,"mousemove",u);a.unbind(window,"mouseup",h)}function t(b){b.preventDefault();var d=a.getWidth(s.__saturation_field),c=a.getOffset(s.__saturation_field),e=(b.clientX-c.left+document.body.scrollLeft)/d;b=1-(b.clientY-c.top+document.body.scrollTop)/d;1<b?b=1:0>
b&&(b=0);1<e?e=1:0>e&&(e=0);s.__color.v=b;s.__color.s=e;s.setValue(s.__color.toOriginal());return!1}function u(b){b.preventDefault();var d=a.getHeight(s.__hue_field),c=a.getOffset(s.__hue_field);b=1-(b.clientY-c.top+document.body.scrollTop)/d;1<b?b=1:0>b&&(b=0);s.__color.h=360*b;s.setValue(s.__color.toOriginal());return!1}k.superclass.call(this,e,n);this.__color=new b(this.getValue());this.__temp=new b(0);var s=this;this.domElement=document.createElement("div");a.makeSelectable(this.domElement,!1);
this.__selector=document.createElement("div");this.__selector.className="selector";this.__saturation_field=document.createElement("div");this.__saturation_field.className="saturation-field";this.__field_knob=document.createElement("div");this.__field_knob.className="field-knob";this.__field_knob_border="2px solid ";this.__hue_knob=document.createElement("div");this.__hue_knob.className="hue-knob";this.__hue_field=document.createElement("div");this.__hue_field.className="hue-field";this.__input=document.createElement("input");
this.__input.type="text";this.__input_textShadow="0 1px 1px ";a.bind(this.__input,"keydown",function(a){13===a.keyCode&&g.call(this)});a.bind(this.__input,"blur",g);a.bind(this.__selector,"mousedown",function(b){a.addClass(this,"drag").bind(window,"mouseup",function(b){a.removeClass(s.__selector,"drag")})});var v=document.createElement("div");f.extend(this.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"});f.extend(this.__field_knob.style,
{position:"absolute",width:"12px",height:"12px",border:this.__field_knob_border+(0.5>this.__color.v?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1});f.extend(this.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1});f.extend(this.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"});f.extend(v.style,{width:"100%",height:"100%",
background:"none"});c(v,"top","rgba(0,0,0,0)","#000");f.extend(this.__hue_field.style,{width:"15px",height:"100px",display:"inline-block",border:"1px solid #555",cursor:"ns-resize"});p(this.__hue_field);f.extend(this.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:this.__input_textShadow+"rgba(0,0,0,0.7)"});a.bind(this.__saturation_field,"mousedown",r);a.bind(this.__field_knob,"mousedown",r);a.bind(this.__hue_field,"mousedown",function(b){u(b);a.bind(window,
"mousemove",u);a.bind(window,"mouseup",h)});this.__saturation_field.appendChild(v);this.__selector.appendChild(this.__field_knob);this.__selector.appendChild(this.__saturation_field);this.__selector.appendChild(this.__hue_field);this.__hue_field.appendChild(this.__hue_knob);this.domElement.appendChild(this.__input);this.domElement.appendChild(this.__selector);this.updateDisplay()};k.superclass=e;f.extend(k.prototype,e.prototype,{updateDisplay:function(){var a=d(this.getValue());if(!1!==a){var e=!1;
f.each(b.COMPONENTS,function(b){if(!f.isUndefined(a[b])&&!f.isUndefined(this.__color.__state[b])&&a[b]!==this.__color.__state[b])return e=!0,{}},this);e&&f.extend(this.__color.__state,a)}f.extend(this.__temp.__state,this.__color.__state);this.__temp.a=1;var k=0.5>this.__color.v||0.5<this.__color.s?255:0,l=255-k;f.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toString(),border:this.__field_knob_border+"rgb("+
k+","+k+","+k+")"});this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px";this.__temp.s=1;this.__temp.v=1;c(this.__saturation_field,"left","#fff",this.__temp.toString());f.extend(this.__input.style,{backgroundColor:this.__input.value=this.__color.toString(),color:"rgb("+k+","+k+","+k+")",textShadow:this.__input_textShadow+"rgba("+l+","+l+","+l+",.7)"})}});var l=["-moz-","-o-","-webkit-","-ms-",""];return k}(dat.controllers.Controller,dat.dom.dom,dat.color.Color=function(e,a,b,d){function f(a,
b,d){Object.defineProperty(a,b,{get:function(){if("RGB"===this.__state.space)return this.__state[b];p(this,b,d);return this.__state[b]},set:function(a){"RGB"!==this.__state.space&&(p(this,b,d),this.__state.space="RGB");this.__state[b]=a}})}function c(a,b){Object.defineProperty(a,b,{get:function(){if("HSV"===this.__state.space)return this.__state[b];k(this);return this.__state[b]},set:function(a){"HSV"!==this.__state.space&&(k(this),this.__state.space="HSV");this.__state[b]=a}})}function p(b,c,e){if("HEX"===
b.__state.space)b.__state[c]=a.component_from_hex(b.__state.hex,e);else if("HSV"===b.__state.space)d.extend(b.__state,a.hsv_to_rgb(b.__state.h,b.__state.s,b.__state.v));else throw"Corrupted color state";}function k(b){var c=a.rgb_to_hsv(b.r,b.g,b.b);d.extend(b.__state,{s:c.s,v:c.v});d.isNaN(c.h)?d.isUndefined(b.__state.h)&&(b.__state.h=0):b.__state.h=c.h}var l=function(){this.__state=e.apply(this,arguments);if(!1===this.__state)throw"Failed to interpret color arguments";this.__state.a=this.__state.a||
1};l.COMPONENTS="r g b h s v hex a".split(" ");d.extend(l.prototype,{toString:function(){return b(this)},toOriginal:function(){return this.__state.conversion.write(this)}});f(l.prototype,"r",2);f(l.prototype,"g",1);f(l.prototype,"b",0);c(l.prototype,"h");c(l.prototype,"s");c(l.prototype,"v");Object.defineProperty(l.prototype,"a",{get:function(){return this.__state.a},set:function(a){this.__state.a=a}});Object.defineProperty(l.prototype,"hex",{get:function(){"HEX"!==!this.__state.space&&(this.__state.hex=
a.rgb_to_hex(this.r,this.g,this.b));return this.__state.hex},set:function(a){this.__state.space="HEX";this.__state.hex=a}});return l}(dat.color.interpret,dat.color.math=function(){var e;return{hsv_to_rgb:function(a,b,d){var e=a/60-Math.floor(a/60),c=d*(1-b),p=d*(1-e*b);b=d*(1-(1-e)*b);a=[[d,b,c],[p,d,c],[c,d,b],[c,p,d],[b,c,d],[d,c,p]][Math.floor(a/60)%6];return{r:255*a[0],g:255*a[1],b:255*a[2]}},rgb_to_hsv:function(a,b,d){var e=Math.min(a,b,d),c=Math.max(a,b,d),e=c-e;if(0==c)return{h:NaN,s:0,v:0};
a=(a==c?(b-d)/e:b==c?2+(d-a)/e:4+(a-b)/e)/6;0>a&&(a+=1);return{h:360*a,s:e/c,v:c/255}},rgb_to_hex:function(a,b,d){a=this.hex_with_component(0,2,a);a=this.hex_with_component(a,1,b);return a=this.hex_with_component(a,0,d)},component_from_hex:function(a,b){return a>>8*b&255},hex_with_component:function(a,b,d){return d<<(e=8*b)|a&~(255<<e)}}}(),dat.color.toString,dat.utils.common),dat.color.interpret,dat.utils.common),dat.utils.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,a){window.setTimeout(e,1E3/60)}}(),dat.dom.CenteredDiv=function(e,a){var b=function(){this.backgroundElement=document.createElement("div");a.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear"});e.makeFullscreen(this.backgroundElement);this.backgroundElement.style.position="fixed";this.domElement=
document.createElement("div");a.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear"});document.body.appendChild(this.backgroundElement);document.body.appendChild(this.domElement);var b=this;e.bind(this.backgroundElement,"click",function(){b.hide()})};b.prototype.show=function(){var b=this;this.backgroundElement.style.display="block";this.domElement.style.display="block";this.domElement.style.opacity=
0;this.domElement.style.webkitTransform="scale(1.1)";this.layout();a.defer(function(){b.backgroundElement.style.opacity=1;b.domElement.style.opacity=1;b.domElement.style.webkitTransform="scale(1)"})};b.prototype.hide=function(){var a=this,b=function(){a.domElement.style.display="none";a.backgroundElement.style.display="none";e.unbind(a.domElement,"webkitTransitionEnd",b);e.unbind(a.domElement,"transitionend",b);e.unbind(a.domElement,"oTransitionEnd",b)};e.bind(this.domElement,"webkitTransitionEnd",
b);e.bind(this.domElement,"transitionend",b);e.bind(this.domElement,"oTransitionEnd",b);this.backgroundElement.style.opacity=0;this.domElement.style.opacity=0;this.domElement.style.webkitTransform="scale(1.1)"};b.prototype.layout=function(){this.domElement.style.left=window.innerWidth/2-e.getWidth(this.domElement)/2+"px";this.domElement.style.top=window.innerHeight/2-e.getHeight(this.domElement)/2+"px"};return b}(dat.dom.dom,dat.utils.common),dat.dom.dom,dat.utils.common);
define("dat", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.dat;
    };
}(this)));

/* L. Juracz Copyright @2014
 * Manage the view control
 */



/* Globals: console */

/********************************* Helper Functions ********************************/

define('viewer_controls',["THREE", "TrackballControls", "dat"], function(THREE, TrackballControls, dat) {

    function ViewerControls( options ) {
        var trackballControl = null,
            camera = options.camera,
            canvas = options.canvas,
            viewDistance = options.viewDistance || 13000,
            viewAngles = options.viewAngles || new THREE.Euler( 0, 0 ,0),
        //viewAngles = options.viewAngles || new THREE.Euler( 0, 0, 0 ),
            referenceOrientation = new THREE.Vector3( 0, 1, 0 );

        function init() {
            trackballControl = new THREE.TrackballControls( camera, canvas );
            trackballControl.rotateSpeed = 1.0;
            trackballControl.zoomSpeed = 1.2;
            trackballControl.panSpeed = 0.8;
            trackballControl.noZoom = false;
            trackballControl.noPan = false;
            trackballControl.staticMoving = true;
            trackballControl.dynamicDampingFactor = 0.3;
            // Initial position
            trackballControl.up0.set( 0, 0, 1 );
            trackballControl.position0 = referenceOrientation.clone().applyEuler( viewAngles  );
            trackballControl.position0.multiplyScalar( -viewDistance );
            trackballControl.reset();
            // Widgets
            var cameraOrientation = new CameraOrientationHelper( viewAngles, viewDistance, trackballControl );
            var gui = new dat.GUI();
            var cameraControlsFolder = gui.addFolder( 'Camera Controls' );
            var distanceController = cameraControlsFolder.add( cameraOrientation, 'distance', 0, 50000 ).listen();
            var aspectController = cameraControlsFolder.add( cameraOrientation, 'aspect', [
                'front',
                'back',
                'left',
                'right',
                'top',
                'bottom'
            ] ).listen();

            cameraControlsFolder.open();

            cameraOrientation.aspect = 'front';

            // Widget Event handlers
            distanceController.onChange( function( val ) {
                var aspect = cameraOrientation.aspect;

                trackballControl.position0.copy( trackballControl.object.position );
                trackballControl.position0.normalize().multiplyScalar( Math.max( val, .1 ) );
                trackballControl.reset();

                cameraOrientation.aspect = aspect;
            } );

            aspectController.onChange( function ( val ) {

                switch ( val ) {

                    case 'back':
                        viewAngles = new THREE.Euler( 0, 0, Math.PI);
                        trackballControl.up0.set( 0, 0, 1 );
                        break;
                    case 'left':
                        viewAngles = new THREE.Euler( 0, 0, -Math.PI / 2);
                        trackballControl.up0.set( 0, 0, 1 );
                        break;
                    case 'right':
                        viewAngles = new THREE.Euler( 0, 0, Math.PI / 2);
                        trackballControl.up0.set( 0, 0, 1 );
                        break;
                    case 'top':
                        viewAngles = new THREE.Euler( -Math.PI / 2 , 0, 0);
                        trackballControl.up0.set( 0, 1, 0 );
                        break;
                    case 'bottom':
                        viewAngles = new THREE.Euler( Math.PI / 2, 0, 0);
                        trackballControl.up0.set( 0, 1, 0 );
                        break;

                    default :
                    case 'front':
                        viewAngles = new THREE.Euler( 0, 0, 0);
                        trackballControl.up0.set( 0, 0, 1);
                        break;

                }

                var distance = trackballControl.object.position.length();

                trackballControl.position0 = referenceOrientation.clone().applyEuler( viewAngles  );
                trackballControl.position0.multiplyScalar( -distance );
                trackballControl.reset();

                cameraOrientation.aspect = val;

            } );


        }
        if ( camera !== undefined && camera !== null ) {
            init();
        } else {
            throw( new Error("No camera specified") );
        }

        return trackballControl;
    }

    function CameraOrientationHelper( viewAngles, viewDistance, trackballControl ) {
        var that = {
            distance: null,
            angles: {
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0
            },
            aspect: 'front',
            update: function( newViewAngles, newViewDistance ) {
                that.angles.rotationX = makePositiveAngle( Math.round( viewAngles.x * 180/Math.PI ) );
                that.angles.rotationY = makePositiveAngle( Math.round( viewAngles.y * 180/Math.PI ) );
                that.angles.rotationZ = makePositiveAngle( Math.round( viewAngles.z * 180/Math.PI ) );
                that.distance = newViewDistance;
            }
        };
        that.update( viewAngles, viewDistance );

        var on_trackBallControlChanged = function() {
            that.distance = trackballControl.object.position.length();
            that.angles.rotationX = makePositiveAngle( Math.round( trackballControl.object.rotation.x * 180/Math.PI ) );
            that.angles.rotationY = makePositiveAngle( Math.round( trackballControl.object.rotation.y * 180/Math.PI ) );
            that.angles.rotationZ = makePositiveAngle( Math.round( trackballControl.object.rotation.z * 180/Math.PI ) );

            that.aspect = 'custom';

        };

        trackballControl.addEventListener( 'change' , on_trackBallControlChanged );

        return that;
    }

    function makePositiveAngle( rotA ) {
        if ( rotA >= 0 ) {
            return rotA;
        } else {
            return 360 + rotA;
        }
    }
    return ViewerControls;
});


/* G. Hemingway Copyright @2014
 * Manage the drawing context
 */




/*************************************************************************/


define('viewer',["THREE", "compass", "viewer_controls"], function(THREE, Compass, ViewerControls) {
    function Viewer(canvasParentId, compassParentId) {
        var shouldRender = false,
            continuousRendering = false,
            canvasParent, renderer, canvas, scene, camera,
//            light1, light2,
            controls, compass,
            render, animate, add3DObject, invalidate,
            renderTargetParametersRGBA, depthTarget, depthPassPlugin,
            composer, renderPassSSAO, renderPassFXAA, renderPassCopy;

        renderTargetParametersRGBA = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat
        };

        // RENDERER
        canvasParent = document.getElementById(canvasParentId);
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(canvasParent.offsetWidth, canvasParent.offsetHeight);
        //    renderer.shadowMapEnabled = true;
        //    renderer.shadowMapType = THREE.PCFShadowMap;
        renderer.sortObjects = true;
        renderer.autoClear = false;
        // DEPTH PASS
        depthTarget = new THREE.WebGLRenderTarget(canvasParent.offsetWidth, canvasParent.offsetHeight, renderTargetParametersRGBA);
        depthPassPlugin = new THREE.DepthPassPlugin();
        depthPassPlugin.renderTarget = depthTarget;
        renderer.addPrePlugin(depthPassPlugin);
        // CANVAS
        canvas = renderer.domElement;
        canvasParent.appendChild(canvas);
        // SCENE
        scene = new THREE.Scene();
        // CAMERA
        camera = new THREE.PerspectiveCamera(
            75,
            canvasParent.offsetWidth / canvasParent.offsetHeight,
            0.1,
            10000
        );
        camera.position.x = -5000;
        camera.position.y = -5000;
        camera.position.z = 0;
        camera.lookAt(scene.position);

        // EFFECTS
        composer = new THREE.EffectComposer(renderer);
        // EFFECT SSAO
        renderPassSSAO = new THREE.ShaderPass(THREE.SSAOShader);
        renderPassSSAO.uniforms['tDepth'].value = depthTarget;
        renderPassSSAO.uniforms['size'].value.set(canvasParent.offsetWidth, canvasParent.offsetHeight);
        renderPassSSAO.uniforms['cameraNear'].value = camera.near;
        renderPassSSAO.uniforms['cameraFar'].value = camera.far;
        renderPassSSAO.uniforms['aoClamp'].value = 0.9;
        renderPassSSAO.uniforms['lumInfluence'].value = 0.5;
        // EFFECT FXAA
        renderPassFXAA = new THREE.ShaderPass(THREE.FXAAShader);
        renderPassFXAA.uniforms['resolution'].value.set(1/canvasParent.offsetWidth, 1/canvasParent.offsetHeight);
        // EFFECTS COPY
        renderPassCopy = new THREE.ShaderPass(THREE.CopyShader);
        renderPassCopy.renderToScreen = true;
        // ADD RENDER PASSES
//        composer.addPass(renderPassSSAO);
        composer.addPass(renderPassFXAA);
        composer.addPass(renderPassCopy);

        /* Lights are no longer needed since we use a simplified lighting shader
        // LIGHTS
        scene.add(new THREE.AmbientLight(0xdddddd));
        light1 = new THREE.DirectionalLight(0xffffff, 0.5);
        light1.position.set(1, 1, 1);
        scene.add( light1 );

        light2 = new THREE.DirectionalLight(0xffffff, 0.5);
        light2.position.set(0, -1, 0);
        scene.add(light2);
        /*
         light3 = new THREE.SpotLight( 0xffffff, 1.5 );
         light3.position.set( 0, 0, 10000 );
         light3.castShadow = true;
         light3.shadowCameraNear = 200;
         light3.shadowCameraFar = this.camera.far;
         light3.shadowCameraFov = 50;
         light3.shadowBias = -0.00022;
         light3.shadowDarkness = 0.5;
         light3.shadowMapWidth = 2048;
         light3.shadowMapHeight = 2048;
         this.scene.add(light3);
         */

        // VIEW CONTROLS
        controls =  ViewerControls({
            camera: camera,
            canvas: canvas
        });

        // COMPASS
        compass = new Compass(compassParentId, camera, controls, {
            width: 200,
            height: 200
        });
        scene.add(compass.object3D);

        // PRIVATE FUNCTIONS
        render = function() {
            depthPassPlugin.enabled = true;
            renderer.render(scene, camera, composer.renderTarget2, true);
            depthPassPlugin.enabled = false;
            composer.render(0.5);
        };
        animate = function(forceRendering) {
            requestAnimationFrame(function() {
                animate(false);
            });
            if (continuousRendering === true || shouldRender === true || forceRendering === true) {
                shouldRender = false;
                render();
                controls.update();
                compass.update();
            }
        };
        invalidate = function() {
            shouldRender = true;
        };
        add3DObject = function(a3DObject) {
            scene.add( a3DObject );
            invalidate();
        };

        // CONTROL EVENT HANDLERS
        controls.addEventListener("change", function() {
            invalidate();
        });
        controls.addEventListener("start", function() {
            continuousRendering = true;
        });
        controls.addEventListener("end", function() {
            invalidate();
            continuousRendering = false;
        });

        // SCREEN RESIZE
        window.addEventListener("resize", function() {
            depthTarget = new THREE.WebGLRenderTarget(canvasParent.offsetWidth, canvasParent.offsetHeight, renderTargetParametersRGBA);
            depthPassPlugin.renderTarget = depthTarget;
            renderPassSSAO.uniforms['tDepth'].value = depthTarget;
            renderPassFXAA.uniforms['resolution'].value.set(1/canvasParent.offsetWidth, 1/canvasParent.offsetHeight);
            renderer.setSize(canvasParent.offsetWidth, canvasParent.offsetHeight);
            camera.aspect = canvasParent.offsetWidth / canvasParent.offsetHeight;
            camera.updateProjectionMatrix();
            camera.lookAt(scene.position);
            composer.reset();
            controls.handleResize();
            render();
        });

        // MAKING PUBLIC
        this.camera = camera;
        this.controls = controls;
        this.invalidate = invalidate;
        this.add3DObject = add3DObject;
        animate(true); // Initial Rendering
    }

    // Extend Viewer with events
    THREE.EventDispatcher.prototype.apply(Viewer.prototype);
    return Viewer;
});

/* G. Hemingway Copyright @2014
 * Context for the visualization of a set of CAD models
 */




/*************************************************************************/


define('cad',["jquery", "jstree", "data_loader", "viewer"], function($, jstree, DataLoader, Viewer) {
    /* config:
        viewContainer
        compassContainer
        treeContainer
        downloadsContainer
     */
    function CADjs(config) {
        if (!config || !config.viewContainer || !config.compassContainer || !config.treeContainer) {
            throw "CAD.js requires a configuration!!!";
        }
        this._viewContainer = config.viewContainer;
        this._compassContainer = config.compassContainer;
        this._treeContainer = config.treeContainer;
        this._downloadsContainer = config.downloadsContainer;
        this._loader = undefined;
        this._parts = [];
        this._viewer = undefined;
    }

    CADjs.prototype.setupPage = function() {
        // Create the viewer
        this._viewer = new Viewer(this._viewContainer, this._compassContainer);
        // Create the data loader
        this._loader = new DataLoader(this, this._viewer, { autorun: false });
        // Events
        this.bindEvents();
        // Signal ready
        $(this).trigger("pageSetup");
    };

    CADjs.prototype.load = function(resourceURL) {
        var self = this;
        // Initialize the assembly
        this._loader.load(resourceURL, "assembly", function(err, part) {
            if (err) {
                console.log("CADjs.load error - " + err);
            } else {
                // Add the part to the list
                self._parts.push(part);
                // Call back with the new Assembly - nicely centered
                part.centerGeometry();
                part.zoomToFit(self._viewer.camera, self._viewer.controls);
                // Update the tree
                self.renderTree();
                // Get the rest of the files
                self._loader.runLoadQueue();
            }
        });
    };

    CADjs.prototype.render = function () {
        this._parts[0].render();
    };

    CADjs.prototype.bindEvents = function () {
        var self = this;
        var canvasDOM = document.getElementById(this._viewContainer);

        // Download manager interface
        var $downloads = $(this._downloadsContainer);
        this._loader.addEventListener("addRequest", function(event) {
            var id = event.file.split(".")[0];
            $downloads.append("<li id='" + id + "'>" + event.file + "</li>");
            var count = self._loader.queueLength(false);
            $(".steptools-downloads-count").text(count);
        });
        this._loader.addEventListener("loadComplete", function(event) {
            var id = event.file.split(".")[0];
            // Update the download count
            var count = self._loader.queueLength(false);
            $(".steptools-downloads-count").text(count);
            // Is this the index file
            if (id === "index") {
                $("li#index").remove();
            } else {
                // Change the file status to 'parsing'
                $("li#" + id).text(event.file + ": Parsing");
            }
            // Make sure to redraw the model
            self._viewer.invalidate();
        });
        this._loader.addEventListener("parseComplete", function(event) {
            var id = event.file.split(".")[0];
            // Change the file status to 'parsing'
            $("li#" + id).text(event.file + ": Finishing");
        });
        this._loader.addEventListener("shellLoad", function(event) {
            var id = event.file.split(".")[0];
            // Remove the item from the list
            $("li#" + id).remove();
            // Update the count
            var count = self._loader.queueLength(false);
            $(".steptools-downloads-count").text(count);
            // Make sure to redraw the model
            self._viewer.invalidate();
        });
        this._loader.addEventListener("queueEmpty", function() {
            var count = self._loader.queueLength(false);
            $(".steptools-downloads-count").text(count);
        });
        this._loader.addEventListener("loadProgress", function(event) {
            if (event.loaded) {
                var id = event.file.split(".")[0];
                $("li#" + id).text(event.file + ": " + event.loaded.toFixed(2) + "%");
            }
        });

        // Need to turn mouse selection on and off to not interfere with click drag view control
        var _change;
        this._viewer.controls.addEventListener("change", function() {
            _change = true;
        });
        this._viewer.controls.addEventListener("start", function() {
            _change = false;
        });
        canvasDOM.addEventListener("mouseup", function(event) {
            if (!_change) self.onClick(event);
            _change = false;
        }, false);
        canvasDOM.addEventListener("mousemove", function() {
            if (!_change) self.onMove();
        }, false);

        // Keybased events
        var node, obj;
        window.addEventListener("keypress", function(event) {
            //console.log(event.keyCode);
            switch(event.keyCode) {
                // Explode on 'x' key pressed
                case 120:
                    self.explode(100);
                    break;
                // Unexplode on 's' key pressed
                case 115:
                    self.explode(-100);
                    break;
                // 'q' unselects all tree elements
                case 113:
                    self._parts[0].hideAllBoundingBoxes();
                    console.log("Got here");
                    self.tree.deselect_all();
                    self._viewer.invalidate();
                    break;
                // 'o' to set opacity of selected to 0.5
                case 111:
                    self.setSelectedOpacity(0.5);
                    break;
                // 'p' to set opacity of selected back to 1
                case 112:
                    self.setSelectedOpacity(1.0);
                    break;
                // 'z' to zoomToFit
                case 122:
                    self._parts[0].zoomToFit(self._viewer.camera, self._viewer.controls);
                    self._viewer.invalidate();
                    break;
                // 'j' hide/show element
                case 106:
                    node = self.tree.get_selected(false);
                    obj = self._parts[0].getByID(node[0]);
                    if (obj) {
                        if (obj.toggleVisibility()) {
                            self.tree.enable_node(node);
                        } else {
                            self.tree.disable_node(node);
                        }
                        self._viewer.invalidate();
                    }
                    break;
            }
        }, true);
    };

    CADjs.prototype.onClick = function(event) {
        // Clear selections if meta key not pressed
        if (!event.metaKey) {
            this._parts[0].hideAllBoundingBoxes();
            this.tree.deselect_all();
        }
        var obj = this._parts[0].select(this._viewer.camera, event.clientX, event.clientY);
        // Did we find an object
        if (obj) {
            obj = obj.getNamedParent();
            // Yes, go highlight it in the tree
            var node = this.tree.get_node(obj.getID());
            this.tree.select_node(node);
        }
        this._viewer.invalidate();
    };

    CADjs.prototype.onMove = function() {
        if (this._parts.length > 0) {
/*            this._parts[0].clearHighlights();
            var obj = this._parts[0].select(this._viewer.camera, event.clientX, event.clientY);
            // Did we find an object
            if (obj) {
                obj = obj.getNamedParent();
                // Yes, go highlight it in the tree
                obj.highlight(0xffff8f);
            }
            this._viewer.invalidate();*/
        }
    };

    CADjs.prototype.explode = function(distance) {
        //console.log(this._viewer.controls.object);
        var node = this.tree.get_selected(false);
        if (node) {
            for (var i = 0; i < node.length; i++) {
                var obj = this._parts[0].getByID(node[i]);
                if (obj) {
                    obj.explode(distance);
                }
            }
            this._viewer.invalidate();
        }
    };

    CADjs.prototype.setSelectedOpacity = function(opacity) {
        var node = this.tree.get_selected(false);
        if (node) {
            for (var i = 0; i < node.length; i++) {
                var obj = this._parts[0].getByID(node[i]);
                if (obj) {
                    obj.setOpacity(opacity);
                }
            }
            this._viewer.invalidate();
        }
    };

    CADjs.prototype.renderTree = function() {
        var self = this;
        var geometryOnly = false;
        var treeData = this._parts[0].getTree(geometryOnly);
        if (this.tree) this.tree.destroy();
        this.tree = $.jstree.create(this._treeContainer, {
            plugins : [ 'contextmenu' ],
            core: {
                data: [ treeData ],
                animation: 50,
                themes: {
                    icons: false
                }
            },
            contextmenu: {
                items: function(menuItem) {
                    var menu = {
//                        showAll: {
//                            label: "Show All",
//                            action: function() {
//                                self._parts[0].showAll();
//                                // TODO: Need to update tree to make all enabled
//                                //console.log(self.tree.disabled);
//                            }
//                        }//,
//                        focusOn: {
//                            label: "Focus On",
//                            action: function() {
//                                var obj = self._parts[0].getByID(menuItem.id);
//                                if (obj) {
//                                    self._parts[0].focusOn(obj);
//                                }
//                            }
//                        }
                    };
                    if (menuItem.state.disabled) {
                        menu["show"] = {
                            label: "Show",
                            action: function() {
                                var obj = self._parts[0].getByID(menuItem.id);
                                if (obj) {
                                    obj.show();
                                    self._viewer.invalidate();
                                    self.tree.enable_node(menuItem);
                                }
                            }
                        };
                    } else {
                        menu["hide"] = {
                            label: "Hide",
                            action: function() {
                                var obj = self._parts[0].getByID(menuItem.id);
                                if (obj) {
                                    obj.hide();
                                    self._viewer.invalidate();
                                    self.tree.disable_node(menuItem);
                                    self.tree.deselect_node(menuItem);
                                }
                            }
                        };
                    }
                    return menu;
                }
            }
        });

        $(this._treeContainer).on("select_node.jstree deselect_node.jstree", function(event, data) {
            self._parts[0].hideAllBoundingBoxes();
            //self._parts[0].clearHighlights();
            for (var i = 0; i < data.selected.length; i++) {
                var obj = self._parts[0].getByID(data.selected[i]);
                if (obj) {
//                    console.log(obj.getID());
                    obj.showBoundingBox();
                    self._viewer.invalidate();
                    //obj.highlight(0xff0000);
                }
            }
        });
    };

    return CADjs;
});
(function (global) {
    
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
                error: function() {
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
                    var param;
                    for (param in response.parameters) {
                        that.parameters[param] = response.parameters[param];
                    }
                    $(that).trigger("ready");
                },
                "error": function() {
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
                    }))
                .append($("<span> instead.</span>"));
        },

        /* events */
        "pollComplete": $.noop,
        "initConfig": $.noop,
        "ready": $.noop
    };

    global.VIS = VIS;

}(window));
define("VIS", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.VIS;
    };
}(this)));

/* G. Hemingway Copyright @2014
 * Primary RequireJS entry point
 */




/*************************************************************************/


require.config({
    paths: {
        jquery: "libs/jquery.min",
        jstree: "libs/jstree.min",
        underscore: 'libs/underscore-min',
        THREE: 'libs/three.min',
        TrackballControls: "libs/TrackballControls",
        dat: "libs/dat.gui.min",
        VIS: "libs/visualize"
    },
    shim: {
        jquery: {
            exports: "$"
        },
        jstree: {
            deps: ["jquery"]
        },
        underscore: {
            exports: "_"
        },
        THREE: {
            exports: "THREE"
        },
        TrackballControls: {
            deps: ["THREE"]
        },
        dat: {
            exports: "dat"
        },
        VIS: {
            exports: "VIS",
            deps: ["jquery"]
        },
        shape: {
            deps: ['shaders/VelvetyShader']
        },
        viewer: {
            deps: [
                'libs/threejs/EffectComposer',
                'libs/threejs/CopyShader',
                'libs/threejs/FXAAShader',
                'libs/threejs/SSAOShader',
                'libs/threejs/RenderPass',
                'libs/threejs/ShaderPass',
                'libs/threejs/MaskPass'
            ]
        },
        'libs/threejs/EffectComposer': {
            deps: ['THREE']
        },
        'libs/threejs/CopyShader': {
            deps: ['THREE']
        },
        'libs/threejs/FXAAShader': {
            deps: ['THREE']
        },
        'libs/threejs/SSAOShader': {
            deps: ['THREE']
        },
        'libs/threejs/RenderPass': {
            deps: ['THREE']
        },
        'libs/threejs/ShaderPass': {
            deps: ['THREE', 'libs/threejs/RenderPass']
        },
        'libs/threejs/MaskPass': {
            deps: ['THREE']
        }
    }
});

/*
  Primary application entry point
 */
requirejs(["cad", "jquery", "THREE", "VIS"], function(CADjs, $, THREE, VIS) {

    $(VIS).on("ready", function(){
        var cad = window.cadjs = new CADjs({
            viewContainer: "steptools-view",
            compassContainer: "steptools-compass",
            treeContainer: ".steptools-tree",
            downloadsContainer: ".steptools-downloads > ul"
        });
        cad.setupPage();
        // What resource do we want to load
        cad.load(VIS.getResourceUrl());
    });

    VIS.init();
});

define("main", function(){});
