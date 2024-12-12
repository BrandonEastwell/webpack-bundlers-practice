// index.js
import "./styles/styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./assets/odin.png"; //webpack recognises import as image

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
console.log(greeting);
