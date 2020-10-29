var container = document.querySelector("#container");
var activeItem = null;

var active = false;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  //Make SVG and lines undraggable
  if (e.target !== e.currentTarget && e.target !== document.getElementById("svg1") && e.target.localName !== "line") {
    active = true;

    // this is the item we are interacting with
    activeItem = e.target;

    //select Lines which are connected to activeItem
    itemX = activeItem.offsetLeft + (activeItem.clientHeight / 2);
    itemY = activeItem.offsetTop + (activeItem.clientWidth / 2);
    console.log(itemX);
    console.log(itemY);
    lines = document.getElementsByTagName("line");
    if((lines.item(0).x1 === itemX && lines.item(0).y1 === itemY) || (lines.item(0).x2 === itemX && lines.item(0).y2 === itemY)){
      console.log("line 0 selected");
    }
    //console.log(lines.item(0));
    
    

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

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}