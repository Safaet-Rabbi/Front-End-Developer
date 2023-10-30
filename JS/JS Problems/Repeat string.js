const sentence =  "lorem ipsum dolor, sit amet consectetur lorem edit Minus expedita id praesentium doloribus alias soluta autem voluptatem ab ex. Dolorum ex debitis dolore lorem iusto sint sed lorem magni nobis.";

const matches= sentence.match(/lorem/gi);
const occurances= matches ? matches.length : 0;

console.log(occurances);

let position = sentence.search(/sit/i);
position = position >=0 ? position : "not found!";

console.log(position);