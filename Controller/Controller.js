import Model from "../Model/Model.js";
import Jatekter from "../View/Jatekter.js"

class Controller{

    constructor(){
        
        const view = new Jatekter($(".jatekter"));
        const MODEL = new Model();
        view.setErtek(MODEL.getAllapot());

        $(window).on("valt", ()=>{
            MODEL.valt();
            view.setErtek(MODEL.getAllapot());
        })
    }



}export default Controller