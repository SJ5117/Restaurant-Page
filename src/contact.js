export function goto_contact() {
    const content = document.getElementById("content");

    const contact = document.createElement("h1");
    contact.innerHTML = "Contact";
    const phone = document.createElement("h2");
    phone.innerHTML = "Phone";
    const phoneNum = document.createElement("h5");
    phoneNum.innerHTML = "+1 000-000-0000";
    phoneNum.style.color = "blue";
    const email = document.createElement("h2");
    email.innerHTML = "Email";
    const emailAddr = document.createElement("h5");
    emailAddr.innerHTML = "hello@johnsonsrestaurantthiscantpossiblybearealemailaddress.com";
    emailAddr.style.color = "blue";

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    content.style.textAlign = "center";

    content.appendChild(contact);
    content.appendChild(phone);
    phone.appendChild(phoneNum);
    content.appendChild(email);
    email.appendChild(emailAddr);
};
