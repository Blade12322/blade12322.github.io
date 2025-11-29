function getRandomSpins() {
  // целое число от 1 до 100
  return Math.floor(Math.random() * 100) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("signalButton");
  const resultBox = document.getElementById("resultBox");
  const spinsValue = document.getElementById("spinsValue");
  const closeBtn = document.getElementById("closeResult");

  btn.addEventListener("click", () => {
    const spins = getRandomSpins();
    spinsValue.textContent = String(spins);
    resultBox.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    resultBox.classList.add("hidden");
  });

  // Закрытие по тапу по фону
  resultBox.addEventListener("click", (e) => {
    if (e.target === resultBox) {
      resultBox.classList.add("hidden");
    }
  });
});
