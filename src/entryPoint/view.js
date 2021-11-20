const readLineSync = require('readline-sync');
var Table = require('cli-table');
var colors = require('colors');
const { Controller } = require('../port/controller/controller');

class View {
    constructor() {
        this.controller = new Controller();
        this.operacoes = ['-Fecth and Persistencia-', '-Get Data-', '-SAIR-'];
        this.entidades = ['-USER-', '-POST-', '-COMMENT', '-ALBUM-', '-PHOTOS', '-TODOS-', '-SAIR-'];
    }
    viewOperacoes() {
        console.log('  OPERAÇÕES DISPONIVEÍS  '.black.bgWhite);

        var table = new Table({
            style: { head: ['yellow'] },
            head: ['INDICE', 'OPERAÇÕES'],
            colWidths: [8, 30]
        });

        for (let index = 0; index < this.operacoes.length; index++) {
            let a = index + 1;
            table.push([a, this.operacoes[index]]);
        }

        console.log(table.toString());

    }
    viewEntidades() {

        console.log('  ESCOLHA O OBJETO  '.black.bgWhite);

        var table = new Table({
            style: { head: ['yellow'] },
            head: ['INDICE', 'OBJETO'],
            colWidths: [8, 30]
        });

        for (let index = 0; index < this.entidades.length; index++) {
            let a = index + 1;
            table.push([a, this.entidades[index]]);
        }

        console.log(table.toString());

    }
    tableUserDTO(operacao, users) {
        users.forEach(element => {
            console.log('PERSISTENCE USERS'.red); // outputs green text
            var table = new Table({
                style: { head: ['yellow'] },
                head: [operacao, 'ID', 'Nome', 'Andress', 'Company', 'CreateAt', 'UpdateAt'],// head: ['TH 1 label', 'TH 2 label']
                colWidths: [10, 5, 25, 10, 10, 29, 29]
            });
            table.push(this.formatLineUser(element));
            console.log(table.toString());
            this.tablesPostsDTO('Dependente', users[0].dependentes.pesistPost);
            this.tablesAlbumsDTO('Dependente', users[0].dependentes.pesistAlbum);
            this.tableTodosDTO('Dependente', users[0].dependentes.pesistTodos);
        });
    }
    tableUser(users) {
        console.log('\n' + 'GET USER'.yellow);
        var table = new Table({
            style: { head: ['yellow'] }
        });
        table.push(
            { 'ID': users.id.toString() },
            { 'Name': users.name.toString() },
            { 'Email': users.email.toString() },
            { 'Phone': users.phone.toString() },
            { 'Website': users.website.toString() },
            { 'CompanyId': users.companyId.toString() },
            { 'AddressId': users.addressId.toString() },
            { 'CreatedAt': users.createdAt.toString() },
            { 'UpdatedAt': users.updatedAt.toString() },
        );
        return table;
    }

    tablesPostsDTO(operacao, posts) {
        posts.forEach(element => {
            var table = this.bindTablePostDTO(operacao, element);//tablePostDTO
            console.log(table.toString());

            //var tableDependente = this.tableCommentDTO('Dependente', element.dependentes.Comments)
            var tableDependente = this.tableCommentsDependentes(element.dependentes.Comments)
            console.log(tableDependente.toString());
        });
    }

