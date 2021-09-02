

let name = prompt("Welkom! Wat is je naam?");
alert("Hey " + name);


let number = prompt(
  "Voer een getal in tussen 0 en 25 om te beginnen met raden..."
);
alert("Je hebt " + number + " ingevoerd");
document.write("Je hebt " + number + " ingevoerd");


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let rightNumber = getRandomIntInclusive(0, 25);
document.write("Het juiste getal is " + rightNumber);


while (number !== rightNumber) {
    let number = prompt("Fout gegokt, probeer het opnieuw");
    if (number > rightNumber) {
      alert("Je gok was te hoog");
    } else if (number < rightNumber) {
      alert("Je gok was te laag");
    } else {
      alert("Gefeliciteerd, je hebt gewonnen!");
      alert("Dag " + name + ". Tot de volgende keer.");
    }
  }