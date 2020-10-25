
//create couplingRod for each element
//first to second, second two third until second last to last
let x1, x2, y1, y2 = null;
let html = "";
let svg = document.getElementById("svg1");
let items = document.getElementsByClassName("item");
let cont = document.getElementById("body");

function findPos(obj){
    var curleft = curtop = 0;
    if (obj.offsetParent){
        do{
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    } return [curleft, curtop];
}
//zwischen 1 und 2: ca (47|25) und (70|50)
for(i = 0; i < items.length - 1; i++){
    if(i==0){
        //connect first with last
        
        div0Pos = findPos(items.item(0));
        console.log(div0Pos);
        div1Pos = findPos(items.item(items.length -1));
        console.log(div1Pos);
        html = `<line x1=${div0Pos[1]} y1=${div0Pos[0]} x2=${div1Pos[0]} y2=${div1Pos[1]} stroke="white"/>`;
        svg.innerHTML += html;
        
    }
        div0Pos = findPos(items.item(i));
        console.log(div0Pos);
        div1Pos = findPos(items.item(++i));
        console.log(div1Pos);
        html = `<line x1=${div0Pos[1]} y1=${div0Pos[0]} x2=${div1Pos[0]} y2=${div1Pos[1]} stroke="white"/>`;
        svg.innerHTML += html;
}

/*div0Pos = findPos(items.item(1));
console.log(div0Pos);
div1Pos = findPos(items.item(2));
console.log(div1Pos);
html = `<line x1=${div0Pos[1]} y1=${div0Pos[0]} x2=${div1Pos[0]} y2=${div1Pos[1]} stroke="white"/>`;
svg.innerHTML += html;*/
//last*/