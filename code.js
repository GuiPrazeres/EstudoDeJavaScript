document.write(`Olhe o console log`)

var ingredientes = [ 'mel', 'água', 'sal', 'mostarda'];
var modificado = [];

function capitalizar(ingredientes){
	for (var i = 0; i < ingredientes.length; i++){
		var letraInicial = ingredientes[i].charAt(0).toUpperCase();
		var restoTexto = ingredientes[i].slice(1);
		var resultado = letraInicial + restoTexto;

		modificado[i] = resultado;
	}	
	return modificado;
}

function ordenar(ingredientes){
	return ingredientes.sort(function(a,b){return a.localeCompare(b);});	
}
var resultadoCapitalizacao = capitalizar(ingredientes);
// Ainda to modificando a variavel original
var resultadoOrdenacao = ordenar(resultadoCapitalizacao);
console.log(resultadoCapitalizacao);
console.log(resultadoOrdenacao);

