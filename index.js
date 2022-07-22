
const bmiCalculateButton = document.getElementById("bmi-confirm");
const underWeight = document.getElementById("underweight");
const normalWeight = document.getElementById("normalweight");
const overWeight = document.getElementById("overweight");
const obesity = document.getElementById("obesity");

let userHeight = document.getElementById("height");
let userWeight = document.getElementById("weight");
let bmiResult = document.getElementById("BMI");

function turnOnObesity() {
    showTheResult(obesity);
    hideTheResult(overWeight);
    hideTheResult(normalWeight);
    hideTheResult(underWeight);
}
function turnOnOverWeight() {
    hideTheResult(obesity);
    showTheResult(overWeight);
    hideTheResult(normalWeight);
    hideTheResult(underWeight);
}
function turnOnNormalWeight() {
    hideTheResult(obesity);
    hideTheResult(overWeight);
    showTheResult(normalWeight);
    hideTheResult(underWeight);
}
function turnOnUnderWeight() {
    hideTheResult(obesity);
    hideTheResult(overWeight);
    hideTheResult(normalWeight);
    showTheResult(underWeight);
}

function showTheResult(a) {
    a.style.display = 'block';
}

function hideTheResult(a) {
    a.style.display = 'none';
}


function calculateBmi(height, weight) {
    let bmiResult = weight / (Math.pow(height / 100, 2));
    // console.log(`bmi result value = ${bmiResult}`)
    document.getElementById("bmi").value = Math.round(bmiResult);
    if (bmiResult >= 30) {
        turnOnObesity();
    } else if (bmiResult >= 25 && bmiResult < 30) {
        turnOnOverWeight();
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
        turnOnNormalWeight();
    } else if (bmiResult < 18.5) {
        turnOnUnderWeight();
    }
};

const defineValues = () => {
    let userHeight = document.getElementById("height");
    let userWeight = document.getElementById("weight");
    calculateBmi(userHeight.value, userWeight.value);
    
}

function activateOnChange(element) {
    element.addEventListener('change', defineValues);
}

function activateOnInput(element) {
    element.addEventListener('input', defineValues);
}

// bmiCalculateButton.addEventListener('click', defineValues)
activateOnChange(userHeight);
activateOnChange(userWeight);
activateOnInput(userHeight);
activateOnInput(userWeight);

