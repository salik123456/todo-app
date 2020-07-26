
var list=document.getElementById("list");

function addTodo(){

    var todo_item=document.getElementById("todo-item");
    ///creating li tag with text node////////////////
    var li=document.createElement("li")
    var litext=document.createTextNode(todo_item.value)
    li.appendChild(litext)


///create delete button/////
var delBtn=document.createElement("button")
var delText=document.createTextNode("DELETE")
delBtn.setAttribute ("class","btn")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)


////////////////////createe eedit btn/////////////
var editBtn=document.createElement("button")
var editText=document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.setAttribute ("class","btn")

editBtn.setAttribute("onclick","editItem(this)")




li.appendChild(delBtn)
li.appendChild(editBtn)
   
    list.appendChild(li)
    todo_item.value=" "
    
}


function deleteItem(f){

     f.parentNode.remove()                 //kiunke pora li dek krna h//

}

function editItem(f){
    var val=f.parentNode.firstChild.nodeValue;
     var editValue =prompt("Enter new value",val)
     f.parentNode.firstChild.nodeValue=editValue
}


function deleteall()
{

    list.innerHTML=""
}