const addItemButton=document.querySelector("#addItemButton");

const taskListDiv=document.querySelector(".taskList");


addItemButton.addEventListener('click',function(e){
    let inputValue=document.getElementById("addTask").value;
    if(inputValue){
        const ele=document.createElement('li');
        ele.textContent=inputValue;   
        let taskList=document.getElementById("taskListContainer");
        taskList.appendChild(ele);
        //console.log(taskList);
        let spanEle=document.createElement('span');
        spanEle.innerHTML="\u00d7";
        ele.appendChild(spanEle);
    }
    else{
        alert('Please enter a task');
    }
    document.getElementById("addTask").value="";
    save();
})


taskListDiv.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    save();
})


function save(){
    console.log(1);
    localStorage.setItem("data",taskListContainer.innerHTML);
}

function show(){
    taskListContainer.innerHTML=localStorage.getItem("data");
}
show();