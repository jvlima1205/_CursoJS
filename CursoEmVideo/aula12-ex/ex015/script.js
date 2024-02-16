function verify(){
    var date = new Date()
    var year = date.getFullYear()

    var fyear = document.querySelector('input#iyear')
    var res = document.querySelector('div#res')

    if (fyear.value.length == 0 || fyear.value > year){
        window.alert('[ERRO] Insira um ano válido')
    }else{

        var fgender = document.getElementsByName('radgender')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'picture')
        
        if(fgender[0].checked){
            gender = 'Masculino'
            if (age >= 0 && age <= 10){
                img.setAttribute('src', 'images/baby-boy.png')
            }else if (age < 21){
                img.setAttribute('src', 'images/young-boy.png')
            }else if(age < 50){
                img.setAttribute('src', 'images/man.png')
            }else{
                img.setAttribute('src', 'images/old-man.png')
            }
        }else if (fgender[1].checked){
            gender = 'Feminino'
            if (age >= 0 && age <= 10){
                img.setAttribute('src', 'images/baby-girl.png')
            }else if (age < 21){
                img.setAttribute('src', 'images/young-girl.png')
            }else if(age < 50){
                img.setAttribute('src', 'images/woman.png')
            }else{
                img.setAttribute('src', 'images/old-woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${age} anos`
        res.appendChild(img)

    }
}