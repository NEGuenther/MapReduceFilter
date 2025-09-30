const list = document.querySelector('ul')

// Mostrar todos os produtos usando forEach

const buttonShowAll = document.querySelector('.show-all')
let myLi = ''

function showAll() {
    menuOptions.forEach(product => {
        myLi += `<li data-valor="${product.price}">
                    <img src="${product.src}">
                    <p>${product.name}
                    <br>R$${product.price}</p>
                </li>`
    })
    list.innerHTML = myLi
}

buttonShowAll.addEventListener('click', showAll)

// Mapear os preços dos produtos usando map
const buttonMapAll = document.querySelector('.map-all')
function mapAllItems(){
    const newPrices = menuOptions.map((product) => 
        `<li data-valor="${product.price - product.price * 0.1}">
                    <img src="${product.src}">
                    <p>${product.name}
                    <br>R$${product.price - product.price * 0.1}</p>
                </li>`
    )
    console.log(newPrices)
    list.innerHTML = newPrices.join('')
}
buttonMapAll.addEventListener('click', mapAllItems)