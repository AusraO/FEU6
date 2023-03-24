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

const zmones = [
  {vardas:'Rokas', pavarde:'Ban0'},
  {vardas:'Petras', pavarde:'Ban1'},
  {vardas:'Kaziukas', pavarde:'Ban2'},
  {vardas:'Ona', pavarde:'Ban3'}
]
zmones.forEach( (zmogus, i) => {
  console.log(`indeksas${i}: Vardas:${zmogus.vardas} Pavardė:${zmogus.pavarde}`);
} );


function sena(par1){
  return par1+1;
}
const naujas = (par1) => {
  return par1+1;
}