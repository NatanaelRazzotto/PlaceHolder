const database = require('../../src/repository/sequelize/db/db');
require('dotenv').config();

describe('Repository', () => {
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
})