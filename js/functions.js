const API_URL = "https://my-json-server.typicode.com/demartinez8/M3U2TrelloApp-DavidMartinez"

axios.get('${API_URL}/tasks').then((res) => showTasks(res.data)).catch((err) => console.error(err));

const showTasks = (data) => {
    data.map((task) => createTask(task));
};

const createTask = (task) => {
    
}


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