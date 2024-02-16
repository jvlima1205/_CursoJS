function table(){
    var factor = document.getElementById('ifactor').value;
    var res = document.getElementById('ires')

    if(factor === "" || factor === null){
        res.innerHTML = '[ERROR] Insert a number!'
    }else{
        let f = Number(factor)
        res.innerHTML = ""
        for(let x = 0; x <= 10; x++){
            res.innerHTML += `${f} x ${x} = ${f * x} \n`
        }
    }
}