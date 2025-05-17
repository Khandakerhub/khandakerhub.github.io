// Smooth scroll behavior for internal navigation (if added in the future)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting me! I will respond soon.');
  this.reset();
});

/* paste this line in verbatim */
		window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
		/* customize formbutton below*/
		formbutton("create", {
			action: "https://formspree.io/f/xanovvwg",
			title: "Contact Me:",
			fields: [
				{
					type: "text",
					label: "Name:",
					name: "name",
					required: true,
					placeholder: "your name"
				},
				{
					type: "email",
					label: "Email:",
					name: "email",
					required: true,
					placeholder: "your@email.com"
				},
				{
					type: "textarea",
					label: "Message:",
					name: "message",
					placeholder: "Your message",
					required: true
				},
				{ type: "submit" }
			],
			styles: {
				title: {
					backgroundColor: "#0b598a"
				},
				button: {
					backgroundColor: "#0a324b"
				}
			}
		});
