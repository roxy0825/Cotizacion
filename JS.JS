function totalResultados(){
    
    const numeroDias = document.getElementById('numeroDias').value;
    const numeroPersonas = document.getElementById('numeroPersonas').value;
    const valorPersonas = document.getElementById('valorPersonas').value;
 
    let total = (numeroDias * numeroPersonas)*valorPersonas;
    let subTotal;
    let descuento;
    let iva;
    let pagoNeto;
 
    if (numeroPersonas <= 4) {
       subTotal = total;
       descuento = 0;
       iva = total*0.19;
       pagoNeto = subTotal + iva;
    }else if(numeroPersonas <= 8){
       subTotal = total;
       descuento = total*0.10;
       iva = (subTotal - descuento) * 0.19;
       pagoNeto = subTotal + iva;
    }else if(numeroPersonas <= 12){
       subTotal = total;
       descuento = total*0.25;
       iva = (subTotal - descuento) * 0.19;
       pagoNeto = subTotal + iva;
    }else{
       subTotal = total;
       descuento = total*0.30;
       iva = (subTotal - descuento) * 0.19;
       pagoNeto = subTotal + iva;
    }
 
 
    document.getElementById('subTotal').innerHTML = '$ ' + subTotal ;
    document.getElementById('descuento').innerHTML= '$ ' + descuento;
    document.getElementById('iva').innerHTML= '$ ' + iva;
    document.getElementById('pagoNeto').innerHTML= '$ ' + pagoNeto;
    }