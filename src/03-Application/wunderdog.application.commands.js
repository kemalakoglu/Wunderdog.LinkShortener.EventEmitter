const eventhandlers = require('../02-Domain/aggregates/link.shortener.event.handler')
const produceEvent = new eventhandlers();
class applicationCommands {
    async createAsync(request) {
        await produceEvent.createAsync(request);
    }

    async deleteAsync(request) {
        await produceEvent.deleteAsync(request);
    }
}

module.exports = applicationCommands;