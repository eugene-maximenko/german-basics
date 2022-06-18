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
    "interresant",
    "weiß",
    "schwarz",
    "rot",
    "blau",
    "grün",
    "grau",
    "braun",
    "gelb",
];
const jobs = [
    'Lehrer',
    'Techniker',
    'Mechaniker',
    'Arbeiter',
    'Sportler',
    'Grafiker',
];
const prepositions = ['Ich', 'Du', 'Er', 'Sie(она)', 'Es', 'Wir', 'Ihr', 'Sie(они)', 'Sie(вы)'];

const centralParagraph = document.getElementById("central-paragraph");
const newTaskButton = document.getElementById("new-task");
const counter = document.getElementById("counter");

const updateString = () => {
    const randomNumber = ({length: ArrayLegnth}) =>
        Math.floor(Math.random() * ArrayLegnth);

    const randomJob = jobs[randomNumber(jobs)];
    const randomPrep = prepositions[randomNumber(prepositions)];

    let generatedString;
    if (randomPrep === 'Sie(она)') {
        generatedString = `${ randomPrep } ... ${ randomJob }in.`;
    } else {
        generatedString = `${ randomPrep } ... ${ randomJob }.`;
    }

    centralParagraph.innerText = generatedString;
    updateCounter(counter);
};

const updateCounter = (element) => {
    let number = parseInt(element.innerText);
    number++;
    element.innerText = number;
};

updateString();
