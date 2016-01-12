cad.js
======

Web-based CAD file viewer

Setting up a development environment
====================================

*Assumes Mac OS X or Linux*

Get the code
------------

    git clone https://github.com/ghemingway/cad.js
    cd cad.js

Make a place to put cad data
----------------------------

    mkdir data

Move models into `data` directory ([find some samples](docs/readme)).

Install nodejs packages
-----------------------

    npm install

Setup Redis
-----------

Run a [redis](http://redis.io/) server and update [your config file](config/config.json#L6) to use this redis hostname/ip address and port.

Create a key
------------

    ssh-keygen -t rsa -f config/id_rsa

run development server
----------------------

    npm run start-dev

Building
========

Build/compile using webpack:

    # if you installed webpack globally (`npm install webpack -g`)
    webpack

    # if you installed webpack via package dependencies (`npm install`)
    ./node_modules/.bin/webpack

Snazzy Demos
============

*From an older version*

http://ghemingway.github.io/cad.js/?resource_url=/cad.js/data/cutter/index.json

http://ghemingway.github.io/cad.js/?resource_url=/cad.js/data/rear/index.json

http://ghemingway.github.io/cad.js/?resource_url=/cad.js/data/rccar/index.json
