const container = document.querySelector('.container');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesButton = document.querySelector('.yesButton');
const noButton = document.querySelector('.noButton');

yesButton.addEventListener('click', () => {
    question.innerHTML = "YEY I LOVE YOU SO MUCH";
    gif.src = "https://media.giphy.com/media/fvwFR3on8g27C7BKu1/giphy.gif";
});

noButton.addEventListener('click', () => {
    const iPhoneXRWidth = 414; // iPhone XR width in CSS pixels
    const iPhoneXRHeight = 896; // iPhone XR height in CSS pixels
    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = iPhoneXRWidth - noButtonRect.width;
    const maxY = iPhoneXRHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});


