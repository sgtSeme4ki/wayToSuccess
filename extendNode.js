//addEventListenersDefault();
addEventListenersSpecific();

let addFunctions = { addSkillsTech: addSkillsTech, addSkillsSoft: addSkillsSoft, addSkillsWerdegang: addSkillsWerdegang };

function showSkill(e) {
    if (e.target.getAttribute("class") !== "skillNode") {
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

    skillNode.addEventListener("dblclick", removeSkills);


}

function removeSkills(e) {
    console.log("removeSkills was called");
    if (e.target.getAttribute("class") !== "skillNode") {
        console.log("object is not skillNode");
        return;
    }
    skillNode = e.target;
    skills = skillNode.children;
    for (i = skills.length - 1; i >= 0; i--) {
        if (skills.item(i).getAttribute("class") === "skill") {
            skills.item(i).remove();;
        }
    }
    skillNode.removeEventListener("dblclick", removeSkills);
    functionName = "addSkills" + skillNode.id.split(" ")[0];
    console.log(functionName);
    skillNode.addEventListener("dblclick", addFunctions[functionName]);
}

function showSkillText(e) {
    if (e.target.getAttribute("class") !== "skill") {
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
    if (e.target.getAttribute("class") !== "textBox") {
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

function addEventListenersDefault() {
    skillNodes = document.getElementsByClassName("skillNode");
    for (let i = 0; i < skillNodes.length; i++) {
        skillNodes.item(i).addEventListener("dblclick", showSkill);

    }
}

function addEventListenersSpecific() {
    skillNodes = document.getElementsByClassName("skillNode");
    skillNodes.item(0).addEventListener("dblclick", addSkillsTech);
    skillNodes.item(1).addEventListener("dblclick", addSkillsSoft);
    skillNodes.item(2).addEventListener("dblclick", addSkillsWerdegang);
}

function showSkills(skillNode, skills) {
    skillSize = skillNode.getAttribute("skills");
    offset0 = skillNode.parentNode.style[0];
    //offset1, offset2;
    //set spacing of skills
    if (offset0 === "bottom" || offset0 === "top") {
        offset1 = "right";
        offset2 = "left";
    } else {
        offset1 = "bottom";
        offset2 = "top";
    }
    pixel = 0;
    for (let i = 0; i < skillSize; i++) {
        if ((i % 3) == 0) {
            pixel = pixel + 150;
        }
        if ((i % 3) == 1) {
            skills[i].setAttribute("style", `${offset0}: ${pixel}px; ${offset1}: ${pixel}px;`);
        } else if ((i % 3) == 2) {
            skills[i].setAttribute("style", `${offset0}: ${pixel}px; ${offset2}: ${pixel}px;`);
        } else {
            skills[i].setAttribute("style", `${offset0}: ${pixel}px;`);
        }
        skills[i].addEventListener("dblclick", showSkillText);
        skillNode.addEventListener("dblclick", removeSkills);
        skillNode.appendChild(skills[i]);
        skillNode.removeEventListener("dblclick", showSkills);


    }
}

function addSkillsWerdegang(e) {
    if (e.target.getAttribute("id") !== "Werdegang") {
        console.log("object is not Werdegang");
        return;
    }
    werdegang = document.getElementById("Werdegang");
    skill1 = createSkill("Abitur");
    skill2 = createSkill("Studium");
    skills = [skill1, skill2];
    showSkills(werdegang, skills);
    werdegang.removeEventListener("dblclick", addSkillsWerdegang);
}

function addSkillsTech(e) {
    if (e.target.getAttribute("id") !== "Tech Skills") {
        console.log("object is not Tech Skills");
        return;
    }
    tech = document.getElementById("Tech Skills");
    skill1 = createSkill("Java");
    skill2 = createSkill("JavaScript/HTML/CSS");
    skill3 = createSkill("SQL");
    skill4 = createSkill("Betriebssysteme");
    skill5 = createSkill("Netzwerke");
    skill6 = createSkill("Datenstrukturen");
    skills = [skill1, skill2, skill3, skill4, skill5, skill6];
    tech.setAttribute("skills", skills.length);
    showSkills(tech, skills);
    //TODO: make dblclick responsive
    tech.removeEventListener("dblclick", addSkillsTech);
}

function addSkillsSoft(e) {
    if (e.target.getAttribute("id") !== "Soft Skills") {
        console.log("object is not Soft Skills");
        return;
    }
    soft = document.getElementById("Soft Skills");
    skill1 = createSkill("Kommunikation");
    skill2 = createSkill("Selbstständig");
    skill3 = createSkill("Auffassungsgabe");
    skill4 = createSkill("Teamplayer");
    skills = [skill1, skill2, skill3, skill4];
    soft.setAttribute("skills", skills.length);
    showSkills(soft, skills);
    soft.removeEventListener("dblclick", addSkillsSoft);
}