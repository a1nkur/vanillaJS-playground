function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(event) {
  // Pick Audio
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // Pick Key
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!audio) return;

  key.classList.add("playing");

  // Reset Audio startime
  audio.currentTime = 0;
  audio.play();
}

function main() {
  // Attach Event Listener
  window.addEventListener("keydown", playSound);

  const keys = Array.from(document.querySelectorAll(".key")); // querySelectorAll returns a NodeList
  keys.forEach(key => key.addEventListener("transitionend", removeTransition)); // "transitionend" event gets called when the transition property has ended.
}

main();
