const numeros = document.getElementsByClassName('numero')
const numeroAgregar = document.getElementById('num-1')
let numeroClikeado;
const boton = document.getElementById('btn');
const card1 = document.getElementById('first-card')
const card2 =document.getElementById('second-card')

for(let i=0; i<numeros.length; i++){
    
    numeros[i].parentElement.addEventListener('click', () =>{
        numeros[i].parentElement.style.backgroundColor = '#7c8998';
        numeros[i].style.color = '#fff';
        numeroClikeado = numeros[i].innerHTML;
        
        boton.addEventListener('click', () =>{
            card1.style.display = 'none';
            card2.style.display = 'initial';
        })

        numeroAgregar.innerHTML = numeroClikeado;
    })
   
}



