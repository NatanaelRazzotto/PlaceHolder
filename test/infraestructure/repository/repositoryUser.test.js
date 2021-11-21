const { RepositoryUser } = require('../../../src/infrastructure/repository/repositoryUser');//test\Repository\repositoryUser\repositoryUser.test.js
const database = require('../../../src/infrastructure/sequelize/db');
require('dotenv').config();

describe('RepositoryUser', () => {
  const repositoryUser = new RepositoryUser();

  it('Sync DB', async () => {
    const received = await database.sync();
    console.log(received);
    expect(received.config.database).toEqual(process.env.DB_NAME);
  });

  it('create user', async () => {
    const user = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    try {
      const received = await repositoryUser.create(user);
      console.log(received);
      expect(received).toEqual({
        id: expect.any(Number),
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        addressId: expect.any(Number),
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        companyId: expect.any(Number),
        updatedAt: expect.any(Date),
        createdAt: expect.any(Date),
      });
    }
    catch (error) {
      console.error(error.message);
    }
  });
  it('create user - NEW', async () => {
    const user = {
      id: 6000,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    try {
      const received = await repositoryUser.create(user);
      console.log(received);
      expect(received).toEqual({
        id: expect.any(Number),
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        addressId: expect.any(Number),
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        companyId: expect.any(Number),
        updatedAt: expect.any(Date),
        createdAt: expect.any(Date),
      });
    }
    catch (error) {
      console.error(error.message);
    }
  });

  it('Pesquisar - findUser', async () => {
    const searchObject = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    };
    try {
      const received = await repositoryUser.findUser(searchObject);
      console.log(received);
      expect(received).toEqual({
        id: expect.any(Number),
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        addressId: expect.any(Number),
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        companyId: expect.any(Number),
        updatedAt: expect.any(Date),
        createdAt: expect.any(Date),
      });
    } catch (error) {
      console.error(error.message);
    }

  });
  it('Pesquisar - findUser - ERROR', async () => {
    const searchObject = {
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    };
    try {
      await repositoryUser.findUser(searchObject);
    } catch (error) {

      expect(error.message).toBe('Um erro na consulta findUser');
    }

  });

});
