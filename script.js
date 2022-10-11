var price = document.getElementById("Price")
var down = document.getElementById("Down")
var installment = document.getElementById("installment")
var interest = document.getElementById("interest")
var inputs = document.querySelectorAll(".input")
var total = document.getElementById("total")
// Array.from(inputs)

function calc() {
    var sum
    var interestNum
    if (interest.value == 0) {
        sum = (price.value - down.value)  / installment.value
        
    } else {
        interestNum = ((price.value - down.value) / 100 * interest.value)
        sum = (price.value - down.value + interestNum)  / installment.value
    }

    total.innerHTML =  `${sum.toFixed(2)} <span>LE/mo</span>`
}

// for (var i = 0; i <= 4; i++) {
//     inputs[i].addEventListener("input", () => {
//         console.log("like")
//     })
// }


inputs.forEach((e) => {
    e.addEventListener("input", () => {
        calc()
    })
})

// console.log(inputs)