var container = document.querySelector("#container");
var activeItem = null;

var active = false;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

let activeLines = [];
let activePos = [];
let activeIndexes = [];

let newPosX, newPosY = null;

function dragStart(e) {
  //Make SVG and lines undraggable
  if (e.target !== e.currentTarget && e.target !== document.getElementById("svg") && e.target.localName !== "line") {
    active = true;

    // this is the item we are interacting with
    activeItem = e.target;

    if(e.target.getAttribute("class") === "skillNode" || (e.target.tagName == "SPAN")){
      activeItem = e.target.parentNode;
    }

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

    //calculate new middle of activeItem
    newLineX = (activeItem.offsetLeft + (activeItem.clientHeight / 2) + activeItem.currentX);
    newLineY = (activeItem.offsetTop + (activeItem.clientWidth / 2) + activeItem.currentY);

    //linear time complexity, performance probably worsens for bigger i
    for (i = 0; i < activeLines.length; i++) {
      if (activeIndexes[i] === 0) {

        activeLines[i].setAttribute("x1", newLineX);
        activeLines[i].setAttribute("y1", newLineY);
      } else {
        activeLines[i].setAttribute("x2", newLineX);
        activeLines[i].setAttribute("y2", newLineY);
      }
    }

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function getActivePos(activeLines) {
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
      activeY = activeLines[0].getAttribute("y2");
    }
    else {
      activeX = activeLines[0].getAttribute("x2");
      activeY = activeLines[0].getAttribute("y2");
    }
  }
  return [activeX, activeY];
}

function getActiveIndexes(activeLines, activePos) {
  activeIndexes = [];
  for (i = 0; i < activeLines.length; i++) {
    if (activeLines[i].getAttribute("x1") === activePos[0]) {
      activeIndexes.push(0);
    } else {
      activeIndexes.push(1);
    }
  }
  return activeIndexes;
}