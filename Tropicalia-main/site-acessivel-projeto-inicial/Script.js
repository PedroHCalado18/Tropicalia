document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('fontemaior');
    const diminuiFonteBotao = document.getElementById('fontemenor');

    const botaoDeAcessibilidade = document.getElementById('acessivel')
    const opcoesDeAcessibilidade = document.getElementById('batata')

    botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
})


    let tamanhofonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        if (tamanhofonte < 2)
        tamanhofonte += 0.1;
        document.body.style.fontSize=`${tamanhofonte}rem`;
    })
     
     diminuiFonteBotao.addEventListener('click', function(){
        if (tamanhofonte > 0.6)
        tamanhofonte -= 0.1;
        document.body.style.fontSize = `${tamanhofonte}rem`;
})

})