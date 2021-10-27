const { UrlService } = require('../../serviceDomain/urlService');

class FetchPostUseCase {
  constructor(requesService) {
    this.requesService = requesService;
  }
  async execute(data) {
    return await this.fetchRequest(data);
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

  async fetchRequestGerado({ url, max }) {
    const request = [];
    while (max > 0) {
      const newURL = UrlService.preparURL(url, 100);
      const promisesNew = this.requesService.request(newURL);
      request.push(promisesNew);
      max--;
    }

    const posts = await Promise.all(request);

    return posts;
  }
}



module.exports = { FetchPostUseCase };
