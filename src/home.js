export function goto_home() {
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.innerHTML = "Home";
    const location = document.createElement("h2");
    location.innerHTML = "Location";
    const hours = document.createElement("h2");
    hours.innerHTML = "Hours";

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    content.style.textAlign = "center";

    content.appendChild(title);
    content.appendChild(location);
    content.appendChild(hours);
};
