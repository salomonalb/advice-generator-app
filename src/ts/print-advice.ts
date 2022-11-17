import getAdvice from "./get-advice";

export default async function printAdvice() {
    
    const advice = await getAdvice();
    const appAdviceId = document.querySelector("#idNumber") as HTMLSpanElement;
    const appAdviceContainer = document.querySelector("#advicePara") as HTMLParagraphElement;

    appAdviceId.textContent = advice.id;
    appAdviceContainer.textContent = advice.advice;
}