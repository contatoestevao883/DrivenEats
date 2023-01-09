const plate = document.querySelector('.prato').innerText

function itemSelected(pedidoClicado){

    const selected = document.querySelector('.selected')

    if(selected !== null){
        selected.classList.remove('selected')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selected')
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
    const main = document.querySelector('main')
    const header = document.querySelector("header")
    const button = document.querySelector("button")
    const pedido1 = document.createElement('h3')


    modal.classList.remove("hidden")
    button.style.opacity = '5%'
    main.style.opacity = '5%'
    header.style.opacity = '5%'

    
    pedido1.innerText = plate

    modal.appendChild(pedido1)

}