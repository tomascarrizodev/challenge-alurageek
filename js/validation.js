import inputs from "../assets/css/js/styles.js";

const { $$inputs, sesions } = inputs

const errorTypes = [
    'valueMissing',
    'tooLong',
    'patternMismatch'
]

const errorMessages = {
    nombre: {
        valueMissing: 'Este campo no puede estar vacío',
        tooLong: 'El máximo de caracteres es de 40'
    },
    mensaje: {
        valueMissing: 'Este campo no puede estar vacío',
        tooLong: 'El máximo de caracteres es de 120'
    },
    email: {
        valueMissing: 'Este campo no puede estar vacío',
        patternMismatch: 'El email ingresado no es válido'
    },
    password: {
        valueMissing: 'Este campo no puede estar vacío'
    }
}

const validate = (input) => {
    let span = input.parentNode.parentNode.querySelector('.form__error--' + input.dataset.tipo)
    if (!input.validity.valid) {
        errorTypes.forEach(err => {
            if (input.validity[err]) {
                span.innerHTML = errorMessages[input.dataset.tipo][err]
                span.classList.remove('form__error--off')
            }
        })
    } else {
        span.innerHTML = ''
        span.classList.add('form__error--off')
    }
}

$$inputs.forEach(input => {
    input.addEventListener('blur', () => {
        validate(input)
    })
})

const form = document.querySelector('[data-contacto]');

form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Mensaje enviado con Éxito!')
    $$inputs.forEach(input => {
        input.value = ''
        input.parentNode.querySelector('label').classList = 'form__label'
        input.parentNode.classList = 'form__external'
    })
})

sesions.forEach(input => {
    input.addEventListener('blur', () => {
        validate(input)
    })
})

const login = document.querySelector('[data-login]');

login.addEventListener('submit', e => {
    e.preventDefault()
    window.location.href = './products.html'
})