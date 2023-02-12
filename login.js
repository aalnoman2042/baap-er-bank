/* add click event handler */
document.getElementById('btn-submit').addEventListener('click',function(){
    /* get the email address */
    const emailFeild = document.getElementById('user-email')
     const email = emailFeild.value;
        /* get the password */
     const passFeild = document.getElementById('user-password')
     const password = passFeild.value;

     /* not the ideal way to cheak pass and email */
    if(email === "kaylabates@gmail.com" && password === "rohan"){
        window.location.href = 'bank.html'

    }
    else{
        
        alert('thik koira password de beyadop')
    }
})