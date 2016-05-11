var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');
var min = -2.0, max = 2.0, time = 0, timeStep = 500, x = 0.0, y = 0.0, z = 0.0;

function serveDelta() {
    x = Math.random() * (max - min + 1) + min;
    y = Math.random() * (max - min + 1) + min;
    z = Math.random() * (max - min + 1) + min;
    time += timeStep / 1000.0;
    var data = {
        "project": "xxxxxxxx-xxxx-xxxx-xxxx-aaaaaaaaaaaa",
        "workingstep": "ws1",
        "time_in_workingstep": time,
        "prev": "state.json",
        "geom": [
            {
                "id": "id-000000321387",
                "shell": "xxxxxxxx-xxxx-xxxx-xxxx-000000321387.json",
                "xform": [1,0,0,0,0,1,0,0,0,0,1,0,x,y,z,1]
            }
        ]
    };
    console.log('Publish');
    client.publish('nc:delta', JSON.stringify(data));
    setTimeout(serveDelta, timeStep);
}

setTimeout(serveDelta, 4000);