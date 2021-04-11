// Write your code here!
let el = document.getElementById('main');
    el.remove();

const newHeader = document.createElement('h1')
newHeader.setAttribute('id','victory')
newHeader.innerHTML = "Div is the champion"
document.body.appendChild(newHeader);