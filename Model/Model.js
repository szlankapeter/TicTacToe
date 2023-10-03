class Model{

    #allapot;

    constructor(){
        this.#allapot = "X";
    }

    valt(){
        if(this.#allapot == "X"){
            this.#allapot = "O";
        }
        else{
            this.#allapot = "X";
        }
    }

    getAllapot(){
        return this.#allapot;
    }

}export default Model