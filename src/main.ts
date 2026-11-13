import "./kalibrering";
// Dag 1: Variabler, typer och villkor. Följ README.md steg för steg.
// Resultatet syns i Console (F12). Spara, så laddas sidan om av sig själv.
// Röda understrykningar i VS Code är TypeScript som varnar. Håll musen över dem och läs.

// STEG 1 ------------------------------------------------------------
// TODO: skriv ut texten "Hej från Kafé Kardemumma" med console.log
console.log("Hej från Kafe Kardemumma!!!");

// STEG 2 ------------------------------------------------------------
// TODO: skapa konstanten kafeNamn (string) med värdet "Kafé Kardemumma"
// TODO: skapa konstanterna prisBulle (number, 35) och prisKaffe (number, 32)
// TODO: skapa variablerna antalBullar (2) och antalKaffe (1) med let, båda number
// TODO: skriv ut kafeNamn
//       Skriv typen själv, till exempel:  const kafeNamn: string = "..."
const kafeNamn : string = "Kafé Kardemumma";
const prisBulle: number = 35;
const prisKaffe: number = 32;
let antalBullar: number = 2;
let antalKaffe: number = 1;
console.log(kafeNamn);

// STEG 3 ------------------------------------------------------------
// TODO: skapa en string, ett number, en boolean, en undefined och en null
//       Typerna heter string, number, boolean, undefined och null
// TODO: skriv ut typeof för alla fem på en rad (tips: separera med komma)
// TODO: prova att ge number-variabeln en text. Vad säger TypeScript?
let fooText: string = "Hoppande kor";
let fooCount: number = 4;
let fooIsCorrect: boolean = false;
let fooWierd: undefined = undefined;
let fooVoid: null = null;
console.log(`${fooCount} ${fooText} är ett påstpående som är både ${fooIsCorrect} och ${fooWierd}`);
// typeof av ett null datatyp är object (tittade på dina slides...INNAN :D )
console.log(`fooText är ${typeof fooText} - fooCount är ${typeof fooCount} - fooIsCorrect är ${typeof fooIsCorrect} - fooWierd är ${typeof fooWierd} - fooVoid är ${typeof fooVoid}`)

// STEG 4 ------------------------------------------------------------
// TODO: räkna ut summa = antalBullar * prisBulle + antalKaffe * prisKaffe
// TODO: räkna ut momsDel (12 % ingår i priset): summa * 0.12 / 1.12
// TODO: skriv ut "Summa: ... kr" och "Varav moms (12 %): ... kr"
//       Moms ska ha två decimaler (toFixed(2))
//       Håll musen över momsDel.toFixed(2). Vilken typ ger toFixed?
let summa: number = (antalBullar * prisBulle) + (antalKaffe * prisKaffe);
let momsDel: number = (summa * (0.12 / 1.12));
let avrundandMomsDel: string = momsDel.toFixed(2);
console.log(`Summa: ${summa} kr och Varav moms (12%): ${avrundandMomsDel} kr`);

// STEG 5 ------------------------------------------------------------
// TODO: skapa ärStudent (boolean, true). Om ärStudent är true: rabatt 10 %.
// TODO: räkna ut attBetala (number) och skriv ut "Att betala: ... kr"
let isStudent: boolean = true;
if (isStudent === true){                // <- Lite onödigt att jämföra med true eftersom isStudent alltid är true eller false
    let studentPris: number = summa * 0.9;
    let studentMomsDel: number = momsDel * 0.9;
    let avrundandstudentMomsDel: string = studentMomsDel.toFixed(2);
    console.log(`Grattis, du kan utnjytta din 10% rabatt-del som student!`);
    console.log(`Att betala: ${studentPris} kr varav moms (12%): ${avrundandstudentMomsDel} kr`);
}


// STEG 6 ------------------------------------------------------------
// TODO: skapa veckodag (string, "lördag") och klockslag (number, 15)
// TODO: avgör om kaféet är öppet (boolean): vardagar 7–18, helger 9–16
// TODO: skriv ut "Öppet just nu: ja" eller "Öppet just nu: nej"
const validWeekDays = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"];
const fictionalWeekDay: string = validWeekDays[4];
const fictionalhour: number = 18;

let isOpen: boolean = false;
if (
  (fictionalWeekDay === "måndag" ||
    fictionalWeekDay === "tisdag" ||
    fictionalWeekDay === "onsdag" ||
    fictionalWeekDay === "torsdag" ||
    fictionalWeekDay === "fredag") &&
  (fictionalhour >= 7 && fictionalhour <= 18)){
    isOpen = true;
} else if (
  ( fictionalWeekDay === "lördag" ||
    fictionalWeekDay === "söndag") &&
  (fictionalhour >= 9 && fictionalhour <= 16)) {
  isOpen = true;
} else {
    isOpen = false;
}

console.log(`Öppet just nu: ${ isOpen ? "ja" : "nej" }`);

// STEG 7 ------------------------------------------------------------
// TODO: se README. Gissa först, kör sedan.
//Mina gissningar
//UTTRYCK               Min gissing       Det som hände     Vad sa TypeScript?                  Hade jag rätt                 Resonera
//"5" + 3               "53"              53                OK                                  JA                            + ger string addtion
//"5" - 3               2                 2                 IDE klaga, warning                  NJaaaa - output stämmde       + ger number addtion
//true + 1              2                 2                 IDE klaga, warning                  NJaaaa - output stämmde       gissade att true convertera till number 1
// 0.1+0.1              0.2               0.2               OK                                  Ja                            Vanlig matematik
//"" === 0              false             false             IDE klaga, warning                  NJaaaa - output stämmde       Tom sträng är inte nummer 0
// null == undefined    IDE klagar        true              OK                                  Nej...wierd                   Lotto gissning

console.log(`Gissnigsleken`);
//console.log("5" + 3);
//console.log("5" - 3 );
//console.log(true + 1);
//console.log(0.1+0.1 );
//console.log("" === 0 );
console.log(null == undefined); 
