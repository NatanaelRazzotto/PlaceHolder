const { UrlService } = require('../../../serviceDomain/urlService');

class FetchPostUseCase {
  constructor(requesService) {
    this.requesService = requesService;
  }
  async execute(data) {
    return await this.fetchRequestForParameter(data);
  }

  async fetchRequestForParameter({ urlFecth, urlIndice, urlFilter }) {
    //  const requestPost = [];
    //  while (indicelimite > 0) {
    const newURL = UrlService.preparURLEspecific(urlFecth, urlIndice, urlFilter);
    const request = await this.requesService.request(newURL);
    //   requestPost.push(promisesNew);
    //     indicelimite--;
    //}

    // const posts = await Promise.;

    return request;
  }

  async fetchRequest({ urlFecth, indicelimite }) {
    const requestPost = [];
    while (indicelimite > 0) {
      const newURL = UrlService.preparURL(urlFecth, indicelimite);
      const promisesNew = this.requesService.request(newURL);
      requestPost.push(promisesNew);
      indicelimite--;
    }

    const posts = await Promise.all(requestPost);

    return posts;
  }

}


module.exports = { FetchPostUseCase };
