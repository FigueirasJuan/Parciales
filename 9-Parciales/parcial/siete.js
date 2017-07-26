function Mostrar()
{
    var nota;
    var contador = 0;
    var sexo;
    var suma = 0;
    var promedio;
    var max;
    var min;
    var cantvar = 0;

while(contador<3)
{
    nota = prompt("Ingrese la nota:")
    nota = parseInt(nota)

    if(nota>0 && nota<=10)
    {
    suma = suma + nota;
    sexo = prompt("Ingrese f o m");
    contador ++;
    }
    else if(!(nota>0 && nota<= 10))
    {
     nota = prompt("Ingrese una nota valida!:")
    }
    if(contador == 1)
    {
        nota = max;
        nota = min;
    }
    else if(nota>min)
    {
        max = nota;
    }
    else
    {
        min = nota;
    }
    if(sexo = "m" && nota>=6)
    {
        cantvar = cantvar + 1;
    }
    
}

promedio = suma / 3

alert("Promedio: " + promedio);
alert("Nota más baja " + min);
alert("Cantidad de varones cuya nota es mayor a 6 : " + cantvar + "varones")



}
