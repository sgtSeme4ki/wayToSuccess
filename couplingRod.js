
//create couplingRod for each element
//first to second, second two third until second last to last

let items = document.getElementsByClassName("item");
let cont = document.getElementById("container");
let svg = document.getElementById("svg1");

let line = document.createElement("line");
line.className = "couplingRod";


function findPos(obj){
    var curleft = curtop = 0;
    if (obj.offsetParent){
        do{
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    } return [curleft, curtop];
}

let x1 = items.item(0).offsetLeft + (items.item(0).clientHeight/2);
console.log(x1);
let y1 = items.item(0).offsetTop + (items.item(0).clientWidth/2);
let x2 = items.item(1).offsetLeft + (items.item(1).clientHeight/2);
let y2 = items.item(1).offsetTop + (items.item(1).clientWidth/2);

line.setAttribute("x1", x1);
line.setAttribute("y1", y1);
line.setAttribute("x2", x2);
line.setAttribute("y2", y2);

svg.appendChild(line);