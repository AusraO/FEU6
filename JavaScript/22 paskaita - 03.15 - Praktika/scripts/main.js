let kazkoksMasyvas = [1,2,3,4,5,6,7,8,9];


/* 2 */
console.groupCollapsed('task2');
function task2(masyvas){
  console.log(masyvas);
  for(let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i]);
  }
  console.log('end of function');
}
task2(kazkoksMasyvas);
task2(['hihi','haha']);
task2(['hihi','haha', 1, 5, false, 'end']);
console.groupEnd();

/* 3 */
console.groupCollapsed('task 3');
function task3(masyvas){
  console.log(masyvas);
  for(let i = masyvas.length - 1; i >= 0; i--){
    console.log(masyvas[i]);
  }
  console.log('end of function');
}

task3(kazkoksMasyvas);
task3(['hihi','haha']);
task3(['hihi','haha', 1, 5, false, 'end']);
console.groupEnd();

/* 2 ir 3 viename */
console.groupCollapsed('2 ir 3 junginys');
function task2_3(masyvas){
  console.log(masyvas);
  for(let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i]);
  }
  for(let i = masyvas.length - 1; i >= 0; i--){
    console.log(masyvas[i]);
  }
  console.log('end of function');
}
task2_3(kazkoksMasyvas);
console.groupEnd();

console.groupCollapsed('task11');
/* 11 */
/*
  Math.random()                 => 0.00000000001 -> 0.9999999999999
  Math.random() * 10            => 0.00000000010 -> 9.9999999999990
  Math.ceil(Math.random() * 10) => 1 -> 10 // apvalina į didesnį sveikąjį skaičių
  Math.floor() // apvalina į mažesnį sveikąjį skaičių
  Math.round() // apvalina pagal apvalinimo taisykles iki sveikojo skaičiaus
  number.toFixed(skaicius) // apvalina number'į iki nurodyto skaičiaus už kablelio
    pvz.: 9.55149.toFixed(3) => 9.551
    pvz.: 9.55150.toFixed(3) => 9.552
*/
// vienas būdas
function randomas() {
  return Math.ceil(Math.random() * 10);
}
function kvadratu(){
  return randomas()**2;
}
console.log(kvadratu());
// kitas būdas
function kelimasKvadratu(sk){
  return sk**2;
}
console.log(kelimasKvadratu(randomas()));
console.log(kelimasKvadratu(5));
console.groupEnd();

console.groupCollapsed('FizzBuzz');
/* FizzBuzz funkcija */
function fizzBuzz(nuo, iki){
  // console.log(nuo, iki);
  // if(typeof(nuo)!=='number' && typeof(iki)!=='number'){
  if(isNaN(nuo) || isNaN(iki)){
    return 'Klaida - duomenys turi būti skaičiai!';
  }
  const atsakymas = [];
  for(let i = nuo; i <= iki; i++){
    // console.log(i);
    if(i === 0){
      atsakymas.push(i);
    } else if(i % 3 === 0 && i % 5 === 0){ // i%(3*5) === 0
      atsakymas.push('FizzBuzz');
    } else if(i % 3 === 0){
      atsakymas.push('Fizz');
    } else if(i % 5 === 0){
      atsakymas.push('Buzz');
    } else {
      atsakymas.push(i);
    }
  }
  return atsakymas;
}

// console.log(fizzBuzz(1,106));
let fizzBuzzAtsakymas = fizzBuzz(1,106);
console.log(fizzBuzzAtsakymas);
console.groupEnd();

/* Pirminių skaičių funkcija */
function pirminiaiSkaiciai(nuo, iki){
  // let functionStartTime = Date.now();
  console.time();
  let pirminiuSkaiciuMasyvas = [];
  for(let i = nuo; i <= iki; i++){
    let arPirminis = true; // prielaida, kad i'tasis yra pirminis skaičius
    for(let j = 2; j < i; j++){
      if(i % j === 0){
        arPirminis = false;
        break;
      }
    }
    if(arPirminis){
      // console.log(i, ' yra pirminis skaičius');
      pirminiuSkaiciuMasyvas.push(i);
    }
  }
  console.timeEnd();
  return pirminiuSkaiciuMasyvas;
  // let functionEndTime = Date.now();
  // console.log(functionEndTime - functionStartTime, 'miliseconds');
}

let pirminiuSkaiciuAtsakymas = pirminiaiSkaiciai(2,10000);
console.log(pirminiuSkaiciuAtsakymas);

// ND - pabandyti optimizuoti pirminiaiSkaiciai funkciją