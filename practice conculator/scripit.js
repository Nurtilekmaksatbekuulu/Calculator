

let num1 = document.getElementById('num1')
let num2  = document.getElementById("num2")

const plus = () =>{

let koshu = parseInt(num1.value) + parseInt (num2.value)
document.getElementById("result").innerHTML = koshu
}
let clic = ()=>{
    let koboitu = parseInt(num1.value) * parseInt (num2.value)
    document.getElementById("result").innerHTML = koboitu
}
let add = ()=>{
    let bolu = parseInt(num1.value) / parseInt (num2.value)
    document.getElementById("result").innerHTML = bolu    
}
let clickMy = ()=>{
    let kemitu = parseInt(num1.value) - parseInt (num2.value)
    document.getElementById("result").innerHTML = kemitu
    
}
