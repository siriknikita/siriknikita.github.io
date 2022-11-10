let header = document.getElementById("header");

header.onclick = function () {
  // зберігає значення aria-expanded  у змінну
  let isExpanded = header.getAttribute("aria-expanded");

  if (isExpanded == "true") {
    header.innerHTML = "▶Ряди в математичному аналізі";
    // змінює значення  aria-expanded з true  на false
    header.setAttribute("aria-expanded", "false");
  } else {
    // змінює значення aria-expanded з false на true
    header.innerHTML = "▼Ряди в математичному аналізі";
    header.setAttribute("aria-expanded", "true");
  }
};
