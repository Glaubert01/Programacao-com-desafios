let tipo = document.getElementById('tipo-ingresso');
let quantidade = document.getElementById('qtd');

if(tipo.value == 'Pista') {
    comprarPista(quantidade.value);
}

function comprarPista(quantidade) {
    let qtdPista = document.getElementById('qtd-pista');
    
    if (quantidade > qtdPista) {
        alert('Quantidade indisponível');
    }
}