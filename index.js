function entrada(event){
      window.location.href = "inicio.html"
}



function ingresar(){
  document.getElementById("mensaje").innerText = "Bienvenido a la historia";
  
  setTimeout(() => {
    window.location.href = "salsa.html";
  }, 1300);
}

function ingresar1(){
  document.getElementById("mensaje1").innerText = "Oiga mire vea";
  
  setTimeout(() => {
    window.location.href = "cali.html";
  }, 1300);
}

function ingresar2(){
  document.getElementById("mensaje2").innerText = "Conoce un poquito mas ve!";
  
  setTimeout(() => {
    window.location.href = "exponentes.html";
  }, 1300);
}