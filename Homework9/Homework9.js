document.getElementById("messageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  let valid = true;

  const nameValue = nameInput.value.trim();
  if (nameValue === "") {
    nameError.textContent = "Name cannot be blank.";
    nameError.style.display = "block";
    valid = false;
  } else if (!nameValue.includes(" ")) {
    nameError.textContent = "Please enter both first and last name.";
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  if (!emailInput.checkValidity()) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  const messageValue = messageInput.value.trim();
  if (messageValue === "") {
    messageError.textContent = "Message cannot be blank.";
    messageError.style.display = "block";
    valid = false;
  } else if (messageValue.length > 300) {
    messageError.textContent = "Message cannot be more than 300 characters.";
    messageError.style.display = "block";
    valid = false;
  } else {
    messageError.style.display = "none";
  }

  if (valid) {
    alert("Message submitted successfully!");
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});
