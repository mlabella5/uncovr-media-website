try {
(function () {
  var btn = document.getElementById('copyBtn');
  var el = document.getElementById('email');
  if (!btn || !el) return;
  function fallback() {
    try {
      var r = document.createRange(); r.selectNodeContents(el);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    } catch (e) {}
    btn.textContent = 'Selected. Press copy.';
  }
  btn.addEventListener('click', function () {
    try {
      navigator.clipboard.writeText(el.textContent.trim()).then(function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy address'; }, 1800);
      }, fallback);
    } catch (e) { fallback(); }
  });
})();
} catch (e) {}
try {
(function () {
  var btns = document.querySelectorAll('.mg-toggle');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      var stage = this.closest('figure').querySelector('.mg, .logo-wall');
      var paused = stage.classList.toggle('is-paused');
      this.setAttribute('aria-pressed', paused ? 'true' : 'false');
      this.textContent = paused ? 'Play motion' : 'Pause motion';
    });
  }
})();
} catch (e) {}
