// Localiza o ano atual no rodapé
const elAno = document.getElementById('ano');
if (elAno) {
  elAno.textContent = new Date().getFullYear();
}

// Carrega imagens das capas (se existirem) com base no atributo data-cover
// Substitua os nomes em index.html por arquivos reais, ex: starter.jpg, book1.jpg, etc.
document.querySelectorAll('.cover').forEach((capa) => {
  const file = capa.getAttribute('data-cover');
  if (!file) return;
  // Tenta pré-carregar para aplicar somente quando disponível
  const img = new Image();
  img.onload = () => { capa.style.backgroundImage = `url('${file}')`; };
  img.onerror = () => { /* mantém cor de fundo padrão se não encontrar o arquivo */ };
  img.src = file;
});

document.querySelectorAll('.card').forEach((card) => {
  card.setAttribute('tabindex', '0');
});
