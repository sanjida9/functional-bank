// function doubleIt(num){
//     result = num * 2;
//     return result;
// }

// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText= inputField.value;
    const inputAmountValue= parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';

    return inputAmountValue;
}

function updateTotalField(totalFieldId,amount){
    //debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    return previousbalanceTotal;
}

function updateBalance(amount,isAdd){

   
    const balanceTotal = document.getElementById('balance-total');
     /*
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    */
   previousbalanceTotal = getCurrentBalance();
    //get current balance after deposit
    if(isAdd == true){
    balanceTotal.innerText = previousbalanceTotal + amount;
    }
    else
    {
        balanceTotal.innerText = previousbalanceTotal - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click',function(){
    //update deposit

    /*
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText= depositinput.value;
    const depositAmount= parseFloat(depositAmountText);
    */
   const depositAmount = getInputValue('deposit-input');
   if( depositAmount > 0 ){

    updateTotalField('deposit-total',depositAmount);
    updateBalance(depositAmount,true);

   }

    //get and update  deposit total

    /*
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    */
  

    //update balance

    /*
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    //get current balance after deposit

    balanceTotal.innerText = previousbalanceTotal + depositAmount;
    */

    

    //clear input field
    /*
    depositInput.value = '';
    */
})
//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){
    //update withdraw

    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText= withdrawInput.value;
    const withdrawAmount= parseFloat(withdrawAmountText);
    */

   const withdrawAmount = getInputValue('withdraw-input');
   const currentBalance = getCurrentBalance();
   if( withdrawAmount > 0 && withdrawAmount < currentBalance ){

   updateTotalField('withdraw-total',withdrawAmount);
   updateBalance(withdrawAmount,false);

   }

   if( withdrawAmount > currentBalance ){
       alert("not enough");
   }

    //get and update withdraw total

    /*
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;
    */
   

    //update main balance after withdraw

    /*
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrawAmount;
    */
   

    //clear withdraw input

    //withdrawInput.value = '';
})