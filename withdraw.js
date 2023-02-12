/* ----------------------------withdraw---------------- */

/* step 1. add event to button */
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFeild = document.getElementById('withdraw-feild')
    const withdrawAmountString = withdrawFeild.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString)
      /* withdraw total get */
      const withdrawTotalAmount = document.getElementById('withdraw-total')
      const previousTotalWithdrawString = withdrawTotalAmount.innerText
      const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);
  
      /* current total withdraw */
      const currentWithdrawTotal = newWithdrawAmount + previousTotalWithdraw;
      withdrawTotalAmount.innerText = currentWithdrawTotal
      /* balance get */
       
      const balanceTotal = document.getElementById('balance-total')
      const previousBalanceTotalString = balanceTotal.innerText
       const previousBalanceTotal = parseFloat(previousBalanceTotalString)
  /* calculate current total balance */
       const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount  ;
      balanceTotal.innerText = currentBalanceTotal;
  
  
    
  /* clear the input feild */
  withdrawFeild.value = ''
  //     let currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  //         balanceTotal.innerText = currentBalanceTotal
  //     // currentBalanceTotal.innerText = previousBalanceTotal;
  
  })