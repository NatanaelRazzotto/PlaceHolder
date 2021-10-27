const { UrlService } = require('../../serviceDomain/urlService');

class FetchCommentsUseCase {
    constructor(reqService) {
        this.requestService = reqService;
    }
    async execute(data) {
        return await this.fetchRequest(data);
    }

    async fetchRequest({ urlFecth, indicelimite }) {
        const requestComments = [];
        while (indicelimite > 0) {
            const newURL = UrlService.preparURL(urlFecth, indicelimite);
            const promisesNew = this.requesService.request(newURL);
            requestComments.push(promisesNew);
            indicelimite--;
        }

        const Comments = await Promise.all(requestComments);

        return requestComments;
    }
}


module.exports = { FetchCommentsUseCase };
