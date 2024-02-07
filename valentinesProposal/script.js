const container = document.querySelector('.container');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesButton = document.querySelector('.yesButton');
const noButton = document.querySelector('.noButton');
const buttonGroup = document.querySelector('.buttonGroup');


const sadPhrases = [
    "Maghilak q huhuhu",
    "Sure ba?",
    "Please uwu'",
    "Mahal??",
    "Why why why?",
    "Sige na lang huhu",
    "Pookie please",
    "Akong heart",
    "NOOOOOO",
    "Yes na oh",
    "Honeybunch q",
    "Is this Love?"
];

let lastSadPhrase = '';
let secondLastSadPhrase = '';

function changeButtonText() {
    let newSadPhrase = '';
    do {
        newSadPhrase = sadPhrases[Math.floor(Math.random() * sadPhrases.length)];
    } while (newSadPhrase === lastSadPhrase || newSadPhrase === secondLastSadPhrase);

    secondLastSadPhrase = lastSadPhrase;
    lastSadPhrase = newSadPhrase;

    noButton.textContent = newSadPhrase;

    yesButton.classList.add('grow');
    setTimeout(() => {
        yesButton.classList.remove('grow');
    }, 300);
}

yesButton.addEventListener('click', () => {
    question.innerHTML = "YEY I LOVE YOU SO MUCH";
    gif.src = "https://media.giphy.com/media/fvwFR3on8g27C7BKu1/giphy.gif";
    buttonGroup.parentNode.removeChild(buttonGroup);
});

noButton.addEventListener('click', () => {
    gif.src = "https://media.giphy.com/media/ScKpvclmMmw5a9wm1J/giphy.gif";
    changeButtonText();
});



