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


if (livello == "1") {
    
    for (let i = 0; i < 100; i++) {
    
        const quadrato = creazione100();
        quadrato.addEventListener ("click",
            function () {
                console.log(this);
                this.classList.add("clicked");
            }
        )
        griglia.append(quadrato);
    
    }       

} else if (livello == "2") {
    
    for (let i = 0; i < 81; i++) {
    
        const quadrato = creazione81();
        quadrato.addEventListener ("click",
            function () {
                console.log(this);
                this.classList.add("clicked");
            }
        )
        griglia.append(quadrato);
    
    } 
} else if (livello == "3") {
    
        
        for (let i = 0; i < 49; i++) {
        
            const quadrato = creazione49();
            quadrato.addEventListener ("click",
                function () {
                    console.log(this);
                    this.classList.add("clicked");
                }
            )
            griglia.append(quadrato);
        
        }   
    };
