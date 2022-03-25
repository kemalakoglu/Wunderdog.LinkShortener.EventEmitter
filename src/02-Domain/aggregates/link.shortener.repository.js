const IRepository = require('../contracts/IRepository');
const integration = require('../../01-Infrastructure/integration');
const linkModel = require("../../01-Infrastructure/models/link.model");
const initRedis = require("../../01-Infrastructure/redis.initialize");
const constants = require("../../01-Infrastructure/constants");
const linkResponseModel = require("../../01-Infrastructure/models/link.response.model");
const dailyLinkResponseModel = require("../../01-Infrastructure/models/daily.link.response.model");
const _ = require('lodash');
const redisKeys = new constants();
const httpReq = new integration();
class repository extends IRepository {
    constructor() {
        super();
    }

    async createAsync(request) {
        await httpReq.post(request);
        await this.prepareRedisData(request.tranId);
        return;
    }

    async deleteAsync(request) {
        linkModel.findByIdAndRemove(request.id);
        await this.prepareRedisData(request.tranId);
        return;
    }

    async prepareRedisData(){
        const getDailyLinks = await linkModel.aggregate([
            {
                $group: {
                    _id: {
                        createdAt: {$dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    },
                    count: { $sum: 1 }
                }
            },
        ]).exec();

        const getDailyLinksResponse = _.map(getDailyLinks, function(n){
             return new dailyLinkResponseModel(_.get(n, '_id.createdAt'), _.get(n, 'count'))
        });

        const getListByPage = await linkModel.find().exec();
        const getListByPageResponse = _.map(getListByPage, function(n){
            return new linkResponseModel(_.get(n, 'link'), _.get(n, 'longUrl'), _.get(n, 'createdAt').toString(), _.get(n, 'id'))
       });

        const getLastTenLinks = await linkModel.find().limit(10).sort({ $natural: -1 }).exec();
        const getLastTenLinksResponse = _.map(getLastTenLinks, function a(n){
            return new linkResponseModel(_.get(n, 'link'), _.get(n, 'longUrl'), _.get(n, 'createdAt').toString(), _.get(n, 'id'))
       });

        const client = await initRedis();
        await client.del(redisKeys.getListByPageKey());
        await client.del(redisKeys.getLastTenLinksKey());
        await client.del(redisKeys.getDailyLinksKey());
        await client.set(redisKeys.getListByPageKey(), JSON.stringify(getListByPageResponse));
        await client.set(redisKeys.getLastTenLinksKey(), JSON.stringify(getLastTenLinksResponse));
        await client.set(redisKeys.getDailyLinksKey(), JSON.stringify(getDailyLinksResponse));
    }
}

module.exports = repository;