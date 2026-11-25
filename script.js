/* ===== EDIT THESE BEFORE PUBLISHING ===== */
const CONFIG = {
  email: "",   // e.g. "info@yourdomain.com"
  phone: "",   // e.g. "+91 98765 43210" (include country code)
};
/* ======================================== */

const $ = (s, el = document) => el.querySelector(s);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

$("#year").textContent = new Date().getFullYear();

// Contact details: fill from CONFIG, or leave the placeholder visible
if (CONFIG.email) {
  const a = $("#contactEmail");
  a.textContent = CONFIG.email;
  a.href = "mailto:" + CONFIG.email;
}
if (CONFIG.phone) {
  const a = $("#contactPhone");
  const digits = CONFIG.phone.replace(/\D/g, "");
  a.textContent = CONFIG.phone;
  a.href = "https://wa.me/" + digits;
  a.target = "_blank";
  a.rel = "noopener";
}

// Mobile menu
const toggle = $(".menu-toggle");
const nav = $(".nav");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.textContent = open ? "✕" : "☰";
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// Card tilt (pointer devices only)
if (!reduceMotion && matchMedia("(hover: hover)").matches) {
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => (card.style.transform = ""));
  });
}

// Enquiry form: opens the visitor's email app with the message filled in
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const note = $("#formNote");
  if (!CONFIG.email) {
    note.textContent = "Email address not set yet. Add it to CONFIG in script.js.";
    note.classList.add("error");
    return;
  }
  const f = new FormData(e.target);
  const subject = `Enquiry: ${f.get("service")} (${f.get("name")})`;
  const body = `${f.get("message")}\n\nName: ${f.get("name")}\nEmail: ${f.get("email")}\nService: ${f.get("service")}`;
  note.classList.remove("error");
  note.textContent = "Opening your email app. If nothing opens, email us directly at " + CONFIG.email + ".";
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
