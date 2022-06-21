const nouns = [
  "Tisch",
  "Stuhl",
  "Schrank",
  "Stift",
  "Computer",
  "Wagen",
  "Mensch",
  "Lehrer",
  "Lampe",
  "Tasche",
  "Blume",
  "Vase",
  "Straße",
  "Übung",
  "Zeitung",
  "Zeitschrift",
  "Buch",
  "Bild",
  "Wort",
  "Haus",
  "Zimmer",
  "Kind",
  "Mädchen",
  "Speilzeug",
];
const adjectives = [
  "groß",
  "klein",
  "neu",
  "alt",
  "gut",
  "schlecht",
  "schön",
  "interessant",
  "weiß",
  "schwarz",
  "rot",
  "blau",
  "grün",
  "grau",
  "braun",
  "gelb",
];

const centralParagraph = document.getElementById("central-paragraph");
const newTaskButton = document.getElementById("new-task");
const counter = document.getElementById("counter");

const updateString = () => {
  const randomNumber = ({length: ArrayLegnth}) =>
    Math.floor(Math.random() * ArrayLegnth);

  const randomNoun = nouns[randomNumber(nouns)];
  const randomAdjective = adjectives[randomNumber(adjectives)];

  const generatedString = `Das ist ... ${ randomNoun }. |    ... ${ randomNoun } ist ${ randomAdjective }.`;

  centralParagraph.innerText = generatedString;
  updateCounter(counter);
};

const updateCounter = (element) => {
  let number = parseInt(element.innerText);
  number++;
  element.innerText = number;
};

updateString();
