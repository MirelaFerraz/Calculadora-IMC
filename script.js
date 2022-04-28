  const primeiraDiv = document.querySelector('.first-step');
  const segundaDiv = document.querySelector('.second-step');
  const finalDiv = document.querySelector('.final-step');

  function go(currentStep,nextStep){
      let dNone, dBlock;
      if(currentStep == 1){
        dNone = primeiraDiv;
      }
      else if(currentStep == 2){
        dNone = segundaDiv;
      }
      else{
        dNone = finalDiv;
      }
      
      dNone.style.display = 'none';

      if(nextStep == 1){
        dBlock = primeiraDiv;
      }
      else if(nextStep == 2){
        dBlock = segundaDiv;
      }
      else{
        dBlock = finalDiv;
      }
      dBlock.style.display = 'block';
  }

  function validate(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border   = 'none';
    altura.style.border = 'none';
    if(!peso.value || !altura.value){
      if(!peso.value && !altura.value){
        peso.style.border = '1px solid red';
        altura.style.border = '1px solid red';
      }
      else if(!peso.value){
        peso.style.border = '1px solid red';
      }
      else{
        altura.style.border = '1px solid red';
      }
    }
    else{
      let imc = peso.value / (altura.value * altura.value);
      const result = document.getElementById('resultado');
      if(imc < 18.5){
        console.log('Abaixo do peso');
        result.style.color = 'yellow';
        result.innerHTML = 'Abaixo do peso' + " " + "-" + " Seu imc é " +  imc;
      }
      else if(imc >= 18.5 && imc < 25){
        console.log('Normal');
        result.style.color = 'green';
        result.innerHTML = 'Normal' + " " + "-" + " Seu imc é " +  imc;
      }
      else if(imc >= 25 && imc < 30){
        console.log('Sobrepeso');
        result.style.color = 'yellow';
        result.innerHTML = 'Sobrepeso' + " " + "-" + " Seu imc é " +  imc;
      }
      else if(imc >= 30 && imc < 40){
      console.log('Obesidade');
      result.style.color = 'red';
      result.innerHTML = 'Obesidade' + " " + "-" +" Seu imc é " +  imc;
      }
      else{
        console.log('Obesidade grave');
        result.style.color = 'black';
        result.innerHTML = 'Obesidade grave' + " " + "-" + " Seu imc é " +  imc;
      }
      go(2,3);
      }
  }
