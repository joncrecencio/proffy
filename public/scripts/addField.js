document.querySelector('#add-time').addEventListener('click', cloneField)

function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //peguei o campo e estou duplicando

    //Pegar os campos para limpar
    const fields = newFieldContainer.querySelectorAll('input')

    //limpando os campos

    fields.forEach(function(field){
        //pegar o field do momento
        field.value = ""
    });

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}