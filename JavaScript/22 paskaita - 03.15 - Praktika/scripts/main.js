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


/* fizzBuzz funkcija */
function fizzBuzz(sk1, sk2){
  
}

fizzBuzz(0, 100);