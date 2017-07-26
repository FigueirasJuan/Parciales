function Mostrar()
{
    var num1;
    var num2;
    var multiplicacion;
    var resta;
    var suma;
    num1 = prompt("Ingrese un número");
    num2 = prompt("Ingrese un número");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(num1 == num2)
    {
        multiplicacion = num1 * num2
        document.write("<h1> Resultado : </h1>" + multiplicacion)
    }   
    else if(num1>num2)
    {
        resta = num1 - num2
        document.write("<h1> Resultado : </h1>" + resta)
    }
    else
    {
        suma = num1 + num2
        document.write("<h1> Resultado : </h1>" + suma)
    }
}
