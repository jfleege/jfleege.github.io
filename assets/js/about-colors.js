// assets/js/about-colors.js
document.addEventListener("DOMContentLoaded", () => {
  // If this widget isn't on the page, do nothing
  const root = document.querySelector("#colors");
  if (!root) return;

  // Helper: set background for a selector if it exists
  function setBg(sel, value) {
    const el = root.querySelector(sel);
    if (el) el.style.background = value;
  }

  // You can animate these however you want; here's a simple rotating palette
  const frames = [
    ["#FF4B4B", "rgb(255,168,40)", "hsl(44,100%,59%)", "#FF4B4B33", "rgba(255,168,40,.25)", "hsla(44,100%,59%,.25)"],
    ["#f2b705", "rgb(255,75,75)", "hsl(160,60%,35%)", "#f2b70533", "rgba(255,75,75,.25)", "hsla(160,60%,35%,.25)"],
    ["#ffffff", "rgb(181,184,179)", "hsl(210,10%,70%)", "#ffffff33", "rgba(181,184,179,.25)", "hsla(210,10%,70%,.25)"],
  ];

  let i = 0;
  function render() {
    const [hex, rgb, hsl, hexa, rgba, hsla] = frames[i % frames.length];
    setBg(".hex", hex);
    setBg(".rgb", rgb);
    setBg(".hsl", hsl);
    setBg(".hexa", hexa);
    setBg(".rgba", rgba);
    setBg(".hsla", hsla);
    i++;
  }

  render();
  setInterval(render, 1100);
});
