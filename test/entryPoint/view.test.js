const { View } = require('../../src/entryPoint/view');
describe('VIEW - Entry Point APP', () => {
    let view;
    beforeEach(() => {
        view = new View();
    });
    it('formatLineUser', async () => {
        const useritem = {
            userId: 1,
            addressId: 1,
            companyId: 1,
            name: 'Leanne Graham',
            dependentes: { pesistPost: [Array], pesistAlbum: [Array], pesistTodos: [Array] },
            updatedAt: '2021-11-10T01:48:47.000Z',
            createdAt: '2021--10T01:48:47.000Z'
        }
        let result = view.formatLineUser(useritem);
        console.log(result);
        expect(result.User[0]).toEqual(useritem.userId);
        expect(result.User[1]).toEqual(useritem.name);
        expect(result.User[2]).toEqual(useritem.addressId);
        expect(result.User[3]).toEqual(useritem.companyId);
        expect(result.User[4]).toEqual(useritem.updatedAt);
        expect(result.User[5]).toEqual(useritem.createdAt);
    });
    it('formatLinePost', async () => {
        const postItem = {
            postID: 13,
            userId: 2,
            title: 'dolorum ut in voluptas mollitia et saepe quo animi',
            dependentes: { Comments: [Array] },
            updatedAt: '2021-11-17T00:46:52.000Z',
            createdAt: '2021-11-17T00:46:52.000Z'
        }

        let result = view.formatLinePost(postItem);
        console.log(result);
        expect(result.Post[0]).toEqual(postItem.postID);
        expect(result.Post[1]).toEqual(postItem.userId);
        expect(result.Post[2]).toEqual(postItem.title);
        expect(result.Post[3]).toEqual(postItem.updatedAt);
        expect(result.Post[4]).toEqual(postItem.createdAt);
    });
    it('formatLineComment', async () => {
        const commentItem = {
            commentID: 7,
            postId: 2,
            name: 'repellat consequatur praesentium vel minus molestias voluptatum',
            updatedAt: '2021-11-16T15:06:03.000Z',
            createdAt: '2021-11-16T15:06:03.000Z'
        }

        let result = view.formatLineComment(commentItem);
        console.log(result);
        expect(result.Comment[0]).toEqual(commentItem.commentID);
        expect(result.Comment[1]).toEqual(commentItem.postId);
        expect(result.Comment[2]).toEqual(commentItem.name);
        expect(result.Comment[3]).toEqual(commentItem.updatedAt);
        expect(result.Comment[4]).toEqual(commentItem.createdAt);
    });
    it('formatLineAlbum', async () => {
        const albumItem = {
            albumID: 20,
            userId: 2,
            title: 'voluptas rerum iure ut enim',
            dependentes: { pesistPhoto: [Array] },
            updatedAt: '2021-11-17T00:46:54.000Z',
            createdAt: '2021-11-17T00:46:54.000Z'
        }

        let result = view.formatLineAlbum(albumItem);
        console.log(result);
        expect(result.Album[0]).toEqual(albumItem.albumID);
        expect(result.Album[1]).toEqual(albumItem.userId);
        expect(result.Album[2]).toEqual(albumItem.title);
        expect(result.Album[3]).toEqual(albumItem.updatedAt);
        expect(result.Album[4]).toEqual(albumItem.createdAt);
    });
    it('formatLinePhoto', async () => {
        const photoItem = {
            photoID: 37,
            albumId: 2,
            title: 'sunt cum tempora',
            updatedAt: '2021-11-17T00:46:58.000Z',
            createdAt: '2021-11-17T00:46:58.000Z'
        }

        let result = view.formatLinePhoto(photoItem);
        console.log(result);
        expect(result.Photo[0]).toEqual(photoItem.photoID);
        expect(result.Photo[1]).toEqual(photoItem.albumId);
        expect(result.Photo[2]).toEqual(photoItem.title);
        expect(result.Photo[3]).toEqual(photoItem.updatedAt);
        expect(result.Photo[4]).toEqual(photoItem.createdAt);
    });
    it('formatLineTodo', async () => {
        const todoItem = {
            photoID: 39,
            userId: 2,
            title: 'doloremque quibusdam asperiores libero corrupti illum qui omnis',
            updatedAt: '2021-11-17T00:46:58.000Z',
            createdAt: '2021-11-17T00:46:58.000Z'
        }

        let result = view.formatLineTodo(todoItem);
        console.log(result);
        expect(result.Todo[0]).toEqual(todoItem.photoID);
        expect(result.Todo[1]).toEqual(todoItem.userId);
        expect(result.Todo[2]).toEqual(todoItem.title);
        expect(result.Todo[3]).toEqual(todoItem.updatedAt);
        expect(result.Todo[4]).toEqual(todoItem.createdAt);
    });

    it('tableUser', async () => {
        const user = {
            id: 2,
            name: 'Ervin Howell',
            email: 'Shanna@melissa.tv',
            addressId: 2,
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            companyId: 2,
            createdAt: '2021-11-17T00:33:15.000Z',
            updatedAt: '2021-11-17T00:33:15.000Z'
        }
        let result = view.tableUser(user);
        console.log(result);
        expect(result[0].ID).toEqual(user.id.toString());
        expect(result[1].Name).toEqual(user.name);
        expect(result[2].Email).toEqual(user.email);
        expect(result[3].Phone).toEqual(user.phone);
        expect(result[4].Website).toEqual(user.website);
        expect(result[5].CompanyId).toEqual(user.companyId.toString());
        expect(result[6].AddressId).toEqual(user.addressId.toString());
        expect(result[7].CreatedAt).toEqual(user.createdAt.toString());
        expect(result[8].UpdatedAt).toEqual(user.updatedAt.toString());

    });

    it('bindtablePost', async () => {
        const posts = {
            id: 17,
            userId: 2,
            title: 'fugit voluptas sed molestias voluptatem provident',
            body: 'eos voluptas et aut odit natus earum\n' +
                'aspernatur fuga molestiae ullam\n' +
                'deserunt ratione qui eos\n' +
                'qui nihil ratione nemo velit ut aut id quo',
            createdAt: '2021-11-17T00:46:52.000Z',
            updatedAt: '2021-11-17T00:46:52.000Z'
        };
        let result = view.bindtablePost(posts);
        console.log(result);
        expect(result[0].ID).toEqual(posts.id.toString());
        expect(result[1].UserID).toEqual(posts.userId.toString());
        expect(result[2].Title).toEqual(posts.title);
        expect(result[3].Body).toEqual(posts.body);
        expect(result[4].CreatedAt).toEqual(posts.createdAt.toString());
        expect(result[5].UpdatedAt).toEqual(posts.updatedAt.toString());

    });

    it('bindTableComment', async () => {
        const comment = {
            id: 7,
            postId: 2,
            name: 'repellat consequatur praesentium vel minus molestias voluptatum',
            email: 'Dallas@ole.me',
            body: 'maiores sed dolores similique labore et inventore et\n' +
                'quasi temporibus esse sunt id et\n' +
                'eos voluptatem aliquam\n' +
                'aliquid ratione corporis molestiae mollitia quia et magnam dolor',
            createdAt: '2021-11-16T15:06:03.000Z',
            updatedAt: '2021-11-16T15:06:03.000Z'
        };
        let result = view.bindTableComment(comment);
        console.log(result);
        expect(result[0].ID).toEqual(comment.id.toString());
        expect(result[1].PostID).toEqual(comment.postId.toString());
        expect(result[2].Name).toEqual(comment.name);
        expect(result[3].Email).toEqual(comment.email);
        expect(result[4].Body).toEqual(comment.body.toString());
        expect(result[5].CreatedAt).toEqual(comment.createdAt.toString());
        expect(result[6].UpdatedAt).toEqual(comment.updatedAt.toString());

    });

    it('tablesComments', async () => {
        const comment = [{
            id: 7,
            postId: 2,
            name: 'repellat consequatur praesentium vel minus molestias voluptatum',
            email: 'Dallas@ole.me',
            body: 'maiores sed dolores similique labore et inventore et\n' +
                'quasi temporibus esse sunt id et\n' +
                'eos voluptatem aliquam\n' +
                'aliquid ratione corporis molestiae mollitia quia et magnam dolor',
            createdAt: '2021-11-16T15:06:03.000Z',
            updatedAt: '2021-11-16T15:06:03.000Z'
        }];
        let result = view.tablesComments(comment);
        console.log(result);
        expect(result).toEqual(true);
    });

    it('tablesComments NOT IsArray', async () => {
        const comment = {
            id: 7,
            postId: 2,
            name: 'repellat consequatur praesentium vel minus molestias voluptatum',
            email: 'Dallas@ole.me',
            body: 'maiores sed dolores similique labore et inventore et\n',
            createdAt: '2021-11-16T15:06:03.000Z',
            updatedAt: '2021-11-16T15:06:03.000Z'
        };
        let result = view.tablesComments(comment);
        console.log(result);
        expect(result).toEqual(false);
    });

    it('bindTableAlbum', async () => {
        const album = {
            id: 17,
            userId: 2,
            title: 'aut minima voluptatem ut velit',
            createdAt: '2021-11-17T00:46:54.000Z',
            updatedAt: '2021-11-17T00:46:54.000Z'
        };
        let result = view.bindTableAlbum(album);
        console.log(result);
        expect(result[0].ID).toEqual(album.id.toString());
        expect(result[1].UserId).toEqual(album.userId.toString());
        expect(result[2].Title).toEqual(album.title);
        expect(result[3].CreatedAt).toEqual(album.createdAt.toString());
        expect(result[4].UpdatedAt).toEqual(album.updatedAt.toString());

    });

    it('tablesAlbums', async () => {
        const album = [{
            id: 17,
            userId: 2,
            title: 'aut minima voluptatem ut velit',
            createdAt: '2021-11-17T00:46:54.000Z',
            updatedAt: '2021-11-17T00:46:54.000Z'
        }];
        let result = view.tablesAlbums(album);
        console.log(result);
        expect(result).toEqual(true);

    });

    it('bindTablePhoto', async () => {
        const photo = {
            id: 99,
            albumId: 2,
            title: 'magnam dolor sed enim vel optio consequuntur',
            url: 'https://via.placeholder.com/600/b04f2e',
            thumbnailUrl: 'https://via.placeholder.com/150/b04f2e',
            createdAt: '2021-11-10T02:47:09.000Z',
            updatedAt: '2021-11-10T02:47:09.000Z'
        };
        let result = view.bindTablePhoto(photo);
        console.log(result);
        expect(result[0].ID).toEqual(photo.id.toString());
        expect(result[1].AlbumId).toEqual(photo.albumId.toString());
        expect(result[2].Title).toEqual(photo.title);
        expect(result[3].url).toEqual(photo.url);
        expect(result[4].ThumbnailUrl).toEqual(photo.thumbnailUrl);
        expect(result[5].CreatedAt).toEqual(photo.createdAt.toString());
        expect(result[6].UpdatedAt).toEqual(photo.updatedAt.toString());

    });

    it('tablesPhotos', async () => {
        const photo = [{
            id: 99,
            albumId: 2,
            title: 'magnam dolor sed enim vel optio consequuntur',
            url: 'https://via.placeholder.com/600/b04f2e',
            thumbnailUrl: 'https://via.placeholder.com/150/b04f2e',
            createdAt: '2021-11-10T02:47:09.000Z',
            updatedAt: '2021-11-10T02:47:09.000Z'
        }];
        let result = view.tablesPhotos(photo);
        console.log(result);
        expect(result).toEqual(true);
    });
    it('tablesPhotos - ERROR IsArray', async () => {
        const photo = {
            id: 99,
            albumId: 2,
            title: 'magnam dolor sed enim vel optio consequuntur',
            url: 'https://via.placeholder.com/600/b04f2e',
            thumbnailUrl: 'https://via.placeholder.com/150/b04f2e',
            createdAt: '2021-11-10T02:47:09.000Z',
            updatedAt: '2021-11-10T02:47:09.000Z'
        };
        let result = view.tablesPhotos(photo);
        console.log(result);
        expect(result).toEqual(false);
    });

    it('bindTableTodos', async () => {
        const todo = {
            id: 38,
            userId: 2,
            title: 'totam quia non',
            completed: 0,
            createdAt: '2021-11-17T00:46:58.000Z',
            updatedAt: '2021-11-17T00:46:58.000Z'
        };
        let result = view.bindTableTodos(todo);
        console.log(result);
        expect(result[0].ID).toEqual(todo.id.toString());
        expect(result[1].UserId).toEqual(todo.userId.toString());
        expect(result[2].Title).toEqual(todo.title);
        expect(result[3].Completed).toEqual(todo.completed.toString());
        expect(result[4].CreatedAt).toEqual(todo.createdAt.toString());
        expect(result[5].UpdatedAt).toEqual(todo.updatedAt.toString());
    });

    it('tablesTodos - NOT - IsArray', async () => {
        const todo = {
            id: 38,
            userId: 2,
            title: 'totam quia non',
            completed: 0,
            createdAt: '2021-11-17T00:46:58.000Z',
            updatedAt: '2021-11-17T00:46:58.000Z'
        };
        let result = view.tablesTodos(todo);
        console.log(result);
        expect(result).toEqual(false);
    });

    it('tablesTodos', async () => {
        const todo = [{
            id: 38,
            userId: 2,
            title: 'totam quia non',
            completed: 0,
            createdAt: '2021-11-17T00:46:58.000Z',
            updatedAt: '2021-11-17T00:46:58.000Z'
        }];
        let result = view.tablesTodos(todo);
        console.log(result);
        expect(result).toEqual(true);
    });

    it('bindTablePostDTO', async () => {
        const postItem = {
            postID: 13,
            userId: 2,
            title: 'dolorum ut in voluptas mollitia et saepe quo animi',
            dependentes: { Comments: [Array] },
            updatedAt: '2021-11-17T00:46:52.000Z',
            createdAt: '2021-11-17T00:46:52.000Z'
        }

        let result = view.bindTablePostDTO('Test', postItem);
        let arrayDTO = result[0].Post;
        console.log(result[0].Post);
        expect(arrayDTO[0]).toEqual(postItem.postID);
        expect(arrayDTO[1]).toEqual(postItem.userId);
        expect(arrayDTO[2]).toEqual(postItem.title);
        expect(arrayDTO[3]).toEqual(postItem.updatedAt);
        expect(arrayDTO[4]).toEqual(postItem.createdAt);
    });

    it('tablesPosts', async () => {
        const postItem = [{
            postID: 13,
            userId: 2,
            title: 'dolorum ut in voluptas mollitia et saepe quo animi',
            dependentes: { Comments: [Array] },
            updatedAt: '2021-11-17T00:46:52.000Z',
            createdAt: '2021-11-17T00:46:52.000Z'
        },]

        let result = view.tablesPosts('Test', postItem);
        console.log(result)
        expect(result).toEqual(false);

    });

    it('tablesPosts - NEW IsArray', async () => {
        const postItem = {
            postID: 13,
            userId: 2,
            title: 'dolorum ut in voluptas mollitia et saepe quo animi',
            dependentes: { Comments: [Array] },
            updatedAt: '2021-11-17T00:46:52.000Z',
            createdAt: '2021-11-17T00:46:52.000Z'
        }

        let result = view.tablesPosts('Test', postItem);
        console.log(result)
        expect(result).toEqual(false);

    });
    it('bindTableAlbumDTO', async () => {
        const albumItem = {
            albumID: 20,
            userId: 2,
            title: 'voluptas rerum iure ut enim',
            dependentes: { pesistPhoto: [Array] },
            updatedAt: '2021-11-17T00:46:54.000Z',
            createdAt: '2021-11-17T00:46:54.000Z'
        }

        let result = view.bindTableAlbumDTO('Test', albumItem);
        console.log(result);
        let arrayDTO = result[0].Album;
        expect(arrayDTO[0]).toEqual(albumItem.albumID);
        expect(arrayDTO[1]).toEqual(albumItem.userId);
        expect(arrayDTO[2]).toEqual(albumItem.title);
        expect(arrayDTO[3]).toEqual(albumItem.updatedAt);
        expect(arrayDTO[4]).toEqual(albumItem.createdAt);
    });
    it('bindTableUserDTO', async () => {
        const useritem = {
            userId: 1,
            addressId: 1,
            companyId: 1,
            name: 'Leanne Graham',
            dependentes: { pesistPost: [Array], pesistAlbum: [Array], pesistTodos: [Array] },
            updatedAt: '2021-11-10T01:48:47.000Z',
            createdAt: '2021--10T01:48:47.000Z'
        }
        let result = view.bindTableUserDTO('Test ', useritem);
        console.log(result);
        let arrayDTO = result[0].User;
        expect(arrayDTO[0]).toEqual(useritem.userId);
        expect(arrayDTO[1]).toEqual(useritem.name);
        expect(arrayDTO[2]).toEqual(useritem.addressId);
        expect(arrayDTO[3]).toEqual(useritem.companyId);
        expect(arrayDTO[4]).toEqual(useritem.updatedAt);
        expect(arrayDTO[5]).toEqual(useritem.createdAt);

    });

    it('tableCommentDTO', async () => {
        const commentItem = [{
            commentID: 7,
            postId: 2,
            name: 'repellat consequatur praesentium vel minus molestias voluptatum',
            updatedAt: '2021-11-16T15:06:03.000Z',
            createdAt: '2021-11-16T15:06:03.000Z'
        },
        {
            commentID: 10,
            postId: 2,
            name: 'eaque et deleniti atque tenetur ut quo ut',
            updatedAt: '2021-11-16T15:06:03.000Z',
            createdAt: '2021-11-16T15:06:03.000Z'
        }];
        let result = view.tableCommentDTO('Test', commentItem);
        console.log(result);

        for (let index = 0; index < commentItem.length; index++) {

            let arrayDTO = result[index].Comment;
            expect(arrayDTO[0]).toEqual(commentItem[index].commentID);
            expect(arrayDTO[1]).toEqual(commentItem[index].postId);
            expect(arrayDTO[2]).toEqual(commentItem[index].name);
            expect(arrayDTO[3]).toEqual(commentItem[index].updatedAt);
            expect(arrayDTO[4]).toEqual(commentItem[index].createdAt);
        }
    });
    it('tablePhotosDTO', async () => {
        const photoItem = [{
            photoID: 96,
            albumId: 2,
            title: 'dolore esse a in eos sed',
            updatedAt: '2021-11-10T02:47:09.000Z',
            createdAt: '2021-11-10T02:47:09.000Z'
        },
        {
            photoID: 97,
            albumId: 2,
            title: 'labore magnam officiis nemo et',
            updatedAt: '2021-11-10T02:47:09.000Z',
            createdAt: '2021-11-10T02:47:09.000Z'
        }];
        let result = view.tablePhotosDTO('Test', photoItem);
        console.log(result);

        for (let index = 0; index < photoItem.length; index++) {
            let arrayDTO = result[index].Photo;
            console.log(arrayDTO)
            expect(arrayDTO[0]).toEqual(photoItem[index].photoID);
            expect(arrayDTO[1]).toEqual(photoItem[index].albumId);
            expect(arrayDTO[2]).toEqual(photoItem[index].title);
            expect(arrayDTO[3]).toEqual(photoItem[index].updatedAt);
            expect(arrayDTO[4]).toEqual(photoItem[index].createdAt);
        }
    });
    it('tableTodosDTO', async () => {
        const todosItem = [{
            photoID: 34,
            userId: 2,
            title: 'porro aut necessitatibus eaque distinctio',
            updatedAt: '2021-11-17T00:46:58.000Z',
            createdAt: '2021-11-17T00:46:58.000Z'
        },
        {
            photoID: 35,
            userId: 2,
            title: 'repellendus veritatis molestias dicta incidunt',
            updatedAt: '2021-11-17T00:46:58.000Z',
            createdAt: '2021-11-17T00:46:58.000Z'
        }];
        let result = view.tableTodosDTO('Test', todosItem);
        console.log(result);

        for (let index = 0; index < todosItem.length; index++) {
            let arrayDTO = result[index].Todo;
            // console.log(arrayDTO)
            expect(arrayDTO[0]).toEqual(todosItem[index].photoID);
            expect(arrayDTO[1]).toEqual(todosItem[index].userId);
            expect(arrayDTO[2]).toEqual(todosItem[index].title);
            expect(arrayDTO[3]).toEqual(todosItem[index].updatedAt);
            expect(arrayDTO[4]).toEqual(todosItem[index].createdAt);
        }
    });


    /*it('tablesUsersDTO', async () => {
        const useritem = {
            userId: 1,
            addressId: 1,
            companyId: 1,
            name: 'Leanne Graham',
            dependentes: { pesistPost: [Array], pesistAlbum: [Array], pesistTodos: [Array] },
            updatedAt: '2021-11-10T01:48:47.000Z',
            createdAt: '2021--10T01:48:47.000Z'
        }
        let result = view.tablesUsersDTO('Test ', useritem);
        console.log(result);
        let arrayDTO = result[0].User;
        expect(arrayDTO[0]).toEqual(useritem.userId);
        expect(arrayDTO[1]).toEqual(useritem.name);
        expect(arrayDTO[2]).toEqual(useritem.addressId);
        expect(arrayDTO[3]).toEqual(useritem.companyId);
        expect(arrayDTO[4]).toEqual(useritem.updatedAt);
        expect(arrayDTO[5]).toEqual(useritem.createdAt);

    });*/

    it('tablesAlbumsDTO', async () => {
        try {
            const albumItem = [{
                albumID: 2,
                userId: 2,
                title: 'album test',
                dependentes: {
                    pesistPhoto: [{
                        photoID: 96,
                        albumId: 2,
                        title: 'dolore esse a in eos sed',
                        updatedAt: '2021-11-10T02:47:09.000Z',
                        createdAt: '2021-11-10T02:47:09.000Z'
                    },
                    {
                        photoID: 97,
                        albumId: 2,
                        title: 'labore magnam officiis nemo et',
                        updatedAt: '2021-11-10T02:47:09.000Z',
                        createdAt: '2021-11-10T02:47:09.000Z'
                    }]
                },
                updatedAt: '2021-11-17T00:46:54.000Z',
                createdAt: '2021-11-17T00:46:54.000Z'
            }]

            let result = view.tablesAlbumsDTO('Test', albumItem);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    });
    it('tablesAlbumsDTO - Valide IsArray', async () => {
        try {
            const albumItem = {
                albumID: 2,
                userId: 2,
                title: 'album test',
                dependentes: { Comments: [Array] },
                updatedAt: '2021-11-17T00:46:52.000Z',
                createdAt: '2021-11-17T00:46:52.000Z'
            };

            let result = view.tablesAlbumsDTO('Test', albumItem);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    });

    it('tablesPostsDTO - Valide Comments IsArray', async () => {
        try {
            const albumItem = [{
                albumID: 2,
                userId: 2,
                title: 'album test',
                dependentes: {
                    pesistPhoto: {
                        photoID: 96,
                        albumId: 2,
                        title: 'dolore esse a in eos sed',
                        updatedAt: '2021-11-10T02:47:09.000Z',
                        createdAt: '2021-11-10T02:47:09.000Z'
                    },

                },
                updatedAt: '2021-11-17T00:46:54.000Z',
                createdAt: '2021-11-17T00:46:54.000Z'
            }]


            let result = view.tablesAlbumsDTO('Test', albumItem);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    });

    it('tablesAlbumsDTO - Valide Error', async () => {
        try {
            const albumItem = {
                postID: 2,
                userId: 2,
                title: 'test',
                dependentes: { Comments: [Array] },
                updatedAt: '2021-11-17T00:46:52.000Z',
                createdAt: '2021-11-17T00:46:52.000Z'
            }

            view.tablesAlbumsDTO('Test', albumItem);
        }
        catch (e) {
            expect(e.message).toBe('Um erro no populamento tablesAlbumsDTO');
        }
    });


    it('tablesPostsDTO', async () => {
        try {
            const postItem = [{
                postID: 2,
                userId: 2,
                title: 'test',
                dependentes: {
                    Comments: [{
                        commentID: 7,
                        postId: 2,
                        name: 'repellat consequatur praesentium vel minus molestias voluptatum',
                        updatedAt: '2021-11-16T15:06:03.000Z',
                        createdAt: '2021-11-16T15:06:03.000Z'
                    },
                    {
                        commentID: 10,
                        postId: 2,
                        name: 'eaque et deleniti atque tenetur ut quo ut',
                        updatedAt: '2021-11-16T15:06:03.000Z',
                        createdAt: '2021-11-16T15:06:03.000Z'
                    }]
                },
                updatedAt: '2021-11-17T00:46:52.000Z',
                createdAt: '2021-11-17T00:46:52.000Z'
            }]

            let result = view.tablesPostsDTO('Test', postItem);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    });
    it('tablesPostsDTO - Valide IsArray', async () => {
        try {
            const postItem = {
                postID: 2,
                userId: 2,
                title: 'test',
                dependentes: { Comments: [Array] },
                updatedAt: '2021-11-17T00:46:52.000Z',
                createdAt: '2021-11-17T00:46:52.000Z'
            }

            let result = view.tablesPostsDTO('Test', postItem);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    });
    it('tablesPostsDTO - Valide Comments IsArray', async () => {
        try {
            const postItem = [{
                postID: 2,
                userId: 2,
                title: 'test',
                dependentes: {
                    Comments: {
                        commentID: 7,
                        postId: 2,
                        name: 'repellat consequatur praesentium vel minus molestias voluptatum',
                        updatedAt: '2021-11-16T15:06:03.000Z',
                        createdAt: '2021-11-16T15:06:03.000Z'
                    }
                },
                updatedAt: '2021-11-17T00:46:52.000Z',
                createdAt: '2021-11-17T00:46:52.000Z'
            }]


            let result = view.tablesPostsDTO('Test', postItem);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    });
    it('tablesPostsDTO - Valide Error', async () => {
        try {
            const postItem = {
                postID: undefined,
                userId: undefined,
                title: 'test',
                dependentes: { Comments: [Array] },
                updatedAt: '2021-11-17T00:46:52.000Z',
                createdAt: '2021-11-17T00:46:52.000Z'
            }

            view.tablesPostsDTO('Test', postItem);
        }
        catch (e) {
            expect(e.message).toBe('Um erro no populamento tablesPostsDTO');
        }
    });

    it('tablesUsersDTO', async () => {
        try {
            const useritem = [{
                userId: 1,
                addressId: 1,
                companyId: 1,
                name: 'Leanne Graham',
                dependentes: {
                    pesistPost: [{
                        postID: 13,
                        userId: 1,
                        title: 'dolorum ut in voluptas mollitia et saepe quo animi',
                        dependentes: {
                            Comments: [{
                                commentID: 7,
                                postId: 13,
                                name: 'repellat consequatur praesentium vel minus molestias voluptatum',
                                updatedAt: '2021-11-16T15:06:03.000Z',
                                createdAt: '2021-11-16T15:06:03.000Z'
                            }]
                        },
                        updatedAt: '2021-11-17T00:46:52.000Z',
                        createdAt: '2021-11-17T00:46:52.000Z'
                    }], pesistAlbum: [{
                        albumID: 20,
                        userId: 1,
                        title: 'voluptas rerum iure ut enim',
                        dependentes: {
                            pesistPhoto: [{
                                photoID: 96,
                                albumId: 2,
                                title: 'dolore esse a in eos sed',
                                updatedAt: '2021-11-10T02:47:09.000Z',
                                createdAt: '2021-11-10T02:47:09.000Z'
                            }]
                        },
                        updatedAt: '2021-11-17T00:46:54.000Z',
                        createdAt: '2021-11-17T00:46:54.000Z'
                    }], pesistTodos: [{
                        id: 38,
                        userId: 1,
                        title: 'totam quia non',
                        completed: 0,
                        createdAt: '2021-11-17T00:46:58.000Z',
                        updatedAt: '2021-11-17T00:46:58.000Z'
                    }]
                },
                updatedAt: '2021-11-10T01:48:47.000Z',
                createdAt: '2021--10T01:48:47.000Z'
            }]
            let result = view.tablesUsersDTO('Test ', useritem);
            console.log(result);
            expect(result).toEqual(true);
        } catch (e) {
            console.error(e);
        }
    });

    it('tablesUsersDTO - Not ARRAY', async () => {
        try {
            const useritem = {
                userId: 1,
                addressId: 1,
                companyId: 1,
                name: 'Leanne Graham',
                dependentes: { pesistPost: [Array], pesistAlbum: [Array], pesistTodos: [Array] },
                updatedAt: '2021-11-10T01:48:47.000Z',
                createdAt: '2021--10T01:48:47.000Z'
            }
            let result = view.tablesUsersDTO('Test ', useritem);
            console.log(result);
            expect(result).toEqual(false);
        } catch (e) {
            console.error(e);
        }
    });

    it('tableCommentsDependentes', async () => {
        try {
            const Comments = [{
                commentID: 7,
            },
            {
                commentID: 10,
            },
            {
                commentID: 1,
            },
            {
                commentID: 12,
            },
            {
                commentID: 20,
            }];
            let result = view.tableCommentsDependentes(Comments);
            console.log(result)
            expect(result[0].CommentsIDs).toEqual(expect.any(String));
        }
        catch (e) {
            console.error(e);
        }
    });


    it('persistenciaUsersDependences', async () => {
        try {
            const user = {
                maxIndice: 2
            };
            let result = await view.persistenciaUsersDependences(user);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 11000);

    it('persistenciaUsersDependences - Valida Numero', async () => {
        try {
            const user = {
                maxIndice: 'dois'
            };
            let result = await view.persistenciaUsersDependences(user);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 2000);

    //
    it('persistenciaPostsDependences', async () => {
        try {
            const post = {
                id: 1
            };
            let result = await view.persistenciaPostsDependences(post);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 2000);

    it('persistenciaPostsDependences - Valida Numero', async () => {
        try {
            const post = {
                id: 'um'
            };
            let result = await view.persistenciaPostsDependences(post);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 2000);

    //
    it('persistenciaCommentsDependences', async () => {
        try {
            const comment = {
                id: 1
            };
            let result = await view.persistenciaCommentsDependences(comment);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 1000);

    it('persistenciaCommentsDependences - Valida Numero', async () => {
        try {
            const comment = {
                id: 'um'
            };
            let result = await view.persistenciaCommentsDependences(comment);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 1000);

    //
    it('persistenciaAlbumDependences', async () => {
        try {
            const album = {
                id: 1
            };
            let result = await view.persistenciaAlbumDependences(album);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 3000);

    it('persistenciaAlbumDependences - Valida Numero', async () => {
        try {
            const album = {
                id: 'um'
            };
            let result = await view.persistenciaAlbumDependences(album);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 1000);

    //
    it('persistenciaPhotosDependences', async () => {
        try {
            const photos = {
                id: 1
            };
            let result = await view.persistenciaPhotosDependences(photos);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 3000);

    it('persistenciaPhotosDependences - Valida Numero', async () => {
        try {
            const photos = {
                id: 'um'
            };
            let result = await view.persistenciaPhotosDependences(photos);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 1000);

    //
    it('persistenciaTodosDependences', async () => {
        try {
            const todos = {
                id: 1
            };
            let result = await view.persistenciaTodosDependences(todos);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 3000);

    it('persistenciaTodosDependences - Valida Numero', async () => {
        try {
            const todos = {
                id: 'um'
            };
            let result = await view.persistenciaTodosDependences(todos);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 1000);

    ///
    //
    it('getDataUserDependences', async () => {
        try {
            const user = {
                id: 1
            };
            let result = await view.getDataUserDependences(user);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 3000);

    it('getDataUserDependences - Valida Numero', async () => {
        try {
            const user = {
                id: 'dois'
            };
            let result = await view.getDataUserDependences(user);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 2000);

    //
    it('getDataPostsDependences', async () => {
        try {
            const post = {
                id: 1
            };
            let result = await view.getDataPostsDependences(post);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 3000);

    it('getDataPostsDependences - Valida Numero', async () => {
        try {
            const post = {
                id: 'um'
            };
            let result = await view.getDataPostsDependences(post);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 2000);

    //
    it('getDataCommentsDependences', async () => {
        try {
            const comment = {
                id: 1
            };
            let result = await view.getDataCommentsDependences(comment);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 2000);

    it('getDataCommentsDependences - Valida Numero', async () => {
        try {
            const comment = {
                id: 'um'
            };
            let result = await view.getDataCommentsDependences(comment);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 2000);

    //
    it('getDataAlbumDependences', async () => {
        try {
            const album = {
                id: 1
            };
            let result = await view.getDataAlbumDependences(album);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 3000);

    it('getDataAlbumDependences - Valida Numero', async () => {
        try {
            const album = {
                id: 'um'
            };
            let result = await view.getDataAlbumDependences(album);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 1000);

    //
    it('getDataPhotosDependences', async () => {
        try {
            const photos = {
                id: 1
            };
            let result = await view.getDataPhotosDependences(photos);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 3000);

    it('getDataPhotosDependences - Valida Numero', async () => {
        try {
            const photos = {
                id: 'um'
            };
            let result = await view.getDataPhotosDependences(photos);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 1000);

    //
    it('getDataTodosDependences', async () => {
        try {
            const todos = {
                id: 1
            };
            let result = await view.getDataTodosDependences(todos);
            console.log(result)
            expect(result).toEqual(true);
        }
        catch (e) {
            console.error(e);
        }
    }, 3000);

    it('getDataTodosDependences - Valida Numero', async () => {
        try {
            const todos = {
                id: 'um'
            };
            let result = await view.getDataTodosDependences(todos);
            console.log(result)
            expect(result).toEqual(false);
        }
        catch (e) {
            console.error(e);
        }
    }, 1000);






})