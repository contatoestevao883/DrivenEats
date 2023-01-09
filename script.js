const plate = document.querySelector('.prato').innerText
const price = document.querySelector('h3').textContent
const drink = document.querySelector('.drink').innerText
const dessert = document.querySelector('.dessert').innerText

function itemSelected(pedidoClicado){
    const selected = document.querySelector('.selected')
    const plate1 = document.querySelector(".plate1")

    if(selected !== null){
        selected.classList.remove('selected')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    let plateSelected =  document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selected')
    const plateSelected1 = plate1.innerText = plateSelected.innerText
    buttonActive()
}



function itemSelectedDrinks(pedidoClicado){

    const selectedDrinks = document.querySelector('.selectedDrinks')
    
    if(selectedDrinks !== null ){
        selectedDrinks.classList.remove('selectedDrinks')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selectedDrinks')
    buttonActive()
   
}

function itemSelectedDesert(pedidoClicado){
   
    const selectedDesert = document.querySelector('.selectedDesert')

    if(selectedDesert !== null ){
        selectedDesert.classList.remove('selectedDesert')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selectedDesert')
    buttonActive()

}

function buttonActive(){
    const selected = document.querySelector('.selected')
    const selectedDrinks = document.querySelector('.selectedDrinks')
    const selectedDesert = document.querySelector('.selectedDesert')
    const button = document.querySelector('button')
    
    if(selected !== null && selectedDrinks !== null && selectedDesert !== null){
        button.disabled = false
        button.innerText = 'Fechar pedido'
        button.style.background = '#32B72F'
        button.style.color = 'white'
    }
}


function showModal(){
    const modal = document.querySelector(".modal")
    const container = document.querySelector(".container")
    const plate1 = document.querySelector(".plate1")
    const drink1 = document.querySelector(".drink1")
    const dessert1 = document.querySelector(".dessert1")
    const main = document.querySelector('main')
    const header = document.querySelector("header")
    const button = document.querySelector("button")
    const pedido1 = document.createElement('h3')
    const pedido2 = document.createElement('h3')
    const pedido3 = document.createElement('h3')
    const price1 = document.createElement("span")


    modal.classList.remove("hidden")
    button.style.opacity = '5%'
    main.style.opacity = '5%'
    header.style.opacity = '5%'

}