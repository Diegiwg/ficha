function random(max) {
    return Math.floor(Math.random() * max);
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

ficha.jogador.textContent = random(1000);
ficha.vitalidade.textContent = random(10);
ficha.vida_total.textContent = 100 + ficha.vitalidade.textContent * 10;
