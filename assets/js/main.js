console.log("test");


/* 
querySelector()
addEventListener()
createElement()
createTextNode()
appendChild()

*/

const speichern = document.querySelector("#enter");

const inputField = document.querySelector("#userinput");

const outputField = document.querySelector("ul");

// click
speichern.addEventListener("click", (e) => {
    textZuHtml()
});


// function
function textZuHtml() {
    console.log("in function");

    // input holen
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

// listenelement erstellen 
const liTag = document.createElement("li");
console.log(liTag);

// Element und Value verknüpfen
// man füllt den Parameter vom liTag Object    mit dem Value
liTag.textContent = inputFieldValue;
console.log(liTag.textContent);

// ins html in li schreiben
outputField.appendChild(liTag);

};

