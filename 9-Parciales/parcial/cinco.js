function Mostrar()
{
    var dia = prompt("Ingrese su día");
    var dia = dia.toLowerCase()
    switch(dia)
    {
        case "sabado" || "domingo":
        alert("Es fin de semana!");
        break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
        alert("A trabajar!!");
        break;

    }
}
