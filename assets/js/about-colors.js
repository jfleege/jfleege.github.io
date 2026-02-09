// assets/js/about-colors.js
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#colors");
  if (!root) return;

  // Grab the dots inside your widget
  const dots = Array.from(root.querySelectorAll(".circle"));
  if (dots.length === 0) return;

  // Your 6 colors (keep these exactly as-is)
  const colors = [
    "#FF4B4B", // red
    "#FFA828", // orange
    "#FFCC2E", // yellow
    "#6A3A3A", // maroon/brown
    "#8A6A2B", // tan/brown
    "#8C6F2A"  // olive/gold
  ];

  // If you have more/less than 6 dots, this still works
  let offset = 0;

  function paint() {
    dots.forEach((dot, i) => {
      dot.style.backgroundColor = colors[(i + offset) % colors.length];
    });
  }

  paint();

  // Rotate positions: increase offset over time
  const intervalMs = 450; // tweak speed: smaller = faster
  setInterval(() => {
    offset = (offset + 1) % colors.length;
    paint();
  }, intervalMs);
});

