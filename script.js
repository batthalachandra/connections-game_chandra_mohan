
// Word categories
const words = [
    { word: "Topology Optimization", group: 1 },
    { word: "Compliance Minimization", group: 1 },
    { word: "Gradient-Based Optimization", group: 1 },
    { word: "Pareto Front", group: 1 },
    { word: "Finite Element", group: 2 },
    { word: "Iso-Geometric", group: 2 },
    { word: "Non-Linear", group: 2 },
    { word: "Contact", group: 2 },
    { word: "KKT (Karush-Kuhn-Tucker)", group: 3 },
    { word: "Lagrange Multiplier", group: 3 },
    { word: "Slack Variable", group: 3 },
    { word: "Bordered Hessian", group: 3 },
    { word: "Young’s Modulus", group: 4 },
    { word: "Poisson’s Ratio", group: 4 },
    { word: "Yield Strength", group: 4 },
    { word: "Density", group: 4 }
];

let selectedWords = [];
let foundGroups = [];

function createGame() {
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";
    words.forEach((item, index) => {
        const button = document.createElement("button");
        button.classList.add("word-button");
        button.textContent = item.word;
        button.onclick = () => selectWord(index);
        grid.appendChild(button);
    });
}

function selectWord(index) {
    const selectedWord = words[index];
    selectedWords.push(selectedWord);
    if (selectedWords.length === 4) {
        checkGroup();
    }
}

function checkGroup() {
    const group = selectedWords[0].group;
    const allSameGroup = selectedWords.every(word => word.group === group);

    if (allSameGroup && !foundGroups.includes(group)) {
        alert("You found a group!");
        foundGroups.push(group);
        selectedWords.forEach(word => {
            const buttons = document.querySelectorAll(".word-button");
            buttons.forEach(button => {
                if (button.textContent === word.word) {
                    button.disabled = true;
                    button.style.backgroundColor = "#8b8c89";
                }
            });
        });
        if (foundGroups.length === 4) {
            document.getElementById("message").textContent = "Congratulations! You found all groups!";
        }
    } else {
        alert("Not a valid group, try again!");
    }

    selectedWords = [];
}

document.getElementById("reset-button").onclick = () => {
    selectedWords = [];
    foundGroups = [];
    document.getElementById("message").textContent = "";
    createGame();
};

// Initialize the game on page load
createGame();
