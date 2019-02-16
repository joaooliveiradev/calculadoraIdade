function calcular(idade){
// Coletando os dados da idade.
var idade = document.getElementById('idade').value;
// Em Minutos
var minutos = (idade * 365) * 24 * 60;
// Em horas
var horas  = (idade * 365) * 24;
// Em dias
var dias = (idade * 365 * 24) / 24 ;
// Em anos
var anos = idade + ' anos' ;
// Em Segundos
var segundos = idade * 365 * 24 * 60 * 60;


	//Mostrando os resultados --- Minutos
	document.getElementById('minutosInput').value = minutos;

	//Mostrando os resultados --- Horas
	document.getElementById('horasInput').value = horas;

	//Mostrando os resultados --- Dias

	document.getElementById('diasInput').value = horas;

	// Mostrando os resultados --- Anos

	document.getElementById('anosInput').value = anos;

	// Mostrando os resultados --- Segundos

	document.getElementById('segundosInput').value = segundos;

}