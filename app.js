const app = document.getElementById("app");

function myFunction(e) {
    if (e.key == "J" && e.shiftKey) {
        alert(document.getElementById("jogador").textContent);
    }
}

document.addEventListener("keypress", myFunction);
