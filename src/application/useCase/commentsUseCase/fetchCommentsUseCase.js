const { UrlService } = require('../../../serviceDomain/urlService');

class FetchCommentsUseCase {
    constructor({ requestService }) {
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
        const requestComments = [];
        while (indicelimite > 0) {
            const newURL = UrlService.preparURL(urlFecth, indicelimite);
            const promisesNew = this.requestService.request(newURL);
            requestComments.push(promisesNew);
            indicelimite--;
        }

        const Comments = await Promise.all(requestComments);

        return Comments;
    }
}


module.exports = { FetchCommentsUseCase };
