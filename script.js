const plate = document.querySelector('.prato')

function itemSelected(pedidoClicado){

    const selected = document.querySelector('.selected')

    if(selected !== null){
        selected.classList.remove('selected')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selected')
}



function itemSelectedDrinks(pedidoClicado){

    const selectedDrinks = document.querySelector('.selectedDrinks')
    
    if(selectedDrinks !== null ){
        selectedDrinks.classList.remove('selectedDrinks')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selectedDrinks')
   
}

function itemSelectedDesert(pedidoClicado){
   
    const selectedDesert = document.querySelector('.selectedDesert')
    const button = document.querySelector('button')

    if(selectedDesert !== null ){
        selectedDesert.classList.remove('selectedDesert')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selectedDesert')
    button.removeAttribute('disabled')
    button.innerText = 'Fechar pedido'
    button.style.background = '#32B72F'
    button.style.color = 'white'
}

function showModal(){
    const modal = document.querySelector(".modal")
    const main = document.querySelector('main')
    const header = document.querySelector("header")
    const button = document.querySelector("button")
    
    modal.classList.remove("hidden")
    button.style.opacity = '5%'
    main.style.opacity = '5%'
    header.style.opacity = '5%'

}