export function load_page() {
    const content = document.getElementById("content");

    let h1 = document.createElement("h1");
    h1.innerHTML = "Johnson's Restaurant";
    content.appendChild(h1);

    let img = document.createElement("img");
    img.src = "img.jpg";
    content.appendChild(img);

    let h3 = document.createElement("h3");
    h3.innerHTML = "This is the best restaurant to ever hit the face of the planet.";
    content.appendChild(h3);
};
