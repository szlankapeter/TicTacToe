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
    }

    getAllapot() {
        return this.#allapot;
    }

    kov(){
        if (this.#allapot === 'X') {
            return 'O';
        }
        return 'X';
    }

    vegeVanE() {
        let eredmeny = this.#vizszintesEll() + "@" + this.#fuggolegesEll() + "@" + this.#atloEll();
        if (eredmeny.indexOf("XXX") > -1) {
            return "X nyert";
        } else if (eredmeny.indexOf("OOO") > -1) {
            return "O nyert";
        } else if (this.#lepes >= 9) {
            return "döntetlen";
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

    #fuggolegesEll() {
        let ellY = "";
        for (let i = 0; i < 3; i++) {
            ellY +=
                this.#lista[i] +
                this.#lista[i + 3] +
                this.#lista[i + 6];

            ellY += "@";
        }

        return ellY;
    }

    #atloEll() {
        let ell = this.#lista[0] + this.#lista[4] + this.#lista[8] + "@";
        ell += this.#lista[2] + this.#lista[4] + this.#lista[6];

        return ell;
    }

} export default Model