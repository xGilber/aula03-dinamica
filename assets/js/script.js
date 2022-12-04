function validaIdade(idade) {
    idade != 0 ? window.location.href = 'shop.html?val=1' : window.location.href = 'shop.html?val=0'
}



function exibeMenu() {
    const url = new URLSearchParams(window.location.search)
    let acesso = url.get("val")

    if(acesso != 0){
        const elements =  document.getElementsByClassName('item +18')

        while (elements.length > 0) elements[0].remove();
        }
    }


function comprar(idCompra) {
    let valor
    switch (idCompra) {
        case 00:
            valor = document.getElementById('valor00').innerHTML
            window.location.href = 'checkout.html?valchk='+valor
            break;
        case 01:
            valor = document.getElementById('valor01').innerHTML
            window.location.href = 'checkout.html?valchk='+valor
            break;
        case 02:
            valor = document.getElementById('valor02').innerHTML
            window.location.href = 'checkout.html?valchk='+valor
            
            break;

    }

}


function checkout(){
    const url = new URLSearchParams(window.location.search)
    let valorck = url.get('valchk')
    document.getElementById('chkvalor').innerHTML = valorck


   
}