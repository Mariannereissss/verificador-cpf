const botao = document.getElementById('bot');
const p = document.querySelector('.erro');

botao.addEventListener('click', () => {
    const cpf = document.getElementById('cpff').value;
    const cpfLimpo = cpf.replace(/\D/g, '');
    const digitos = cpfLimpo.split('').map(Number);


    if(digitos.length < 11) {
        p.textContent = 'O cpf precisa ter 11 dígitos';
        p.style.color = 'red';
    };

    let soma1 = 0;
    for(let i = 0; i < 9; i++){
        soma1 += digitos[i] * (10 - i);
    }

    let primeiroDigito = (soma1 * 10) % 11;
    if((primeiroDigito === 10) || (primeiroDigito === 11)) {
        primeiroDigito = 0;
    };

    let soma2 = 0;

    for(let i = 0; i < 10; i++){
        soma2 += digitos[i] * (11 - i);
    }
    
    let segundoDigito = (soma2 * 10) % 11;
    if((segundoDigito === 10) || (segundoDigito === 11)){
        segundoDigito = 0;
    }
    
    if((primeiroDigito !== digitos[9]) || (segundoDigito !== digitos[10])){
        p.textContent = 'Digite um cpf válido';
        p.style.color = 'red';
    } else {
        document.getElementById('cpff').value = '';
        p.textContent = 'cpf válido!';
        p.style.color = 'green';
    };

});