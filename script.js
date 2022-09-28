let addItemButton = document.getElementById("addItemButton")
let listContainer = document.getElementById("todolist")
let inputField = document.getElementById("nextThing")

addItemButton.addEventListener('click', function(){
	if(inputField.value){
		var listitem = document.createElement('li')
		listitem.innerText = inputField.value
		listitem.classList.add('styling')
		listContainer.appendChild(listitem);
	}
	
	
	listitem.addEventListener('click', function(){
		if (listitem.style.textDecoration == ""){
			listitem.style.textDecoration = "line-through";
		}
		else {
			listitem.style.textDecoration = "";
		}
		
	})
	listitem.addEventListener("dblclick", function(){
		listContainer.removeChild(listitem)
	})
})
