function Mostrar()
{
    var importe;
    var contador = 0;
    var max;
    var min;

    while(contador<24)
    {
        importe = prompt("Ingrese un número");
        importe = parseInt(importe);

        if(importe > 0)
        {

        contador = contador + 1


        }

        else if(importe <= 0)
        {
            importe = prompt("Ingrese un número mayor a 0");
            importe = parseInt(importe);
        }

        if(contador == 1)
        {
            max = importe;
            min = importe;

        }
        else if(importe>min)
        {
            max = importe;
        }
        else
        {
            min = importe;
        }
    }

    alert("Máximo: " + max);
    alert("Mínimo: " + min)
}
