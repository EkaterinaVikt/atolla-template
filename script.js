"use strict";

const closeButton = document.querySelector(".close-button");
const currentOffer = document.querySelector(".current-offer");

closeButton.addEventListener("click", function () {
  console.log(closeButton);
  currentOffer.style.opacity = 0;
  // currentOffer.style.display = "none";

  /*document.querySelector(".main-description").style.height = "20px";*/
  /*document.querySelector(".main-description").style.margin = "203px";*/
});

closeButton.addEventListener("mouseOver", function () {
  console.log("Курсор наведён");
  closeButton.style.border = "1px solid black";
});

const container = document.querySelector(".container");
const allChildsOfContainter = container.childNodes;
console.log(allChildsOfContainter);
//16 дочерних элементов у контейнера
