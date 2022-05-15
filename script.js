const griglia = document.getElementById("grid");
let livello = prompt("scegli il livello: 1 - 2 - 3")

if (livello == "1") {
    
    function creazione () {
        const node = document.createElement("div");
        node.className = "square100";
        return node;
    }
    
    for (let i = 0; i < 100; i++) {
    
        const quadrato = creazione();
        quadrato.addEventListener ("click",
            function () {
                console.log(this);
                this.classList.add("clicked");
            }
        )
        griglia.append(quadrato);
    
    }       

} else if (livello == "2") {
    function creazione () {
        const node = document.createElement("div");
        node.className = "square81";
        return node;
    }
    
    for (let i = 0; i < 81; i++) {
    
        const quadrato = creazione();
        quadrato.addEventListener ("click",
            function () {
                console.log(this);
                this.classList.add("clicked");
            }
        )
        griglia.append(quadrato);
    
    } 
} else if (livello == "3") {
        function creazione () {
            const node = document.createElement("div");
            node.className = "square49";
            return node;
        }
        
        for (let i = 0; i < 49; i++) {
        
            const quadrato = creazione();
            quadrato.addEventListener ("click",
                function () {
                    console.log(this);
                    this.classList.add("clicked");
                }
            )
            griglia.append(quadrato);
        
        }   
    };
