const { UrlService } = require('../../../serviceDomain/urlService');

class FetchAlbumsUseCase {
    constructor(requestService) {
        this.requestService = requestService;
    }
    async execute(data) {
        return await this.fetchRequestForParameter(data);
    }

    async fetchRequestForParameter({ urlFecth, urlIndice, urlFilter }) {
        const newURL = UrlService.preparURLEspecific(urlFecth, urlIndice, urlFilter);
        const request = await this.requestService.request(newURL);
        return request;
    }

    async fetchRequest({ urlFecth, indicelimite }) {
        const request = [];
        while (indicelimite > 0) {
            const urlNew = UrlService.preparURL(urlFecth, indicelimite);
            const promisesNew = this.requestService.request(urlNew);
            request.push(promisesNew);
            indicelimite--;
        }
        const albums = await Promise.all(request);
        return albums;
    }

}

module.exports = { FetchAlbumsUseCase };