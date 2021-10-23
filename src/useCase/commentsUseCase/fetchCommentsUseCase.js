const { UrlService } = require('../../serviceDomain/urlService');

class FetchCommentsUseCase {
    constructor(reqService) {
        this.requestService = reqService;
    }
    async fetchDataRequest({ urlFecth, limite }) {
        const request = [];
        while (limite > 0) {
            const urlNew = UrlService.preparURL(urlFecth, limite);
            const promisesNew = this.requestService.request(urlNew);
            request.push(promisesNew);
            limite--;
        }
        const posts = await Promise.all(request);
        return posts;
    }
}


module.exports = { FetchCommentsUseCase };
