import printAdvice from "./print-advice";

printAdvice()

const button = document.querySelector("#button") as HTMLButtonElement;

button.addEventListener('click', ()=> {
    printAdvice()
})
