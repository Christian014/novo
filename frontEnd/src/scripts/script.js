 export function SubscribeNewlestter(){

    document.getElementById("buttonSubscibe").addEventListener("click", () => {
        const emailValid = document.getElementById("validEmailRequired");
        const inputEmail = document.getElementById("input-email");
        const inputError = document.getElementById("placeholderError");

        console.log(inputError)
        
        

       const textEmailInput = inputEmail.value;
       const textEmailError = inputError.value;
        
        validarEmail(textEmailInput);
        validarEmail(textEmailError);

        
        const emailParaValidar = textEmailInput;
        const emailParaValidar2 = textEmailError;
        if (validarEmail(emailParaValidar2)) {

        console.log('O e-mail é válido.');
            emailValid.style.visibility = "hidden";
            inputEmail.style.backgroundColor = "white";
            inputEmail.style.border = "1px solid black";

            inputError.style.background = "white";
            inputError.style.border = "1px solid black";
        

        } else if (emailParaValidar == ""){
            console.error('O e-mail é inválido.');

            emailValid.style.visibility = "visible";
            inputError.style.backgroundColor = "#FEE8E6";
            inputError.style.border = "1px solid red";
            
            
            inputError.style.visibility = "visible";
            

            

        }else{
          console.error('O e-mail está fora dos padrões');
            emailValid.style.visibility = "visible";
            inputError.style.backgroundColor = "#FEE8E6";
            inputError.style.border = "1px solid red";
            
            
            inputError.style.visibility = "visible";
        }
    })

  };

function validarEmail(email) {
  // Expressão regular para validar um endereço de e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Testa se o e-mail corresponde à expressão regular
  return regexEmail.test(email);
}