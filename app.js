// first Part Calculation Memory
function updateCaseNumber(isChanging){
        const memoryInput = document.getElementById('memory-price');
        const memoryPrice = memoryInput.innerText;
        if(isChanging == true){
            memoryInput.innerText = parseInt(memoryPrice) * 0;
        }
        else if(isChanging == false){
            memoryInput.innerText = (parseInt(memoryPrice).toFixed() * 0) + 180;
        }
}
document.getElementById('min-memory').addEventListener('click', function () {
    updateCaseNumber(true);
});
document.getElementById('max-memory').addEventListener('click', function () {
    updateCaseNumber(false)
});

// Second Part Calculation Storage
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

// Third Part Calculation Delivery
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
function getInputValue() {
    // let a = document.getElementById('best-price');
    // let w = a.innerText;
    let b = document.getElementById('memory-price')
    let x = b.innerText;
    let c = document.getElementById('storage-price')
    let y = c.innerText;
    let d = document.getElementById('delivery-price')
    let z = d.innerText;
    let g = 1299 + parseInt(x) + parseInt(y) + parseInt(z);
    // let g = parseFloat(w) + parseFloat(x) + parseFloat(y) + parseFloat(z);
    document.getElementById('total-price').innerText = g;
}
// promo section 
document.getElementById('appply-promo').addEventListener('click', function(){
    // get user promo code
    const emailField = document.getElementById('promo-code')
    const userEmail = emailField.value;
    // check user promo
    if(userEmail == 'stevekaku'){
        v = document.getElementById('total-price').innerText;
        x = parseInt(v) / 20;
        document.getElementById('last-price').innerText = x;
    }
});