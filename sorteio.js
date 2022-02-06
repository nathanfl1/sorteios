let cont = 2;
let botaoAdd = document.querySelector("#add");
botaoAdd.addEventListener('click', function()
{
    cont++;
    let div = document.createElement('div');
    div.classList.add('sorteios');
    div.innerHTML = `<label for="opcoes">Opção ${cont}:</label>
    <input id="opcoes">`
    let pai = document.querySelector('#secaoSorteios');
    pai.appendChild(div);
    console.log(div);
});
let botaoFinalizar = document.querySelector('#finalizar');
botaoFinalizar.addEventListener('click', function()
{
    let pos = Math.floor(Math.random() * cont);
    console.log(pos);
    let divs = document.querySelectorAll('.sorteios');
    for (let div of divs) {
        div.classList.remove('selecionado');
    }
    divs[pos].classList.add('selecionado')
    let inputResultado = document.querySelector('#resultado');
    let inputSelecionada = document.querySelector('.selecionado input');
    inputResultado.value = inputSelecionada.value;

});
