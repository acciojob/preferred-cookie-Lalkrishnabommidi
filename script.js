//your JS code here. If required.
const fontSize = document.getElementById("fontsize");
const fontColor = document.getElementById("fontcolor");
const form = document.querySelector("form");

function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }

  return null;
}

function applyPreferences() {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize);
    fontSize.value = parseInt(savedSize);
  }

  if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    fontColor.value = savedColor;
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const size = fontSize.value;
  const color = fontColor.value;

  document.cookie = `fontsize=${size}px; path=/`;
  document.cookie = `fontcolor=${encodeURIComponent(color)}; path=/`;

  document.documentElement.style.setProperty("--fontsize", `${size}px`);
  document.documentElement.style.setProperty("--fontcolor", color);
});

applyPreferences();