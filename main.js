const piano = document.getElementById("piano");
const allNotes = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

const createBoard = (octaves) => {
    let allKeys = [];
    function createKey(text, clsName, parent) {
        const key = document.createElement("div");
        key.className = clsName;
        key.innerText = text;
        allKeys.push(key);
        parent.appendChild(key);
    }

    let octaveSection;
    function createOctaves(amount, groupOfKeys) {
        for (let i = 0; i < amount; i++) {
            octaveSection = document.createElement("section");
            octaveSection.className = "octave";

            groupOfKeys.map((note) => {
                switch (note) {
                    case "C":
                        createKey(note, "white key", octaveSection);
                        break;
                    case "C#":
                        createKey(note, "black key", octaveSection);
                        break;
                    case "D":
                        createKey(note, "white key", octaveSection);
                        break;
                    case "Eb":
                        createKey(note, "black key", octaveSection);
                        break;
                    case "E":
                        createKey(note, "white key", octaveSection);
                        break;
                    case "F":
                        createKey(note, "white key", octaveSection);
                        break;
                    case "F#":
                        createKey(note, "black key", octaveSection);
                        break;
                    case "G":
                        createKey(note, "white key", octaveSection);
                        break;
                    case "Ab":
                        createKey(note, "black key", octaveSection);
                        break;
                    case "A":
                        createKey(note, "white key", octaveSection);
                        break;
                    case "Bb":
                        createKey(note, "black key", octaveSection);
                        break;
                    case "B":
                        createKey(note, "white key", octaveSection);
                        break;
                }
            });

            piano.appendChild(octaveSection);
        }
    }

    createOctaves(octaves, allNotes);
    console.log(allKeys);
};

createBoard(2);
