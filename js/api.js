
const API_URL = "https://my-json-server.typicode.com/demartinez8/M3U2TrelloApp-DavidMartinez"

axios
    .get(`${API_URL}/tasks`)
    .then((res) => showTasks(res.data))
    .catch((err) => console.error(err));

const showTasks = (data) => {

    data.map((task) => createTask(task));

};

const createTask = (task) => {

    let containerTask = document.createElement("aside");
    containerTask.classList.add("container-task");

    let titleTask = document.createElement("div");
    titleTask.classList.add("container-task-title");
    titleTask.innerText = `${task.title}`;

    let personTask = document.createElement("div");
    personTask.classList.add("container-task-person");
    personTask.innerHTML = `<b class='container-task-label'>Responsable :</b> ${task.person}`;

    let detailTask = document.createElement("div");
    detailTask.classList.add("container-task-detail");
    detailTask.innerHTML = `<b class='container-task-label'>Descripción :</b> ${task.details}`;

    let deadLineTask = document.createElement("div");
    deadLineTask.classList.add("container-task-deadline");
    deadLineTask.innerHTML = `<b class='container-task-label'>Plazo de Entrega :</b> ${dateFormat(task.deadline)}`;

    
    containerTask.appendChild(titleTask);
    containerTask.appendChild(personTask);
    containerTask.appendChild(detailTask);
    containerTask.appendChild(deadLineTask);


    let containerPending = document.querySelector(".line-two-column-one");
    let containerProgress = document.querySelector(".line-two-column-two");
    let containerDone = document.querySelector(".line-two-column-three");

    if(task.state === "pending")
    {
        containerPending.appendChild(containerTask);
    }
    if(task.state === "progress")
    {
        containerProgress.appendChild(containerTask)
    }
    if(task.state === "done")
    {
        containerDone.appendChild(containerTask)
    }

};