
//create couplingRod for each element
//first to second, second two third until second last to last

var items = document.getElementsByClassName("item");
let cont = document.getElementById("container");
let svg = document.getElementById("svg1");
var assigned = new Map(); //assign item to line

//only works for 3 items
for (i = 0; i < items.length - 1; i++) {
    if (i === 0) {
        //append first with last
        let line = document.createElement("line");
        line.className = "couplingRod";

        let x1 = items.item(0).offsetLeft + (items.item(0).clientHeight / 2);
        let y1 = items.item(0).offsetTop + (items.item(0).clientWidth / 2);
        let x2 = items.item(items.length - 1).offsetLeft + (items.item(items.length - 1).clientHeight / 2);
        let y2 = items.item(items.length - 1).offsetTop + (items.item(items.length - 1).clientWidth / 2);

        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);

        assigned.set(line, [items.item(0), items.item(items.length - 1)]);
        //assigned.set(items.item(0), [line], items.item(items.length - 1), [line]);

        repl = line.outerHTML.replace("></line>", "/>");
        svg.appendChild(line);
        //console.log(repl);
        //svg.innerHTML += repl;
    }
    // append rest with rest
    let line = document.createElement("line");
    line.className = "couplingRod";

    let x1 = items.item(i).offsetLeft + (items.item(i).clientHeight / 2);
    let y1 = items.item(i).offsetTop + (items.item(i).clientWidth / 2);
    let x2 = items.item(i + 1).offsetLeft + (items.item(i + 1).clientHeight / 2);
    let y2 = items.item(i + 1).offsetTop + (items.item(i + 1).clientWidth / 2);
    // console.log(i);

    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);

    assigned.set(line, [items.item(i), items.item(i + 1)]);
    //assigned.get(line).push()
    svg.appendChild(line);
}
var lines = document.getElementsByTagName("line");
//necessary to get lines drawn
svg.innerHTML += "";

console.log(assigned);


/*container.addEventListener("dragStart");
container.addEventListener("dragEnd", dragEnd, false);
container.addEventListener("drag", drag, false);*/
// with eventlistner? callbacks | if position is

//TODO: Write Code for arbitrary amount of nodes
//TODO: Update couplingRods with Position of item

//1: listen for movement of item
//2: while item is dragged: get all lines which have x1|y1 or x2|y2 as middle position of item
//3: update position of line(translate? | setAttribute?)