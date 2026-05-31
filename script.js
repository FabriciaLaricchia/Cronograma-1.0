
//Função para salvar os dados
function salvarCronograma() {
    const tbody = document.querySelector("#cronograma tbody");
    localStorage.setItem("meuCronogramaEstrutura", tbody.innerHTML);
}

function salvarTudo() {

    salvarCronograma();


    const bgPicker = document.getElementById('bg-picker');
    if (bgPicker) {
        localStorage.setItem("backgroundCronograma", bgPicker.value);
    }
}

window.onload = function() {

    const dadosSalvos = localStorage.getItem("meuCronogramaEstrutura");
    if (dadosSalvos) {
        document.querySelector("#cronograma tbody").innerHTML = dadosSalvos;
    }


    const corSalva = localStorage.getItem("backgroundCronograma");
    if (corSalva) {
        document.documentElement.style.setProperty('--custom-bg', corSalva);
        

        const bgPicker = document.getElementById('bg-picker');
        if (bgPicker) bgPicker.value = corSalva;
    }
};

//Função para adicionar o horário e a lixeira
function Adicionar() {
    const tabela = document.querySelector('table tbody');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td contenteditable="true">00:00</td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td style="display: flex; justify-content: space-between; align-items: center; min-height: 100%;">
    <span contenteditable="true" style="flex-grow: 1; outline: none; padding-right: 5px;"></span>
            <button class="btn-excluir" onclick="this.closest('tr').remove(); salvarTudo();"><img src="img/lixeira.png"></button>
        </td>
    `;

    tabela.appendChild(novaLinha);
}
