const { View } = require('./view');
const readLineSync = require('readline-sync');
(async () => {
    const view = new View();
    let operacional = true;
    console.log('--------INICIANDO APLICAÇÃO----------')
    while (true) {
        console.log('--------APLICAÇÃO----------')
        view.viewOperacoes();
        var indiceTipoOperacao = readLineSync.question('Informe a operacao: ');
        //view.selectOperacoes(operacaoVar);
        switch (indiceTipoOperacao) {
            case "1":
                console.log('*****Fecth and Persistencia*****');
                view.viewEntidades();
                var entidade = readLineSync.question('Informe a entidade: ');
                await view.persistenciaFromEntidade(entidade);
                break;
            case "2":
                console.log('***Get Data****');
                view.viewEntidades();
                var entidade = readLineSync.question('Informe a entidade: ');
                break;
            case "3":
                console.log('***Get EXIT ****');
                operacional = false;
                break;
            default:
                console.log("Operacao Invalida!");
        }
        console.log('!!!APLICACAO ENCERRADA!!!!!');
    }
})();


