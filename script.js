var c
var f 
var k
var r
var p= document.querySelector("#result")
function converter(){
    var temp = document.querySelector("#lista").value;
    var num = document.querySelector("#info").value;
    if(temp=="c"){
        f=((num*1.8)+32).toFixed(2)
        k= (parseFloat(num)+parseFloat(273)).toFixed(2)
        r= ((parseFloat(num)+parseFloat(273.15))*parseFloat(1.8)).toFixed(2)
        p.innerHTML ="Em  Farenheit = "+f+"<br>Em  Kelvin = "+k+"<br>Em  Rankine = "+r;
    }
    else if(temp=="f"){
        c= ((parseFloat(num)-parseFloat(32))/parseFloat(1.8)).toFixed(2)
        k= ((parseFloat(num)-parseFloat(32))*parseFloat(1.8)+parseFloat(273)).toFixed(2)
        r= (parseFloat(num)+parseFloat(459.67)).toFixed(2)
        p.innerHTML ="Em  Celsius = "+c+"<br>Em  Kelvin = "+k+"<br>Em  Rankine = "+r;
    }
    else if(temp=="k"){
        c= (parseFloat(num)-parseFloat(273)).toFixed(2)
        f= ((parseFloat(num)-parseFloat(273))*parseFloat(1.8)+32).toFixed(2)
        r= (parseFloat(num)*parseFloat(1.8)).toFixed(2)
        p.innerHTML ="Em  Celsius = "+c+"<br>Em  Farenheit = "+f+"<br>Em  Rankine = "+r;
    }
    else if(temp=="r"){
        c= ((parseFloat(num)/parseFloat(8))-parseFloat(273.15)).toFixed(2)
        f=  (parseFloat(num)-parseFloat(459.67)).toFixed(2)
        k= (parseFloat(num)/parseFloat(1.8)).toFixed(2)
        p.innerHTML ="Em  Celsius = "+c+"<br>Em  Farenheit = "+f+"<br>Em  Kelvin = "+k;
        
    }
}