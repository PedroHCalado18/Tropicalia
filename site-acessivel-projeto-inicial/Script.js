document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('fontemaior');
    const diminuiFonteBotao = document.getElementById('fontemenor');


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