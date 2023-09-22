// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intervalId;

const startChangingColor = function(){
    if(!intervalId) {
    intervalId = setInterval(bgcolor,1000)
    }
    function bgcolor(){
        const color = randomColor()
        document.body.style.backgroundColor = color
    
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId=null;
}

document.querySelector('#start').addEventListener(
    'click',startChangingColor
);
document.querySelector('#stop').addEventListener(
    'click',stopChangingColor
);
