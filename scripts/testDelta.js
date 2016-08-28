let _ =         require('lodash');
let fs =        require('fs');
let redis =     require('redis');
let client =    redis.createClient(32768, 'localhost');

let index = 0, timeStep = 50, indexMax = 48;
//let model = "delta-examples/shell-data";
let model = "titanium2/ms-delta-";
//let model = "ds2/ms-delta-";

function serveDelta() {
    let pth = './data/' + model + _.padStart(index, 3, '0') + '.json';
    //console.log(pth);
    let data = fs.readFileSync(pth);
    console.log('Publish: ' + index);
    client.publish('nc:delta', data);
    // Only 9 delta samples.  Circle back around to 0 (with a full state reset) after 9.
    if (++index > indexMax) index = 0;
    setTimeout(serveDelta, timeStep);
}

setTimeout(serveDelta, 1000);