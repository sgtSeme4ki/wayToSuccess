var container = document.querySelector("#container");
var activeItem = null;

var active = false;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

var activeLines = [];

function dragStart(e) {
  //Make SVG and lines undraggable
  if (e.target !== e.currentTarget && e.target !== document.getElementById("svg1") && e.target.localName !== "line") {
    active = true;

    // this is the item we are interacting with
    activeItem = e.target;
    let iterator1 = assigned.values();

    
    for (i = 0; i < lines.length; i++) {

      //console.log((iterator1.next().value));
      if (iterator1.next().value.lastIndexOf(activeItem) !== -1) {
        activeLines.push(lines.item(i));
      }
    }
    activePos = getActivePos(activeLines);
    console.log(activePos);

    console.log(activeLines);

    if (activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = 0;
      }

      if (!activeItem.yOffset) {
        activeItem.yOffset = 0;
      }

      if (e.type === "touchstart") {

        activeItem.initialX = e.touches[0].clientX; - activeItem.xOffset;
        activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
      } else {
        activeItem.initialX = e.clientX - activeItem.xOffset;
        activeItem.initialY = e.clientY - activeItem.yOffset;
      }
    }
  }
}

function dragEnd(e) {
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
    activeItem.initialY = activeItem.currentY;
  }

  activeLines = [];
  active = false;
  activeItem = null;
}

function drag(e) {
  if (active) {
    if (e.type === "touchmove") {
      e.preventDefault();

      activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
      activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
    } else {
      activeItem.currentX = e.clientX - activeItem.initialX;
      activeItem.currentY = e.clientY - activeItem.initialY;
    }

    activeItem.xOffset = activeItem.currentX;
    activeItem.yOffset = activeItem.currentY;

    for (i = 0; i < activeLines.length; i++) {
      //choose which x,y of each line to set
      //set it by + activeItem.currentX
    }
    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function getActivePos(activeLines){
//get x1 or x2, depending which is the position of activeItem(can't be chosen directly because of marginal offset of item position)
if (activeLines.length > 1) {
  if (activeLines[0].getAttribute("x1") === activeLines[1].getAttribute("x1")) {
    activeX = activeLines[0].getAttribute("x1")
    activeY = activeLines[0].getAttribute("y1")
  }
  else if (activeLines[0].getAttribute("x1") === activeLines[1].getAttribute("x2")) {
    activeX = activeLines[0].getAttribute("x1");
    activeY = activeLines[0].getAttribute("y1")
  } else if (activeLines[0].getAttribute("x2") === activeLines[1].getAttribute("x1")) {
    activeX = activeLines[0].getAttribute("x2");
    activeX = activeLines[0].getAttribute("y2");
  }
  else {
    activeX = activeLines[0].getAttribute("x2");
    activeY = activeLines[0].getAttribute("y2");
  }
}
return [activeX, activeY];
}