const productsMap = {
    "product1": {price: 40000},
    "product2": {price:10000},
    "product3": {price:70000},
     "product4": {price: 5000},
    "product5": {price:3000}
}; 

window.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantityInput");
    const Select = document.getElementById("select");
    const button = document.getElementById("calculate")
    const answerDiv = document.getElementById("answerDiv");
    const render = (price) => {
        if (isNaN(price)) {
            answerDiv.innerText = `Вы ввели не то`; 
        } else {
            answerDiv.innerText =
                `Стоимость: ${price}`;
        }
    }
    const calc = (quantity) => {
        if (/^[0-9]+$/.test(quantity)) {
            return productsMap[Select.value].price * quantity;
        } else {
            return NaN;
        }
    }; 

    button.addEventListener("click", (ev)=>{
        if(Select.value)
            render(calc(quantityInput.value))
    })

});
