const btns = document.querySelectorAll(".btn")
const equal = document.getElementById("equal")
const clear = document.getElementById("clear")
const grandTotal = document.querySelector(".total")


let calculate = "";

btns.forEach(button=>{
    button.addEventListener("click", function(e){
        let calc = e.target.textContent
        calculate += calc
        grandTotal.innerText = calculate
    })
})

clear.addEventListener("click", function (){
    calculate = ""
    grandTotal.innerText = calculate
} )

equal.addEventListener("click", function (){
    let total= eval(calculate)
    grandTotal.innerText = total
} )

