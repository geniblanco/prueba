//Ya que el código está separado (en otro fichero, este, que no es el html)
//Lo voy a separar todo
//y voy a poner los eventos desde aquí

function testAjax() {
	ajax = new XMLHttpRequest();
	//primer envio - con una conexión - esa conexión hay que abrirla 
	//open(method, url, async, username, password)
	//  method = GET/POST/PUT/DELETE
	//  url
	//  ASYNC = Si se va a enviar asincrono (no espera)- true // sincrono (espera)-false
	//  username y password -- como no tenemos y en java script los parámetros son opcionales no los envio
	ajax.open(
			"POST", 
			"http://localhost:8080/web-ejemplo/rest/adios",
			true);
	//la petición y la respuesta son asíncronas
	//la respuesta la tengo que preparar antes que el envío
	ajax.onreadystatechange = responder;
	
	//tengo que hacer la petición (ir a la dirección de la url -- que es pedir el fichero.txt)
	//peticion -- como no le envio datos, solo le pido el fichero, sin parámetros 
	ajax.send();
}

function responder() {
	//el servidor ha terminado cuando se cumple el if 
	//(200 es ok -- "nos devuelve lo que hemos pedido")
	//(el 4 es el estado de "he terminado de procesar la petición")
	if (ajax.readyState == 4 && ajax.status == 200){
		var resultado = ajax.responseText;
		alert(resultado);
	}

}
//me voy a inventar una función main 
function main() {
	//Aquí voy a enlazar todos los eventos
	var boton1 = document.getElementById("probarAJAX");
	if(boton1 != null)
	boton1.onclick = testAjax;
}

//La función main se va a ejecutar cuando se cargue la página
//  al main no se le pone () -- queremos que se ejecute en el evento loada (onload)
//  si le ponemos () se ejecutaría en este momento.
window.onload = main;
