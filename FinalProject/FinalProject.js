function filterMenu(category) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
   e.preventDefault();
   let valid = true;

   const nameInput = document.getElementById("name");
   const emailInput = document.getElementById("email");
   const messageInput = document.getElementById("message");

   const nameError = document.getElementById("nameError");
   const emailError = document.getElementById("emailError");
   const messageError = document.getElementById("messageError");
   const successMessage = document.getElementById("successMessage");

   nameError.textContent = "";
   emailError.textContent = "";
   messageError.textContent = "";
   successMessage.textContent = "";

   const nameValue = nameInput.value.trim();
   if (!/^\w+\s+\w+/.test(nameValue)) {
     nameError.textContent = "Please enter your first and last name.";
     valid = false;
   }

   const emailValue = emailInput.value.trim();
   if (!/^[^@]+@[^@]+\.[^@]+$/.test(emailValue)) {
     emailError.textContent = "Please enter a valid email address.";
     valid = false;
   }

   const messageValue = messageInput.value.trim();
   if (messageValue.length < 5) {
     messageError.textContent = "Please enter a longer message.";
     valid = false;
   }

   if (valid) {
     successMessage.textContent = "Thank you! Your message has been sent.";
     document.getElementById("contactForm").reset();
   }
});