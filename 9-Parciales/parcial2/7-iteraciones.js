//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var contador = 0;
	var promedio;
	var contvar = 0;
	var suma = 0;

while(contador<6)
{
	nota = prompt("Ingrese la nota: ");
	sexo = prompt("Ingrese el sexo: ");
	nota = parseInt(nota);
	contador++;

	while(nota>10 || nota<0)
	{
		nota = prompt("Ingrese una nota valida entre 0 y 10:");
		nota = parseInt(nota);
		contador--;

	}
	while(!(sexo == "f" || sexo == "m"))
	{
		sexo = prompt("Ingrese un sexo valido: ");
		contador--;
	}

	if(contador==1)
	{
		max = nota;
		min = nota;
	}
	else if(nota>min)
	{
		max = nota;
	}
	else
	{
		min = nota;
	}
	if(nota>=6 && sexo == "m")
	{
		contvar++;
	}

	suma = suma + nota;
	
}

promedio = suma / contador;

alert("Promedio de las notas: " + promedio);
alert("Nota más baja: " + min);
alert("Cantidad de varones con nota mayor o igual a 6: " + contvar);
	
}

