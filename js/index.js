console.log("Exercise One")

var firstName = "Brilu"
var surname = "Kim"
let age = 18 
const subject = "Development"

console.log(firstName)
console.log(surname)
console.log(age)
console.log(subject)

console.log("Hello, my name is " + firstName + " " + surname + " I am " + age + " years old and I am studying " + subject )

console.log("Exercise Two")

let numOne = 3
let numTwo = 5 
let numThree = 8 
let numFour = 0 

let teamTotal = numOne + numTwo 
let victory = numOne + numTwo / numThree
let total = victory * numFour

let answer = total

console.log(answer)

console.log("Exercise Three")

let Timmy = 15
let Susan = 26 

let num = Timmy + Susan 

function formatAsPercentage(num) {
    return new Intl.NumberFormat('default', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num/100);
}

console.log(formatAsPercentage(num))

var secondName = "Timmy"
var thirdName = "Susan" 

let timmypercentage = secondName * 15/100 
let susanpercentage = thirdName * 26/100 

console.log( "The Taxman will claim " + timmypercentage + susanpercentage + " from Susan and Timmy ")

console.log("Exercise Four")

var John = "num1"
var Tim = "num2"
var Alfie = "num3"
var Gwen = "num4"

let average = John + Tim + Alfie + Gwen / 4 * 100 

console.log(average)
console.log("The students average is " + average + " /100")

let num1 = num1 + 7 
let num2 = num2+ 7 
let num3 = num3 + 7 
let num4 = num4 + 7 


let value = num1 + num2 + num3 + num4 / 4 * 100 

console.log(value)
console.log("The students updated average is " + value + " /100 ")

