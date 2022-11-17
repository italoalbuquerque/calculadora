function insert (num) {
    document.querySelector('p#res').innerHTML += num
}

function clean () {
    document.querySelector('p#res').innerHTML = ''
}

function back () {
    let res = document.querySelector('p#res').innerHTML
    document.querySelector('p#res').innerHTML = res.substring(0, res.length -1)
}

function calcular () {
    let res = document.querySelector('p#res').innerHTML

    if (res.length != 0) {
        document.querySelector('p#res').innerHTML = eval(res)
        
    } else if (res.length == 0) {
        alert('Digite um número para calcular!')
    }
}