document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".form-contact");
  const button = document.querySelector(".contact__form"); // Replace with the correct button selector
  const cross = document.querySelector(".form-contact__cross");

  if (button) {
    button.addEventListener("click", (e) => {
      contactForm.classList.remove("is-not-visible");
    });
  }

  if(cross){
    cross.addEventListener("click", (e)=>{
      contactForm.classList.add("is-not-visible");
    })
  }
});
