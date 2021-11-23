const { RandomNumberService } = require('../../src/serviceDomain/randomNumberService');

describe('RandomNumberService', () => {
  test('Gera até 10', () => {
    const received = RandomNumberService.generate(10);
    console.log(received);
    expect(received).toBeLessThan(11);
  });
  test('Gera até 5', () => {
    const received = RandomNumberService.generate(5);
    console.log(received);
    expect(received).toBeLessThan(6);
  });
});
