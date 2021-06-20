const num1 = document.querySelector('#first')
const num2 = document.querySelector('#second')
const output = document.querySelector('#output') 
const add = document.querySelector('#Add')
const sub= document.querySelector('#Subtract')
const multi = document.querySelector('#Multiply')
const divi = document.querySelector('#Divide')

add.addEventListener('click',addfunc)
function addfunc(){
    const res = parseInt(num1.value) + parseInt(num2.value)
    console.log(res)
    output.innerHTML = res 
}

sub.addEventListener('click',subfunc)
function subfunc(){
    const res = parseInt(num1.value) - parseInt(num2.value)
    console.log(res)
    output.innerHTML = res 
}

multi.addEventListener('click',multifunc)
function multifunc(){
    const res = parseInt(num1.value) * parseInt(num2.value)
    console.log(res)
    output.innerHTML = res 
}

divi.addEventListener('click',divifunc)
function divifunc(){
    const res = parseInt(num1.value) / parseInt(num2.value)
    console.log(res)
    output.innerHTML = res 
}

