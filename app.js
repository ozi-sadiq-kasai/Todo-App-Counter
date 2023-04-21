let input = document.querySelector('input')
let add = document.querySelector('button')
let ul = document.querySelector('ul')
let del = document.querySelector('.del')
// let remove = document.querySelector('span')
// let li = document.querySelector('li')
let container = []



add.addEventListener('click',()=>{
   if(container.length > 4){
      alert('Exceeded 5 Todo items')
   }else{
      let data = input.value
      let li = document.createElement('li')
           li.innerHTML=`${data}<span class='del'>x</span>`
          ul.appendChild(li)
          container.push(data)
      input.value = ' '
   }  
})

// working on removing elements
ul.addEventListener('click', (e)=>{
 if(e.target.classList.contains('del')){
   let li= e.target.parentElement;
   ul.removeChild(li)
 }
  })

