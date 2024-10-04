(() => {
  document.addEventListener("keydown", (event) => {
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code)
    ) {
      gameState.setPacmanDirection(event.code);
    }
  });
})();
