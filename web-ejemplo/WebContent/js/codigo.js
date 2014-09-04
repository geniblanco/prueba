//Ya que el c�digo est� separado (en otro fichero, este, que no es el html)
//Lo voy a separar todo
//y voy a poner los eventos desde aqu�

function testAjax() {
	ajax = new XMLHttpRequest();
	//primer envio - con una conexi�n - esa conexi�n hay que abrirla 
	//open(method, url, async, username, password)
	//  method = GET/POST/PUT/DELETE
	//  url
	//  ASYNC = Si se va a enviar asincrono (no espera)- true // sincrono (espera)-false
	//  username y password -- como no tenemos y en java script los par�metros son opcionales no los envio
	ajax.open(
			"POST", 
			"http://localhost:8080/web-ejemplo/rest/adios",
			true);
	//la petici�n y la respuesta son as�ncronas
	//la respuesta la tengo que preparar antes que el env�o
	ajax.onreadystatechange = responder;
	
	//tengo que hacer la petici�n (ir a la direcci�n de la url -- que es pedir el fichero.txt)
	//peticion -- como no le envio datos, solo le pido el fichero, sin par�metros 
	ajax.send();
}

function responder() {
	//el servidor ha terminado cuando se cumple el if 
	//(200 es ok -- "nos devuelve lo que hemos pedido")
	//(el 4 es el estado de "he terminado de procesar la petici�n")
	if (ajax.readyState == 4 && ajax.status == 200){
		var resultado = ajax.responseText;
		alert(resultado);
	}

}
//me voy a inventar una funci�n main 
function main() {
	//Aqu� voy a enlazar todos los eventos
	var boton1 = document.getElementById("probarAJAX");
	if(boton1 != null)
	boton1.onclick = testAjax;
}

//La funci�n main se va a ejecutar cuando se cargue la p�gina
//  al main no se le pone () -- queremos que se ejecute en el evento loada (onload)
//  si le ponemos () se ejecutar�a en este momento.
window.onload = main;
