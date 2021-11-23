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
      addressId: 1,
      companyId: 1,
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    }

    try {
      const received = await repositoryUser.create(user);
      console.log(received);
      expect(received).toEqual({
        id: expect.any(Number),
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        // addressId: expect.any(Number),
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        // companyId: expect.any(Number),
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
      name: "Usuario Test",
      username: "Bret",
      email: "Sincere@april.biz",
      addressId: 1,
      companyId: 1,
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",

    };
    try {
      const received = await repositoryUser.create(user);
      console.log(received);
      expect(received).toEqual({
        id: expect.any(Number),
        name: 'Usuario Test',
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

  it('updateByIdUser', async () => {
    const searchObject = {
      id: 6000,
      name: "Test",
      username: "Bret",
      email: "Sincere@april.biz",
      addressId: 1,
      companyId: 1,
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    };
    try {
      const received = await repositoryUser.searchForUpdateByIdUser(searchObject);
      console.log(received);         
      expect(received).toEqual({
        id: expect.any(Number),
        name: 'Test',
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

  it('deleteByIdUser', async () => {
    const searchObject = {
      id: 6000,
    };
    try {
      const received = await repositoryUser.deleteByIdUser(searchObject);
      console.log(received);
      console.log(received.dataValues);
      expect(received.dataValues).toEqual({
        id: 6000,
        name: 'Usuario Test',
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

  it('deleteByIdUser Validate', async () => {
    const searchObject = {
      id: 6001,
    };
    try {
      const received = await repositoryUser.deleteByIdUser(searchObject);
      console.log(received);

      expect(received).toEqual(null);
    } catch (error) {
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
