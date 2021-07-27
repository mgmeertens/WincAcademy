
const age = 18
const isFemale = "true"
const driverStatus = "bob"
const firstName = "Sarah"
const totalAmount = 25

/*
const age = 13; 
const isFemale = false;
const driverStatus = "drunk";
const firstName = "Bram"
*/


if (age >= 18) {
    console.log("jij mag naar binnen");
} else {
    console.log("Helaas je bent nog te jong om binnen te komen");

}

if (isFemale) {
    console.log("jij bent een vrouw en mag naar binnen");
} else {
    console.log("Helaas jij bent een man en mag niet naar binnen");
}

if (driverStatus === "bob") {
    console.log("jij bent bob dus je mag rijden");
} else {
    console.log("je bent dronken en mag dus niet autorijden");
}

if (age >=18 && age <=25) {
    console.log("Je krijgt 50% korting")
} else {
    console.log("jij krijgt een gratis drankje")
}

if (firstName === "Sarah" || firstName === "Bram") {
    console.log("Je naam is Sara of Bram en jij krijgt een grtis biertje")
} else {
    console.log("jij kan niet mee doen aan onze actie")
}

if (totalAmount >= 25) {
    console.log("Je krijgt gratis (vega)bitterballen")
} else if (totalAmount > 50) {
    console.log("Je krijgt grtis Nacho chips")
} else if (totalAmount > 100) {
    console.log("je krijgt gratis champagne")
} else {
    console.log("je ontvangt helaas niets")
}
