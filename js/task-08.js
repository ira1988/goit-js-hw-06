const ref = {
    form: document.querySelector('.login-form'),
    btnLogin:document.querySelector('button ')
}

ref.form.addEventListener('submit', onSubmit)

const formData={}
function onSubmit(event){
    event.preventDefault()
    // console.dir(event.currentTarget.elements)
   const  {elements: {email,password}} = event.currentTarget
    // console.log(email.value)
    // console.log(password.value)

    if (email.value && password.value !== "") {
        formData.userEmail=`${email.value}`
        formData.userpassword=`${password.value}`
       
    }
    else {
        alert` Please,fill up all information before login `
    
    }

}

console.log(formData)