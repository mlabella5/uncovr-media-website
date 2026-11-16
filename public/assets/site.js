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
try {
(function () {
  if (!('IntersectionObserver' in window)) return;
  var thumbs = document.querySelectorAll('a.case .thumb');
  if (!thumbs.length) return;
  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      entries[i].target.classList.toggle('in-view', entries[i].isIntersecting);
    }
  }, { threshold: 0.25 });
  for (var i = 0; i < thumbs.length; i++) io.observe(thumbs[i]);
  document.documentElement.classList.add('mg-io');
})();
} catch (e) {}
