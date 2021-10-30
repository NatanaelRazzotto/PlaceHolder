const database = require('../../../src/infrastructure/sequelize/db');
require('dotenv').config();

describe('Repository MySQL', () => {
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
})