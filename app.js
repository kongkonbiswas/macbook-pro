
function updateCaseNumber(isChanging){
        const memoryInput = document.getElementById('memory-price');
        const memoryPrice = memoryInput.innerText;
        if(isChanging == true){
            memoryInput.innerText = parseInt(memoryPrice) * 0;
        }
        else if(isChanging == false){
            memoryInput.innerText = (parseInt(memoryPrice).toFixed() * 0) + 180;
        }
        return memoryPrice;
}
document.getElementById('min-memory').addEventListener('click', function () {
    updateCaseNumber(true);
});
document.getElementById('max-memory').addEventListener('click', function () {
    updateCaseNumber(false)
});

function midderCaseNumber(isIncreasing){
        const storageInput = document.getElementById('storage-price');
        const storagePrice = storageInput.innerText;
        if(isIncreasing == true){
            storageInput.innerText = parseInt(storagePrice) * 0;
        }
        else if(isIncreasing == false){
            storageInput.innerText = (parseInt(storagePrice).toFixed() * 0) + 100;
        }
        else if (storagePrice == 0 || storagePrice == 100){
            storageInput.innerText = (parseInt(storagePrice).toFixed() * 0) + 180;
        }
}
document.getElementById('min-storage').addEventListener('click', function () {
    midderCaseNumber(true);
});
document.getElementById('mid-storage').addEventListener('click', function () {
    midderCaseNumber(false)
});
document.getElementById('max-storage').addEventListener('click', function () {
    midderCaseNumber()
});

function lastCaseNumber(isChanging){
    const deliveryInput = document.getElementById('delivery-price');
    const deliveryPrice = deliveryInput.innerText;
    if(isChanging == true){
        deliveryInput.innerText = parseInt(deliveryPrice) * 0;
    }
    else if(isChanging == false){
        deliveryInput.innerText = (parseInt(deliveryPrice).toFixed() * 0) + 20;
    }
}
document.getElementById('free-shipping').addEventListener('click', function () {
lastCaseNumber(true);
});
document.getElementById('costly-shipping').addEventListener('click', function () {
lastCaseNumber(false)
});
// outline
// function calculateTotalMemory(){
//     const bestPrice = document.getElementById('memory-price');
//     const priceText = bestPrice.innerText;
//     const bestPriceNumber = parseFloat(priceText);
//     console.log(bestPriceNumber)
//     return bestPriceNumber;
// }
// calculateTotalMemory();
// function calculateTotalStorage(){
//     const storageTotal = document.getElementById('storage-price');
//     const totalText = storageTotal.value;
//     const storageTotalNumber = parseFloat(totalText);
//     const bestPrice = document.getElementById('memory-price');
//     const priceText = bestPrice.value;
//     const bestPriceNumber = parseFloat(priceText);
//     const delivaryTotal = document.getElementById('delivery-price');
//     const deliveryText = delivaryTotal.value
//     const deliveryNumber = parseFloat(deliveryText)
//     const ttoal = storageTotalNumber + bestPriceNumber + deliveryNumber;
//     document.getElementById('total-price')= ttoal.value;

//     // console.log(storageTotalNumber)
//     // return storageTotalNumber;
// }
// // function total(){
// // //     const storageValue = calculateTotalMemory()
// // //     const memoryValue = calculateTotalStorage()
// //     const Stotal = calculateTotalMemory() + calculateTotalStorage();
// //     // const totalMS = storageValue + memoryValue;
// //     document.getElementById('total-price').innerText = Stotal;
// // }
// function getInputValue(){
//     const memoryInput = document.getElementById('memory-price');
//     console.log(memoryInput)
//     const memoryText = memoryInput.innerText;
//     // memoryInput.innerText = parseInt(memoryText)
//     console.log(memoryText)
//     // return memoryText;
// }
// function calculationTotal(){
//     const memoryTotal = getInputValue() + 1299;
//     document.getElementById('total-price') = memoryTotal.innerText;
// }
function getInputValue(product) {
    const productInput = document.getElementById(product);
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('min-memory');
    const caseTotal = getInputValue('max-memory') + 1299;
    const subTotal = phoneTotal + caseTotal;
    // const tax = subTotal / 10;
    // const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('total-price').innerText = subTotal;
}