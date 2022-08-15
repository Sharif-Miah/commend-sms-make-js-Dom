
const mainContainer = document.getElementById('main');

const section = document.createElement('section');

const h1 = document.createElement('h1');

h1.innerText = 'Dress Item List';

section.appendChild(h1)

const li2 = document.createElement('li');
li2.innerText = 'pent';
section.appendChild(li2)

const li1 = document.createElement('li');
li1.innerText = 'Shirt';
section.appendChild(li1)

const li3 = document.createElement('li');
li3.innerText = 'belt';
section.appendChild(li3)

const li4 = document.createElement('li');
li4.innerText = 'show';
section.appendChild(li4)

mainContainer.appendChild(section)

const section2 = document.createElement('section');
section2.innerHTML = `
<h1> Table Items </h1>

<ul>
<li>Computer</li>
<li>Mobile</li>
<li>Keybord</li>
<li>Mouse</li>
<li>Monitor</li>
<li>Televistion</li>
</ul>
`

mainContainer.appendChild(section2)