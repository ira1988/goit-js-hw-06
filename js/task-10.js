function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const ref={
  input:document.querySelector('input'),
  btnCreate:document.querySelector('[data-create]'),
  btnDelete:document.querySelector('[data-destroy]'),
  boxes:document.querySelector('#boxes'),
  
}

let amount =0;

ref.input.addEventListener('input',getAmountOnInput)
function getAmountOnInput(event){
amount= event.currentTarget.value
}

ref.btnCreate.addEventListener('click', createBox)

function createBox( ){


  const boxMarkup  =[]
  for(let i=1;i<=amount;i+=1){
  let  width = 30+i*10;
  const color= getRandomHexColor();
    boxMarkup.push(`<div class=".box__item" style="width:${width}px;height:${width}px;background:${color}"></div>`

    )
  }
  const boxMarkupString=boxMarkup.join('')
  console.log(boxMarkupString)
  ref.boxes.insertAdjacentHTML('beforeend', boxMarkupString)
  ref.boxes.classList.add('box-contaiten')
  }



ref.btnDelete.addEventListener('click', clearPage)

function clearPage(){
  ref.boxes.innerHTML = "";

  ref.input.value =""
}







