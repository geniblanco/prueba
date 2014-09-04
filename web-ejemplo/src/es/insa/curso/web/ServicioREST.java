package es.insa.curso.web;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

//ESTO VA A SER UN SERVICIO REST CREADO CON JAX-RS
//PERO JAX-RS DE POR SÍ ES SÓLO UNA INTERFACE
//JERSEY ES UNA VERSIÓN DE JAX-RS
//PERO SE CONFIGURA CON ANOTACIONES
//añadido

//aqui tengo que poner una configuración por defecto
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
