// setInterval - asks for time upto which the job has to be run

const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
    clock
}, 1000)