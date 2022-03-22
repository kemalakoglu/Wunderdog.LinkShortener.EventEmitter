const redis = require('redis');
let client;
async function initRedis(){
    if(client)
        return client;
        
    client = redis.createClient();
    
    client.on('connect', function() {
        console.log('connected');
    });
    
    client.on('error', function(e) {
        console.log(e);
    });
    
    await client.connect();

    return client;
}

module.exports = initRedis;