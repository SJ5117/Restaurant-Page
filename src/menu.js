export function goto_menu() {
    const content = document.getElementById("content");

    const menu = document.createElement("h1");
    menu.innerHTML = "Menu";
    const breakfast = document.createElement("h2");
    breakfast.innerHTML = "Breakfast";
    const breakfast1 = document.createElement("h5");
    breakfast1.innerHTML = "Breakfast Item 1";
    breakfast1.style.color = "blue";
    const breakfast2 = document.createElement("h5");
    breakfast2.innerHTML = "Breakfast Item 2";
    breakfast2.style.color = "blue";
    const lunch = document.createElement("h2");
    lunch.innerHTML = "Lunch";
    const lunch1 = document.createElement("h5");
    lunch1.innerHTML = "Lunch Item 1";
    lunch1.style.color = "blue";
    const lunch2 = document.createElement("h5");
    lunch2.innerHTML = "Lunch Item 2";
    lunch2.style.color = "blue";
    const dinner = document.createElement("h2");
    dinner.innerHTML = "Dinner";
    const dinner1 = document.createElement("h5");
    dinner1.innerHTML = "Dinner Item 1";
    dinner1.style.color = "blue";
    const dinner2 = document.createElement("h5");
    dinner2.innerHTML = "Dinner Item 2";
    dinner2.style.color = "blue";

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    content.style.textAlign = "center";

    content.appendChild(menu);
    content.appendChild(breakfast);
    breakfast.appendChild(breakfast1);
    breakfast.appendChild(breakfast2);
    content.appendChild(lunch);
    lunch.appendChild(lunch1);
    lunch.appendChild(lunch2);
    content.appendChild(dinner);
    dinner.appendChild(dinner1);
    dinner.appendChild(dinner2);
};
