//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num;
	var respuesta = true;
	var suma = 0;
	var contador = 0;
	var contpar = 0;
	var promedio;
	var max;
	var min;

while(respuesta == true)
{
	num = prompt("Ingrese un número positivo");
	num = parseInt(num);
	contador++;

	while(num<0)
	{
		num = prompt("Ingrese un número positivo!");
	}

	if((num%2)==0)
	{
		contpar++;
	}
	
	if(contador==1)
	{
		max = num;
		min = num;
	}
	else if(num>min)
	{
		max = num;
	}
	else
	{
		min = num;
	}


	suma = suma + num;


	respuesta = confirm("Desea seguir ingresando números?");

}

promedio = (suma / contador);

document.write("<h1> Cantidad de números pares </h1>" + contpar);
document.write("<h1> Promedio </h1>" + promedio);
document.write("<h1> Suma </h1>" + suma);
document.write("<h1> Máximo </h1>" + max);
document.write("<h1> Mínimo </h1>" + min);

	
}

