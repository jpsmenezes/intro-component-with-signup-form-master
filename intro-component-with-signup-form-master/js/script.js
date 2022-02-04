let validator = {
    handleSubmit: (event) => {
        event.preventDefault(); // não enviar formulário

        let send = true;
        const inputs = form.querySelectorAll('input');

        validator.clearError(); // Limpar os error dos inputs

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            if (check !== true) {
                send = false;
                validator.showError(input, check);
            }
        }
        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        rules = rules.split('|');
        for (let k in rules) {
            let rDetails = rules[k].split('=');
            switch (rDetails[0]) {
                case 'first':
                    if (input.value == "") {
                        return 'First Name cannot be embty'
                    }
                    break;
                case 'last':
                    if (input.value == "") {
                        return 'Last Name cannot be embty'
                    }
                    break;
                case 'password':
                    if (input.value == "") {
                        return 'Password cannot be embty'
                    }
                    break;
                case 'min':
                    if (input.value.length < rDetails[1]) {
                        return 'It is mandatory to have at ' + rDetails[1] + ' characters';
                    }
                    break;
                case 'required':
                        if (input.value == "") {
                            return 'Email cannot be embty'
                        }
                        break;
                case 'email':
                    if (input.value != '') {
                        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (!regex.test(input.value.toLowerCase())) {
                            return 'Looks like this is not an email';
                        }
                    }
                    break;
            }
        }
        return true;
    },
    showError: (input, erro) => {
        input.style.borderColor = 'hsl(0, 74%, 74%)'; // adicionando uma borda vermelha no input com o erro
        input.style.borderWidth = "2.5px"; // largura da borda        
        input.classList.add('errorInput');

        let errorElement = document.createElement('div'); // criando uma div 
        errorElement.classList.add('error'); // adiciionando uma class na div
        errorElement.innerHTML = erro;
        input.parentElement.insertBefore(errorElement, input.ElementSibling);

        errorElement.style.marginBottom = '0.4rem';
    },
    clearError: () => {
        let inputs = form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++){
            inputs[i].style = '';
            inputs[i].classList.remove('errorInput'); //remover o icone do erro
        }

        let errorElement = document.querySelectorAll('.error');
        for(let i = 0; i < errorElement.length; i++){
            errorElement[i].remove();
        }       
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', validator.handleSubmit);
