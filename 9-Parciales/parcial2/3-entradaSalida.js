//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var alambre;
	ancho = document.getElementById("ancho").value;
	largo = document.getElementById("largo").value;
	perimetro = (parseInt(ancho)*2) + (parseInt(largo)*2);
	alambre = perimetro * 6;
	alert("Alambre a utilizar: " + alambre);
	
}

