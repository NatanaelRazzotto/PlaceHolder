const { UrlService } = require('../../src/serviceDomain/urlService');

describe('URL Service', () => {
  it('Prepara URL válido', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const received = UrlService.preparURL(url, 1);
    console.log(received);
    expect(received.length).toBeGreaterThan(url.length);
  });

  it.skip('Prepara URL sem número', () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
      const received = UrlService.preparURL(url);
    } catch (error) {
      console.log(error);
      expect(error).toEqual('[Error: Limite não é um número]');
    }
  });
});
