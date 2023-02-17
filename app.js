function random(max) {
    return Math.round(Math.random() * max);
}

const app = document.getElementById("app");

function speak(msg) {
    const speaker = new SpeechSynthesisUtterance();
    speaker.text = msg;
    window.speechSynthesis.speak(speaker);
}

function myFunction(e) {
    if (e.key == "J" && e.shiftKey) {
        const j = document.getElementById("jogador").textContent;
        speak(j);
    }
}

document.addEventListener("keypress", myFunction);

const ficha = {
    jogador: document.getElementById("jogador"),
    vida_total: document.getElementById("vida-total"),
    vitalidade: document.getElementById("vitalidade"),
};

const jogador = random(1000);
ficha.jogador.textContent = `Jogador: ${jogador}`;

const vitalidade = random(10);
ficha.vitalidade.textContent = `Vitalidade: ${vitalidade}`;

const vida_total = 100 + vitalidade * 10;
ficha.vida_total.textContent = `Vida: ${random(vida_total)} de ${vida_total}`;
