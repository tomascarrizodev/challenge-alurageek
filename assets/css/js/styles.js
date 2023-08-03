const $ = (elem) => document.querySelector(elem);
const $$ = (elems) => document.querySelectorAll(elems);

const $$inputs = $$('.contacto__input');

export default $$inputs;

function handleFocus(input) {
    const inputElem = $('#' + input.id);
    const parent = $('#' + input.parentNode.id)
    const label = parent.querySelector('label')

    label.classList.add('form__label--writing');
    inputElem.classList.add('form__input--fill');
    parent.classList.add('form__external--writing');
}

function handleFocusOut(input) {
    const inputElem = $('#' + input.id);
    const parent = $('#' + input.parentNode.id)
    const label = parent.querySelector('label')

    if (!input.validity.valid) {
        label.classList.replace('form__label--writing', 'form__label--fill');
        label.classList.add('form__label--error');
        parent.classList.add('form__external--error');
    } else if (input.validity.valid) {
        parent.classList.remove('form__external--error');
        parent.classList.remove('form__external--writing');
        label.classList.remove('form__label--error');
        label.classList.remove('form__label--fill');
    }
} 

$$inputs.forEach(input => {
    input.addEventListener('focus', () => {
        handleFocus(input)
    })

    input.addEventListener('blur', () => {
        handleFocusOut(input)
    })
})