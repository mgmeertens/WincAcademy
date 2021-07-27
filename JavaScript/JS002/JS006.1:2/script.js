let person = {
    name: 'Menno',
    age: 41,
    evaluations: [7, 10, 9],
};
console.log(person);

console.log(person.name);
console.log(person.age);

console.log (person['name']);
console.log(person['age']);

console.log(person['evaluations']);

const selectedColors = ['rood', 'groen', 'blauw']
console.log(selectedColors[0]);
console.log(selectedColors.length);
console.log(selectedColors[selectedColors.length-1]);

selectedColors.push('green');
console.log(selectedColors);
selectedColors.push(5);
console.log(selectedColors);

selectedColors.push({greeting: "hi ik ben een object"});
console.log(selectedColors)

console.log(selectedColors[selectedColors.length-1].greeting);