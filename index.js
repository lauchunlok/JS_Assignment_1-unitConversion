let lengthCoverter = document.getElementById("length")
let volumeConverter = document.getElementById("volume")
let massConverter = document.getElementById("mass")

let userInput = prompt("Please enter a number", 20)

document.getElementById("input").textContent = userInput
//let userInput = document.getElementById("input").textContent

let meterToFeet = (userInput*3.28084).toFixed(3)
let feetToMeter = (userInput/3.28084).toFixed(3)

let literToGallon = (userInput/3.785411784).toFixed(3)
let gallonToLiter = (userInput*3.785411784).toFixed(3)

let kiloToPound = (userInput*2.20462).toFixed(3)
let poundToKilo = (userInput/2.20462).toFixed(3)


lengthCoverter.textContent = userInput + " meters = " + meterToFeet + " feet | " + userInput + " feet = " + feetToMeter + " meters"

volumeConverter.textContent = userInput + " liters = " + literToGallon + " gallons | " + userInput + " gallons = " + gallonToLiter + " liters"

massConverter.textContent = userInput + " kilos = " + kiloToPound + " pounds | " + userInput + " pounds = " + poundToKilo + " kils"


