const avanca = document.querySelectorALL('.btn-proximo');

avanca.forEach(button =>{
    button.addEventlistener('click', function(){
        const atual - document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classlit.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })

})