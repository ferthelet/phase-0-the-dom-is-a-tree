// js

let varToPrint = document.getElementById('greeting'); // id is unique textConent = 'Hello!'

varToPrint = document.getElementsByClassName('banner'); // class is not unique = array of 3 divs
// for (let element of varToPrint) {
//     console.log(element.innerHTML); // innerHTML p, h5, and p
// }

varToPrint = document.getElementsByTagName('div'); // no id or class?
// for example: div, h1, header, article
// for (let element of varToPrint) {
//     console.log(element.innerHTML);
// }

// if you dont know anything about a node?

// console.log(varToPrint);

// changing the 2 div to Goodbye!  
const main = document.getElementsByTagName('main')[0]; // array like
const children = main.children; // html collection
console.log(main);
console.log(children);

for (let element of children) {
    console.log(element);
}

const secondChild = children[1];
console.log(secondChild);

const p = secondChild.getElementsByTagName('p')[0];
console.log(p);

p.textContent = 'Goodbye!';
console.log(p);

