const workObj = {
    el: document.getElementById('work'), 
    active: false, 
    text: ''
};

const educationObj = {
    el: document.getElementById('education'), 
    active: false, 
    text: ''
};

const skillsObj = {
    el: document.getElementById('skills'), 
    active: false, 
    text: ''
};

const bioObj = {
    el: document.getElementById('bio'), 
    active: false, 
    text: '<p>My name is Michael. I am a 26-year old aspiring programmer from Central Virginia.</p>'
};


// tabs object
const tabs = {
    work: workObj, 
    education: educationObj, 
    skills: skillsObj, 
    bio: bioObj
};

const content = document.getElementById('content');

// reset all to default
const clearTabs = () => {

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
    event.target.style.textShadow = '2px 2px 0 rgb(36, 36, 36)';
}

const unhighlight = (event) => {
    if (tabs[event.target.id].active) {
        return;
    }

    event.target.style.color = 'black';
    event.target.style.textShadow = '0 0 0 rgb(70, 70, 70)';
} 

const activateTab = (event) => {
    clearTabs();

    event.target.style.color = 'rgb(227, 152, 255)';
    event.target.style.textShadow = '2px 2px 3px rgb(36, 36, 36)';
    content.innerHTML = tabs[event.target.id].text;
    tabs[event.target.id].active = true;
}

for (tab in tabs) {
    tabs[tab].el.addEventListener('mouseover', highlight, false);
    tabs[tab].el.addEventListener('mouseout', unhighlight, false);
    tabs[tab].el.addEventListener('click', activateTab, false);
}