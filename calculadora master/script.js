const texto = document.getElementById('texto')
const buttons = {
    button1: document.getElementById('button1'),
    button2: document.getElementById('button2'),
    button3: document.getElementById('button3'),
    button4: document.getElementById('button4'),
    button5: document.getElementById('button5'),
    button6: document.getElementById('button6'),
    button7: document.getElementById('button7'),
    button8: document.getElementById('button8'),
    button9: document.getElementById('button9'),
    button0: document.getElementById('button0'),
    buttonplus: document.getElementById('buttonplus'),
    buttonminus: document.getElementById('buttonminus'),
    buttonequal: document.getElementById('buttonequal')
}
buttons.button1.addEventListener('click', function(){
    texto.innerHTML += "1"
})
buttons.button2.addEventListener('click', function(){
    texto.innerHTML += "2"
})
buttons.button3.addEventListener('click', function(){
    texto.innerHTML += "3"
})
buttons.button4.addEventListener('click', function(){
    texto.innerHTML += "4"
})
buttons.button5.addEventListener('click', function(){
    texto.innerHTML += "5"
})
buttons.button6.addEventListener('click', function(){
    texto.innerHTML += "6"
})
buttons.button7.addEventListener('click', function(){
    texto.innerHTML += "7"
})
buttons.button8.addEventListener('click', function(){
    texto.innerHTML += "8"
})
buttons.button9.addEventListener('click', function(){
    texto.innerHTML += "9"
})
buttons.button0.addEventListener('click', function(){
    texto.innerHTML += "0"
})
buttons.buttonplus.addEventListener('click', function(){
    texto.innerHTML += " + "
})
buttons.buttonminus.addEventListener('click', function(){
    texto.innerHTML += " - "
})
buttons.buttonequal.addEventListener('click', function(){
    console.log(document.body.p.trim().split(' '))
})