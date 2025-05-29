
function atualizarContador() {
    const dataLancamento = new Date("2025-07-01T00:00:00");
    const agora = new Date();
    const diferenca = dataLancamento - agora;
    const contador = document.getElementById("contador");
  
    if (diferenca <= 0) {
      contador.innerText = "LANÇADO!";
      return;
    }
  
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);
  
    contador.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }
  
  
const imagens = [
    { src: "fuscatraz.jpg" },
    { src: "fuscafrente.jpg" },
    { src: "fuscajato.jpg" },
    { src: "fuscaviao.jpg" }
  ];
  
  let imagemAtual = 0;
  
  function mudarImagem(direcao) {
    
    imagemAtual += direcao;
    
    
    if (imagemAtual < 0) {
      imagemAtual = imagens.length - 1;
    }
    
   
    if (imagemAtual >= imagens.length) {
      imagemAtual = 0;
    }
    
   
    const img = document.getElementById("carousel-img");
    const legenda = document.getElementById("carousel-caption");
    
    img.src = imagens[imagemAtual].src;
    img.alt = imagens[imagemAtual].legenda;
    legenda.textContent = imagens[imagemAtual].legenda;
  }
  
  
  function atualizarContador() {
    const dataLancamento = new Date("2025-07-01T00:00:00");
    const agora = new Date();
    const diferenca = dataLancamento - agora;
    const contador = document.getElementById("contador");
  
    if (diferenca <= 0) {
      contador.innerText = "LANÇADO!";
      return;
    }
  
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);
  
    contador.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }
  
  
  setInterval(atualizarContador, 1000);
  atualizarContador();
  
  
 
  document.addEventListener('DOMContentLoaded', function() {
    
    setInterval(atualizarContador, 1000);
    atualizarContador();
    
    
    const btnEsquerda = document.querySelector(".carousel-btn.left");
    const btnDireita = document.querySelector(".carousel-btn.right");
    
    if (btnEsquerda) {
      btnEsquerda.addEventListener("click", imagemAnterior);
    }
    
    if (btnDireita) {
      btnDireita.addEventListener("click", proximaImagem);
    }
    
   
    mostrarImagem(indiceAtual);
    
    
    
  });