const title = document.getElementById('page-title')
const btn = document.getElementById('mode-selector')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const darkMode = 'dark-mode'

const changeMode = () => {
    
    changeClasses();

    changeText();
}

function changeText() {
    if (body.classList.contains(darkMode)) {
        title.innerHTML = 'Light Mode OFF'
        btn.innerHTML = 'Light Mode'
        return;
    }

    title.innerHTML = 'Light Mode ON'
    btn.innerHTML = 'Dark Mode'
}

function changeClasses() {
    body.classList.toggle('dark-mode')
    btn.classList.toggle('dark-mode')
    title.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}

btn.addEventListener('click', changeMode)
