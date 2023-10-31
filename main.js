// criação de um objeto javascript, onde conseguimos criar chave-valor
const cardsDescricao = {
    'html': 'HTML é uma linguagem de marcação utilizada para criar a estrutura de uma página web.',
    'css': 'CSS é utilizado para criar a estilização de um site HTML.',
    'js': 'Javascript é uma linguagem de programação muito utilizada em web, app e games',
    'bootstrap': 'É um framework css',
    'firebase': 'É um banco de dados',
    'roblox': 'É uma engine de criação de jogos utilizando a linguagem LUA'
};
//cardsp e img-card
// Selecione todos os elementos de classe "card-habilidade"
const cardHabilidades = document.querySelectorAll('.card-habilidade');

// Adicione um ouvinte de evento de mouseover a cada card
cardHabilidades.forEach(card => {
    card.addEventListener('mouseover', () => {
        const imgSrc = card.querySelector('.img-card').getAttribute('src');
        //"./img/html.png"
        const cardName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1, imgSrc.lastIndexOf('.'));
        console.log(cardName)
        //imgSrc.lastIndexOf('/') = encontra a posição da última ocorrencia de uma barra / + 1 para começar no h (do html.png por exemplo)
        //imgSrc.lastIndexOf('.') acha o ultimo ponto que tem na string, que seria o do .png, como o . nao é inclusivo, ele vai até o l (do html e ai que extraimos a palavra html inteira)
        const descricao = cardsDescricao[cardName] || 'Descrição não encontrada';
        document.getElementById('descricao-habilidade').textContent = descricao;
    });
});

// Limpar a descrição quando o mouse sair da área dos cards
document.querySelector('.cards-habilidades').addEventListener('mouseout', () => {
    document.getElementById('descricao-habilidade').textContent = '';
});