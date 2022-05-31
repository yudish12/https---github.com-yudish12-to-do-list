const add = document.querySelector(".add");
const task = document.querySelector("#task");
var x =0;
showTask();
add.addEventListener("click",()=>{
    let todo = localStorage.getItem("task");
    let arr = [];
    if(todo==null){
        arr=[];
    }
    else{
        arr = JSON.parse(todo);
    }
    arr.push(task.value);
    localStorage.setItem("task",JSON.stringify(arr));
    task.value = "";
    showTask();
})
function showTask(){
    let todo = localStorage.getItem("task");
    if(todo==null){
        arr = [];
    }
    else{
        arr = JSON.parse(todo);
    }
    let html = ``;
    arr.forEach((element,index) => {
        x++;
        html+=`
        <h1>To-Do</h1>
        <div class="tasklist${x} mar">
        <div class="taskContainer">
        <p id="content${x}" class="content">${element}</p>
        <button class="edit" onclick = "done_task(${index})">&#10003</button>
        <button class="del" onclick="del_event(${index})">&#x1F5D1</span></button>
        </div>
        </div>`
    });
    let elem = document.querySelector(".tasks");
    if(arr.length != 0){
        elem.innerHTML = html;
    }
    else{
        elem.innerHTML = `
        <h1>To-Do</h1>
        <p id='content${x}' style="font-size: 1.5rem; margin-top: 1rem;">Nothing to Show! Use 'Add a task' section above to add task in your to-do list</p>`;
    }
}
function del_task(){
    const del = document.querySelectorAll(".del");
    del.forEach((element,index)=>{
    element.addEventListener("click",del_event(index)) 
})
}
function del_event(index){
    let todo = localStorage.getItem("task");
    if(todo==null){
        arr = [];
    }
    else{
        arr = JSON.parse(todo);
    }
    console.log(arr);
    arr.splice(index,1);
    console.log(arr);
    localStorage.setItem("task",JSON.stringify(arr));
    showTask();
}
function done_task(i){
    para = document.querySelectorAll(".content");
    if(para[i].style.textDecoration!="line-through"){
    para[i].setAttribute("style","text-decoration:line-through;");
}
else{
    para[i].setAttribute("style","text-decoration:none;");
}
}
