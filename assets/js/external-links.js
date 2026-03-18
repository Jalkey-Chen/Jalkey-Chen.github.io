document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("a[href]");

  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href.charAt(0) === "#" || href.indexOf("javascript:") === 0) {
      return;
    }

    if (href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) {
      return;
    }

    try {
      var url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    } catch (error) {
      return;
    }
  });
});
