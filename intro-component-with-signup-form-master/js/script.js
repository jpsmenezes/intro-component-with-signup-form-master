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
            if (send) {
                form.submit();
            }
        }


    },
    checkInput: (input) => {

    },
    showError: (input, erro) => {

    },
    clearError: () => {

    }
}

const form = document.querySelector('form');
form.addEventListener('submit', validator.handleSubmit);
