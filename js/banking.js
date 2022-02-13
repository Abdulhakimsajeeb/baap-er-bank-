//  inputField function 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputAmountText = (inputField.value);
    const amountValue = parseFloat(inputAmountText);
    // clear the deposit input field
    inputField.value = '';
    return amountValue;
}
//  inputTotalField function
function updateTotalField(totalFieldId, amount) {
    const TotalElement = document.getElementById(totalFieldId);
    const totalText = TotalElement.innerText;
    const previousTotal = parseFloat(totalText);

    // new deposit and previous deposite jhog korbo 
    const newDepositTotal = amount + previousTotal;
    TotalElement.innerText = newDepositTotal;
}

//  inputTotalField function
function updateBalance(newDepositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - newDepositAmount;
        balanceTotal.innerText = newBalanceTotal;

    }
}
// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited

    // const depositInput = document.getElementById('deposit-input')
    // const newDepositAmountText = (depositInput.value);
    // const newDepositAmount = parseFloat(newDepositAmountText);

    // call the function ***************
    const newDepositAmount = getInputValue('deposit-input');

    // update diposit total 
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);

    // // new deposit and previous deposite jhog korbo 
    // const newDepositTotal = newDepositAmount + previousDepositAmount;
    // depositTotal.innerText = newDepositTotal;

    // call the function ************
    updateTotalField('deposit-total', newDepositAmount);

    // update account balance
    // const balanceTotal = document.getElementById('balance-total')
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // // new deposit total and previous balance total jhog korbo
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;

    // call the function ****************************
    updateBalance(newDepositAmount, true);


});


// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {

    // get the amount withdraw
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);

    // call the function *****************
    const newWithdrawAmount = getInputValue('withdraw-input');

    // update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // // new withdraw amount and previous withdraw totall jhog korbo 
    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    // call the function **************************
    updateTotalField('withdraw-total', newWithdrawAmount)

    // // clear the deposit input field
    // withdrawInput.value = '';

    // update account balance
    // const balanceTotal = document.getElementById('balance-total')
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // // previous balance total theke new withdraw amount bad divo 
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // balanceTotal.innerText = newBalanceTotal;
    updateBalance(newWithdrawAmount, false);

})

