
function verificar() {

    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}` /* mostra na tela da pagina. */

        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = `Homem`
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'meninoCrianca.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'homemJovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemAdulto.jpg')
            } else {
                img.setAttribute('src', 'homemIdoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = `Mulher`
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'meninaCrianca.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulherAdulta.jpg')
            } else {
                img.setAttribute('src', 'mulherIdosa.jpg')
            }
        }
        
        res.style.textAlign = 'center'   /* PRA CENTRALIZAR SEM USAR O CSS */
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
      

    }

}