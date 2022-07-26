
let form = document.querySelector("#form");

let bntNew = document.getElementById('new'); // Boton Añadir

bntNew.onclick = function() // Se ejecuta el evento click
{
    form.style.display = "block";
}

let bntSave = document.getElementById('save'); // Boton Guardar

bntSave.onclick = function() // Se ejecuta el evento click
{
    const formTask = document.querySelector('#form-task')

    let titleInput = document.getElementById('title'); // Valor ingresado en el input
    let responsibleInput = document.getElementById('responsible'); // Valor ingresado en el input
    let descriptionInput = document.getElementById('description'); // Valor ingresado en el input
    let termInput = document.getElementById('term'); // Valor ingresado en el input

    let save = document.getElementById('save');
    let cancel = document.getElementById('cancel');
    let preload = document.getElementById('preload');

    if(titleInput.value == ""){ // Se valida no esté vacio
        alert("Ingrese el titulo de la tarea para continuar."); titleInput.focus(); return false;
    }
    if(responsibleInput.value == "0"){ // Se valida no esté vacio
        alert("Seleccione el responsable de la tarea para continuar."); responsibleInput.focus(); return false;
    }
    if(descriptionInput.value == ""){ // Se valida no esté vacio
        alert("Ingrese la descripción de la tarea para continuar."); descriptionInput.focus(); return false;
    }
    if(termInput.value == ""){ // Se valida no esté vacio
        alert("Ingrese el plazo de entrega de la tarea para continuar."); termInput.focus(); return false;
    }

    save.style.display = "none";
    cancel.style.display = "none";
    preload.style.display = "block";

    formTask.addEventListener('submit',(ev) => {

        ev.preventDefault();

        const formData = ev.target;

        const data = {
            title: formData.title.value,
            person: formData.responsible.value,
            details: formData.description.value,
            state: 'pending',
            deadline: formData.term.value,
            created: moment().format('YYYY')+"-"+moment().format('MM')+"-"+moment().format('DD')
        }

        axios
            .post(`${API_URL}/tasks`, data)
            .then((res) => { 
                    createTask(res.data); 
                    alert("TAREA CREADA CON EXITO !"); 

                    save.style.display = "block";
                    cancel.style.display = "block";
                    preload.style.display = "none";

                    formData.reset(); 
            })
            .catch((err) => console.error(err));
    })
}

let bntCancel = document.getElementById('cancel'); // Boton Cancelar

bntCancel.onclick = function() // Se ejecuta el evento click
{
    form.style.display = "none";
}