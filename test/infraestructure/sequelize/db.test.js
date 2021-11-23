const database = require('../../../src/infrastructure/sequelize/db');
const { ModelUser } = require('../../../src/infrastructure/sequelize/models/modelUser');
const { ModelAlbum } = require('../../../src/infrastructure/sequelize/models/modelAlbum');
const { ModelCompany } = require('../../../src/infrastructure/sequelize/models/modelCompany');
const { ModelPost } = require('../../../src/infrastructure/sequelize/models/modelPost');
const { ModelComment } = require('../../../src/infrastructure/sequelize/models/modelComment');
const { ModelPhoto } = require('../../../src/infrastructure/sequelize/models/modelPhoto');
const { ModelTodos } = require('../../../src/infrastructure/sequelize/models/modelTodos');

require('dotenv').config();

describe('Repository MySQL', () => {
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });

    it('ModelUser DB', async () => {
        const received = await ModelUser.sync();
        console.log(received);
    });
    it('ModelAlbum DB', async () => {
        const received = await ModelAlbum.sync();
        console.log(received);
    });
    it('ModelCompany DB', async () => {
        const received = await ModelCompany.sync();
        console.log(received);
    });
    it('ModelPost DB', async () => {
        const received = await ModelPost.sync();
        console.log(received);
    });
    it('ModelComment DB', async () => {
        const received = await ModelComment.sync();
        console.log(received);
    });
    it('ModelPhoto DB', async () => {
        const received = await ModelPhoto.sync();
        console.log(received);
    });
    it('ModelTodos DB', async () => {
        const received = await ModelTodos.sync();
        console.log(received);
    });

})