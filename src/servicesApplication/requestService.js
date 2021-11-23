const fetch = require("node-fetch");

class RequestService {
  async request(rota) {
    const response = await fetch(rota);
    return await response.json();
  }
}

module.exports = { RequestService };
