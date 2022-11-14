// число (number)
let girls = 4;
let boys = 5;
let gropsQty = 5;
let peopleAtOneTable = 2;
// строка (string)
let strVar =
  "'lkajsdh asdjhflaksdfn asdhflasjhdflasdnfklhasdf f 2i3423aksdasd'";
let strVar2 =
  '"lkajsd"h asdjhflaksd"fn asdhflasjhdfla"sdnfklhasdf f 2i3"423aksdasd';

let strVar3 = `Количество учеников - ${girls + boys} `;
let creatureName = "человек";

// Логический (Boolean)
let boolVar = true;
let boolVar2 = false;

// undefined
let undefVar;

let nullVar = null;

// alert(typeof boolVar)

var peopleQtyInGroup = girls + boys;
// 9

var girlsBoysDiff = girls - boys;
// 1

var peopleQty = peopleQtyInGroup * gropsQty;
// 45

var tablesQty = peopleQty / peopleAtOneTable;
// 22,5

var peoplesLeft = peopleQty % peopleAtOneTable;
// 1

var numVar = peopleQty ** 3;

girls += 1;
boys -= 1;

let girs2 = girls++;
boys--;
alert(girls);
