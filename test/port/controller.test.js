
const { Controller } = require('../../src/port/controller/controller')

describe('Controller', () => {
    let controller;
    beforeAll(() => {
        controller = new Controller();
    });
    it('Persistencia de Dados Usuário', async () => {
        try {
            const user = {
                maxIndice: 3,
                generate: true
            };
            const received = await controller.persistsDataUsersDependences(user);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        userId: expect.any(Number),
                        addressId: expect.any(Number),
                        companyId: expect.any(Number),
                        name: expect.any(String),
                        dependentes: expect.any(Object),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            )

        } catch (error) {
            console.error(error);
        }
    }, 20000);
    it('Persistencia de Dados Usuário - Teste de Erro', async () => {
        try {
            const user = undefined;
            const received = await controller.persistsDataUsersDependences(user);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro na persistencia (persistsDataUsersDependences)');
        }
    }, 2000);

    it('GET de Dados Usuário', async () => {
        try {
            const user = {
                id: 3
            };
            const received = await controller.getDataUserDependences(user);
            console.log(received);
            expect(received).toEqual(

                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    email: expect.any(String),
                    addressId: expect.any(Number),
                    phone: expect.any(String),
                    website: expect.any(String),
                    companyId: expect.any(Number),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })

            )

        } catch (error) {
            console.error(error);
        }
    }, 8000);
    it('GET de Dados Usuário - Teste de Erro', async () => {
        try {
            const user = undefined;
            const received = await controller.getDataUserDependences(user);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro no GET (getDataUserDependences)');
        }
    }, 2000);

    /////
    it('GET de Dados Andress', async () => {
        try {
            const andress = {
                lat: -37.3159,
                lng: 81.1496,
            };
            const received = await controller.getDataAndressDependences(andress);
            console.log(received);
            expect(received).toEqual(
                expect.objectContaining({
                    addressId: expect.any(Number),
                    street: expect.any(String),
                    suite: expect.any(String),
                    city: expect.any(String),
                    zipcode: expect.any(String),
                    lat: expect.any(String),
                    lng: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })
            )

        } catch (error) {
            console.error(error);
        }
    }, 2000);
    it('GET de Dados Andress - Teste de Erro', async () => {
        try {
            const andress = undefined;
            const received = await controller.getDataAndressDependences(andress);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro no GET (getDataAndressDependences)');
        }
    }, 2000);
    ////
    it('GET de Dados Company', async () => {
        try {
            const company = {
                name: 'Romaguera-Crona',
            };
            const received = await controller.getCompanyDependences(company);
            console.log(received);
            expect(received).toEqual(
                expect.objectContaining({
                    companyId: expect.any(Number),
                    name: expect.any(String),
                    catchPhrase: expect.any(String),
                    bs: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })
            )

        } catch (error) {
            console.error(error);
        }
    }, 2000);
    it('GET de Dados Company - Teste de Erro', async () => {
        try {
            const company = undefined;
            const received = await controller.getCompanyDependences(company);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro no GET (getCompanyDependences)');
        }
    }, 2000);
    //
    it('Persistencia de Dados Todos', async () => {
        try {
            const todos = {
                id: 1
            };
            const received = await controller.persistsDataTodosDependences(todos);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        photoID: expect.any(Number),
                        userId: expect.any(Number),
                        title: expect.any(String),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            );
        } catch (error) {
            console.error(error);
        }
    }, 1000);

    it('Persistencia de Dados Todos - Teste de Erro', async () => {
        try {
            const todos = undefined;
            const received = await controller.persistsDataTodosDependences(todos);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro na persistencia (persistsDataTodosDependences)');
        }
    }, 2000);

    it('GET de Dados Todos', async () => {
        try {
            const todo = {
                id: 1,
            };
            const received = await controller.getDataTodosDependences(todo);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        userId: expect.any(Number),
                        id: expect.any(Number),
                        title: expect.any(String),
                        completed: expect.any(Number),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            )

        } catch (error) {
            console.error(error);
        }
    }, 2000);
    it('GET de Dados Todos - Teste de Erro', async () => {
        try {
            const todo = undefined;
            const received = await controller.getDataTodosDependences(todo);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro no GET (getDataTodosDependences)');
        }
    }, 2000);
    //
    it('Persistencia de Dados Posts', async () => {
        try {
            const posts = {
                id: 1
            };
            const received = await controller.persistsDataPostsDependences(posts);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        postID: expect.any(Number),
                        userId: expect.any(Number),
                        title: expect.any(String),
                        dependentes: expect.any(Object),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            );
        } catch (error) {
            console.error(error);
        }
    }, 2000);

    it('Persistencia de Dados Posts - Teste de Erro', async () => {
        try {
            const posts = undefined;
            const received = await controller.persistsDataPostsDependences(posts);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro na persistencia (persistsDataPostsDependences)');
        }
    }, 2000);

    it('GET de Dados Posts', async () => {
        try {
            const post = {
                id: 1,
            };
            const received = await controller.getDataPostsDependences(post);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        userId: expect.any(Number),
                        id: expect.any(Number),
                        title: expect.any(String),
                        body: expect.any(String),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            )

        } catch (error) {
            console.error(error);
        }
    }, 2000);
    it('GET de Dados Posts - Teste de Erro', async () => {
        try {
            const post = undefined;
            const received = await controller.getDataPostsDependences(post);
            console.log(received);
        } catch (error) {
            expect(error.message).toBe('Um erro no GET (getDataPostsDependences)');
        }
    }, 2000);

    //

    it('Persistencia de Dados Photos', async () => {
        try {
            const photo = {
                id: 1
            };
            const received = await controller.persistsDataPhotosDependences(photo);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        albumId: expect.any(Number),
                        photoID: expect.any(Number),
                        title: expect.any(String),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            );
        } catch (error) {
            console.error(error);
        }
    }, 2000);

    it('Persistencia de Dados Photos - Teste de Erro', async () => {
        try {
            const photo = undefined;
            const received = await controller.persistsDataPhotosDependences(photo);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro na persistencia (persistsDataPhotosDependences)');
        }
    }, 2000);

    it('GET de Dados Photos', async () => {
        try {
            const photo = {
                id: 1,
            };
            const received = await controller.getDataPhotosDependences(photo);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        albumId: expect.any(Number),
                        id: expect.any(Number),
                        title: expect.any(String),
                        url: expect.any(String),
                        thumbnailUrl: expect.any(String),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            )

        } catch (error) {
            console.error(error);
        }
    }, 2000);
    it('GET de Dados Photo - Teste de Erro', async () => {
        try {
            const photo = undefined;
            const received = await controller.getDataPhotosDependences(photo);
            console.log(received);
        } catch (error) {
            expect(error.message).toBe('Um erro no GET (getDataPhotosDependences)');
        }
    }, 2000);
    //

    it('Persistencia de Dados Comment', async () => {
        try {
            const comment = {
                id: 1
            };
            const received = await controller.persistsDataCommentsDependences(comment);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        commentID: expect.any(Number),
                        postId: expect.any(Number),
                        name: expect.any(String),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            );
        } catch (error) {
            console.error(error);
        }
    }, 1000);

    it('Persistencia de Dados Comment - Teste de Erro', async () => {
        try {
            const comment = undefined;
            const received = await controller.persistsDataCommentsDependences(comment);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro na persistencia (persistsDataCommentsDependences)');
        }
    }, 2000);

    it('GET de Dados Comment', async () => {
        try {
            const comment = {
                id: 1,
            };
            const received = await controller.getDataCommentsDependences(comment);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        postId: expect.any(Number),
                        id: expect.any(Number),
                        name: expect.any(String),
                        email: expect.any(String),
                        body: expect.any(String),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            )

        } catch (error) {
            console.error(error);
        }
    }, 2000);
    it('GET de Dados Comment - Teste de Erro', async () => {
        try {
            const comment = undefined;
            const received = await controller.getDataCommentsDependences(comment);
            console.log(received);
        } catch (error) {
            expect(error.message).toBe('Um erro no GET (getDataCommentsDependences)');
        }
    }, 2000);
    //
    it('Persistencia de Dados Album', async () => {
        try {
            const album = {
                id: 1
            };
            const received = await controller.persistsDataAlbumDependences(album);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        albumID: expect.any(Number),
                        userId: expect.any(Number),
                        title: expect.any(String),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                        dependentes: expect.any(Object),
                    })
                ])
            );
        } catch (error) {
            console.error(error);
        }
    }, 3000);

    it('Persistencia de Dados Album - Teste de Erro', async () => {
        try {
            const album = undefined;
            const received = await controller.persistsDataAlbumDependences(album);
            console.log(received);

        } catch (error) {
            expect(error.message).toBe('Um erro na persistencia (persistsDataAlbumDependences)');
        }
    }, 1000);

    it('GET de Dados Album', async () => {
        try {
            const album = {
                id: 1,
            };
            const received = await controller.getDataAlbumDependences(album);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        userId: expect.any(Number),
                        id: expect.any(Number),
                        title: expect.any(String),
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            )

        } catch (error) {
            console.error(error);
        }
    }, 2000);
    it('GET de Dados Album - Teste de Erro', async () => {
        try {
            const album = undefined;
            const received = await controller.getDataAlbumDependences(album);
            console.log(received);
        } catch (error) {
            expect(error.message).toBe('Um erro no GET (getDataAlbumDependences)');
        }
    }, 2000);

})