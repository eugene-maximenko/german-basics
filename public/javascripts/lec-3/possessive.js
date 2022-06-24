
const centralParagraph = document.getElementById("central-paragraph");
const newTaskButton = document.getElementById("new-task");
const counter = document.getElementById("counter");

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

const randomNumber = ({length: ArrayLegnth}) =>
    Math.floor(Math.random() * ArrayLegnth);

const updateString = async () => {

    const {nouns} = await fetchAsync('http://localhost:3000/data/nouns');
    const {adjectives} = await fetchAsync('http://localhost:3000/data/adjectives');
    const {prepositions} = await fetchAsync('http://localhost:3000/data/prepositions');


    const randomPreposition = prepositions[randomNumber(prepositions)].toLowerCase();
    const randomAdjective = adjectives[randomNumber(adjectives)];
    const seinVerb = Math.random() > 0.5 ? 'sind' : 'ist';

    const nounsRandomNumber = randomNumber(nouns);
    const randomNoun = seinVerb === 'ist' ? nouns[nounsRandomNumber].singular : nouns[nounsRandomNumber].plural;

    const generatedString = `Das ${ seinVerb } (${ randomPreposition }) ${ randomNoun }.`;

    centralParagraph.innerText = generatedString;
    updateCounter(counter);
};


const updateCounter = (element) => {
    let number = parseInt(element.innerText);
    number++;
    element.innerText = number;
};

updateString();
