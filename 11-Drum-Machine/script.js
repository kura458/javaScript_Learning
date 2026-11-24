
// ==========================================
// 1. DOM ELEMENTS
// ==========================================

const drumMachine = document.getElementById("drum-machine");
const padBank = document.getElementById("pad-bank");
const display = document.getElementById("display");

const drumPads = document.querySelectorAll(".drum-pad");


// ==========================================
// 2. PLAY A DRUM SOUND
// ==========================================

const playSound = (key) => {
  const audio = document.getElementById(key);

  const pad = audio?.parentElement;

  if (!audio || !pad) return;

  // Restart the sound so rapid presses work.
  audio.currentTime = 0;

  // Play the audio clip.
  audio.play().catch((error) => {
    console.error("Unable to play audio:", error);
  });

  // Display the sound name.
  display.textContent = pad.id
    .replaceAll("-", " ")
    .toUpperCase();

  // Add the active visual effect.
  pad.classList.add("active");

  // Remove the active effect after a short time.
  setTimeout(() => {
    pad.classList.remove("active");
  }, 120);
};


// ==========================================
// 3. CLICK EVENT FOR DRUM PADS
// ==========================================

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const key = pad.querySelector(".clip").id;

    playSound(key);
  });
});


// ==========================================
// 4. KEYBOARD EVENT
// ==========================================

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  // Ignore keys that are not drum-pad keys.
  if (!validKeys.includes(key)) return;

  // Prevent repeated playback from holding a key down.
  if (event.repeat) return;

  playSound(key);
});
