const { Company } = require('../../src/domain/company');

describe('Domain model-Company', () => {
    it('create Company', async () => {
        let companyId = 2;
        let name = 'Deckow-Crist';
        let catchPhrase = 'Proactive didactic contingency';
        let bs = 'synergize scalable supply-chains';

        const company = new Company(companyId, name, catchPhrase, bs);
        console.log(company);
        expect(company).toEqual(
            expect.objectContaining({
                companyId: expect.any(Number),
                name: expect.any(String),
                catchPhrase: expect.any(String),
                bs: expect.any(String),
            }));
    });
})