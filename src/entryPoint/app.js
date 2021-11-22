const { View } = require('./view');
var Table = require('cli-table');
const readLineSync = require('readline-sync');
(async () => {
    try {
        const view = new View();
        let operacional = true;
        let retornOperations = true;

        console.log('\n' + '--------INICIANDO APLICAÇÃO----------'.black.bgWhite + '\n');
        while (true) {
            console.log('--------APLICAÇÃO--------'.black.bgWhite);
            view.viewOperacoes();
            var indiceTipoOperacao = readLineSync.question('Informe a operacao: ');
            //view.selectOperacoes(operacaoVar);
            switch (indiceTipoOperacao) {
                case "1":
                    console.log('*****Fecth and Persistencia*****'.black.bgWhite);
                    view.viewEntidades();
                    var entidade = readLineSync.question('INFORME O TIPO DE OBJETO: ');
                    retornOperations = await persistenciaFromEntidade(view, entidade);
                    break;
                case "2":
                    console.log('***Get Data****'.black.bgWhite);
                    view.viewEntidades();
                    var entidade = readLineSync.question('INFORME O TIPO DE OBJETO: ');
                    await getObject(view, entidade);
                    break;
                case "3":
                    console.log('***Get EXIT ****'.black.bgWhite);
                    operacional = false;
                    break;
                default:
                    console.log("Operacao Invalida!");
            }

            if (retornOperations) {
                console.log('!!!APLICACAO ENCERRADA COM SUCESSO!!!!!');
            }
            else {
                console.log('!!!APLICACAO NÃO FOI ENCERRADA COM SUCESSO!!!!!');
            }
        }
    } catch (error) {
        console.error(error.message);
    }
})();

async function persistenciaFromEntidade(view, indiceTipoOperacao) {
    switch (indiceTipoOperacao) {
        case "1":
            console.log('*****-1-USER-*****'.black.bgYellow);
            const user = {
                maxIndice: parseInt(readLineSync.question('Informe o numero maximo:'))
            };
            return await view.persistenciaUsersDependences(user);

        case "2":
            console.log('***-2-POST-****'.black.bgGreen);
            const post = {
                id: parseInt(readLineSync.question('Informe o id do Usuário referente ao POST:'))
            };
            return await view.persistenciaPostsDependences(post);

        case "3":
            console.log('***-3-COMMENT-****'.black.bgCyan);
            const comment = {
                id: parseInt(readLineSync.question('Informe o id do Post referente ao COMMENT:'))
            };
            return await view.persistenciaCommentsDependences(comment);

        case "4":
            console.log('***-4-ALBUM-****');
            const album = {
                id: parseInt(readLineSync.question('Informe o id do Usuário referente ao ALBUM:'))
            };
            return await view.persistenciaAlbumDependences(album);
        case "5":
            console.log('***-5-PHOTOS-****');
            const photos = {
                id: parseInt(readLineSync.question('Informe o id do Album referente ao PHOTOS:'))
            };
            return await view.persistenciaPhotosDependences(photos);
        case "6":
            console.log('***-6-TODOS-****');
            const todos = {
                id: parseInt(readLineSync.question('Informe o id do Usuário referente ao TODOS:'))
            };
            return await view.persistenciaTodosDependences(todos);
        case "5":
            console.log('***-5-SAIR-****');
            break;
        default:
            console.log("Operação Invalida!");
    }
}

async function getObject(view, indiceTipoOperacao) {
    switch (indiceTipoOperacao) {
        case "1":
            console.log('*****-1-USER-*****'.black.bgYellow);
            const user = {
                id: parseInt(readLineSync.question('INFORME O INDICE DE PESQUISA:'))
            };
            return await view.getDataUserDependences(user);
        case "2":
            console.log('***-2-POST-****'.black.bgGreen);
            const post = {
                id: parseInt(readLineSync.question('INFORME O INDICE DE PESQUISA:'))
            };
            return await view.getDataPostsDependences(post);
        case "3":
            console.log('***-3-COMMENT-****'.black.bgCyan);
            const comment = {
                id: parseInt(readLineSync.question('Informe o id do Post referente ao COMMENT:'))
            };
            return await view.getDataCommentsDependences(comment);

        case "4":
            console.log('***-4-ALBUM-****'.black.bgMagenta);
            const album = {
                id: parseInt(readLineSync.question('Informe o id do Usuário referente ao ALBUM:'))
            };
            return await view.getDataAlbumDependences(album);

        case "5":
            console.log('***-5-PHOTOS-****'.black.bgBlue);
            const photos = {
                id: parseInt(readLineSync.question('Informe o id do Album referente ao PHOTOS:'))
            };
            return await view.getDataPhotosDependences(photos);

        case "6":
            console.log('***-6-TODOS-****'.black.bgRed);
            const todos = {
                id: parseInt(readLineSync.question('Informe o id do Usuário referente ao TODOS:'))
            };
            //getDataTodosDependences
            return await view.getDataTodosDependences(todos);

        case "5":
            console.log('***-5-SAIR-****');
            break;
        default:
            console.log("Operação Invalida!");
    }
}

