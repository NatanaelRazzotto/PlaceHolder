const { View } = require('./view');
var Table = require('cli-table');
const readLineSync = require('readline-sync');
(async () => { //(()=>{})();
    const view = new View();
    let operacional = true;
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
                await view.persistenciaFromEntidade(entidade);
                break;
            case "2":
                console.log('***Get Data****'.black.bgWhite);
                view.viewEntidades();
                var entidade = readLineSync.question('INFORME O TIPO DE OBJETO: ');
                await view.getObject(entidade);
                break;
            case "3":
                console.log('***Get EXIT ****'.black.bgWhite);
                operacional = false;
                break;
            default:
                console.log("Operacao Invalida!");
        }
        /*var table = new Table({
            style: { head: ['green'] },
            head: ['TH 1 label', 'TH 2 label']
            , colWidths: [10, 10]
        });
        // table.push(
        //     ['First value', 'Second value']
        //     , ['First value', 'Second value']
        // );

        table.push(
            ['First value', 'Second value']
        );

        const fruits = ["Banana", "Orange"];

        table.push(fruits);

        console.log(table.toString());*/

        console.log('!!!APLICACAO ENCERRADA!!!!!');
    }
})();


