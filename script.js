<script>
  function copiarIngredientes() {
    const lista = document.getElementById("lista-ingredientes");
    const texto = Array.from(lista.children).map(li => li.textContent).join('\n');

    navigator.clipboard.writeText(texto).then(() => {
      alert("Ingredientes copiados! ✅");
    }).catch(err => {
      alert("Erro ao copiar. 😓");
      console.error(err);
    });
  }
</script>
