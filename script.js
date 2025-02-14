// Letter Viewer Feature
let letterIndex = 0;
const letterImages = ["letter1.jpg", "letter2.jpg", "letter3.jpg", "letter4.jpg"];
const letterDisplay = document.getElementById("currentLetter");

function changeLetter(direction) {
    letterIndex += direction;
    if (letterIndex < 0) letterIndex = letterImages.length - 1;
    if (letterIndex >= letterImages.length) letterIndex = 0;
    letterDisplay.src = letterImages[letterIndex];
}

// Love Fortune Cat Feature
let fortuneIndex = 0;
const fortunes = [
    "I just want to remind you of something important.",
    "No matter what happens, I’m always here for you.",
    "You can count on me, always.",
    "When you're happy, I’ll be here to celebrate with you.",
    "When you're sad, I’ll be here to hold you.",
    "When you're tired, I’ll be here to comfort you.",
    "When you feel lost, I’ll be here to guide you.",
    "You don’t have to go through anything alone.",
    "You have me, now and always.",
    "I care about you more than you know."
];

function showFortune() {
    const fortuneText = document.getElementById("fortuneText");
    fortuneText.textContent = fortunes[fortuneIndex];
    fortuneIndex = (fortuneIndex + 1) % fortunes.length;
}

// Hug Counter Feature
let hugCount = 0;
const maxHugs = 10;

function sendHug() {
    if (hugCount < maxHugs) {
        hugCount++;
        document.getElementById("hugCount").textContent = hugCount;
        document.getElementById("loveProgress").style.width = `${(hugCount / maxHugs) * 100}%`;

        if (hugCount === maxHugs) {
            document.getElementById("loveMessage").textContent = "You unlocked a special surprise! 🎶";
            document.getElementById("musicContainer").style.display = "block";
        }
    }
}

function playSong() {
    let audio = new Audio("my_song.mp3");
    audio.play();
}
