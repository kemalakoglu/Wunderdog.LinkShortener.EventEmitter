const repository = require('./link.shortener.repository')
const linkRepository = new repository();
class eventhandlers {
    async createAsync(request) {
        await linkRepository.createAsync(request);
    }

    async deleteAsync(request) {
        await linkRepository.deleteAsync(request);
    }
}

module.exports = eventhandlers;