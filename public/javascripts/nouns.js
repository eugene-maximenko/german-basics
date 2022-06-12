const nouns = [
    'Tisch',
    'Stuhl',
    'Schrank',
    'Stift',
    'Computer',
    'Wagen',
    'Mensch',
    'Lehrer',
    'Lampe',
    'Tasche',
    'Blume',
    'Vase',
    'Straße',
    'Übung',
    'Zeitung',
    'Zeitschrift',
    'Buch',
    'Bild',
    'Wort',
    'Haus',
    'Zimmer',
    'Kind',
    'Mädchen',
    'Speilzeug',
];
const adjectives = [
    'groß',
    'klein',
    'neu',
    'alt',
    'gut',
    'schlecht',
    'schön',
    'interresant',
    'weiß',
    'schwarz',
    'rot',
    'blau',
    'grün',
    'grau',
    'braun',
    'gelb',
];

const centralParagraph = document.getElementById('central-paragraph');

const randomNumber = ({length: ArrayLegnth}) =>
    Math.floor(Math.random() * ArrayLegnth);

const randomNoun = nouns[randomNumber(nouns)];
const randomAdjective = adjectives[randomNumber(adjectives)];

const generatedString = `Das ist ... ${ randomNoun }. |    ... ${ randomNoun } ist ${ randomAdjective }.`;

centralParagraph.innerText = generatedString;

console.log(generatedString);
