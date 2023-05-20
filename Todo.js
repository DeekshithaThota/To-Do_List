const list = document.getElementById("list")
const tb= document.getElementById("tb")

load()

function addTask(){
    console.log(tb.value);
    if(tb.value===""){
        alert("You need to enter some text")
        console.log(tb.value);
    }
    else{
    let li = document.createElement("li")
    li.innerHTML=tb.value
    let check = document.createElement("input")
    check.type="checkbox"
    check.className="check"
    li.appendChild(check)
    list.appendChild(li)
    store()
    
    }
    tb.value=""
    document.getElementsByName("mytext").focus();
    
    
}
function store(){
    localStorage.setItem("data",list.innerHTML);
}
function load(){
    list.innerHTML=localStorage.getItem("data")
}
list.addEventListener("click", function(e){
   if( e.target.className === "check"){
    e.target.parentElement.remove();
    store()
   }
})


