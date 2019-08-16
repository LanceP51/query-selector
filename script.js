//                           Lightning

// const mainHeader = document.querySelector("#main-header")
// // Log the reference to the console
// console.log(mainHeader)
// // Add a class of "blue-text" to the element
// mainHeader.classList.add("blue-text")
// // Add a style rule for the "blue-text" class to your style.css sheet

// const bodyElements = document.querySelectorAll(".body-text")
// // Log the reference to the console
// console.log(bodyElements)
// // Loop through the NodeList of elements and set the .innerHTML property of each element to "Hello, world!"
// for (i=0;i<bodyElements.length;i++){
//     bodyElements[i].innerHTML = "Hello World"
// }

//                            PRACTICE

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const firstHeader = document.querySelector(".article__header")
firstHeader.textContent = "Welcome to the Lance Blog."


const allHeaders = document.querySelectorAll(".article__header")
for (i=0;i<allHeaders.length;i++){
allHeaders[i].classList.add ("important")
}

const dashed = document.querySelector(".dashed")
dashed.classList.remove("dashed")


const article__footer = document.querySelector(".article__footer")
article__footer.classList.add("goldenrod")