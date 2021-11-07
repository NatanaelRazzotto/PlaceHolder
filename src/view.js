
const readLineSync = require('readline-sync');
const { Controller } = require('./port/controller/controller');

class View {
    constructor() {
        this.controller = new Controller();
        this.operacoes = ['-1-Fecth and Persistencia', '-2-Get Data', '-3-SAIR'];
        this.entidades = ['-1-USER-', '-2-POST-', '-3-COMMENT', '-4-ALBUM-', '-5-PHOTOS', '-6-TODOS-', '-7-SAIR-'];
    }
    viewOperacoes() {
        console.log('Você pode realizar as seguintes operações:');
        this.operacoes.forEach(element => {
            console.log(element);
        });
    }
    viewEntidades() {
        console.log('Escolha para qual entidade:');
        this.entidades.forEach(element => {
            console.log(element);
        });
    }
    async persistenciaFromEntidade(indiceTipoOperacao) {
        switch (indiceTipoOperacao) {
            case "1":
                console.log('*****-1-USER-*****');
                const user = {
                    maxIndice: parseInt(readLineSync.question('Informe o numero maximo:'))
                };
                // var maxIndice = parseInt(readLineSync.question('Informe o numero maximo:'));
                //var maxIndice = parseInt(indiceInformado);
                if (Number.isInteger(user.maxIndice)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataUsersDependences(user);
                    console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "2":
                console.log('***-2-POST-****');
                const post = {
                    id: parseInt(readLineSync.question('Informe o id do Usuário referente ao POST:'))
                };
                if (Number.isInteger(post.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataPostsDependences(post);
                    console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "3":
                console.log('***-3-COMMENT-****');
                const comment = {
                    id: parseInt(readLineSync.question('Informe o id do Usuário referente ao COMMENT:'))
                };
                if (Number.isInteger(comment.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataCommentsDependences(comment);
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
                    id: parseInt(readLineSync.question('Informe o id do Usuário referente ao PHOTOS:'))
                };
                if (Number.isInteger(photos.id)) {
                    console.log('*****-REALIZANDO PRECESSAMENTO-*****');
                    const result = await this.controller.persistsDataPhotosDependences(photos);
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
                    console.log(result);
                    console.log('*****-OK-*****');
                }
                else {
                    console.log('**** VALOR DE ENTRADA NÃO É VALIDO! ');
                }
                break;
            case "5":
                console.log('***-5-SAIR-****');
                var entidade = readLineSync.question('Informe a entidade: ');
                break;
            default:
                console.log("Operação Invalida!");
        }
    }
}

module.exports = { View };