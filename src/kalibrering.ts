console.log("Its a live!");

/* 1 */
const firstName = "Daniel";
const firstName_ts : string = "Daniel";

console.log(`Mitt förnamn i JS är: ${firstName} och även i TS är: ${firstName_ts}`);

/* 2 */
const numberOne = 666;
const numberTwo = 999;

console.log(`Talet ${numberOne} + ${numberTwo} = ${numberOne+numberTwo}`);

/* 3 */
const randomNumberIPicked: number = 33;
if (randomNumberIPicked > 10){
    console.log("Stort");
} else if (randomNumberIPicked < 10){
    console.log("Litet");
}else {
    console.log("Bulls eye! Both are 10");
}

/* 4 */
for (let i =1; i <= 5; i++){
    console.log(`Rad nummer: ${i}`);
}

/* 5 */
/* Vi tar en fancy IIFE implementerad via en arrow function */
const numberToDouble = 45;
const numberToDouble_ts: number = 65;

const outputDouble = ((tal) => { return tal * 2; })(numberToDouble);
const outputDouble_ts: number = ((tal: number) => { return tal * 2; })(numberToDouble_ts);

console.log(`JS - Talet ${numberToDouble} dubblerat är: ${outputDouble}`);
console.log(`TS - Talet ${numberToDouble_ts} dubblerat är: ${outputDouble_ts}`);