function mostrarNotificacao() {
    const box = document.getElementById("notificacao");
    box.style.display = "block";
      setTimeout(() => {
        box.style.display = "none";
      }, 3000);
}