    bindTablePostDTO(operacao, post) {

        // posts.forEach(element => {
        var table = new Table({
            style: { head: ['green'] },
            head: [operacao, 'ID', 'UserID', 'Title', 'CreateAt', 'UpdateAt'],// head: ['TH 1 label', 'TH 2 label']
            colWidths: [13, 5, 10, 29, 29, 29]
        });
        table.push(this.formatLinePost(post));
        return table;
        //console.log(table.toString());
        //  this.tableCommentDTO('Dependente', post.dependentes.Comments)
        // });

    }
    tablesPosts(posts) {
        console.log('\n' + 'GET POSTS'.green);
        posts.forEach(post => {
            let postElement = this.bindtablePost(post);
            console.log(postElement.toString());
        });
    }
    bindtablePost(post) {
        var table = new Table({
            style: { head: ['green'] }
        });
        table.push(
            { 'ID': post.id.toString() },
            { 'UserID': post.userId.toString() },
            { 'Title': post.title.toString() },
            { 'Body': post.body.toString() },
            { 'CreatedAt': post.createdAt.toString() },
            { 'UpdatedAt': post.updatedAt.toString() },
        );
        return table;
    }
    tableCommentDTO(operacao, comments) {
        var table = new Table({
            style: { head: ['cyan'] },
            head: [operacao, 'ID', 'PostID', 'Name', 'CreateAt', 'UpdateAt'],// head: ['TH 1 label', 'TH 2 label']
            colWidths: [13, 5, 10, 29, 29, 29]
        });

        comments.forEach(element => {
            table.push(this.formatLineComment(element));
        });

        // console.log(table.toString());
        return table;

    }
    tableCommentsDependentes(comments) {
        var IDs = '';
        var table = new Table({
            style: { head: ['cyan'] }
        });
        console.log('\n' + 'DEPENDENTES PERSISTIDOS DO POST'.cyan);
        comments.forEach(element => {
            // console.log(element.commentID);
            if (!IDs) {
                IDs = element.commentID.toString();
            }
            else if (IDs.length >= 0 && IDs.length <= 95) {
                IDs = IDs + ', ' + element.commentID.toString();
            }
            else {
                table.push({ 'Comments IDs': IDs.toString() });
                IDs = '';
            }
        });
        if (IDs) {
            table.push({ 'Comments IDs': IDs.toString() });
        }
        return table;
    }
    tablesComments(comments) {
        console.log('\n' + 'GET COMMENTS'.cyan);
        comments.forEach(comment => {
            let commentElement = this.bindTableComment(comment);
            console.log(commentElement.toString());
        });
    }
    bindTableComment(comment) {
        var table = new Table({
            style: { head: ['cyan'] }
        });
        table.push(
            { 'ID': comment.id.toString() },
            { 'PostID': comment.postId.toString() },
            { 'Name': comment.name.toString() },
            { 'Email': comment.email.toString() },
            { 'Body': comment.body.toString() },
            { 'CreatedAt': comment.createdAt.toString() },
            { 'UpdatedAt': comment.updatedAt.toString() },
        );
        return table;
    }
    tablesAlbumsDTO(operacao, albums) {
        albums.forEach(element => {
            var table = this.bindTableAlbumDTO(operacao, element);//tablePostDTO
            console.log(table.toString());
            // var tableDependente = this.tablePhotosDTO('Dependente', element.dependentes.pesistPhoto)
            // console.log(tableDependente.toString());
            var tableDependente = this.tablePhotosDependentes(element.dependentes.pesistPhoto)
            console.log(tableDependente.toString());
        });
    }
    bindTableAlbumDTO(operacao, album) {
        var table = new Table({
            style: { head: ['magenta'] },
            head: [operacao, 'ID', 'UserId', 'Title:', 'CreateAt', 'UpdateAt'],
            colWidths: [13, 5, 10, 29, 29, 29]
        });
        table.push(this.formatLineAlbum(album));
        return table;
    }
    tablesAlbums(albums) {
        console.log('\n' + 'GET ALBUMS'.magenta);
        albums.forEach(album => {
            let albumElement = this.bindTableAlbum(album);
            console.log(albumElement.toString());
        });
    }
    bindTableAlbum(album) {
        var table = new Table({
            style: { head: ['magenta'] }
        });
        table.push(
            { 'ID': album.id.toString() },
            { 'UserId': album.userId.toString() },
            { 'Title': album.title.toString() },
            { 'CreatedAt': album.createdAt.toString() },
            { 'UpdatedAt': album.updatedAt.toString() },
        );
        return table;
    }
    tablePhotosDTO(operacao, photos) {
        var table = new Table({
            style: { head: ['blue'] },
            head: [operacao, 'ID', 'AlbumId', 'Title:', 'CreateAt', 'UpdateAt'],
            colWidths: [13, 5, 10, 29, 29, 29]
        });

        photos.forEach(element => {
            table.push(this.formatLinePhoto(element));
        });
        return table;
    }
    tablePhotosDependentes(photos) {
        var IDs = '';
        var table = new Table({
            style: { head: ['blue'] }
        });
        console.log('\n' + 'DEPENDENTES PERSISTIDOS DO ALBUM'.blue);
        photos.forEach(element => {
            if (!IDs) {
                IDs = element.photoID.toString();
            }
            else if (IDs.length >= 0 && IDs.length <= 95) {
                IDs = IDs + ', ' + element.photoID.toString();
            }
            else {
                table.push({ 'Photos IDs': IDs.toString() });
                IDs = '';
            }
        });
        if (IDs) {
            table.push({ 'Photos IDs': IDs.toString() });
        }
        return table;
    }
    tablesPhotos(photos) {
        console.log('\n' + 'GET PHOTOS'.blue);
        photos.forEach(photo => {
            let photoElement = this.bindTablePhoto(photo);
            console.log(photoElement.toString());
        });
    }
    bindTablePhoto(photo) {
        var table = new Table({
            style: { head: ['blue'] }
        });
        table.push(
            { 'ID': photo.id.toString() },
            { 'AlbumId': photo.albumId.toString() },
            { 'Title': photo.title.toString() },
            { 'url': photo.url.toString() },
            { 'ThumbnailUrl': photo.thumbnailUrl.toString() },
            { 'CreatedAt': photo.createdAt.toString() },
            { 'UpdatedAt': photo.updatedAt.toString() },
        );
        return table;
    }

