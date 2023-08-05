const button = document.querySelector("button")
const body = document.querySelector("body")

const colors = ['red','green','black','blue','brown','pink','yellow']

body.style.backgroundColor='#425163'

button.addEventListener('click',changeC)

function changeC() {
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor=colors[colorIndex]
}