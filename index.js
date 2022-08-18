
const loginbtn = document.getElementById("login").addEventListener("click", function(){
    const loginArea = document.getElementById("login-area").style.display = "none";
    const transactionArea = document.getElementById("transaction-area").style.display = "block";
})


//Deposit Balance//
const depositAmount = document.getElementById("add-deposit-balance").addEventListener("click", function(){
    const depositNumber = getInputNumber("deposite-money")
    
    updateSpanTaxt("deposit-balance", depositNumber)
    updateSpanTaxt("balance", depositNumber)
    document.getElementById("deposite-money").value = "";
})

//Deposit Balance function//
function updateSpanTaxt (id, depositNumber){
    const current = document.getElementById(id).innerText;
    const CurrentBalance = parseFloat(current);
    const totalDeposit = depositNumber + CurrentBalance;
    document.getElementById(id).innerText = totalDeposit;
}

//Input Amount Function //
function getInputNumber (id){
    const addDepositAmound = document.getElementById(id).value;
    const depositNumber = parseFloat(addDepositAmound);
    return depositNumber;
}
//Withdraw balance//
const withdrawMoney = document.getElementById("withdraw-deposit-balance").addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdraw-money")

    updateSpanTaxt("withdraw-balance", withdrawNumber)
    updateSpanTaxt("balance", -withdrawNumber)
    document.getElementById("withdraw-money").value = "";
})

// //Withdraw balance function//
// function withdrawBalanceAmount (id, withdrawNumber){
//     const withdrawBalance = document.getElementById(id).innerText;
//     const withdrawCurrentBalance = parseFloat(withdrawBalance);
//     const totalWithdraw = withdrawNumber + withdrawCurrentBalance;
//     document.getElementById(id).innerText = totalWithdraw;
// }