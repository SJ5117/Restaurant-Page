import { load_page } from "./load_page";
import { goto_home } from "./home";
import { goto_menu } from "./menu";
import { goto_contact } from "./contact";

// window.addEventListener('DOMContentLoaded', load_page);
console.log("Hello World!");

const header = document.getElementById("header");
header.style.textAlign = "center";

const btnHome = document.getElementById("home");
btnHome.addEventListener("click", goto_home);

const btnMenu = document.getElementById("menu");
btnMenu.addEventListener("click", goto_menu);

const btnContact = document.getElementById("contact");
btnContact.addEventListener("click", goto_contact);

const bgTabs = document.getElementById("tabs");
bgTabs.style.backgroundColor = "orange";
bgTabs.style.padding = "20px";
