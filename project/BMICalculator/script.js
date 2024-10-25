// form whenever submitted is either through get or post to the url, and we need to stop that operation because we are not working with servers yet.

const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        let finalResult = '';
        if(bmi < 18.6){
            finalResult = "underwwight"
        }
        else if(bmi >18.6 && bmi < 24.9){
            finalResult = 'normal'
        }
        else if(bmi > 24.9){
            finalResult = 'overweight'
        }
        results.innerHTML = `<span>${bmi} ${finalResult}</span>`;
        
    }
})