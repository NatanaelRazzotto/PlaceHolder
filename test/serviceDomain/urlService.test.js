const { UrlService } = require('../../src/serviceDomain/urlService');

describe('URL Service', () => {
  it('Prepara URL válido', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const received = UrlService.preparURL(url, 1);
    console.log(received);
    expect(received.length).toBeGreaterThan(url.length);
  });

  it('Prepara URL sem número', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
      const received = UrlService.preparURL(url);
    } catch (error) {
      //console.log(error);
      expect(error.message).toBe('Limite não é um número');
    }
  });

  it('Prepara URL válido', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const received = UrlService.preparURLIndentity(url, 1);
    console.log(received);
    expect(received.length).toBeGreaterThan(url.length);
  });

  it('Prepara URL sem número', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
      const received = UrlService.preparURLIndentity(url);
    } catch (error) {
      //console.log(error);
      expect(error.message).toBe('Indice não é um número');
    }
  });
  it('Prepara URL válido', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const received = UrlService.preparURLEspecific(url, 1,'/posts');
    console.log(received);
    expect(received.length).toBeGreaterThan(url.length);
  });

  it('Prepara URL sem número', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
      const received = UrlService.preparURLEspecific(url);
    } catch (error) {
      //console.log(error);
      expect(error.message).toBe('Parametros invalidos');
    }
  });

});
