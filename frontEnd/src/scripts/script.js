




export function SubscribeNewlestter(){
    document.getElementById("buttonSubscibe").addEventListener("click", () => {
        
        

        const inputEmail = document.getElementById("input-email");

       const textEmailInput = inputEmail.value;
        
        validarEmail(textEmailInput);
        
        const emailParaValidar = textEmailInput;
        if (validarEmail(emailParaValidar)) {

        console.log('O e-mail é válido.');

        } else if (emailParaValidar == ""){
            console.error('O e-mail é inválido.');
            window.alert("Digite Um email")

        }else{
            window.alert("Email Digitado fora dos padroes")
        }

        // if (inputEmail.value == ""){
        //     window.alert("Digite o seu email Correto")
        // }
        
        console.log(inputEmail.value);
    })

  };

function validarEmail(email) {
  // Expressão regular para validar um endereço de e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Testa se o e-mail corresponde à expressão regular
  return regexEmail.test(email);

  console.log(email)
}

// Exemplo de uso
const emailParaValidar = 'seuemail@example.com';
if (validarEmail(emailParaValidar)) {
  console.log('O e-mail é válido.');
} else {
  console.error('O e-mail é inválido.');
}