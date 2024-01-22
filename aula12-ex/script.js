
function loading(){

var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#image')

var date = new Date()
// var hour = date.getHours()
var hour = 22


msg.innerHTML = `Agora são ${hour} horas`

if (hour >= 0 && hour < 12){
    // BOM DIA
    img.src = 'images/morning.png'
    document.body.style.backgroundColor = '#e2cd9f'
}else if (hour < 18){
    // BOA TARDE
    img.src = 'images/afternoon.png'
    document.body.style.backgroundColor = '#FCB748'
}else{
    // BOA NOITE
    img.src = 'images/night.png'
    document.body.style.backgroundColor = "#022340"
}

}