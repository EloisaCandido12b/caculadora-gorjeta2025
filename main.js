let bill = 0
let tipPorcentage = 0
let numberofPeople = 0

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber

    console.log(numberofPeople)
}