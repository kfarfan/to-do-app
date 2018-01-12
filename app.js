function onReady() {
let toDos = [];
let id = 0;
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');

function createNewToDo() {
  if (!newToDoText.value) { return; }

     toDos.push({
       title: newToDoText.value,
       complete: false,
       id: id++
     });

     newToDoText.value = '';

     renderTheUI();
   }
function renderTheUI(){

const toDoList = document.getElementById('toDoList');

toDoList.textContent = '';

toDos.forEach(function(toDo){

const deletebutton = document.createElement('button');
deletebutton.textContent = 'delete';

const newLi = document.createElement('li');

const checkbox = document.createElement('input');

checkbox.type = "checkbox";

const title = document.createElement('span');

newLi.textContent = toDo.title;

toDoList.appendChild(newLi);

newLi.appendChild(checkbox);

newLi.appendChild(deletebutton);

deletebutton.addEventListener('click', () => {
  deleteToDo(toDo.id);
});
   });
   }
addToDoForm.addEventListener('submit', event => {
     event.preventDefault();
     createNewToDo();
     newToDoText.value = '';
   });
   function deleteToDo(id){
     toDos = toDos.filter(item => item.id !==id)
      renderTheUI();
   }
   renderTheUI();
}
window.onload = function() {
  onReady();
};
