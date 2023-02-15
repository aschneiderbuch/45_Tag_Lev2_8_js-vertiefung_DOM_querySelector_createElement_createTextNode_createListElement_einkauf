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
function textZuHtml(a, b) {    // a = bAnfang  b = bEnde  von Enter Taste
    console.log("in function");

    // input holen
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    // listenelement erstellen 
    const liTag = document.createElement("li");
    console.log(liTag);

    // Element und Value verknüpfen
    // man füllt den Parameter/Attribute vom liTag Object    mit dem Value
    // !!! textContent kann nicht interpretieren das wir fett wollen
    // !!! geht nicht
    // liTag.textContent = `${a} ${inputFieldValue} ${b}`;   // nur Enter text sollte fett werden
    
    // !!! text verknüpfen und html weiß das es jetzt fett werden soll 
    // !!! geht :-)
    liTag.innerHTML = `${a} ${inputFieldValue} ${b}`;   // nur Enter text sollte fett werden

    console.log(liTag.textContent);

    // ins html in li schreiben
    outputField.appendChild(liTag);

};


// Bonus    - Wenn Enter Taste, dann ebenfalls machen
// keyup    -   aufs ganze body legen 
document.querySelector("body").addEventListener("keyup", (e) => {
    e.preventDefault();
console.log("in enter");       //  geht rein, egal bei welcher Taste
    if (e.keyCode === 13) {   // darf nur bei Enter weiter
    // geht -> key Code === 13    = Enter 
    //  geht -> key === "Enter"     
    //geht  -> code === "Enter" 
   const bAnfang = `<b>` ;
   const bEnde = `</b>`;
    textZuHtml(bAnfang, bEnde);
}
})