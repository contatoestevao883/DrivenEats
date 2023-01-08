function itemSelected(pedidoClicado){

    const selected = document.querySelector('.selected')
    if(selected !== null){
        selected.classList.remove('selected')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selected')
    checkBox()
}
function checkBox(){
    const element = document.querySelector('ion-icon').style.display 
    if(element === 'none'){
        document.querySelector('ion-icon').style.display = 'block'
    }else{
        document.querySelector('ion-icon').style.display = 'none'
    }
    console.log(element)
}


function itemSelectedDrinks(pedidoClicado){
    console.log(pedidoClicado)

    const hidden = document.querySelector('.hidden')
    console.log(hidden)

    const selectedDrinks = document.querySelector('.selectedDrinks')
    console.log(selectedDrinks)
    
    if(selectedDrinks !== null ){
        selectedDrinks.classList.remove('selectedDrinks')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selectedDrinks')
    console.log(hidden.classList.add('hidden'))
}

function itemSelectedDesert(pedidoClicado){
    console.log(pedidoClicado)

    const hidden = document.querySelector('.hidden')
    console.log(hidden)

    const selectedDesert = document.querySelector('.selectedDesert')
    console.log(selectedDesert)
    
    if(selectedDesert !== null ){
        selectedDesert.classList.remove('selectedDesert')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    buttonSelected.classList.add('selectedDesert')
    console.log(hidden.classList.add('hidden'))
}