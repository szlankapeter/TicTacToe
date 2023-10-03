import Model from "../Model/Model.js";
import FieldView from "../View/FieldView.js";

class Controller{

    constructor(){
        
        const view = new FieldView($(".jatekter"));
        const MODEL = new Model();
        $(window).on("valt", (event)=>{
            console.log(event.detail);
            MODEL.valt(event.detail.getIndex());
            event.detail.setErtek(MODEL.getAllapot());
            console.log(MODEL.vegeVanE());
        })
    }



}export default Controller