    tableTodosDTO(operacao, todos) {
        var table = new Table({
            style: { head: ['red'] },
            head: [operacao, 'ID', 'UserId', 'Title:', 'CreateAt', 'UpdateAt'],
            colWidths: [13, 5, 10, 29, 29, 29]
        });

        todos.forEach(element => {
            table.push(this.formatLineTodo(element));
        });

        console.log(table.toString());

    }
    tablesTodos(todos) {
        console.log('\n' + 'GET PHOTOS'.red);
        todos.forEach(todo => {
            let todoElement = this.bindTableTodos(todo);
            console.log(todoElement.toString());
        });
    }

    bindTableTodos(todo) {
        var table = new Table({
            style: { head: ['red'] }
        });
        table.push(
            { 'ID': todo.id.toString() },
            { 'UserId': todo.userId.toString() },
            { 'Title': todo.title.toString() },
            { 'Completed': todo.completed.toString() },
            { 'CreatedAt': todo.createdAt.toString() },
            { 'UpdatedAt': todo.updatedAt.toString() },
        );
        return table;
    }
    formatLineUser(useritem) {
        const UserAtribute = {
            User: [useritem.userId, useritem.name, useritem.addressId, useritem.companyId, useritem.updatedAt, useritem.createdAt]
        };
        return UserAtribute;
    }
    formatLinePost(postItem) {
        const PostAtribute = {
            Post: [postItem.postID, postItem.userId, postItem.title, postItem.updatedAt, postItem.createdAt]
        };
        return PostAtribute;
    }
    formatLineComment(commentItem) {
        const CommentAtribute = {
            Comment: [commentItem.commentID, commentItem.postId, commentItem.name, commentItem.updatedAt, commentItem.createdAt]
        };
        return CommentAtribute;
    }
    formatLineAlbum(albumItem) {
        const AlbumAtribute = {
            Album: [albumItem.albumID, albumItem.userId, albumItem.title, albumItem.updatedAt, albumItem.createdAt]
        };
        return AlbumAtribute;
    }
    formatLinePhoto(photoItem) {
        const PhotoAtribute = {
            Photo: [photoItem.photoID, photoItem.albumId, photoItem.title, photoItem.updatedAt, photoItem.createdAt]
        };
        return PhotoAtribute;
    }
    formatLineTodo(todoItem) {
        const TodoAtribute = {
            Todo: [todoItem.photoID, todoItem.userId, todoItem.title, todoItem.updatedAt, todoItem.createdAt]
        };
        return TodoAtribute;
    }

