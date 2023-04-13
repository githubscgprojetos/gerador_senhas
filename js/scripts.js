// seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElemet = document.querySelector("#generated-password")

// Funções que iremos precisar
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getNunber = () => {
       return Math.floor(Math.random() * 10).toString();
  };

  const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-:ª?º"
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
  
  const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNunber, getSymbol) => {

    let password = ""

    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNunber,
        getSymbol,
    ]

    for(i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
          const randomValue = 
            generators[Math.floor(Math.random() * generators.length)]();
        
            password += randomValue; 
        });
    }

    password = password.slice(0, passwordLength);

    generatedPasswordElemet.style.display = "block"
    generatedPasswordElemet.querySelector("h4"). innerText = password;
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNunber,
        getSymbol,)
});
