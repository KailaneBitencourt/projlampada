var img = window.document.getElementById("img1")
var lamp = window.document.querySelector(".lamp")

function aLampadaQuebrou(){
    return img.src.indexOf('quebrada') > -1
}
//idexOf - método que procura a posição de um caractere

function ligarLampada(){
    if (!aLampadaQuebrou()){
        img.src = './imgs/ligada.jpg'
    } else{
        window.alert("OPPPS A LÂMPADA QUEBROU, ATUALIZE A PÁGINA PARA ELA VOLTAR A FUNCIONAR!")
    }
}
function desligarLampada(){
    if (!aLampadaQuebrou()){
        img.src = './imgs/desligada.jpg'
    }
}
function quebrarlampada(){
    img.src = './imgs/quebrada.jpg'
}

lamp.addEventListener('mouseover', ligarLampada)
lamp.addEventListener('mouseleave', desligarLampada)
lamp.addEventListener('dblclick', quebrarlampada) //duplo click 