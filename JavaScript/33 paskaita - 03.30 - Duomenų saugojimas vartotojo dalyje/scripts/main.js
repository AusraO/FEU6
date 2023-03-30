//            Cookies
// document.cookie = 'pavadinimas=reiksme';
// document.cookie = `Vardas=Rokas; expires=${new Date('2023 03 31')}`;
// document.cookie = `delete=after; expires=${new Date('Thu, 30 Mar 2023 11:15:00 GMT')}`;

//            Session Storage
// window.sessionStorage.setItem('raktinisZodis','reiksme');
// window.sessionStorage.setItem('Vardas','Rokas');
// window.sessionStorage.setItem('Pavarde','Banaitis');
// window.sessionStorage.removeItem('Pavarde');
// // window.sessionStorage.clear(); // išvalo visą sessionsStorage
// let sessionVardas = window.sessionStorage.getItem('Vardas');
// console.log(sessionVardas);
// let sessionRaktas = window.sessionStorage.key(1);
// console.log(sessionRaktas);
// console.log(window.sessionStorage.length);

//            Local Storage
window.localStorage.setItem('tema', 'runescape');
window.localStorage.setItem('iTema', 'false');
window.localStorage.removeItem('iTema');
// window.localStorage.clear();
console.log(window.localStorage.getItem('tema'));
console.log(window.localStorage.key(0));
console.log(window.localStorage.length);


const duomenys = {
  asmenys:[
    {
      vardas: "Rokas",
      pavarde: "Banaitis",
      amzius: 26,
      vedes: false
    },{
      vardas: "Petras",
      pavarde: "Petrauskas",
      amzius: 55
    },{
      vardas: "Jonas",
      pavarde: "Jonukauskas",
      amzius: 5
    }
  ],masinos:[
    {
      marke: "Audi",
      modelis: "TT",
      metai: 2000
    },{
      marke: "BMW",
      modelis: "6",
      metai: 2015
    }
  ],
  kazkaDaro(){
    console.log('magija');
  }
};

window.localStorage.setItem('duomenys', JSON.stringify(duomenys));
console.log(window.localStorage.getItem('duomenys'));
console.log(JSON.parse(window.localStorage.getItem('duomenys')).asmenys);