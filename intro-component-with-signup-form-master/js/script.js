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
                case 'required':
                    if (input.value == "") {
                        return 'Campo Obrigatório'
                    }
                    break;
                case 'min':
                    if (input.value.length < rDetails[1]) {
                        return 'Obrigatório ter ao menos ' + rDetails[1] + ' Caracteres';
                    }
                    break;
                case 'email':
                    if (input.value != '') {
                        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (!regex.test(input.value.toLowerCase())) {
                            return 'E-mail digitado não é válido!';
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

        const imgError = document.querySelector('input');
        imgError.classList.add('errorInput');
    },
    clearError: () => {

    }
}

const form = document.querySelector('form');
form.addEventListener('submit', validator.handleSubmit);
