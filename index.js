// button//

//document.body.style.backgroundColor = 'orange';//
//let button = document.getElementById('changebackground');//
//button.addEventListener('click', () => {document.body.style.backgroundColor = 'blue';});//


//first//
//const demoId = document.getElementById('demo');//
//demoId.style.border = '5px solid purple';//

//const demoClass = document.getElementsByClassName('demo');//
//for (i = 0; i < demoClass.length; i++) {demoClass[i].style.border = '2px solid orange';}//

//const demoTag = document.getElementsByTagName('article');//
//for (i=0; i < demoTag.length; i++) {demoTag[i].style.border = '2px solid blue'}//

//const demoQueryAll = document.querySelectorAll('.demo-query-all');//
//demoQueryAll.forEach(query => {query.style.border = '3px solid green'});//

//const demoQuery = document.querySelector('#demo-query');//
//demoQuery.style.border = '6px solid red';//

//second//
//const h1 = document.getElementsByTagName('h1')[0];//
//const p = document.getElementsByTagName('p')[0];//
//const ul = document.getElementsByTagName('ul')[0];//
//const tiger = ul.children[1];//

//ul.firstElementChild.style.background = "yellow";//

//for(let element of ul.children) {element.style.background = 'yellow';}//

//document.body.children[3].lastElementChild.style.background = 'fuchsia';//

//tiger.previousElementSibling.style.background = 'aquamarine';//
//tiger.nextElementSibling.style.background = 'coral';//


//console//
//const paragraph = document.createElement('p');
//paragraph.textContent = "I am a coder.";
//const text = document.createTextNode("am a coder.");
//paragraph.innerHTML = "I am a new coder<strong>with new skills</strong> please and love to code.";

//third//
//to do list ul element//
//const todoList = document.querySelector('ul');//

//create new to-do//
//const newTodo = document.createElement('li');//
//newTodo.textContent = 'Do hair cut';//
//Add new todo //
//todoList.appendChild(newTodo);//

//create new todo//
//const anotherTodo = document.createElement('li');//
//anotherTodo.textContent = 'Pay bills';//
//todoList.insertBefore(anotherTodo,todoList.firstElementChild);//

//Replace //
//const modifiedToDo = document.createElement('li');//
//modifiedToDo.textContent = 'read books';//
//todoList.replaceChild(modifiedToDo, todoList.children[2]);//

//remove//
//todoList.removeChild(todoList.lastElementChild);//

//remove the second //
//todoList.children[1].remove();//


//fourth//
//const demoId = document.querySelector('#demo-id');//
//demoId.textContent = 'demo id text updated.';//

//nodelist of all the elements//
//const demoClasses = document.querySelectorAll('.demo-class');//

//change the text//
//demoClasses.forEach(element => {element.textContent = 'all demo classes are updated.';});//


//fifth -console //
//const img = document.querySelector('img');//
//img.hasAttribute('src');//
//img.getAttribute('src');//
//img.removeAttribute('src');//

//sixth //

//select the first div//
//const div = document.querySelector('div');//

//assign the warning class to the first div//
//div.className = 'warning';//

//select the second div//
//const activeDiv = document.querySelector('.active');//

//activeDiv.classList.add('hidden');//
//activeDiv.classList.remove('hidden');//
//activeDiv.classList.toggle('hidden');//
//activeDiv.classList.replace('active', 'warning');//


//seventh//

// select div //
//const div = document.querySelector('div');

//applying style to div//
//div.setAttribute('style', 'text-align: center');//

//div.style.height = '100px';//
//div.style.width = '100px';//
//div.style.border = '2px solid black';//

//make div into a circle and veritically center the text//
//div.style.borderRadius = '50%';
//div.style.display = 'flex';
//div.style.justifyContent = 'center';
//div.style.alignItems = 'center';


//eighth

//function to modify the text

const changeText = () => {
    const p = document.querySelector('p');

  p.textContent = "i changed becuz of an inline event listener.";}

//add event handler as a property of the button element
const button = document.querySelector('button');

//listen for click event
button.addEventListener('click', changeText);
button.addEventListener('click', alertText)

//event can be overwritten
//button.onclick = changeText;
//button.onclick = alertText;










