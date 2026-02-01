const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

let messages = [
  "Think again 😏",
  "Are you sure? 😭",
  "Pleaseeee 💔",
  "Don't break my heart 🥺",
  "Last chance 😤",
  "Okay stop clicking No 😡"
];

let clickCount = 0;

// NO button moves randomly
noBtn.addEventListener("click", () => {
  clickCount++;

  // Change text each time
  noBtn.innerText = messages[clickCount % messages.length];

  // Random position
  let x = Math.random() * (window.innerWidth - 150);
  let y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES button works
yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  result.classList.remove("hidden");
});
