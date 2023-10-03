class ElemView {

    #allapot;
    constructor(szuloElem, index) {
        this.szuloElem = szuloElem;
        this.index = index;
        this.#allapot = true;
        this.#kiir();
        this.elem = $(".elem:last-child");
        this.pElem = this.elem.children("p");

        this.elem.on("click", () => {
            if(this.#allapot){
                this.#esemeny("valt");
                this.#allapot = false;
            }
        });
    }

getIndex() {
    return this.index;
}

#kiir() {
    let txt = `<div class="elem"><p></p></div>`;
    this.szuloElem.append(txt);
}

setErtek(jel) {
    this.pElem.html(jel);
}

#esemeny(nev) {
    const esemeny = new CustomEvent(nev, { detail: this });
    window.dispatchEvent(esemeny);
}

} export default ElemView