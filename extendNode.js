//onclick in html

addEventListeners();


function showSkill(e){
    console.log("showSkill");
}

function createSkill(){

    newSKill = document.createElement("div");
    //new Items which belong to one of the three main nodes have to be smaller
    newNode.setAttribute("class", "skill");
    newNode.setAttribute("position", "absolute");
    newNode.setAttribute("height", "35px");
    newNode.setAttribute("width", "35px");
    
    return newNode;
}

function createLine(item1, item2){
    newLine = document.createElement("line");

    let x1 = item1.offsetLeft + (item1.clientHeight / 2);
    let y1 = item1.offsetTop + (item1.clientWidth / 2);
    let x2 = item2.offsetLeft + (item2.clientHeight / 2);
    let y2 = item2.offsetTop + (item2.clientWidth / 2);

    newLine.setAttribute("class", "couplingRod");

    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2);

    

    assigned.set(newLine, [item1, item2]);

    svg.appendChild(newLine);

    lines = document.getElementsByTagName("line");
    //necessary to get lines drawn
    svg.innerHTML += "";

}

function addEventListeners(){
    let skillNodes = document.getElementsByClassName("skillNode");
    for(i = 0; i < skillNodes.length; i++){
       skillNodes.item(i).addEventListener("dblclick", showSkill);

    }
}