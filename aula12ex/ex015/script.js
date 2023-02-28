function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        //res.innerHTML = ` Você tem ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criancamas.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemmas.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultomas.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criancafem.png')
            } else if (idade >=10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultofem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}