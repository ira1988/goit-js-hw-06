const inputRef = document.querySelector("input");

inputRef.addEventListener("blur", onBlurChangeBorder);

function onBlurChangeBorder(event) {

    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)){
        event.currentTarget.classList.add('valid')
    

}
    else {
        event.currentTarget.classList.add("invalid")
}
  
    

}



    
