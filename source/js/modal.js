    var send = document.querySelector(".form__button");
    var sendConfirm = document.querySelector(".modal-success");
    var sendFail = document.querySelector(".modal-fail");
    var close = document.querySelector(".modal__button-success");
    var closeFail = document.querySelector(".modal__button-fail");
    var requiredSurname = document.getElementById("surname");
    var requiredName = document.getElementById("name");
    var requiredMail = document.getElementById("mail");

    send.addEventListener("click", function(evt)
    {
      evt.preventDefault();
      if (requiredSurname.value !== "" && requiredName.value !== "" && requiredMail.value !== "") {
      sendConfirm.classList.add("modal-show")
    } else { sendFail.classList.add("modal-show")}
    });

    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      sendConfirm.classList.remove("modal-show");
    });

    closeFail.addEventListener("click", function(evt) {
      evt.preventDefault();
      sendFail.classList.remove("modal-show");
    });

    window.addEventListener ("keydown", function(evt) {
      if(evt.keyCode === 27) {
        if(sendConfirm.classList.contains("modal-show")) {
        sendConfirm.classList.remove("modal-show");
        }
      }
    });

    window.addEventListener ("keydown", function(evt) {
      if(evt.keyCode === 27) {
        if(sendFail.classList.contains("modal-show")) {
        sendFail.classList.remove("modal-show");
        }
      }
    });