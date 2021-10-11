const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        //add a new item to list
    const newItemText = this.value;
    // makes a list of entered items
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.appendChild(newItem);
    // clear box to accept more user input
    this.value = '';
    }
});