const { RepositoryCompany } = require('../../../src/infrastructure/repository/repositoryCompany');
const database = require('../../../src/infrastructure/sequelize/db');
require('dotenv').config();

describe('Repository Andress', () => {
    let repositoryCompany;
    beforeEach(() => {
        repositoryCompany = new RepositoryCompany();
    });
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create Company', async () => {
        try {
            const Company = {
                companyId: 2,
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains',
            };
            const received = await repositoryCompany.create(Company);
            console.log(received);
            expect(received).toEqual({
                companyId: Company.companyId,
                name: Company.name,
                catchPhrase: Company.catchPhrase,
                bs: Company.bs,
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });
    it('create Company - NEW', async () => {
        try {
            const Company = {
                companyId: 302,
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains',
            };
            const received = await repositoryCompany.create(Company);
            console.log(received);
            expect(received).toEqual({
                companyId: Company.companyId,
                name: Company.name,
                catchPhrase: Company.catchPhrase,
                bs: Company.bs,
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });

    it('findAndress', async () => {
        const Company = {
            name: 'Deckow-Crist',
        };
        try {
            const received = await repositoryCompany.findCompany(Company);
            console.log(received);
            expect(received).toEqual({
                companyId: 2,
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains',
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });

    it('findAndress - ERROR', async () => {
        const Company = {
            name: undefined,
        };
        try {
            await repositoryCompany.findCompany(Company);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findCompany');
        }
    });
})