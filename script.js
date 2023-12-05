function calcular() {
    var valor = document.getElementById('valor').value;
    var resultado = document.getElementById('resultado');

    var gastoFixo = valor * 0.30;
    var caixaTrabalho = valor * 0.18;
    var investimento = valor * 0.20;
    var salario = valor * 0.32;

    resultado.innerHTML = `
        <p>Gasto Fixo: R$ ${gastoFixo.toFixed(2)}</p>
        <p>Caixa de Trabalho: R$ ${caixaTrabalho.toFixed(2)}</p>
        <p>Investimento: R$ ${investimento.toFixed(2)}</p>
        <p>Salário: R$ ${salario.toFixed(2)}</p>
    `;
}

// Função para alternar o modo escuro
function toggleDarkMode() {
    var darkModeButton = document.getElementById('darkModeButton');
    var darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        localStorage.setItem('darkMode', 'enabled');
        document.body.classList.add('dark-mode');
        darkModeButton.textContent = '🌙';
    } else {
        localStorage.setItem('darkMode', null);
        document.body.classList.remove('dark-mode');
        darkModeButton.textContent = '☀️';
    }
}