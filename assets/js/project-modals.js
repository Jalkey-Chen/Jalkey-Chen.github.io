document.addEventListener("DOMContentLoaded", function () {
  var scrollY = 0;

  function lockPageScroll() {
    scrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.classList.add("project-modal-open");
  }

  function unlockPageScroll() {
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

    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }

    unlockPageScroll();
  }

  var openButtons = document.querySelectorAll("[data-project-modal-open]");

  openButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modalId = button.getAttribute("data-project-modal-open");
      var modal = document.getElementById(modalId);
      if (!modal) return;

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
    modal.addEventListener("close", unlockPageScroll);

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
});
