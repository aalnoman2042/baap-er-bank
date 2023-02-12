                /* -------------------deposite---------------- */
/* step 1. add evet5 listener to the deposite button  */
document.getElementById('btn-deposite').addEventListener('click',function(){
  /* step 2. getting the deposite amount from the deposite input feild */
  const inputDepo = document.getElementById('deposite-feild')
  /* to get value we have to use .value  */
  const newDepoAmountString = inputDepo.value 
  
  const newDepoAmount = parseFloat(newDepoAmountString)
  /* step 3. get the current deposite total */

  const totalDepo = document.getElementById('deposite-total')

  const previusDepoAmountString = totalDepo.innerText

  const previousDepoAmount = parseFloat(previusDepoAmountString)

  /* add number to set the dedposite */
  const currentDepoTotal = previousDepoAmount + newDepoAmount
  
    totalDepo.innerText = currentDepoTotal;

    /* step 5.balance total */
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotal.innerText
     const previousBalanceTotal = parseFloat(previousBalanceTotalString)

     /* calculate current total balance */
     let currentBalanceTotal = previousBalanceTotal + newDepoAmount;
      balanceTotal.innerText = currentBalanceTotal;

     /* clear the deposite feild */
   inputDepo.value = '';
})


