const { RandomNumberService } = require('../../src/serviceDomain/randomNumberService');

describe('RandomNumberService', () => {
  let randomNumberService;

  test('Gera até 10', () => {
    const received = RandomNumberService.generate(10);
    console.log(received);
    expect(received).toBeLessThan(11);
  });
});
