// Número da clínica: DDI + DDD + número, só dígitos (troque pelo real)
const WHATSAPP_NUMBER = "5516999999999";

document.querySelectorAll(".js-wa").forEach((el) => {
  const msg = el.dataset.msg || "Olá! Gostaria de agendar uma avaliação.";
  el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  el.target = "_blank";
  el.rel = "noopener";
});

const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");
const setMenu = (open) => {
  menu.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
};
toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));