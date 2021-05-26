const changeTitle = () => {
    document.getElementById('title').innerHTML = 'Pumpkin!';
}

setTimeout(changeTitle, 2000); //2 seconds

const getRandNum = () => {
    return Math.floor(Math.random() * 256);
}

const changeColor = () => {
    console.log('hi');
    document.getElementById('title').style.color = `rgb(
        ${getRandNum()}, 
        ${getRandNum()}, 
        ${getRandNum()})`;
}

setTimeout(changeColor, 4000); //4 seconds