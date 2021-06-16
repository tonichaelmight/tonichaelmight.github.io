const workObj = {el: document.getElementById('work'), active: false};
const educationObj = {el: document.getElementById('education'), active: false};
const skillsObj = {el: document.getElementById('skills'), active: false};
const bioObj = {el: document.getElementById('bio'), active: false};

// make this an object
const tabs = {
    work: workObj, 
    education: educationObj, 
    skills: skillsObj, 
    bio: bioObj
};

const clear = () => {

    for (tab in tabs) {
        tabs[tab].el.style.color = 'black';
        tabs[tab].el.style.textShadow = '0 0 0 rgb(70, 70, 70)';
        tabs[tab].active = false;
    }
    
};

const highlight = (event) => {
    if (tabs[event.target.id].active) {
        return;
    }

    event.target.style.color = 'rgb(229, 229, 229)';
    event.target.style.textShadow = '2px 2px 0 rgb(70, 70, 70)';
}

const unhighlight = (event) => {
    if (tabs[event.target.id].active) {
        return;
    }

    event.target.style.color = 'black';
    event.target.style.textShadow = '0 0 0 rgb(70, 70, 70)';
} 

const activate = (event) => {
    clear();

    event.target.style.color = 'rgb(227, 152, 255)';
    event.target.style.textShadow = '2px 2px 3px rgb(70, 70, 70)';
    tabs[event.target.id].active = true;
}

for (tab in tabs) {
    tabs[tab].el.addEventListener('mouseover', highlight, false);
    tabs[tab].el.addEventListener('mouseout', unhighlight, false);
    tabs[tab].el.addEventListener('click', activate, false);
}