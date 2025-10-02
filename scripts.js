// Seleciona a lista UL do HTML
const list = document.querySelector('ul')

// Seleciona os botões do HTML
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

/**
 * Exibe todos os produtos na lista usando forEach
 */
function showAll() {
    let myLi = '' // Zera a variável para evitar repetição
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

/**
 * Exibe todos os produtos com preço 10% menor usando map
 */
function mapAllItems() {
    const newPrices = menuOptions.map(product =>
        `<li data-valor="${(product.price - product.price * 0.1).toFixed(2)}">
            <img src="${product.src}">
            <p>${product.name}
            <br>R$${(product.price - product.price * 0.1).toFixed(2)}</p>
        </li>`
    )
    list.innerHTML = newPrices.join('')
}
buttonMapAll.addEventListener('click', mapAllItems)

/**
 * Soma o preço total dos produtos usando reduce
 */
function sumAllIntems() {
    const totalPrice = menuOptions.reduce((acc, product) => acc + product.price, 0)
    list.innerHTML = `<li><h2>Preço total: R$${totalPrice}</h2></li>`
    console.log(totalPrice)
}
buttonSumAll.addEventListener('click', sumAllIntems)

/**
 * Filtra e exibe apenas os produtos veganos usando filter
 */
function filterAllItems() {
    const veganProducts = menuOptions.filter(product => product.vegan)
    const veganList = veganProducts.map(product =>
        `<li data-valor="${product.price}">
            <img src="${product.src}">
            <p>${product.name}
            <br>R$${product.price}</p>
        </li>`
    )
    list.innerHTML = veganList.join('')
}
buttonFilterAll.addEventListener('click', filterAllItems)