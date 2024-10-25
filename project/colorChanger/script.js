// console.log('iqra')
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons)
buttons.forEach(function(buttons){
    console.log(buttons);
    buttons.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'purple'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'beige'){
            body.style.backgroundColor = e.target.id
        }
        
    })
})