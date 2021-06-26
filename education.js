const institutions = document.getElementsByClassName('institution');

const educationContent = document.getElementById('education-content');

const educationInitialize = () => {

    for (institution of institutions) {

        const expanded = institution.getElementsByClassName('expanded')[0];
        const arrowContainer = institution.getElementsByClassName('arrow-container')[0];
        const arrow = institution.getElementsByClassName('arrow')[0];

        const institutionInfoHeight = institution.getElementsByClassName('institution-info')[0].scrollHeight.toString();

        institution.style.opacity = '1';
        expanded.style.opacity = '0';
        arrowContainer.style.height = institutionInfoHeight + 'px';
        institution.style.height = institutionInfoHeight + 'px';
        arrow.style.margin = 'calc((' + institutionInfoHeight + 'px - 2.4rem) / 2) auto';
        arrow.style.transform = 'rotate(0deg)';
        arrow.style.borderLeft = '1rem solid black';
        educationContent.style.height = 'auto';

    }

}

const educationReopen = () => {

    for (institution of institutions) {

        const institutionInfoHeight = institution.getElementsByClassName('institution-info')[0].scrollHeight.toString();
        
        institution.style.height = institutionInfoHeight + 'px';
        institution.style.opacity = '1';
        educationContent.style.height = 'auto';

    }

}

const reduceHeight = (h) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(h-2);
        }, 1);
    })
}

const squashContent = async () => {
    let currHeight = educationContent.scrollHeight;
    educationContent.style.height = currHeight + 'px';
    while (currHeight > 0) {
        currHeight = await reduceHeight(currHeight);
        educationContent.style.height = currHeight + 'px';
    }
}

const educationClose = () => {
    for (institution of institutions) {
        institution.style.height = '0';
        institution.style.opacity = '0';

        setTimeout(() => {
            squashContent();
        }, 500);
    }
}

const resetInstitutions = () => {
    for (institution of institutions) {
        const expanded = institution.getElementsByClassName('expanded')[0];
        const arrow = institution.getElementsByClassName('arrow')[0];

        arrow.style.transform = 'rotate(0deg)';
        arrow.style.borderLeft = '1rem solid black';
        expanded.style.opacity = '0';
        institution.style.height = institution.getElementsByClassName('always-up')[0].scrollHeight.toString() + 'px';
    }
}

const highlightArrow = (event) => {
    const institution = event.target.parentElement;
    const expanded = institution.getElementsByClassName('expanded')[0];
    const arrow = institution.getElementsByClassName('arrow')[0];
    if (expanded.style.opacity === '0') {
        arrow.style.borderLeft = '1rem solid white';
    }
}

const unhighlightArrow = (event) => {
    const institution = event.target.parentElement;
    const expanded = institution.getElementsByClassName('expanded')[0];
    const arrow = institution.getElementsByClassName('arrow')[0];
    if (expanded.style.opacity === '0') {
        arrow.style.borderLeft = '1rem solid black';
    }
}

const activateInstitution = (event) => {
    const institution = event.target.parentElement;
    const expanded = institution.getElementsByClassName('expanded')[0];
    const arrow = institution.getElementsByClassName('arrow')[0];
    
    if (expanded.style.opacity === '0') {
        resetInstitutions();
    
        arrow.style.transform = 'rotate(90deg)';
        arrow.style.borderLeft = '1rem solid rgb(161, 120, 185)';
    
        expanded.style.opacity = '1';

        institution.style.height = institution.getElementsByClassName('institution-wrapper')[0].scrollHeight.toString() + 'px';

    }
}

for (institution of institutions) {
    const clickPanel = institution.getElementsByClassName('click-panel')[0];
    clickPanel.addEventListener('mouseenter', highlightArrow, false);
    clickPanel.addEventListener('mouseleave', unhighlightArrow, false)
    clickPanel.addEventListener('click', activateInstitution, false);
}

const resizeInstitutions = () => {
    for (institution of institutions) {
        const arrowContainer = institution.getElementsByClassName('arrow-container')[0];
        const arrow = institution.getElementsByClassName('arrow')[0];

        arrowContainer.style.height = institution.getElementsByClassName('institution-info')[0].scrollHeight.toString() + 'px';
        arrow.style.margin = 'calc((' + institution.getElementsByClassName('institution-info')[0].scrollHeight.toString() + 'px - 2.4rem) / 2) auto';

        if(institution.getElementsByClassName('expanded')[0].style.opacity > 0) {
            institution.style.height = institution.getElementsByClassName('institution-wrapper')[0].scrollHeight.toString() + 'px';
        } else {
            institution.style.height = institution.getElementsByClassName('institution-info')[0].scrollHeight.toString() + 'px';
        }
    }
}

window.addEventListener('resize', resizeInstitutions, false);