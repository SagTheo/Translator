const translate = document.querySelector('.translate')
const translation = document.querySelector('.to')
const original = document.querySelector('#from')
const fromLang = document.querySelector('#fromLang')
const toLang = document.querySelector('#toLang')
const switchLang = document.querySelector('.bi')


const french = [
    'bonjour',
    'merci',
    'au revoir'
]

const english = [
    'hello',
    'thank you',
    'goodbye'
]

const italian = [
    'buongiorno',
    'grazie',
    'arrivederci'
]

const spanish = [
    'hola',
    'gracias',
    'adios'
]

const placeholderText = {
    'french': 'Ecrivez votre texte ici',
    'english': 'Type your text here',
    'italian': 'Scriva il suo testo qua',
    'spanish': 'Escriba su texto aqui'
}

const setAtt = (el, att, value) => el.setAttribute(att, value)

translate.addEventListener('click', () => {
    let index  = null
    let result = null

    switch (fromLang.value) {
        case 'french':
            index = french.indexOf(original.value.toLowerCase())
            break
        case 'italian':
            index = italian.indexOf(original.value.toLowerCase())
            break
        case 'spanish':
            index = spanish.indexOf(original.value.toLowerCase())
            break
        case 'english':
            index = english.indexOf(original.value.toLowerCase())
            break
    }

    if (index < 0) {
        translation.textContent = 'No translation found'
    } else {
        switch (toLang.value) {
            case 'french':
                result = french[index]
                break
            case 'italian':
                result = italian[index]
                break
            case 'spanish':
                result = spanish[index]
                break
            case 'english':
                result = english[index]
                break
        }
        
        translation.textContent = result
    }
})


switchLang.addEventListener('click', () => {
    const temp = fromLang.value
    fromLang.value = toLang.value
    toLang.value = temp

    setAtt(original, 'placeholder', placeholderText[fromLang.value])

    original.value = ''
    translation.textContent = ''
})

fromLang.addEventListener('change', () => {
    switch (fromLang.value) {
        case 'french':
            setAtt(original, 'placeholder', placeholderText[fromLang.value])
            break
        case 'italian':
            setAtt(original, 'placeholder', placeholderText[fromLang.value])            
            break
        case 'spanish':
            setAtt(original, 'placeholder', placeholderText[fromLang.value])            
            break
        case 'english':
            setAtt(original, 'placeholder', placeholderText[fromLang.value])            
            break
    }
})