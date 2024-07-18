// 1-criando uma função //
function minhaFuncao(){
    console.log("testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmvariavel= function() {
    console.log("função variavel")
}
minhaFuncaoEmvariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("imprimindo alguma coisa");
funcaoComParametro("primeira função");

// 2-return //