const IRepository = require('../contracts/IRepository');
const integration = require('../../01-Infrastructure/integration');
const linkModel = require("../../01-Infrastructure/models/link.model");
const initRedis = require("../../01-Infrastructure/redis.initialize");
const constants = require("../../01-Infrastructure/constants");
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
        return linkModel.findByIdAndRemove(request.id);
    }

    async prepareRedisData(){
        const getDailyLinks = await linkModel.aggregate([
            {
                $group: {
                    _id: {
                        createdAt: {$dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                        count: { $sum: 1 }
                    }
                }
            },
        ]).exec();

        const getListByPage = await linkModel.find().exec();
        const getLastTenLinks = await linkModel.find().limit(10).sort({ $natural: -1 }).exec();

        const client = await initRedis();
        await client.set(redisKeys.getListByPageKey(), getListByPage);
        await client.set(redisKeys.getLastTenLinksKey(), getLastTenLinks);
        await client.set(redisKeys.getDailyLinksKey(), getDailyLinks);


    }
}

module.exports = repository;