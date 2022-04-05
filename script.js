const inputs = document.getElementsByName("ball")
const input_delta = document.querySelector("input#ball1")
var res  = document.querySelector("div#res") 


function show() {
    if (inputs[0].checked) {
        res.innerHTML = `b<sup>2</sup> - 4.a.c`
    }
    if(inputs[1].checked) {
        res.innerHTML = `-b +- √Δ /2.a`
    }
    if(inputs[2].checked) {
        res.innerHTML = "a"
    }
}

