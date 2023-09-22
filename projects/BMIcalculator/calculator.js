const form = document.querySelector('form')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    
    // Get where you need to insert the resutl
    const results = document.querySelector('#results')
    results.innerHTML = ''


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        const span = document.createElement('span')
        span.appendChild(document.createTextNode(bmi))
        results.appendChild(span)
        if(bmi < 18.6){
            const span = document.createElement('span')
            span.appendChild(document.createTextNode(`you are under weight`))
            results.appendChild(span)
        }
        else if(bmi > 18.6 && bmi < 24.9){
            const span = document.createElement('span')
            span.appendChild(document.createTextNode(`you are Normal`))
            results.appendChild(span)
        }
        if(bmi > 23.9){
            const span = document.createElement('span')
            span.appendChild(document.createTextNode(`you are over weight`))
            results.appendChild(span)
        }
    }

})