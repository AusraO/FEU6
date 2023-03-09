/*
  Pagrindiniai kiekvienos programavimo kalbos pagrindai: 
    kintamieji - variables
    ?aritmetika - arithmetic/calculus
    sąlygos - conditions
    ciklai - loops
    funkcijos - functions
*/

/*    Kintamieji
  var | let | const - kintamojo startas (rašyti vieną iš jų (kolkas rekomenduojama - let) kuriant kintamąjį, bet kreipiantis į kintamąjį, rašyti var|let|const nebereikia)
    var - senasis užrašymo būdas, kurio ribos didesnės
    let - naujas užrašymo būdas, kurio ribos mažesnės
    const - naujas užrašymo būdas, kuris negali būti keičiamas
    _empty_ - globalus kintamasis (NENAUDOTI)

  susigalvotasKintamojoPavadinimas
    Sugalvojate kaip vadinsite kintamąjį, kintamasis privalo būti: vienas žodis, unikalus, prasmingas, naudoti TIK lotyniškas raides ir skaičius (negali prasidėti skaičiumi)

  =
    priskyrimo ženklas

  reikšmė
    string - rašomas kabutėse ('' "" ``) - tekstinė informacija
    number - skaičius - užrašomas kaip skaičius arba matematinė išraiška
    boolean - true|false - tiesa arba melas, dvi galimos reikšmės
*/

var menesis = 'Kovas';
var menesiai = `Sausis Vasaris Kovas Balandis... 652378465387 ^&**W^&%$# ? ?dsf sdf /sDF? SDf/afaf51as3df15`;
let grazusSkaicius = 66.6*6/66-6+6.6;
let arDabarVasara = false;
let ardabarvasara = 'nea';
let arNoriMiego = true;
const PI = 3.14;

/*        Informacijos atvaizdavimas naršyklėje
  console.log() - išveda duomenis į konsolę (esančią dev tools'uose)
    console.group() | console.groupCollapsed() - sukuria konsolės grupę
    console.groupEnd() - užbaigia konsolės grupę
  window.alert() - išveda duomenis į pranešimo lentelę
  window.prompt() - ekrane atvaizduoja pranešimo lentelę su informacijos įvedimo laukeliu; prilyginus window.prompt()'ą kintamąjam - galime pasiimti vartotojo įvestą reikšmę
*/

console.log(arDabarVasara);
console.log(ardabarvasara);
// window.alert('laikas pertraukai!!!');
// let vartotojoReiksme = window.prompt('Ar vėluojame į pertrauką?');

/*        Aritmetika
    Veiksmai su duomenimis (pgr. kintamaisiais)

    +       - sudėtis (sum/addition)
    -       - atimtis (subtract)
    *       - daugyba (multiplication)
    /       - dalyba (division)
    **      - kėlimas laipsniu (power)
    **(1/x) - šaknies traukimas (root) (x - šaknies laipsnis)
    %       - liekanos radimas (remainder)


    Visi aritmetiniai veiksmai apart sudėties atliekami tik su skaičiais.

    string+number = string
*/

let sk1 = 5;
let sk2 = 9;
let neSkaicius = '5';
let zodis = 'haha hihi';
let tiesa = true;

console.group('aritmetika');
console.log('5 + 9 =', sk1 + sk2);
console.log('5 - 9 =', sk1 - sk2);
console.log('5 * 9 =', sk1 * sk2);
console.log('5 / 9 =', sk1/sk2);
console.log('5 ** 9 =', sk1**sk2);
console.log('5 ** (1/9) =', sk1**(1/sk2));
console.log('5 % 9 =', sk1%sk2);
console.log('hihi haha + 9 =',zodis+sk2);
console.log('hihi haha * 9 =',zodis*sk2); // NaN (Not a Number)
console.log("'5' + 9 =",neSkaicius+sk2);
console.log("'5' * 9 =",neSkaicius*sk2); // 45
console.groupEnd();