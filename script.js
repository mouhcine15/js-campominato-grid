const griglia = document.getElementById("grid");
let livello = prompt("scegli il livello: 1 - 2 - 3")

// funzioni
function creazione100 () {
    const node = document.createElement("div");
    node.className = "square100";
    return node;
};
function creazione81 () {
    const node = document.createElement("div");
    node.className = "square81";
    return node;
};
function creazione49 () {
    const node = document.createElement("div");
    node.className = "square49";
    return node;
};
function randomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
};
function createRandomUniqueNumArr (numItems, min, max) {
    const arrInt = [];
    while (arrInt.length < numItems) {
        let NumRandomInt = randomNumMinMax(min, max);
        if (!arrInt.includes(NumRandomInt)) {
            arrInt.push(NumRandomInt);
        };
    }
    return arrInt;
};


if (livello == "1") {
    
    const num = createRandomUniqueNumArr(100, 1, 100);
    console.log(num);

    for (let i = 0; i < num.length; i++) {
    
        const quadrato = creazione100();

        let arr = num[i]; 
        quadrato.append(arr);

        quadrato.addEventListener ("click",
            function () {
                console.log(this);
                this.classList.add("clicked");
            }
        )
        griglia.append(quadrato);
    
    }       

} else if (livello == "2") {

    const num = createRandomUniqueNumArr(81, 1, 81);
    console.log(num);
    
    for (let i = 0; i < 81; i++) {
    
        const quadrato = creazione81();

        let arr = num[i]; 
        quadrato.append(arr);

        quadrato.addEventListener ("click",
            function () {
                console.log(this);
                this.classList.add("clicked");
            }
        )
        griglia.append(quadrato);
    
    } 
} else if (livello == "3") {
    
    const num = createRandomUniqueNumArr(49, 1, 49);
    console.log(num);
        
        for (let i = 0; i < 49; i++) {
        
            const quadrato = creazione49();

            let arr = num[i]; 
            quadrato.append(arr);

            quadrato.addEventListener ("click",
                function () {
                    console.log(this);
                    this.classList.add("clicked");
                }
            )
            griglia.append(quadrato);
        
        }   
    };
