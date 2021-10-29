const { UrlService } = require('../../serviceDomain/urlService');
class FetchUserUseCase {
  constructor(requestService) {
    this.requestService = requestService;
  }

  async execute(data) {
    return await this.fetchRequest(data);
  }

  async fetchRequest({ url, max }) {
    const request = [];
    while (max > 0) {
      const urlNew = UrlService.preparURL(url, max);
      const promisesNew = this.requestService.request(urlNew);
      request.push(promisesNew);
      max--;
    }
    const users = await Promise.all(request);
    return users;
  }
}

module.exports = { FetchUserUseCase };
