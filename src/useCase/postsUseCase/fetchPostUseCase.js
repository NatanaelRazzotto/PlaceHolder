const { UrlService } = require('../../serviceDomain/urlService');

class FetchPostUseCase {
  constructor(requesService) {
    this.requesService = requesService;
  }
  async fetchRequest({ url, max }) {
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

  async fetchRequestOrdenado({ url, max }) {
    const requestPost = [];
    while (max > 0) {
      const newURL = UrlService.preparURL(url, max);
      const promisesNew = this.requesService.request(newURL);
      requestPost.push(promisesNew);
      max--;
    }

    const posts = await Promise.all(requestPost);

    return posts;
  }
}


module.exports = { FetchPostUseCase };
