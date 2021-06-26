const workObj = {
    el: document.getElementById('work'),
    content: document.getElementById('work-content'),
    initialized: false
};

const educationObj = {
    el: document.getElementById('education'),
    content: document.getElementById('education-content'),
    initialized: false
};

const skillsObj = {
    el: document.getElementById('skills'),
    content: document.getElementById('skills-content'),
    initialized: false
};

const bioObj = {
    el: document.getElementById('bio'),
    content: document.getElementById('bio-content'),
    initialized: false
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

    if (currentTab) {
        tabs[currentTab].el.style.color = 'black';
        tabs[currentTab].el.style.textShadow = '0 0 0 rgb(70, 70, 70)';
        tabs[currentTab].active = false;  

        try {
            eval(currentTab + 'Close();');
        } catch(e) {
            console.log('ope');
        }
        
    }

    event.target.style.color = 'rgb(227, 152, 255)';
    event.target.style.textShadow = '2px 2px 3px rgb(36, 36, 36)';
    currentTab = event.target.id;
    content.style.height = 'auto';

    if (!tabs[event.target.id].initialized) {
        try {
            eval(event.target.id + 'Initialize();');
        } catch(e) {
            console.log('oop');
        }
        
        tabs[event.target.id].initialized = true;
    } else {
        try {
            eval(event.target.id + 'Reopen();');
        } catch(e) {
            console.log('oop');
        }
    }
    
}

for (tab in tabs) {
    tabs[tab].el.addEventListener('mouseover', highlightTab, false);
    tabs[tab].el.addEventListener('mouseout', unhighlightTab, false);
    tabs[tab].el.addEventListener('click', activateTab, false);
}