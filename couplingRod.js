
//create couplingRod for each element
//first to second, second two third until second last to last

let items = document.getElementsByClassName("item");
let cont = document.getElementById("container");
let svg = document.getElementById("svg1");

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

        repl = line.outerHTML.replace("></line>", "/>");
        console.log(repl);
        svg.innerHTML += repl;
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

    //convert explicit tags to selfclosing tags because of SVG 
    repl = line.outerHTML.replace("></line>", "/>");
    svg.innerHTML += repl;
    
}
