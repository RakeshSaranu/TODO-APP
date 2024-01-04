const userInput=document.getElementById("input-box");
const userList=document.getElementById("list-container");
document.getElementById("btn").addEventListener("click",addTodo);

function addTodo()
{
    if(userInput.value ==="")
    {
        alert("YOU MUST ADD SOME TODO");
    }
    else{
        const li=document.createElement("li");
        li.textContent=userInput.value;
        userList.appendChild(li); 
        const span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    userInput.value="";
    localStore();
}

userList.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        localStore();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        localStore();
    }
},false);

// stores in the local storage of the Browser.
function localStore()
{
   localStorage.setItem("data",userList.innerHTML);
}

// Gets our data from the Localstorage and Displays it.
function display()
{
    userList.innerHTML=localStorage.getItem("data");
}
display();
