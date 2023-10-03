class Model {

    #allapot;
    #lista = [];
    #lepes;
    constructor() {
        this.#allapot = "X";
        this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.#lepes = 0;
    }

    valt(index) {
        this.#lepes++;
        if (this.#allapot == "X") {
            this.#allapot = "O";
        }
        else {
            this.#allapot = "X";
        }
        this.#lista[index] = this.#allapot;
        console.log(this.#lista)
    }

    getAllapot() {
        return this.#allapot;
    }

    vegeVanE() {
        let eredmeny = this.#vizszintesEll();
        if (eredmeny.indexOf("XXX") > -1) {
           $("body").html("X nyert");
        } else if (eredmeny.indexOf("OOO") > -1) {
            $("body").html("O nyert");
        } else if (this.#lepes >= 9) {
            $("body").html("Vége");
        }
        return "nincs Vége";
    }

    #vizszintesEll() {
        let vText = "";
        for (let i = 0; i < this.#lista.length; i++) {
            vText += this.#lista[i];
            if (i % 3 == 2) {
                vText += "@";
            }
        }
        return vText;
    }

} export default Model