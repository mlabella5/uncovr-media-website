// UNCOVr media — site behavior
(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // To-top button visibility
  var toTop = document.getElementById("toTop");
  function onScroll() {
    if (toTop) toTop.classList.toggle("visible", window.scrollY > 600);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Graceful fallback for images not yet copied over from the old host.
  var TRANSPARENT_PX = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  function markMissing(img) {
    if (img.src === TRANSPARENT_PX) return;
    img.classList.add("img-missing");
    img.alt = img.alt ? img.alt + " (image not yet uploaded)" : "Image not yet uploaded";
    img.src = TRANSPARENT_PX;
  }
  document.addEventListener("error", function (e) {
    if (e.target && e.target.tagName === "IMG") markMissing(e.target);
  }, true);
  document.querySelectorAll("img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) markMissing(img);
  });

  // FAQ accordion
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", (!isOpen).toString());
    });
  });

  // Contact form: submit to configured endpoint, fall back to mailto.
  var FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/YOUR_FORM_ID"
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      if (!FORM_ENDPOINT) {
        var subject = encodeURIComponent("New inquiry from " + name);
        var body = encodeURIComponent(message + "\n\n" + name + " (" + email + ")");
        window.location.href = "mailto:mike@uncovrmedia.com?subject=" + subject + "&body=" + body;
        if (note) note.textContent = "Opening your email client…";
        return;
      }
      if (note) note.textContent = "Sending…";
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, message: message })
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            if (note) note.textContent = "Thanks — we'll be in touch soon.";
          } else if (note) {
            note.textContent = "Something went wrong. Please email mike@uncovrmedia.com directly.";
          }
        })
        .catch(function () {
          if (note) note.textContent = "Something went wrong. Please email mike@uncovrmedia.com directly.";
        });
    });
  }
})();
