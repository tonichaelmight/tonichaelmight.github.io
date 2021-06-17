const institutions = document.getElementsByClassName('institution');

const clearInstitutions = () => {
    for (institution of institutions) {
        const expanded = institution.getElementsByClassName('expanded')[0];
        console.log(expanded);
        expanded.hidden = true;
    }
}

const activateInstitution = (event) => {
    clearInstitutions();
    const expanded = event.target.parentElement.parentElement.getElementsByClassName('expanded')[0];
    expanded.hidden = false;
}

for (institution of institutions) {
    const arrow = institution.getElementsByClassName('arrow')[0];
    arrow.addEventListener('click', activateInstitution, false);
}