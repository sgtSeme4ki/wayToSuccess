//onclick in html

addEventListeners();


function addItem(e){
    //make position of new Item about 45° away
   
    
    item1 = e.target;
    item2 = createItem();
    item1.removeEventListener("click", addItem);
    var positionStyle = item1.style[0];
    item2.setAttribute("style", `${item1.style[0]}: 15vh`);
    container.appendChild(item2);
    createLine(item1, item2);
    
    /*console.log(item1.childNodes);
    console.log(item2.childNodes);*/
}

function createItem(){
    newNode = document.createElement("div");
    //new Items which belong to one of the three main nodes have to be smaller
    newNode.setAttribute("class", "item");
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
    for(i = 0; i < items.length; i++){
       items.item(i).addEventListener("click", addItem);

    }
}