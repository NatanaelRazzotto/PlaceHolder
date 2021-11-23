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
    let urlNew = '';
    while (max > 0) {
      if (generate) {
        urlNew = UrlService.preparURL(url, max);
      }
      else {
        urlNew = UrlService.preparURLIndentity(url, max);
      }

      const promisesNew = this.requestService.request(urlNew);
      request.push(promisesNew);
      max--;
    }
    const users = await Promise.all(request);
    return users;
  }
}

module.exports = { FetchUserUseCase };
