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
                name: 'Comapany Test',
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

    it('deleteByIdCompany', async () => {
        const Company = {
            companyId: 302,
            name: 'Comapany Test',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        };
        const searchObject = {
            companyId: 302,
        };
        try {
          const received = await repositoryCompany.deleteByIdCompany(searchObject);
          console.log(received);
          console.log(received.dataValues);
          expect(received.dataValues).toEqual({
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
    
      it('deleteByIdCompany Validate', async () => {
        const searchObject = {
            companyId: 302,
        };
        try {
          const received = await repositoryCompany.deleteByIdCompany(searchObject);
          console.log(received);
    
          expect(received).toEqual(null);
        } catch (error) {
          console.error(error.message);
        }
    
      });

    it('findCompany', async () => {
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

    it('findCompany - ERROR', async () => {
        const Company = {
            name: undefined,
        };
        try {
            await repositoryCompany.findCompany(Company);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findCompany');
        }
    });

    it('findCompanyID', async () => {
        const Company = {
            companyId: 2,
        };
        try {
            const received = await repositoryCompany.findCompanyID(Company);
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

    it('findCompany - ERROR', async () => {
        const Company = {
            name: undefined,
        };
        try {
            await repositoryCompany.findCompanyID(Company);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findCompanyID');
        }
    });
})