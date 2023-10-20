console.log("Hej JS");
// Vi klickar på bild
let sunvsmoon = document.getElementById("sunvsmoon");
let myText = document.getElementById("myText");
let saveTextBtn = document.getElementById("saveTextBtn");

console.log("Innehållet i input", myText.value);

sunvsmoon.addEventListener("click", () => {
    console.log("click på bild");

    // TA reda på om det är en sol eller måne
    console.log(sunvsmoon.getAttribute("src"));
    if (sunvsmoon.getAttribute("src") == "sun.jpg") {
        console.log("Det var en sol!");
          // Om sol byt ut till måne
          sunvsmoon.setAttribute("src", "moon.jpg")
    } else {
          // Om måne byt ut till sol
          sunvsmoon.setAttribute("src", "sun.jpg")
    }
})

saveTextBtn.addEventListener("click", () => {
    console.log("Innehållet i input efter click", myText.value);

    localStorage.setItem("myText", myText.value);
})

if (localStorage.getItem("myText")) {
    console.log("Det finns en nyckel med myText");
    myText.value = localStorage.getItem("myText");
}

let person = {
    id: 100,
    name: "Janne",
    age: 43,
    boy: true
}

console.log("person", person.name);

localStorage.setItem("person", JSON.stringify(person));

let getPerson = JSON.parse(localStorage.getItem("person"));
console.log("getPerson", getPerson);
console.log("getPerson", getPerson.name);

