const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const passwordScreen = document.getElementById("passwordScreen");
const submitPassword = document.getElementById("submitPassword");
const passwordInput = document.getElementById("passwordInput");
const error = document.getElementById("error");

const content = document.getElementById("content");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const PASSWORD = "25122022";

openBtn.addEventListener("click", () => {
    cover.style.display = "none";
    passwordScreen.classList.remove("hidden");
});

submitPassword.addEventListener("click", () => {
    if (passwordInput.value === PASSWORD) {
        passwordScreen.style.display = "none";
        content.classList.remove("hidden");
        music.play();
        hitungHari();
    } else {
        error.style.display = "block";
    }
});

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "⏸️ Pause Musik";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Putar Musik";
    }
});

function hitungHari() {
    const startDate = new Date("2022-12-25");
    const today = new Date();
    const diff = today - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("days").textContent = days + " hari";
}

