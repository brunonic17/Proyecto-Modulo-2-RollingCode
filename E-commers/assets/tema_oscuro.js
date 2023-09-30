const d = document,
  w = window,
  ls = localStorage;

export default function themeDark(themeBtn, classMode) {
  const $themedark = d.querySelector(themeBtn),
    $selctores = d.querySelectorAll("[data-mode]");

  let luna = "🌙",
    sol = "☀️";

  let lightMode = () => {
    $selctores.forEach((el) => el.classList.remove(classMode));
    $themedark.innerHTML = luna;
    ls.setItem("theme", "ligth");
  };
  let darkMode = () => {
    $selctores.forEach((el) => el.classList.add(classMode));
    $themedark.innerHTML = sol;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(themeBtn)) {

    if ($themedark.innerHTML === luna) {
        darkMode();
    } else {
        lightMode();
        }
  }
});

  d.addEventListener("DOMContentLoaded", () => {
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }
    if (ls.getItem("theme") === "light") {
      lightMode();
    }
    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
