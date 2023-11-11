function contactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var suggestion = document.getElementById("suggestion").value;

    var displayInputDiv = document.getElementById("displayInput");
    displayInputDiv.innerHTML = `<h2>Contact Information</h2><p><strong>Name:</strong>  ${name}  </p><p><strong>Email:</strong>   ${email}  </p><p><strong>Suggestion:</strong>   ${suggestion}  </p>`;
}