    async persistenciaFromEntidade(indiceTipoOperacao) {
        switch (indiceTipoOperacao) {
            case "1":
                console.log('*****-1-USER-*****'.black.bgYellow);
                const user = {
                    maxIndice: parseInt(readLineSync.question('Informe o numero maximo:'))
                };
                // var maxIndice = parseInt(readLineSync.question('Informe o numero maximo:'));
                //var maxIndice = parseInt(indiceInformado);
                if (Number.isInteger(user.maxIndice)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataUsersDependences(user);
                    this.tableUserDTO('Persist', result);//tablePostDTO
                    //console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "2":
                console.log('***-2-POST-****'.black.bgGreen);
                const post = {
                    id: parseInt(readLineSync.question('Informe o id do Usuário referente ao POST:'))
                };
                if (Number.isInteger(post.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataPostsDependences(post);
                    this.tablesPostsDTO('Persist', result);//tablePostDTO
                    console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "3":
                console.log('***-3-COMMENT-****'.black.bgCyan);
                const comment = {
                    id: parseInt(readLineSync.question('Informe o id do Post referente ao COMMENT:'))
                };
                if (Number.isInteger(comment.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataCommentsDependences(comment);
                    this.tableCommentDTO('Persist', result);
                    console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "4":
                console.log('***-4-ALBUM-****');
                const album = {
                    id: parseInt(readLineSync.question('Informe o id do Usuário referente ao ALBUM:'))
                };
                if (Number.isInteger(album.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataAlbumDependences(album);
                    this.tablesAlbumsDTO('Persist', result)
                    console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "5":
                console.log('***-5-PHOTOS-****');
                const photos = {
                    id: parseInt(readLineSync.question('Informe o id do Album referente ao PHOTOS:'))
                };
                if (Number.isInteger(photos.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataPhotosDependences(photos);
                    this.tablePhotosDTO('Persist', result)
                    console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "6":
                console.log('***-6-TODOS-****');
                const todos = {
                    id: parseInt(readLineSync.question('Informe o id do Usuário referente ao TODOS:'))
                };
                if (Number.isInteger(todos.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataTodosDependences(todos);
                    this.tableTodosDTO('Persist', result)
                    console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "5":
                console.log('***-5-SAIR-****');
                break;
            default:
                console.log("Operação Invalida!");
        }
    }
    async getObject(indiceTipoOperacao) {
        switch (indiceTipoOperacao) {
            case "1":
                console.log('*****-1-USER-*****'.black.bgYellow);
                const user = {
                    id: parseInt(readLineSync.question('INFORME O INDICE DE PESQUISA:'))
                };
                if (Number.isInteger(user.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****'.black.bgYellow);
                    const result = await this.controller.getDataUserDependences(user);
                    const tableResult = this.tableUser(result);
                    console.log(tableResult.toString());
                    //console.log(result);
                    console.log('*****-OK-*****'.black.bgYellow);
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "2":
                console.log('***-2-POST-****'.black.bgGreen);
                const post = {
                    id: parseInt(readLineSync.question('INFORME O INDICE DE PESQUISA:'))
                };
                if (Number.isInteger(post.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****'.black.bgGreen);
                    const result = await this.controller.getDataPostsDependences(post);
                    const tableResult = this.tablesPosts(result);
                    //console.log(tableResult.toString());
                    //console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "3":
                console.log('***-3-COMMENT-****'.black.bgCyan);
                const comment = {
                    id: parseInt(readLineSync.question('Informe o id do Post referente ao COMMENT:'))
                };
                if (Number.isInteger(comment.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****'.black.bgCyan);
                    const result = await this.controller.getDataCommentsDependences(comment);
                    const tableResult = this.tablesComments(result);
                    //console.log(tableResult.toString());
                    //console.log(result);
                    console.log('*****-OK-*****'.black.bgCyan);
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "4":
                console.log('***-4-ALBUM-****'.black.bgMagenta);
                const album = {
                    id: parseInt(readLineSync.question('Informe o id do Usuário referente ao ALBUM:'))
                };
                if (Number.isInteger(album.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****'.black.bgMagenta);
                    const result = await this.controller.getDataAlbumDependences(album);
                    const tableResult = this.tablesAlbums(result);
                    //console.log(result);
                    console.log('*****-OK-*****'.black.bgMagenta);
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "5":
                console.log('***-5-PHOTOS-****'.black.bgBlue);
                const photos = {
                    id: parseInt(readLineSync.question('Informe o id do Album referente ao PHOTOS:'))
                };
                if (Number.isInteger(photos.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****'.black.bgBlue);
                    const result = await this.controller.getDataPhotosDependences(photos);
                    const tableResult = this.tablesPhotos(result);
                    //console.log(result);
                    console.log('*****-OK-*****'.black.bgBlue);
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "6":
                console.log('***-6-TODOS-****'.black.bgRed);
                const todos = {
                    id: parseInt(readLineSync.question('Informe o id do Usuário referente ao TODOS:'))
                };
                if (Number.isInteger(todos.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****'.black.bgRed);
                    const result = await this.controller.getDataTodosDependences(todos);
                    const tableResult = this.tablesTodos(result);
                    //console.log(result);
                    console.log('*****-OK-*****'.black.bgRed);
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "5":
                console.log('***-5-SAIR-****');
                break;
            default:
                console.log("Operação Invalida!");
        }
    }
}

module.exports = { View };