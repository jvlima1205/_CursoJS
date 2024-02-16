function count(){
    var start = document.querySelector('input#istart')
    var end = document.querySelector('input#iend')
    var interval = document.querySelector('input#iinterval')
    
    var res = document.querySelector('div#res')
    
    
    if(start.value.length == 0 || end.value.length == 0 || interval.value.length == 0){
        res.innerHTML = '[ERROR] null data'
    }else{
        res.innerHTML = 'Count: <br>'
        let s = Number(start.value)
        let e = Number(end.value)
        let i = Number(interval.value)
        
        
        if (i <= 0){
            res.innerHTML = '[ERROR] invalid interval, considering interval = 1 <br>'  
            i = 1
        }
        if (s < e){
            res.innerHTML = 'Count: <br>'
            for(let c = s; c <= e; c += i){
                res.innerHTML += `${c} ⭢ `
            }
            
        }else{
            res.innerHTML = 'Count: <br>'
            for(let c = s; c >= e; c -= i){
                res.innerHTML += `${c} ⭢ `
            }
        }
        res.innerHTML += '\u{1F3C1}'
        

        
        /* while(s < e){
            res.innerHTML += `${s}, `
            s += i
        } */

    }

}