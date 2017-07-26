function Mostrar()
{
    var num;
    var respuesta = true;
    var cont = 0;
    var suma = 0;
    var cantpar = 0;
    var max;
    var min;
    var promedio;
    var flag = true;

   
while(respuesta == true) 
{
    num = prompt("Ingrese un número positivo");
    num = parseInt(num);

    if(num<0)
    {
        num = prompt("Ingrese un número positivo!!!")
        num = parseInt(num);
    }
    else if(num>0)
    {
        respuesta = confirm("Desea seguir ingresando números?");
        suma = suma + num;
        cont = cont + 1;
    }
    if((num %2) == 0)
    {
        cantpar = cantpar + 1;
    }
    if(flag == true)
    {
        num = max;
        num = min;
        flag = false;
    }
    else if(num>min)
    {
        max = num;
    }
    else
    {
        min = num;
    }


}

promedio = (suma / cont);


document.write("<h1>Cantidad de números pares: </h1>" + cantpar);
document.write("<h1>Promedio total: </h1>" + promedio);
document.write("<h1>Suma de todos los números: </h1>" + suma);
document.write("<h1>Número máximo: </h1>" + max);
document.write("<h1>Número mínimo: </h1>" + min);

}
