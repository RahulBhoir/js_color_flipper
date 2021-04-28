const colorArray = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'pink', 'silver', 'gold', 'beige', 'brown', 'gray', 'black', 'white'
]

const hexArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
]

// colorBox is use to manipulate colors
const colorBox = document.getElementById('color-box');

// colorBox is use to manipulate color names
const colorName = document.getElementById('color-name');

// getting random numbers from 0 to 15
function getRandomNumber() {
    const colorNumber = parseInt(Math.random() * 16);
    return colorNumber;
}

// getting random simple colors from  the colorArray list
function simpleChangeColor() {
    const colorNumber = getRandomNumber();
    colorBox.style.backgroundColor = colorArray[colorNumber];
    colorName.innerHTML = colorArray[colorNumber];
}

// getting random hex colors
function hexChangeColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexArray[getRandomNumber()];
    }
    colorBox.style.backgroundColor = hexColor;
    colorName.innerText = hexColor;
}


// for changing the onclick function on the flip button from  simple to hex and vice versa

function changeToHex() {
    document.getElementById('flip-btn').onclick = hexChangeColor;
}


function changeToSimple() {
    document.getElementById('flip-btn').onclick = simpleChangeColor;
}