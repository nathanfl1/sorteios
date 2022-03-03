let cont = 2;
mudarFoco();
let botaoAdd = document.querySelector("#add");
botaoAdd.addEventListener('click', function () {
    cont++;
    let div = document.createElement('div');
    div.classList.add('sorteios');
    div.innerHTML = `<label for="opcoes">Opção ${cont}:</label>
    <input id="opcoes">`
    let pai = document.querySelector('#secaoSorteios');
    pai.appendChild(div);
    mudarFoco();
});
let botaoFinalizar = document.querySelector('#finalizar');
botaoFinalizar.addEventListener('click', function () {
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
function mudarFoco() {
    let inputs = document.querySelectorAll('#opcoes');
    for (let i = 0; i < cont; i++) {
        inputs[i].addEventListener('keyup', function (e) {
            switch (e.key) {
                case "ArrowDown":
                    inputs[i + 1].focus(); break;
                case "ArrowUp":
                    inputs[i - 1].focus(); break;
            }
        });
    }
}