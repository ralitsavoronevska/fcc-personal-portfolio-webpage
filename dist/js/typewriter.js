(function (){
  'use strict';
  const typedText = document.querySelector(".typed-text");

  const textArray = ["Mid Front-end Dev", "Technical Recruiter", "Project Manager", "Survey Programmer", "Psychologist"];

  let textArrayIndex = 0;
  let charIndex = 0;

  const erase = () => {
    if (charIndex > 0) {
      typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 80);
    } else {
      textArrayIndex++;
      if (textArrayIndex > textArray.length - 1) {
        textArrayIndex = 0;
      }
      setTimeout(type, 1000);
    }
  }

  const type = () => {
    if (charIndex <= textArray[textArrayIndex].length - 1) {
      typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 120);
    } else {
      setTimeout(erase, 1000);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    type();
  })
}());  