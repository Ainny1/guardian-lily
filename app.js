"use strict";
// This app intentionally makes no network requests and uses no browser storage.
const steps = [
  "Use a unique password for each important account.",
  "Turn on multi-factor authentication where available.",
  "Review who can see your posts, photos, and location.",
  "Check which apps have access to your camera, microphone, and contacts.",
  "Update your device and apps regularly.",
  "Know how to block and report unwanted contacts."
];
const list = document.getElementById("checklist");
const progress = document.getElementById("progress");
function updateProgress() {
  const checked = list.querySelectorAll("input:checked").length;
  progress.textContent = checked + " of " + steps.length + " steps checked";
}
steps.forEach((step, index) => {
  const label = document.createElement("label");
  label.className = "check";
  const box = document.createElement("input");
  box.type = "checkbox";
  box.id = "step-" + index;
  box.addEventListener("change", updateProgress);
  const text = document.createElement("span");
  text.textContent = step;
  label.append(box, text);
  list.append(label);
});
document.getElementById("reset").addEventListener("click", () => {
  list.querySelectorAll("input").forEach(box => { box.checked = false; });
  updateProgress();
});
document.querySelectorAll(".reveal").forEach(button => {
  button.addEventListener("click", () => {
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    answer.hidden = !answer.hidden;
    button.setAttribute("aria-expanded", String(!answer.hidden));
    button.textContent = answer.hidden ? "Show safety notes" : "Hide safety notes";
  });
});
updateProgress();
