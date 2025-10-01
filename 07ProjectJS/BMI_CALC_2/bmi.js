/* const form = document.querySelector('form');


form.addEventListener('submit',function(e){
    e.preventDefault();


    //from string to int using parseInt
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results');
    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `please give valid height ${height}`;

    }else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `please give valid weight ${weight}`;

    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);// toFixed for 2 decimal points
        results.innerHTML = `<span>${bmi}</span>`;
    }
})
 */
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show BMI value and category
    let message = '';
    if (bmi < 18.6) {
      message = `You are Underweight 😟`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = `You are in the Normal range 😊`;
    } else {
      message = `You are Overweight 😟`;
    }

    results.innerHTML = `<span>Your BMI is ${bmi} – ${message}</span>`; //this is unique message
    
  }
});
