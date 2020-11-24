function drawLinesSkills(){
    svg = document.getElementById("svg");
    skillNodes = document.getElementsByClassName("wrapper");
    for(i = 0; i < skillNodes.length; i++){
        skills = skillNodes[i].getElementsByClassName("skill");

        skillNodeX = skillNodes[i].offsetLeft + (skillNodes[i].clientHeight / 2);
        skillNodeY = skillNodes[i].offsetTop + (skillNodes[i].clientWidth / 2);

        for(j = 0; j < skills.length; j++){

            if(skills[j].style[0]) offset0 = skills[j].style[0]
            else {offset0 = 0;}
            if(skills[j].style[1]) offset1 = skills[j].style[1];
            else {offset1 = 0;}

            rect = skills[j].getBoundingClientRect();
            console.log(rect);
            skillX = rect.x + (rect.width/2);
            skillY = rect.y + (rect.height/2);
            //skillX = skillNodeX + skills[j].offsetLeft;
            //skillY = skillNodeX + skills[j].offsetTop;
            
            //get way to calculate position right
            //skillX = Math.abs(skills[j].offsetLeft  + (skills[j].clientHeight / 2));
            //skillY = Math.abs(skills[j].offsetTop + (skills[j].clientWidth / 2));



            line = document.createElement("line");
            line.className = "couplingRod";

            line.setAttribute("x1", skillNodeX);
            line.setAttribute("y1", skillNodeY);
            line.setAttribute("x2", skillX);
            line.setAttribute("y2", skillY);

            svg.appendChild(line);
        }

    }
    svg.innerHTML += "";
}
drawLinesSkills();