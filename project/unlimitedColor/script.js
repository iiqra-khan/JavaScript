// generate random colors
let randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

document.querySelector('#start').addEventListener('click', start)
document.querySelector('#stop').addEventListener('click', stop)

function chngBg(){
    document.body.style.backgroundColor = randomColor()
//    const body = document.querySelector('body');
//    body.setAttribute(`bgcolor`, `${randomColor}`)
//    console.log(body);
}
let intervalId;

function start(){
    if(!intervalId){
        intervalId = setInterval(chngBg, 1000)
    }
}

function stop(){
    clearInterval(intervalId)
    intervalId = null;
}