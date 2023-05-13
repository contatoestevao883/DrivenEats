// const plate = document.querySelector('.prato').innerText
// const price = document.querySelector('h3').textContent
// const drink = document.querySelector('.drink').innerText
// const dessert = document.querySelector('.dessert').innerText

let titlePlate, titleDrink, titleDesert;
let pricePlate, priceDrink, priceDesert;

function itemSelected(pedidoClicado){
    const selected = document.querySelector('.selected')

    if(selected !== null){
        selected.classList.remove('selected')
    }
    const buttonSelected = document.querySelector(pedidoClicado)
    let plateSelected =  document.querySelector(pedidoClicado)
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
    const button = document.querySelector('.final-button')
    
    if(selected !== null && selectedDrinks !== null && selectedDesert !== null){
        button.disabled = false
        button.innerText = 'Fechar pedido'
        button.style.background = '#32B72F'
        button.style.color = 'white'
    }
}


function showModal(){
    const modal = document.querySelector('.modal');
    modal.classList.remove('hidden');

    const titlePlate = document.querySelector('prato .nome');
    titlePlate.innerHTML = titlePlate;
    document.querySelector('.prato .preco').innerHTML = pricePlate;

    const titleDrink = document.querySelector('.pedido .nome');
    titleDrink.innerHTML = titleDrink;
    document.querySelector('.prato .preco').innerHTML = priceDrink;

    const titleDesert = document.querySelector('.pedido .nome');    
    titleDesert.innerHTML = titleDesert;    
    document.querySelector('.prato .preco').innerHTML = priceDesert;


    total = pricePlate + priceDrink + priceDesert;
    console.log(total)

    document.querySelector('.preco-total').innerHTML = total.toFixed(2);

}

function cancel(){
    const overlay = document.querySelector('.modal');
    overlay.classList.add('hidden');
}