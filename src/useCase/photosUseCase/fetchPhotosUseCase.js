const { UrlService } = require('../../serviceDomain/urlService');

class FetchPhotosUseCase {
    constructor(requestService) {
        this.requestService = requestService;
    }
    async fetchRequest({ urlFecth, indicelimite }) {
        const request = [];
        while (indicelimite > 0) {
            const urlNew = UrlService.preparURL(urlFecth, indicelimite);
            const promisesNew = this.requestService.request(urlNew);
            request.push(promisesNew);
            indicelimite--;
        }
        const photos = await Promise.all(request);
        return photos;
    }

}

module.exports = { FetchPhotosUseCase };