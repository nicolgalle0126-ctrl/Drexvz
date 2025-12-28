const music = document.getElementById("music");
const msg = document.getElementById("msg");

const frases = [
    "Amarte es mi felicidad ❤️",
    "Eres para lo más importante en mi vida⭐",
    "Mi corazón late por ti 💘",
    "TE AMO MI DREX ❤️🦖",
];
let i = 0;

function cambiarFrase() {
    msg.textContent = frases[i];
    i = (i + 1) % frases.length;
}
setInterval(cambiarFrase, 2000);
cambiarFrase();

/* Pétalos 🌹 */
function petalos() {
    for (let j = 0; j < 8; j++) {
        let petal = document.createElement("div");
        petal.className = "petalo";
        petal.textContent = "🌸";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.fontSize = (Math.random() * 15 + 20) + "px";
        document.body.appendChild(petal);

        setTimeout(() => petal.remove(), 5000);
    }
}

setInterval(petalos, 900);

/* Botón */
document.getElementById("startBtn").addEventListener("click", () => {
    music.play();
    petalos();
    document.getElementById("startBtn").style.display = "none";
    document.querySelector(".heart").style.display = "none";
});
