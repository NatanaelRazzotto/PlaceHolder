const { UrlService } = require('../../../serviceDomain/urlService');
class FetchUserUseCase {
  constructor({ requestService }) {
    this.requestService = requestService;
  }

  async execute(data) {
    return await this.fetchRequest(data);
  }

  async fetchRequest({ url, max, generate = true }) {
    const request = [];
    const requestURL = [];
    let urlNew = '';
    while (max > 0) {
      if (generate) {
        urlNew = UrlService.preparURL(url, max);       
      }
      else {
        urlNew = UrlService.preparURLIndentity(url, max);

      }
      requestURL.push(urlNew);
      max--;
    }
    const test = [...new Set(requestURL)];

    test.forEach(element => {
      const promisesNew = this.requestService.request(element);
      request.push(promisesNew);
    });

    const users = await Promise.all(request);

    return users;
  }
}

module.exports = { FetchUserUseCase };
