//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var lado;
	var perimetro;
	lado = document.getElementById("lado").value;
	lado = parseInt(lado);
	perimetro = (lado * 3);
	alert("El perimetro del triangulo equilatero es: " + perimetro);
	
}

