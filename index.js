const buttonsDiv = document.getElementById('buttons');
const visorInput = document.getElementById('visor');

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const divButton = document.getElementById('divide');

function addButtons(){
        for(var x=9; x>=0; x--){
                var button = document.createElement('div');
                button.id = x
                button.className = 'button'
                button.textContent = x
                if(x>=7){
                       buttonsDiv.insertBefore(button, minusButton) 
                }else if(x>=4){
                        buttonsDiv.insertBefore(button, plusButton) 
                }else if(x>=1){
                        buttonsDiv.insertBefore(button, divButton)
                }else{
                        buttonsDiv.appendChild(button)}
                button.onclick = function(){
                        add(this.textContent)
                }

        }
}

function add(x){
        visor.value = visor.value + x
}

function clearInput(){
        visorInput.value = ''
}

function del(){
        visorInput.value = visorInput.value.substr(0,visorInput.value.length-1)
}

function calculate(){
        var form = visorInput.value;
        form  = form.replaceAll('X', '*')
        visorInput.value = eval(form)
}

function init(){
        addButtons()
}

init()
