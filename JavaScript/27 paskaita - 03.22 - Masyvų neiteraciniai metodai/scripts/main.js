/*
let entriesMasyvas0 = ['a','b','c','d'];
let entriesMasyvas1 = entriesMasyvas0.entries();
console.log(entriesMasyvas0);
console.log(entriesMasyvas1);
console.log(entriesMasyvas1.next());
console.log(entriesMasyvas1.next());
console.log(entriesMasyvas1.next());
console.log(entriesMasyvas1.next());
console.log(entriesMasyvas1.next());
console.log(entriesMasyvas1);
console.log(entriesMasyvas1.next());
*/
/*
  let fillMasyvas0 = Array(10).fill(null);
  let fillMasyvas1 = [1,2,3].fill(null,0,2);
  let fillMasyvas2 = Array.from(Array(10).keys());
  console.log(fillMasyvas0);
  console.log(fillMasyvas1);
  console.log(fillMasyvas2);
*/

// mutuoja / pasikeičia
// const masyvas = [1,2,3,4,5];
// console.log(masyvas);
// masyvas.pop();
// masyvas.pop();
// console.log(masyvas);


//        Funkcijos
function f_Vardas(par1, par2){
  return par1 + par2;
}
console.log(f_Vardas(5,4));

const masyvasNeFunkcijos = ['a','b','c','d'];
function masyvas_i_string(masyvas){
  console.log('funkcija vyksta');
  return masyvas.join('; ');
}
let fAtsakymas = masyvas_i_string(masyvasNeFunkcijos);
console.log(fAtsakymas);

//        callbacks
function rikiuotiSkaicius(sk1, sk2){
  return sk1 - sk2;
}
const nerikiuotasMasyvas = [5,541,651,1,651,35,16,84,61,64,56561,61,8,16,1];
let rikiuotasMasyvas = nerikiuotasMasyvas.sort(rikiuotiSkaicius);
console.log(rikiuotasMasyvas);

//        arrow function
const arrowFunkcija = (par1, par2) => {
  return par1*par2;
}
let afAtsakymas = arrowFunkcija(5,10);
console.log(afAtsakymas);

//        bevardės funkcijos
(function(par1, par2){
  return par1+'atlikus veiksmus'+par2;
})
((par1, par2) => {
  return par1+'atlikus veiksmus'+par2;
})
// ((par1, par2) => par1+'atlikus veiksmus'+par2)
// (parametras => parametras+'atlikus veiksmus')

//        Arrow function event'e

document
  .querySelector('button')
  .addEventListener('click', (event) => {
    console.log(event);
    event.target.innerHTML = 'Paspaudei!';
  })