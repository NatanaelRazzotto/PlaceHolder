const { CreateUserUseCase } = require('./createUserUseCase');
const { FetchUserUseCase } = require('./fetchUserUseCase');
const { PersistsPostUseCase } = require('../../useCase/postsUseCase/persistsPostUseCase');
const { PersistsAlbumUseCase } = require('../../useCase/albumsUseCase/persistsAlbumUseCase');
const { PersistsTodosUseCase } = require('../../useCase/todosUseCase/persistsTodosUseCase');

class PersistsUserUseCase {
    constructor(Dependencias) {
        this.createUserUseCase = new CreateUserUseCase(Dependencias);
        this.fetchUserUseCase = new FetchUserUseCase(Dependencias)
        this.persistsPostUseCase = new PersistsPostUseCase(Dependencias);
        this.persistsAlbumUseCase = new PersistsAlbumUseCase(Dependencias);
        this.persistsTodosUseCase = new PersistsTodosUseCase(Dependencias);
    }

    async execute(maxData) {
        return await this.persistence(maxData);
    }

    async persistence(maxData) {
        const persistenceUsers = [];
        const data = {
            url: 'https://jsonplaceholder.typicode.com/users',
            max: maxData.max,
            generate: maxData.generate
        };
        const fetchUsers = await this.fetchUserUseCase.execute(data);
        for (const element of fetchUsers) {
            const populado = this.persistsUser(element);
            persistenceUsers.push(populado);
        }

        const User = await Promise.all(persistenceUsers);
        return User;

    }
    async persistsUser(User) {
        let populado = await this.createUserUseCase.execute(User);
        const userDTO = {
            userId: populado.id,
            addressId: populado.addressId,
            companyId: populado.companyId,
            name: populado.name,
            dependentes: await this.persistsDependentes(populado),
            updatedAt: populado.updatedAt,
            createdAt: populado.createdAt
        };

        return userDTO;
    }

    async persistsDependentes(User) {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: User.id
        };
        const dependentes = {
            pesistPost: await this.persistsPostUseCase.execute(data),
            pesistAlbum: await this.persistsAlbumUseCase.execute(data),
            pesistTodos: await this.persistsTodosUseCase.execute(data),
        }

        return dependentes;
    }

}

module.exports = { PersistsUserUseCase };

