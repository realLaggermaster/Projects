document.querySelector('#Addition').onclick = AdditionCalculation;
document.querySelector('#Subtract').onclick = SubratcionCalculation;
document.querySelector('#Division').onclick = DivisionCalculation;
document.querySelector('#Multiplication').onclick = MultiplicationCalculation;
document.querySelector('#randomNumb').onclick = RandomNumberGenerator;

async function AdditionCalculation() {

    const FirstNumber = document.querySelector('#FirstNumber').value;
    const SecondNumber = document.querySelector('#SecondNumber').value;

    if (isNaN(FirstNumber) || isNaN(SecondNumber)) {
        window.alert('Dont use letters and characters.')
    } else {
        calculation = (Number(FirstNumber) + Number(SecondNumber));
        window.alert('Answer: '+calculation);
    }
}

async function SubratcionCalculation() {

    const FirstNumber = document.querySelector('#FirstNumber').value;
    const SecondNumber = document.querySelector('#SecondNumber').value;

    if (isNaN(FirstNumber) || isNaN(SecondNumber)) {
        window.alert('Dont use letters and characters.')
    } else {
        calculation = (Number(FirstNumber) - Number(SecondNumber));
        window.alert('Answer: '+calculation);
    }
}

async function DivisionCalculation() {

    const FirstNumber = document.querySelector('#FirstNumber').value;
    const SecondNumber = document.querySelector('#SecondNumber').value;

    if (isNaN(FirstNumber) || isNaN(SecondNumber)) {
        window.alert('Dont use letters and characters.')
    } else {
        calculation = (Number(FirstNumber) / Number(SecondNumber));
        window.alert('Answer: '+calculation);
    }
}

async function MultiplicationCalculation() {

    const FirstNumber = document.querySelector('#FirstNumber').value;
    const SecondNumber = document.querySelector('#SecondNumber').value;

    if (isNaN(FirstNumber) || isNaN(SecondNumber)) {
        window.alert('Dont use letters and characters.')
    } else {
        calculation = (Number(FirstNumber) * Number(SecondNumber));
        window.alert('Answer: '+calculation);
    }
}

async function RandomNumberGenerator() {
    const RandomNum = Math.floor(Math.random() * 1000) + 1;
    window.alert(RandomNum);
}

