let btnMenu = document.getElementById('button-abrir') 
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('button-abrir')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('button-abrir')
})

