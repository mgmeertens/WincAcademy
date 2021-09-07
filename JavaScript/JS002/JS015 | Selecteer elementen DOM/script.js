// 1.
// body aanpassen
document.body.innerHTML = "Ik ben een nieuwe paragraaf";
// eerst het document aanroepen
// hierna de body aanroepen
// .innerHTML = is de html in de body aanroepen en veranderen


// 2.
const paragraphElement = document.getElementById("first-section");
console.log(paragraphElement);
// vaak wordt er var gebruikt maar beter kan je const of let gebruiken
// const paragraphElement creeren van een const
// aanroepen document, getElementById = Id aanroepen
// ('first-section') = is de ID

// 3.
const paragraphElements = document.getElementsByClassName("paragraph");
console.log(paragraphElements);
// creeer een const (paragraphElements)
// aanroepen paragraph
// log de const