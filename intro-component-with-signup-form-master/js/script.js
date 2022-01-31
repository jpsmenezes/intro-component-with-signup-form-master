let validator = {
       handleSubmit: (event) =>{
              event.preventDefault(); // não enviar formulário

              let send = true;
              const input = form.querySelector('input');

              let check = validator.checkInput(input);
              if (check !== true) {
                  send = false;
                  validator.showError(input, check);
              }
              if (send) {            
                  form.submit();
              }
       },
       checkInput: (input) => {

       },
       showError: (input, erro) => {

       }
}

const form = document.querySelector('form');
form.addEventListener('submit', validator.handleSubmit);
