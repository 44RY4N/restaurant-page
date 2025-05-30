import "./styles.css";
alert("runnun");

const header = document.querySelector("header");
const title = document.createElement("h1");
title.textContent = "Restaurant";
header.appendChild(title);

const imageGalleria = document.querySelector("#image-galleria");

for(let i = 0;i<11; i ++){
    let item = document.createElement("div");
    item.classList.add(`item${i}`);
    imageGalleria.appendChild(item);
}
