addEventListeners();

function showSkill(e) {
    if(e.target.getAttribute("class") !== "skillNode"){
        console.log("object is not skillNode");
        return;
    }
    skillNode = e.target;
    newSkill = createSkill("new&nbsp;Skill");

    //offset is either bottom, left or right
    offset = skillNode.parentNode.style[0]
    newSkill.setAttribute("style", `${offset}: 100px`);

    skillNode.appendChild(newSkill);
    skillNode.removeEventListener("dblclick", showSkill);

    newSkill.addEventListener("dblclick", showSkillText);

    skillNode.addEventListener("dblclick", removeSkill);


}

function removeSkill(e) {
    if(e.target.getAttribute("class") !== "skillNode"){
        console.log("object is not skillNode");
        return;
    }
    skillNode = e.target;
    skills = skillNode.children;
    for (i = 0; i < skills.length; i++) {
        console.log(skills.item(i));
        if(skills.item(i).getAttribute("class") === "skill"){
            skills.item(i).remove();
        }
        
    }
    skillNode.addEventListener("dblclick", showSkill);
}

function showSkillText(e) {
    if(e.target.getAttribute("class") !== "skill"){
        console.log("object is not skill");
        return;
    }
    newTextBox = createTextBox("Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua");
    skill = e.target;

    offset = skill.style[0];
    newTextBox.setAttribute("style", `${offset}: 60px`);
    newTextBox.addEventListener("dblclick", removeSkillText);
    skill.removeEventListener("dblclick", showSkillText);
    skill.appendChild(newTextBox);

}

function removeSkillText(e) {
    if(e.target.getAttribute("class") !== "textBox"){
        console.log("object is not textBox");
        return;
    }
    textBox = e.target;
    skill = e.target.parentNode;
    skill.addEventListener("dblclick", showSkillText);
    textBox.remove();
}

function createTextBox(text) {
    newTextBox = document.createElement("div");
    newTextBox.setAttribute("class", "textBox");
    newTextBox.innerHTML += text;

    return newTextBox;
}

function createSkill(skillName) {
    newSkill = document.createElement("div");
    newSkill.setAttribute("class", "skill");
    newSkill.innerHTML += skillName;

    return newSkill;
}

function createLine(item1, item2) {
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

function addEventListeners() {
    let skillNodes = document.getElementsByClassName("skillNode");
    for (i = 0; i < skillNodes.length; i++) {
        skillNodes.item(i).addEventListener("dblclick", showSkill);

    }
}