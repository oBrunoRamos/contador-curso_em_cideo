function contar(){
    var inc = document.getElementById('boxinc')
    var fim = document.getElementById('boxfim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('resposta')
    if(inc.value == '' || fim.value == ''){
        window.alert('Impossivel concluir a ação! Preencha os campos em branco.')
        res.innerHTML = 'impossível contar'
    }else{       
        res.innerHTML = 'contando: '
        let i = Number(inc.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
    
        if(p <= 0){
        window.alert('Nenhum valor detectado para o "Passo", valor "1" atribuído.')
        p = 1
        }
        if(i<f){ //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else{  //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }    
        }
    res.innerHTML += `\u{1F3C1}`
    }
}