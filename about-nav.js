const workObj = {
    el: document.getElementById('work'),
    content: document.getElementById('work-content')
};

const educationObj = {
    el: document.getElementById('education'),
    content: document.getElementById('education-content')
};

const skillsObj = {
    el: document.getElementById('skills'),
    content: document.getElementById('skills-content')
};

const bioObj = {
    el: document.getElementById('bio'),
    content: document.getElementById('bio-content')
};


// tabs object
const tabs = {
    work: workObj, 
    education: educationObj, 
    skills: skillsObj, 
    bio: bioObj
};

let currentTab;

const content = document.getElementById('content');

// reset all to default
const clearTabs = () => {

    for (tab in tabs) {
        tabs[tab].el.style.color = 'black';
        tabs[tab].el.style.textShadow = '0 0 0 rgb(70, 70, 70)';
        tabs[tab].active = false;
        tabs[tab].content.hidden = true;
    }
    
};

const highlightTab = (event) => {
    if (currentTab === event.target.id) {
        return;
    }

    event.target.style.color = 'rgb(229, 229, 229)';
    event.target.style.textShadow = '2px 2px 0 rgb(36, 36, 36)';
}

const unhighlightTab = (event) => {
    if (currentTab === event.target.id) {
        return;
    }

    event.target.style.color = 'black';
    event.target.style.textShadow = '0 0 0 rgb(70, 70, 70)';
} 

const activateTab = (event) => {
    clearTabs();

    console.log(document.getElementById(event.target.id + '-content'));

    event.target.style.color = 'rgb(227, 152, 255)';
    event.target.style.textShadow = '2px 2px 3px rgb(36, 36, 36)';
    document.getElementById(event.target.id + '-content').hidden = false;
    currentTab = event.target.id;
    content.style.height = 'auto';
    eval(event.target.id + 'Initialize()');
}

for (tab in tabs) {
    tabs[tab].el.addEventListener('mouseover', highlightTab, false);
    tabs[tab].el.addEventListener('mouseout', unhighlightTab, false);
    tabs[tab].el.addEventListener('click', activateTab, false);
}