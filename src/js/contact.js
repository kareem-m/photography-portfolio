// inputs form
let inputName = document.querySelector("#inputName"),
  textarea = document.querySelector("textarea"),
  progOne = document.querySelector(".progOne"),
  progTwo = document.querySelector(".progTwo"),
  maxName = inputName.getAttribute("maxlength"),
  maxText = textarea.getAttribute("maxlength");

inputName.oninput = () => {
  progOne.style.width = `${(inputName.value.length * 100) / maxName}%`;
};

textarea.oninput = () => {
  progTwo.style.width = `${(textarea.value.length * 100) / maxText}%`;
};

// Send to whatsapp
let submit = document.querySelector("#submit");

submit.onclick = function send() {
  let perName = inputName.value,
    message = textarea.value;

  window.open(
    `https://api.whatsapp.com/send?phone=+201015945282&text=Hi, Amr! My name is ${perName}, I want to tell you that ${message}`
  );
  perName.value = "";
  message.value = "";
};