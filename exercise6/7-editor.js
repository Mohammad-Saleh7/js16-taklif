/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/

const removeLastButton = document.querySelector('.removeLast');
removeLastButton.addEventListener('click', () => { 
    let editableDiv = document.querySelector('#textarea'); 
    let content = editableDiv.innerText;
    editableDiv.innerText = content.slice(0, -1); 
}); 


const removeAll = document.querySelector('.removeAll');
removeAll.addEventListener('click', () => { 
    let editableDiv = document.querySelector('#textarea'); 
    editableDiv.innerText = ''; 
});


const bold = document.querySelector('.bold');
bold.addEventListener('click', () => {
    let editableDiv = document.querySelector('#textarea');
    let inputText = editableDiv.innerHTML;
    editableDiv.innerHTML = inputText.split(' ').map(word => `<b>${word}</b>`).join(' ');
});


const italic = document.querySelector('.italic');
italic.addEventListener('click', () => {
    let editableDiv = document.querySelector('#textarea');
    let inputText = editableDiv.innerHTML;
    editableDiv.innerHTML = inputText.split(' ').map(word => `<em>${word}</em>`).join(' ');
});
















