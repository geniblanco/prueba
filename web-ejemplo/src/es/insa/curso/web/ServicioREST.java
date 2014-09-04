package es.insa.curso.web;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

//ESTO VA A SER UN SERVICIO REST CREADO CON JAX-RS
//PERO JAX-RS DE POR S� ES S�LO UNA INTERFACE
//JERSEY ES UNA VERSI�N DE JAX-RS
//PERO SE CONFIGURA CON ANOTACIONES
//a�adido

//aqui tengo que poner una configuraci�n por defecto
//para que interprete que esta clase es un servicio
@Path("/")
public class ServicioREST {

	public ServicioREST(){
	}

	@GET
	@Path("/saludar")
	public String saludar (String nombre) {
		return "Hola " + nombre;
	}
	
	@POST
	@Path("/adios")
	public String despedirse (String nombre) {
		return "Adios " + nombre;
	}
}
