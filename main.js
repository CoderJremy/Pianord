const piano = document.getElementById("piano");
const allWhiteNotes = ["C", "D", "E", "F", "G", "A", "B"];
const allBlackNotes = ["C#", "Eb", "F#", "Ab", "Bb"];
const everyNote = allWhiteNotes.concat(allBlackNotes);
const keyboardChars = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "a",
    "w",
    "s",
    "e",
    "d",
    "f",
    "t",
    "g",
    "y",
    "h",
    "u",
    "j",
    "k",
    "l",
    ";",
    "'",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
];

const createBoard = (octaves) => {
    let allKeys = [];

    function createKey(clsName, parent) {
        const key = document.createElement("div");
        key.className = clsName;
        key.classList.add("key");
        allKeys.push(key);
        parent.appendChild(key);
    }

    function createOctaves(amount, groupOfKeys) {
        for (let i = 0; i < amount; i++) {
            const octaveDisplay = document.createElement("section");
            octaveDisplay.className = "octave";

            // Create black and white key groups within each octave
            const whiteGroupDisplay = document.createElement("div");
            whiteGroupDisplay.className = "white-keys-only";
            octaveDisplay.appendChild(whiteGroupDisplay);

            const blackGroupDisplay = document.createElement("div");
            blackGroupDisplay.className = "black-keys-only";
            octaveDisplay.appendChild(blackGroupDisplay);

            groupOfKeys.map((note) => {
                switch (note) {
                    case "C":
                    case "D":
                    case "E":
                    case "F":
                    case "G":
                    case "A":
                    case "B":
                        createKey("white " + note.toLowerCase() + "-note", whiteGroupDisplay);
                        break;
                    case "C#":
                        createKey("black cs-note", blackGroupDisplay);
                        break;
                    case "Eb":
                        createKey("black ef-note", blackGroupDisplay);
                        break;
                    case "F#":
                        createKey("black fs-note", blackGroupDisplay);
                        break;
                    case "Ab":
                        createKey("black af-note", blackGroupDisplay);
                        break;
                    case "Bb":
                        createKey("black bf-note", blackGroupDisplay);
                        break;
                }
            });

            piano.appendChild(octaveDisplay);
        }
    }

    createOctaves(octaves, everyNote);
    console.log(allKeys);

    allKeys.forEach((key) => {
        key.addEventListener("click", (e) => {
            console.log(e.target.className);
        });
    });
};

createBoard(3);
