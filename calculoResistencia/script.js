function FazerCalculo(){
    let valueF01 = document.getElementById('faixa01').value;
 
    let valueF02 = document.getElementById('faixa02').value;
   
    let mult =  parseFloat(document.getElementById('mult').value);

    let toler = parseFloat(document.getElementById('toler').value);
    
    let juntar = valueF01+""+valueF02;
    let resistencia = juntar * mult;
    toler = resistencia * toler;
    let tolemin = resistencia - toler;
    let tolermax = resistencia + toler;
    
    document.getElementById('result').value = resistencia ;
   document.getElementById("resToler").value = tolemin +" / " + tolermax;
    
}