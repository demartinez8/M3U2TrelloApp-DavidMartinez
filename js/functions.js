
let form = document.querySelector("#form");

let bntNew = document.getElementById('new'); // Boton Añadir

bntNew.onclick = function() // Se ejecuta el evento click
{
    form.style.display = "block";
}

let bntSave = document.getElementById('save'); // Boton Guardar

bntSave.onclick = function() // Se ejecuta el evento click
{
    form.style.display = "none";
}

let bntCancel = document.getElementById('cancel'); // Boton Cancelar

bntCancel.onclick = function() // Se ejecuta el evento click
{
    form.style.display = "none";
}