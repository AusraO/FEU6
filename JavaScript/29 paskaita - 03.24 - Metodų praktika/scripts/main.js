// cool way to take out inputs and make em into objects
document 
  .querySelector('form#test')
  .addEventListener('submit' , e => {
    e.preventDefault();
    console.log(e.target.elements);
    let naujasObjektas = {};
    [...e.target.elements].forEach(el => {
      // if(el.type !== 'submit'){ // visi input'ai apart submit input'o
      //   naujasObjektas[el.name] = el.value;
      // }
      el.type !== 'submit' ? naujasObjektas[el.name] = el.value : null;
    });
    console.log(naujasObjektas);
  });

// iteracinių metodų veikimas
console.groupCollapsed('metodu veikimas');
const zmones = [
  {vardas:'Rokas', pavarde:'Ban0'},
  {vardas:'Petras', pavarde:'Ban1'},
  {vardas:'Kaziukas', pavarde:'Ban2'},
  {vardas:'Ona', pavarde:'Ban3'}
]
zmones.forEach( (zmogus, i) => {
  console.log(`indeksas${i}: Vardas:${zmogus.vardas} Pavardė:${zmogus.pavarde}`);
} );
console.groupEnd();

// funkcijos
function sena(par1){
  return par1+1;
}
const naujas = (par1) => {
  return par1+1;
}

// 1 visa data
const meniu = [
  {
    id: '0',
    pavadinimas: "Kebabas lėkštėje",
    kaina: 5.5
  },{
    id: '1',
    pavadinimas: "Didelis kebabas lavašė",
    kaina: 4.6
  },{
    id: '2',
    pavadinimas: "Mažas kebabas lavašė",
    kaina: 4.1
  },{
    id: '3',
    pavadinimas: "Didelis kebabas lavaše su traškučiais",
    kaina: 4.6
  },{
    id: '4',
    pavadinimas: "Mažas kebabas lavaše su traškučiais",
    kaina: 4.1
  },{
    id: '5',
    pavadinimas: "Kebabas pitoje",
    kaina: 4.5
  },{
    id: '6',
    pavadinimas: "Gruzdintos bulvytės",
    kaina: 2.5
  },{
    id: '7',
    pavadinimas: "Gruzdinti koldūnai su mėsos įdaru",
    kaina: 3.2
  },{
    id: '8',
    pavadinimas: "Gruzdinti koldūnai su trijų sūrių įdaru",
    kaina: 3.7
  },{
    id: '9',
    pavadinimas: "Gruzdinti koldūnai su saliamio ir sūrio įdaru",
    kaina: 3.7
  },{
    id: '10',
    pavadinimas: "Bulvytės + vištiena + padažas",
    kaina: 4
  },{
    id: '11',
    pavadinimas: "Coca Cola",
    kaina: 1.5
  },{
    id: '12',
    pavadinimas: "Fanta",
    kaina: 1.5
  },{
    id: '13',
    pavadinimas: "Sprite",
    kaina: 1.5
  }
];

// 4.2 užsakymas
const uzsakymas = [
  {
    pavadinimas: "Kebabas lėkštėje",
    kiekis: 3
  },{
    pavadinimas: "Sprite",
    kiekis: 5
  },{
    pavadinimas: "Gruzdintos bulvytės",
    kiekis: 20
  }
];

// 4.4 čekis
let cekis = uzsakymas.map((uzsakymoDalis => {
  console.log(uzsakymoDalis);
  let menuItemIndex = meniu.findIndex(menuItem => {
    return uzsakymoDalis.pavadinimas === menuItem.pavadinimas;
  });
  console.log(meniu[menuItemIndex].kaina);
  return {
    pavadinimas: uzsakymoDalis.pavadinimas,
    kiekis: uzsakymoDalis.kiekis,
    kaina: uzsakymoDalis.kiekis * meniu[menuItemIndex].kaina
  }
}));
cekis.bendra = cekis.reduce((bendras, dabar) => bendras + dabar.kaina, 0);
console.log(cekis);