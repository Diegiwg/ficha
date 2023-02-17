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
