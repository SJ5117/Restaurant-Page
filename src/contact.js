export function goto_contact() {
    const content = document.getElementById("content");

    const contact = document.createElement("h1");
    contact.innerHTML = "Contact";
    const phone = document.createElement("h2");
    phone.innerHTML = "Phone";
    const email = document.createElement("h2");
    email.innerHTML = "Email";

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    content.appendChild(contact);
    content.appendChild(phone);
    content.appendChild(email);
};
