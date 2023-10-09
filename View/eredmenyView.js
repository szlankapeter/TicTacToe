class Eredmeny{

    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#div();
        this.szoveg = $(".szoveg:last-child");
        this.pElem = this.szoveg.children("p");
    }

    #div(){
        let txt =  `<div class="szoveg">
                    <h2>Eredmeny</h2><br>
                    <p></p>
                    </div>`;
        this.szuloElem.append(txt);
    }

    setSzoveg(txt){
        this.pElem.html(txt);
    }
} export default Eredmeny