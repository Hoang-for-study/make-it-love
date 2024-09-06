const $btnYes = document.querySelector('.js-yes');
const $btnNo = document.querySelector('.js-no');
const $confirm = document.querySelector('.js-confirm');
const $dialog = document.querySelector('.js-dialog');
const $body = document.querySelector('body');

let counter = 0;


$btnYes.addEventListener('mouseover', (e) => {
    e.target.innerHTML = '^.^'
})

$btnYes.addEventListener('mouseout', (e) => {
    e.target.innerHTML = 'YES'
})

$btnYes.addEventListener('click', () => {
    $body.classList.add('yes')
})

$btnNo.addEventListener('mouseover', (e) => {
    const $target = e.target;

    $target.style.top = `${Math.random() * 200}px`;
    $target.style.right = `${Math.random() * 200}px`;

    if (counter >= 5) {
        $target.innerHTML = 'T.T'
    }

    counter += 1;
})