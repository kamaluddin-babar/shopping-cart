
// add one more quantity to product
const addBtnOne = document.getElementById("addBtnOne");
addBtnOne.addEventListener("click", function () {
    updateInputValue("productQuantityOne", "productOneAmount", 1, 1219);
    QuantityCheck("productQuantityOne", "reduceBtnOne");
});

const addBtnTwo = document.getElementById("addBtnTwo");
addBtnTwo.addEventListener("click", function () {
    updateInputValue("productQuantityTwo", "productTwoAmount", 1, 59);
    QuantityCheck("productQuantityTwo", "reduceBtnTwo");
});

// reduce one quantity from product
const reduceBtnOne = document.getElementById("reduceBtnOne");
reduceBtnOne.addEventListener("click", function () {
    updateInputValue("productQuantityOne", "productOneAmount", -1, 1219);
    QuantityCheck("productQuantityOne", "reduceBtnOne");
});

const reduceBtnTwo = document.getElementById("reduceBtnTwo");
reduceBtnTwo.addEventListener("click", function () {
    updateInputValue("productQuantityTwo", "productTwoAmount", -1, 59);
    QuantityCheck("productQuantityTwo", "reduceBtnTwo");
});




function updateInputValue(id, productAmountId, signNum, perProductPrice) {
    const productQuantityOne = document.getElementById(id).value;
    let newProductQuantity = parseFloat(productQuantityOne) + signNum;
    document.getElementById(id).value = newProductQuantity;

    updateProductAmount(productAmountId, newProductQuantity, perProductPrice);
    totalBillCalculate();
}

function updateProductAmount(id, quantityNum, perProductPrice) {
    let productTotalAmount = perProductPrice * quantityNum;
    document.getElementById(id).innerText = productTotalAmount;
    console.log(id, productTotalAmount);

}

function totalBillCalculate() {
    const productOneAmount = document.getElementById("productOneAmount").innerText;
    const productTwoAmount = document.getElementById("productTwoAmount").innerText;

    let subtotalAmount = parseFloat(productOneAmount) + parseFloat(productTwoAmount);
    document.getElementById("subtotal").innerText = subtotalAmount;

    let taxAmount = subtotalAmount * 0.10;
    taxAmount = taxAmount.toFixed(2);
    document.getElementById("tax").innerText = taxAmount;

    let totalAmount = subtotalAmount + parseFloat(taxAmount);
    document.getElementById("total").innerText = totalAmount;

}

function QuantityCheck(inputFieldId, reduceBtnId) {
    const currentValue = document.getElementById(inputFieldId).value;
    if (currentValue == "0") {
        document.getElementById(reduceBtnId).disabled = true;
    }
    else{
        document.getElementById(reduceBtnId).disabled = false;
    }
}