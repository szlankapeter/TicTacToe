import Model from "../Model/Model.js";
import FieldView from "../View/FieldView.js";
import Eredmeny from "../View/eredmenyView.js";

class Controller{

    constructor(){
        
        const view = new FieldView($(".jatekter"));
        const MODEL = new Model();
        const E = new Eredmeny($(".eredmeny"));
        $(window).on("valt", (event)=>{
            console.log(event.detail);
            MODEL.valt(event.detail.getIndex());
            event.detail.setErtek(MODEL.getAllapot());
            if(MODEL.vegeVanE() == "nincs Vége"){
                E.setSzoveg(MODEL.kov() + " következik");
            }else{
                E.setSzoveg(MODEL.vegeVanE());
            }
        })
    }



}export default Controller