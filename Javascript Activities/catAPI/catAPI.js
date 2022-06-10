const BASE_URL = 'https://api.thecatapi.com/v1/images/search?format=json'

const img = document.getElementById('cat')
const btn = document.getElementById('btn')
const title = document.getElementById('title')

var header = new Headers();

header.append('x-api-key', 'ea3c274e-9f9d-4c54-8a57-ec7abcda41b9')
header.append('Content-Type', 'application/json')

const getImg = async () => {
    const data = fetch(BASE_URL, {
        method: 'GET',
        headers: header,
    }).then(resolve => resolve.json())

    return data
}

const loadImg = async () => {
    getImg().then(data => img.src = data[0].url)

    title.innerHTML = 'Agora segura os gatim fofim filho!'

    btn.innerHTML = 'Nao para n meno, clicak em mim'
}

btn.addEventListener('click', loadImg)


