/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/
const textarea = document.querySelector('.text');
const removeLastButton = document.querySelector('.removeLast');
const removeAll = document.querySelector('.removeAll');
const bold = document.querySelector('.bold');
const italic = document.querySelector('.italic');

removeLastButton.addEventListener("click", () => {
    const text = textarea.value;
    textarea.value = text.slice(0, -1); 
});


removeAll.addEventListener("click", () => {
    const text = textarea.value;
    textarea.value = " "
});


















