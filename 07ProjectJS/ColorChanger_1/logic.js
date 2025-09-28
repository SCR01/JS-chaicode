const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((button)=>{
    console.log(button);
    //using Event Listener
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
         if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }
         if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
         if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }
    })
})