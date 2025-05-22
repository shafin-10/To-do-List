function addTask(){
     let inputBox = document.querySelector("#text-box");
     let input = inputBox.value;
     
     if (input == "") {
        alert("Please enter a task.");
        return;
      }
      
    //create checkbox
   let checkbox = document.createElement("input");
   checkbox.type = "checkbox"; 
   checkbox.classList.add("checkbox-container");

   //create button
   let button = document.createElement("button")
   button.type = "button";
   button.textContent = "Remove";
   button.onclick = function(){
    removeTask(this);
   };
   button.classList.add("remove-btn");

   //Add item to list-element
   let li = document.createElement("li");
   li.append(checkbox);
   li.append("  " + input + "  ");
   li.append(button);
   li.classList.add("task-item");

   //Add item to list
   let ul = document.querySelector("ul");
   ul.appendChild(li);
   
    inputBox.value = "";

}

function removeTask(button) {
  let li = button.parentElement;
  li.remove();
}