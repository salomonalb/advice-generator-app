export default function getAdvice() {

    const ADVICE_API_URL = "https://api.adviceslip.com/advice";

    return fetch(ADVICE_API_URL)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error('Bad')
            }
        })
        .then(data => data['slip'])
        .catch(err => console.log(err))
}