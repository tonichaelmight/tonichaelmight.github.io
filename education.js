const institutions = document.getElementsByClassName('institution');

const resetInstitutions = () => {
    for (institution of institutions) {
        const expanded = institution.getElementsByClassName('expanded')[0];
        const arrow = institution.getElementsByClassName('arrow')[0];
        arrow.style.borderLeft = '10px solid black';
        arrow.style.transform = 'rotate(0deg)';
        expanded.hidden = true;
        expanded.style.opacity = '0';
        institution.style.height = institution.getElementsByClassName('always-up')[0].scrollHeight.toString() + 'px';
    }
}

const highlightArrow = (event) => {
    const institution = event.target.parentElement;
    const expanded = institution.getElementsByClassName('expanded')[0];
    const arrow = institution.getElementsByClassName('arrow')[0];
    if (expanded.hidden) {
        arrow.style.borderLeft = '10px solid white';
    }
}

const unhighlightArrow = (event) => {
    const institution = event.target.parentElement;
    const expanded = institution.getElementsByClassName('expanded')[0];
    const arrow = institution.getElementsByClassName('arrow')[0];
    if (expanded.hidden) {
        arrow.style.borderLeft = '10px solid black';
    }
}

const activateInstitution = (event) => {
    const institution = event.target.parentElement;
    const expanded = institution.getElementsByClassName('expanded')[0];
    const arrow = institution.getElementsByClassName('arrow')[0];
    
    if (expanded.hidden) {
        resetInstitutions();
    
        arrow.style.borderLeft = '10px solid white';
        arrow.style.transform = 'rotate(90deg)';

        institution.style.height = institution.scrollHeight.toString() + 'px';
    
        expanded.hidden = false;
        expanded.style.opacity = '1';

        institution.style.height = institution.scrollHeight.toString() + 'px';

    }
}

for (institution of institutions) {
    const clickPanel = institution.getElementsByClassName('click-panel')[0];
    clickPanel.addEventListener('mouseenter', highlightArrow, false);
    clickPanel.addEventListener('mouseleave', unhighlightArrow, false)
    clickPanel.addEventListener('click', activateInstitution, false);
}