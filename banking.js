// function doubleIt(num){
//     result = num * 2;
//     return result;
// }

// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText= depositInput.value;
    const depositAmount= parseFloat(depositAmountText);

    //clear input field
    depositInput.value = '';
    
    return depositAmount;
}


document.getElementById('deposit-button').addEventListener('click',function(){
    //update deposit

    /*
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText= depositInput.value;
    const depositAmount= parseFloat(depositAmountText);
    */
   const depositAmount = getInputValue();

    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositAmount;
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    //get current balance after deposit
    balanceTotal.innerText = previousbalanceTotal + depositAmount;

    //clear input field
    /*
    depositInput.value = '';
    */
})
//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){
    //update withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText= withdrawInput.value;
    const withdrawAmount= parseFloat(withdrawAmountText);
    //get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

    //update main balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrawAmount;
    //clear withdraw input
    withdrawInput.value = '';
})