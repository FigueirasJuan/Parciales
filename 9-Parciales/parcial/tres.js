function Mostrar()
{
    var largo;
    var ancho;
    var resultado;

    largo = document.getElementById("largo").value
    ancho = document.getElementById("ancho").value 
    resultado = (parseInt(largo) * parseInt(ancho)) * 3;
    alert("Se necesitan " + resultado + " metros de alambre");
}
