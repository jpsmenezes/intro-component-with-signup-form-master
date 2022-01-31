let validator = {
       handleSubmit: (event) =>{
              event.preventDefault(); // não enviar formulário
       
       }
}

const form = document.querySelector('form');
form.addEventListener('submit', validator.handleSubmit);
