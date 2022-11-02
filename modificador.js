function fnCapitalizar(colecao, atributo){
	if(typeof colecao[0] == 'object'){
		var resultado = colecao.map(function(obj){
			var letraInicial = obj[atributo].charAt(0).toUpperCase();
			var restoTexto = obj[atributo].slice(1);
			obj[atributo] = letraInicial + restoTexto;
			return obj;
		});
		console.log(resultado);
	} else {
		var modificado = [];
		for (var i = 0; i < colecao.length; i++){
			var letraInicial = colecao[i].charAt(0).toUpperCase();
			var restoTexto = colecao[i].slice(1);
			var resultado = letraInicial + restoTexto;

			modificado[i] = resultado;
			console.log(resultado);
		}	
	}
}

function fnOrdenar(colecao,attr){
	return attr ?
		colecao.sort(
			function(a,b){
				return typeof a[attr] == 'number' ? a[attr] - b[attr] : a[attr].localeCompare(b[attr])
		}):
		colecao.sort(
			function(a,b){
				return typeof a == 'number' ? a - b : a.localCompare(b)
			});
}


function fnCaixaAlta(vetor){
	var modificado = [];
	for (var i = 0; i<vetor.length; i++){
		modificado[i] = vetor[i].toUpperCase();
	}
	return modificado;
}

export default {
	caixaAlta: fnCaixaAlta,
	capitalizar: fnCapitalizar,
	ordenar: fnOrdenar
};
