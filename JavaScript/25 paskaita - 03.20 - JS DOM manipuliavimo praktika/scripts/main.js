/* Kartu 1 */

const kartu1 = document.querySelector('#kartu1');
kartu1.innerHTML = `
  <h1 class='raudonasTekstas didelisTekstas centruotasTekstas'>
    Bandymas su innerHTML
  </h1>
`;
// kartu1.innerHTML += `
//   <div class='flex flex-wrap justify-center gap-2'>
//     <div class='kortele1'>
//       <h3>Kortelės pavadinimas</h3>
//       <img src="https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg" alt="kaziuko mugė">
//       <p>
//         Kortelės aprašymas and so on... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, perspiciatis!
//       </p>
//     </div>
//     <div class='kortele1'>
//       <h3>Kortelės pavadinimas</h3>
//       <img src="https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg" alt="kaziuko mugė">
//       <p>
//         Kortelės aprašymas and so on... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, perspiciatis!
//       </p>
//     </div>
//     <div class='kortele1'>
//       <h3>Kortelės pavadinimas</h3>
//       <img src="https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg" alt="kaziuko mugė">
//       <p>
//         Kortelės aprašymas and so on... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, perspiciatis!
//       </p>
//     </div>
//   </div>
// `;
let visosKorteles = '';
// for(let i = 0; i < 3; i++){
//   visosKorteles += `
//     <div class='kortele1'>
//       <h3>Kortelės pavadinimas</h3>
//       <img src="https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg" alt="kaziuko mugė">
//       <p>
//         Kortelės aprašymas and so on... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, perspiciatis!
//       </p>
//     </div>
//   `;
// }
for(let i = 0; i < duomenys.length; i++){
  visosKorteles += `
    <div class='kortele1'>
      <h3>${duomenys[i].pavadinimas}</h3>
      <img src='${duomenys[i].paveiksliukas}' alt='${duomenys[i].paveiksliukoAlt}'>
      <p>${duomenys[i].paragrafas}</p>
    </div>
  `;
}
kartu1.innerHTML += `
  <div class='flex flex-wrap justify-center gap-2'>
    ${visosKorteles}
  </div>
`;

console.log(duomenys);

/* DOM elementų kūrimas (geruoju būdu) */

const testZona = document.querySelector('#testZona');
let naujasDivas = document.createElement('div');
// naujasDivas.className += ' kortele1';
naujasDivas.classList.add('kortele1');
// naujasDivas.classList.add('kortele5');
// naujasDivas.classList.remove('kortele5');
let naujasHeading = document.createElement('h3');
let tekstas2 = document.createTextNode('Pavadinimas');
naujasHeading.appendChild(tekstas2);
let naujasImage = document.createElement('img');
naujasImage.setAttribute('src','https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg');
naujasImage.setAttribute('alt', 'kaziuko mugė');
let naujasPar = document.createElement('p');
let tekstas1 = document.createTextNode('Tekstas kuris bus atvaizduojamas...');
naujasPar.appendChild(tekstas1);
naujasDivas.append(naujasHeading, naujasImage, naujasPar);
testZona.appendChild(naujasDivas);

/* Kartu 2 */
const kartu2 = document.querySelector('#kartu2');
let kartu2Heading = document.createElement('h1');
kartu2Heading.classList.add('raudonasTekstas', 'didelisTekstas', 'centruotasTekstas');
let kartu2Tekstas = document.createTextNode('Bandymas su document create');
kartu2Heading.appendChild(kartu2Tekstas);
let divKonteineris = document.createElement('div');
divKonteineris.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-2');
for(let i = 0; i < duomenys.length; i++){
  let kortelesDiv = document.createElement('div');
  kortelesDiv.classList.add('kortele1');
  let kortelesHeading = document.createElement('h3');
  let kortelesPavadinimas = document.createTextNode(duomenys[i].pavadinimas);
  kortelesHeading.appendChild(kortelesPavadinimas);
  let kortelesImage = document.createElement('img');
  kortelesImage.setAttribute('src', duomenys[i].paveiksliukas);
  kortelesImage.setAttribute('alt', duomenys[i].paveiksliukoAlt);
  let kortelesParagraph = document.createElement('p');
  let kortelesTekstas = document.createTextNode(duomenys[i].paragrafas);
  kortelesParagraph.appendChild(kortelesTekstas);
  kortelesDiv.append(kortelesHeading, kortelesImage, kortelesParagraph);
  divKonteineris.appendChild(kortelesDiv);
}
kartu2.append(kartu2Heading, divKonteineris);

/* 6 */
const allSections = document.querySelectorAll('section');
console.log(allSections);
for(let i = 0; i < allSections.length; i++){
  const rodytiSleptiMygtukas = document.createElement('button');
  const mygtukoTekstas = document.createTextNode('Slėpti');
  rodytiSleptiMygtukas.appendChild(mygtukoTekstas);
  rodytiSleptiMygtukas.classList.add('absolute', 'rodytiSleptiMygtukas');
  rodytiSleptiMygtukas.style.top = '0';
  rodytiSleptiMygtukas.style.right = '0';
  rodytiSleptiMygtukas.addEventListener('click', rodytiSlepti);
  console.dir(rodytiSleptiMygtukas);
  allSections[i].appendChild(rodytiSleptiMygtukas);
  // allSections[i].style.position = 'relative';
  allSections[i].classList.add('relative');
}

function rodytiSlepti(event){
  // console.log(event);
  let visiElementaiApartMygtuko = event.target.parentNode.querySelectorAll('section>:not(button.rodytiSleptiMygtukas)');
  // console.log(visiElementaiApartMygtuko);
  if(event.target.innerHTML === 'Slėpti'){
    for(let i = 0; i < visiElementaiApartMygtuko.length; i++){
      visiElementaiApartMygtuko[i].style.display = 'none';
    }
    event.target.innerHTML = 'Rodyti';
  } else if(event.target.innerHTML === 'Rodyti'){
    for(let i = 0; i < visiElementaiApartMygtuko.length; i++){
      visiElementaiApartMygtuko[i].style.display = '';
    }
    event.target.innerHTML = 'Slėpti';
  } else {
    console.log('Įvyko klaida...');
  }
}