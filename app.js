document.addEventListener("DOMContentLoaded", function() {

const numero = document.querySelectorAll(".num");
const signos = document.querySelectorAll(".signos");
const borrar = document.querySelector(".signo_C");
var pantalla = document.getElementById("display");

var num = "";
var acumulado = 0;
var signo = " ";
var disparador = 0;


numero.forEach(function (e) {
  e.addEventListener("click", function () {
    pantalla.classList.remove("infinito");
    if (num == 0) num = "";
    if (num.length >= 5) return;
    num += e.innerHTML;
    pantalla.value = num;
    disparador++;
  });
});




signos.forEach(function (e) {
  e.addEventListener("click", function () {
    pantalla.classList.remove("infinito");
    signo = signo + e.innerHTML;
    if (signo == " " || disparador === 0) return;
      operaciones();
   disparador=0;
  });
});




 function operaciones(){
    if (signo.slice(-2) == " +"||signo.slice(-2)=="+="||signo.slice(-2)=="+-"
                              ||signo.slice(-2)=="+*"||signo.slice(-2)=="+/") {
        acumulado = acumulado + parseFloat(num);
        num = 0;    
        pantalla.value=acumulado;

    }else if (signo.slice(-2) == " -"||signo.slice(-2)=="-="||signo.slice(-2)=="-+"
                                    ||signo.slice(-2)=="-*"||signo.slice(-2)=="-/"){
      if (acumulado==0)acumulado=parseFloat(num)+acumulado;
      else acumulado = acumulado - parseFloat(num);
      num = 0;
      pantalla.value=acumulado;

    }else if (signo.slice(-2) ==" *" || signo.slice(-2) == "*="||signo.slice(-2)=="*+"
                                    ||signo.slice(-2)=="*-"||signo.slice(-2)=="*/"){
      if (acumulado==0)acumulado=parseFloat(num)+acumulado;
      else acumulado = acumulado * parseFloat(num);
      num = 0;  
      pantalla.value=acumulado;

    }else if (signo.slice(-2) == " /" || signo.slice(-2) == "/="||signo.slice(-2)=="/+"
                                     ||signo.slice(-2)=="/-"||signo.slice(-2)=="/*"){
                  if(num=="0"){
                    num = 0;
                    acumulado = 0;
                    signo = " ";
                    pantalla.classList.add("infinito");
                    pantalla.value="Operacion no Definida";
                    return;
                  }                 
      if (acumulado==0)acumulado=parseFloat(num)+acumulado;
      else acumulado = acumulado / parseFloat(num);
      num = 0;
      pantalla.value=acumulado;
    }
  }


  borrar.addEventListener("click",function(){
    pantalla.value="";
    num = "";
    acumulado = 0;
    signo = " ";
    disparador = 0;
  })


});