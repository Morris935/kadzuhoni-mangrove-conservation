// const menu = document.querySelector("#menu__btn");
// const navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };
// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");
// };



/* function sendWhatsAppMessage(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const reason = document.getElementById('reason').value;

  
  const message = `**Appointment Request:**\nName: ${name}\nNumber: ${number}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nReason: ${reason}`;
  const whatsappNumber = '+2540799211182'; // Replace with the hospital's WhatsApp number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(whatsappURL, '_blank');
}
 */

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const form = event.target;
  const data = new FormData(form);
  const formData = Object.fromEntries(data.entries());
  const name = document.getElementById('fullName').value;
  const number = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const reason = document.getElementById('msg').value;

  const message = `*Hello Juliana Kithi,*\nI am ${name}\nNumber: ${number}\nEmail: ${email}\n${reason}`;
  const whatsappNumber = '+254795643584'; // Replace with the hospital's WhatsApp number
  const myemail = 'julianakithi@gmail.com';
  if (formData.contactMethod === "phone") {
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        // const whatsappLink = `https://wa.me/${formData.number}?text=Hello%20${formData.name}%2C%20your%20appointment%20with%20on%20${formData.date}%20at%20${formData.time}%20is%20confirmed.`;
      window.open(whatsappURL, "_blank");
      console.log(`whatsapp-${encodeURIComponent(message)}`);
  } else if (formData.contactMethod === "Email") {
    // const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      const emailLink = `mailto:${myemail}?subject=Appointment%20Confirmation&body=${encodeURIComponent(message)}`;
      window.location.href = emailLink;
      console.log(`email-${encodeURIComponent(message)}`);
  }
  
  form.reset();
  // alert("Your appointment request has been sent successfully!");
});
