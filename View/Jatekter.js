class Jatekter{

    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#kiir();
        this.elem = $(".elem");
        this.pElem = $("p");
        this.elem.on("click", ()=>{
            this.#esemeny("valt");
        });
    }

    #kiir(){
        let txt = `<div class="elem"><p></p></div>`;
        this.szuloElem.html(txt);
    }

    setErtek(jel){
        console.log(jel);
        this.pElem.html(jel);
    }

    #esemeny(nev){
        const esemeny = new CustomEvent(nev);
        window.dispatchEvent(esemeny);
    }

}export default Jatekter