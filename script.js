let addtodobutton = document.getElementById("add-butt");
let inputfield = document.getElementById("input-todo");
let addtodocontainer = document.getElementById("todo-task");
 

 addtodobutton.addEventListener("click" , function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value ;
    addtodocontainer.appendChild(paragraph);
    inputfield.value ="";
    paragraph.addEventListener('click' , function (){
        paragraph.style.textDecoration = "line-through";
        
    })
    paragraph.addEventListener('dblclick' , function (){
       addtodocontainer.removeChild(paragraph);
        
    })
 })
