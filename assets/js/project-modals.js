document.addEventListener("DOMContentLoaded", function () {
  function closeModal(modal) {
    if (!modal) return;

    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  }

  var openButtons = document.querySelectorAll("[data-project-modal-open]");

  openButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modalId = button.getAttribute("data-project-modal-open");
      var modal = document.getElementById(modalId);
      if (!modal) return;

      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.setAttribute("open", "open");
      }
    });
  });

  var modals = document.querySelectorAll(".project-modal");
  modals.forEach(function (modal) {
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
