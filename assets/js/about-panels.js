document.addEventListener("DOMContentLoaded", function () {
  function openPanelFromHash() {
    if (!window.location.hash) return;

    var target = document.querySelector(window.location.hash);
    if (!target) return;

    var panel = null;
    if (target.nextElementSibling && target.nextElementSibling.matches("details[data-section-panel]")) {
      panel = target.nextElementSibling;
    } else {
      panel = target.closest("details[data-section-panel]");
    }

    if (panel) {
      panel.open = true;
    }
  }

  openPanelFromHash();
  window.addEventListener("hashchange", openPanelFromHash);
});
