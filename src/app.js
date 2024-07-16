/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
const htmlExcuse = document.querySelector("#excuse");
const getRandomValue = arr => arr[Math.floor(Math.random() * arr.length)];
window.onload = function() {
  //write your code here
  console.log(who);
  htmlExcuse.innerHTML = `${getRandomValue(who)} ${getRandomValue(
    action
  )} ${getRandomValue(what)} ${getRandomValue(when)}`;
};
