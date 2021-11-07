const { RandomNumberService } = require('./randomNumberService');

class UrlService {
  static preparURL(url, limite) {
    console.log(' limite ' + limite);
    if (Number.isInteger(limite)) {
      return `${url}/${RandomNumberService.generate(limite)}`;
    } else {
      throw new Error('Limite não é um número');
    }
  }
  static preparURLIndentity(url, indice) {
    if (Number.isInteger(indice)) {
      return `${url}/${indice}`;
    } else {
      throw new Error('Indice não é um número');
    }
  }
  static preparURLEspecific(urlFecth, urlIndice, urlFilter) {
    if (Number.isInteger(urlIndice)) {
      return `${urlFecth}/${urlIndice}/${urlFilter}`;
    } else {
      throw new Error('Indice não é um número');
    }
  }
}

module.exports = { UrlService };
