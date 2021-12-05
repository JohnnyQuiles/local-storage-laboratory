// Challenge 1: String Saver

// HTML ELEMENTS
const savedForm = document.querySelector('#saved-form'); 
const stringInput = document.querySelector('#string-input');
const savedString = document.querySelector('#saved-string');

// WHEN PAGE LOADS, LOAD INFO FROM LOCAL STORAGE
const savedStringValue = localStorage.getItem('savedStringValue'); 
if(savedStringValue === null) {
    savedString.innerText = 'Local Storage Empty.';

} else {
    savedString.innerText = savedStringValue; 
}

// WHEN SUBMITTED , SAVE INPUT TO LOCAL STORAGE
savedForm.addEventListener('submit', function (event) {
    event.preventDefault();
    localStorage.setItem('savedStringValue', stringInput.value);
});


// Challenge 2: Page Load Counter
const counterKey = 'counter';
let counterValue = localStorage.getItem(counterKey);

//
if(counterValue === null) {
    counterValue = 0;
}
counterValue++;
//
localStorage.setItem(counterKey, counterValue);
//
const counter = document.querySelector('#counter');
counter.innerText = counterValue;

// Challenge 3: List Builder 
const list = document.querySelector('#list-builder'); 
const listInput = document.querySelector('#list-input'); 
const button = document.querySelector('#button'); 
const ol = document.querySelector('#list'); 

// Load array from local storage
const listKey = 'list';
let listValue = localStorage.getItem(listKey);
// Handle the case if list value is null
if(listValue === null) {
    listValue = [];
} else {
    listValue = JSON.parse(listValue); 
}

// Create DOM element for each value in list
for (const string of listValue) {
    const li = document.createElement('li'); 
    li.innerText = string; 
    ol.appendChild(li); 
}

// When form is submitted
list.addEventListener('submit', function (event) {
    event.preventDefault();

    listValue.push(listInput.value);

    localStorage.setItem(listKey, JSON.stringify(listValue)); 

    const li = document.createElement('li'); 
    li.innerText = listInput.value; 
    ol.appendChild(li);
});