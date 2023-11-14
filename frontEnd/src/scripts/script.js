




 export function SubscribeNewlestter(){
    document.getElementById("buttonSubscibe").addEventListener("click", () => {
        const emailValid = document.getElementById("validEmailRequired");
        const inputEmail = document.getElementById("input-email");

       const textEmailInput = inputEmail.value;
        
        validarEmail(textEmailInput);
        
        const emailParaValidar = textEmailInput;
        if (validarEmail(emailParaValidar)) {

        console.log('O e-mail é válido.');
            emailValid.style.visibility = "hidden";
            inputEmail.style.backgroundColor = "white"
            inputEmail.style.border = "1px solid black"
        

        } else if (emailParaValidar == ""){
            console.error('O e-mail é inválido.');
            emailValid.style.visibility = "visible";
            inputEmail.style.backgroundColor = "#FEE8E6"
            inputEmail.style.border = "1px solid red"
            

        }else{
          console.error('O e-mail está fora dos padrões');
            emailValid.style.visibility = "visible";
        }
    })

  };

function validarEmail(email) {
  // Expressão regular para validar um endereço de e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Testa se o e-mail corresponde à expressão regular
  return regexEmail.test(email);
}