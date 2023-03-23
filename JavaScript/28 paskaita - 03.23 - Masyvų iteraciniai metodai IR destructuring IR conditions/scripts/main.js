const masyvas = ['a','b','c','d','a','c','e'];

// paprastas for
console.groupCollapsed('simple for');
for(let i = 0; i < masyvas.length; i++){
  console.log(i, masyvas[i]);
}
console.groupEnd();

//        ForEach
console.groupCollapsed('forEach');
masyvas.forEach( (elementas, i) => {
  console.log(i, elementas);
} );
console.groupEnd();

// duomenų filtravimas su paprastu for
console.groupCollapsed('for filter');
let masyvasBeAFor = [];
for(let i = 0; i < masyvas.length; i++){
  if(masyvas[i] !== 'a'){
    masyvasBeAFor.push(masyvas[i]);
  }
}
console.log(masyvasBeAFor);
console.groupEnd();

//        Filter
console.groupCollapsed('filter');
let masyvasBeAFilter = masyvas.filter( (elementas) => {
  if(elementas !== 'a'){
    return elementas;
  }
});
console.log(masyvasBeAFilter);
console.groupEnd();

// mutuotas masyvas su for
console.groupCollapsed('for map');
let mutuotasSuFor = [];
for(let i = 0; i < masyvas.length; i++){
  mutuotasSuFor.push(':) ' + masyvas[i]);
}
console.log(mutuotasSuFor);
console.groupEnd();

//        Map
console.groupCollapsed('map');
let mutuotasSuMap = masyvas.map( (elementas) => {
  return ':) '+elementas;
});
console.log(mutuotasSuMap);
console.groupEnd();

// for reduce be intial
console.group('for reduce be intial');
let reduceForBe = '';
for(let i = 0; i < masyvas.length; i++){
  reduceForBe += masyvas[i];
}
console.log(reduceForBe);
console.groupEnd();

// for reduce su intial
console.group('for reduce su intial');
let reduceForSu = 'pradine reikšmė: ';
for(let i = 0; i < masyvas.length; i++){
  reduceForSu += masyvas[i];
}
console.log(reduceForSu);
console.groupEnd();

// reduce be initial
console.group('reduce be intial');
let reduceBe = masyvas.reduce( (acc, curr) => {
  return acc + curr;
});
console.log(reduceBe);
console.groupEnd();

// reduce su initial
console.group('reduce su intial');
let reduceSu = masyvas.reduce( (acc, curr) => {
  return acc + curr;
}, 'pradine reikšmė: ');
console.log(reduceSu);
console.groupEnd();

//      Some
console.group('Some');
let someAts = masyvas.some( (letter) => {
  return letter === letter.toUpperCase();
} );
console.log('Ar bent viena raidė yra didžioji?', someAts);
console.groupEnd();

//      Every
console.group('Every');
let everyAts = masyvas.every( (letter) => {
  return letter === letter.toLowerCase();
});
console.log('Ar visos raidės yra mažosios?', everyAts);
console.groupEnd();