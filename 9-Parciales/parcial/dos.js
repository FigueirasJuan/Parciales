function Mostrar()
{
    var importeinicial;
    var importefinal;

    importeinicial = prompt("Ingrese el importe de su producto...");
    importeinicial = parseInt(importeinicial);
    importefinal = importeinicial * 1.21;
    document.getElementById("importeFinal").value = importefinal;
}
