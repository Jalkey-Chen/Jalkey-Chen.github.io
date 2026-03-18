document.addEventListener("DOMContentLoaded", function () {
  var scrollY = 0;
  var activeModal = null;
  var touchStartY = 0;

  function lockPageScroll() {
    scrollY = window.scrollY || window.pageYOffset || 0;
    document.documentElement.classList.add("project-modal-open");
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.classList.add("project-modal-open");
  }

  function unlockPageScroll() {
    document.documentElement.classList.remove("project-modal-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.classList.remove("project-modal-open");
    window.scrollTo(0, scrollY);
  }

  function closeModal(modal) {
    if (!modal) return;

    activeModal = null;

    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }

    unlockPageScroll();
  }

  function findScrollableContainer(target) {
    if (!activeModal) return null;

    var candidates = [
      target.closest(".project-modal__content"),
      target.closest(".project-modal")
    ];

    for (var i = 0; i < candidates.length; i += 1) {
      var container = candidates[i];
      if (!container) continue;
      if (container.scrollHeight > container.clientHeight + 1) {
        return container;
      }
    }

    return null;
  }

  function shouldPreventScroll(event, currentY) {
    if (!activeModal) return false;

    var inModal = event.target.closest(".project-modal");
    if (!inModal) return true;

    var container = findScrollableContainer(event.target);
    if (!container) return true;

    if (typeof currentY !== "number") return false;

    var deltaY = currentY - touchStartY;
    var scrollTop = container.scrollTop;
    var maxScrollTop = container.scrollHeight - container.clientHeight;

    if (maxScrollTop <= 0) return true;
    if (scrollTop <= 0 && deltaY > 0) return true;
    if (scrollTop >= maxScrollTop - 1 && deltaY < 0) return true;

    return false;
  }

  var openButtons = document.querySelectorAll("[data-project-modal-open]");

  openButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modalId = button.getAttribute("data-project-modal-open");
      var modal = document.getElementById(modalId);
      if (!modal) return;

      activeModal = modal;
      lockPageScroll();

      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.setAttribute("open", "open");
      }
    });
  });

  var modals = document.querySelectorAll(".project-modal");
  modals.forEach(function (modal) {
    modal.addEventListener("close", function () {
      activeModal = null;
      unlockPageScroll();
    });

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal(modal);
      }
    });

    var closeButton = modal.querySelector("[data-project-modal-close]");
    if (closeButton) {
      closeButton.addEventListener("click", function () {
        closeModal(modal);
      });
    }
  });

  document.addEventListener("touchstart", function (event) {
    if (!activeModal) return;

    if (event.touches && event.touches.length > 0) {
      touchStartY = event.touches[0].clientY;
    }
  }, { passive: true });

  document.addEventListener("touchmove", function (event) {
    if (!activeModal) return;

    var currentY = event.touches && event.touches.length > 0
      ? event.touches[0].clientY
      : touchStartY;

    if (shouldPreventScroll(event, currentY)) {
      event.preventDefault();
    }
  }, { passive: false });

  document.addEventListener("wheel", function (event) {
    if (!activeModal) return;

    if (!event.target.closest(".project-modal")) {
      event.preventDefault();
    }
  }, { passive: false });
});
