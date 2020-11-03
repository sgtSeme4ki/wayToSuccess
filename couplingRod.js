
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
    }
    // append rest with rest
    let line = document.createElement("line");
    line.className = "couplingRod";

    let x1 = items.item(i).offsetLeft + (items.item(i).clientHeight / 2);
    let y1 = items.item(i).offsetTop + (items.item(i).clientWidth / 2);
    let x2 = items.item(i + 1).offsetLeft + (items.item(i + 1).clientHeight / 2);
    let y2 = items.item(i + 1).offsetTop + (items.item(i + 1).clientWidth / 2);

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

window.addEventListener("resize", redraw, false);


//div3 950/434

function redraw(e) {

    assigned = new Map();
    lines = null;

    while (svg.firstChild) {
        svg.removeChild(svg.lastChild);
    }

    for (i = 0; i < items.length - 1; i++) {
        if (i === 0) {
            //append first with last
            let line = document.createElement("line");
            line.className = "couplingRod";

            let x1 = items.item(0).offsetLeft + (items.item(0).clientHeight / 2);
            let y1 = items.item(0).offsetTop + (items.item(0).clientWidth / 2);
            let x2 = items.item(items.length - 1).offsetLeft + (items.item(items.length - 1).clientHeight / 2);
            let y2 = items.item(items.length - 1).offsetTop + (items.item(items.length - 1).clientWidth / 2);

            test = items.item(0).getAttribute("style");
            match = test.match(/-?\d+/g).map(Number);


            if (match.length > 2) {
                
                x1offset = match[2];
                y1offset = match[3];

                x1 = x1 + x1offset;
                y1 = y1 + y1offset;
            }

            test = items.item(items.length - 1).getAttribute("style");
            match = test.match(/-?\d+/g).map(Number);


            if (match.length > 2) {

                x2offset = match[2];
                y2offset = match[3];

                x2 = (x2 + x2offset);
                y2 = (y2 + y2offset);

            }
            

            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);

            assigned.set(line, [items.item(0), items.item(items.length - 1)]);
            //assigned.set(items.item(0), [line], items.item(items.length - 1), [line]);

            repl = line.outerHTML.replace("></line>", "/>");
            svg.appendChild(line);
        }
        // append rest with rest
        let line = document.createElement("line");
        line.className = "couplingRod";

        let x1 = items.item(i).offsetLeft + (items.item(i).clientHeight / 2);
        let y1 = items.item(i).offsetTop + (items.item(i).clientWidth / 2);
        let x2 = items.item(i + 1).offsetLeft + (items.item(i + 1).clientHeight / 2);
        let y2 = items.item(i + 1).offsetTop + (items.item(i + 1).clientWidth / 2);
        console.log(x1);

        test = items.item(i).getAttribute("style");
        match = test.match(/-?\d+/g).map(Number);


        if (match.length > 2) {
            x1offset = match[2];
            y1offset = match[3];

            x1 = x1 + x1offset;
            y1 = y1 + y1offset;
        }

        test = items.item(i + 1).getAttribute("style");
        match = test.match(/-?\d+/g).map(Number);


        if (match.length > 2) {
            x2offset = match[2];
            y2offset = match[3];

            x2 = x2 + x2offset;
            y2 = y2 + y2offset;

        }

        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);

        assigned.set(line, [items.item(i), items.item(i + 1)]);
        //assigned.get(line).push()
        svg.appendChild(line);
    }
    lines = document.getElementsByTagName("line");
    //necessary to get lines drawn
    svg.innerHTML += "";



}
