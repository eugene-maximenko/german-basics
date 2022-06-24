
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

    const {jobs} = await fetchAsync('http://localhost:3000/data/jobs');
    const {adjectives} = await fetchAsync('http://localhost:3000/data/adjectives');

    console.log(jobs);

    const randomJob = jobs[randomNumber(jobs)];
    const randomAdjective = adjectives[randomNumber(adjectives)];
    const seinVerb = Math.random() > 0.5 ? 'sind' : 'ist';
    const genderVerb = Math.random() > 0.5 ? 'Frau' : 'Frau';

    const generatedString = `${ genderVerb } < Das ${ seinVerb } ... (${ randomJob }). | ... (${ randomJob }) ${ seinVerb } ${ randomAdjective }.`;

    centralParagraph.innerText = generatedString;
    updateCounter(counter);
};


const updateCounter = (element) => {
    let number = parseInt(element.innerText);
    number++;
    element.innerText = number;
};

updateString();
