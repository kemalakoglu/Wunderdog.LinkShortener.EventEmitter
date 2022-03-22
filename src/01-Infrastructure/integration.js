const LinkModel = require('./models/link.model');
var Client = require('node-rest-client').Client;
const linkModel = require("./models/link.model");
const initRedis = require("./redis.initialize");
class integration {
    async post(request) {
        const client = new Client();
        const redisClient = await initRedis();
        const args = {
            data: {
                domain: 'bit.ly',
                long_url: request.link
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 998dc12d592d36eb1cc049fde98d66ae98932d4c'
            }
        };

        client.post("https://api-ssl.bitly.com/v4/shorten/", args, function (data, response) {
            console.log(data);
            console.log(response);
            const model = new LinkModel({
                longUrl: data.long_url,
                link: data.link,
                createdAt: data.created_at
            });
            model.save().then(() => {
                console.log(`Link is Created. Details; Link is ${data.long_url}, short link is ${data.link}`);
            });
            redisClient.set(request.tranId, data.link);
        });
    }
}

module.exports = integration;