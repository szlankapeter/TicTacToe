import ElemView from "../View/ElemView.js"

class FieldView{

    constructor(szuloElem){
        for (let index = 0; index < 9; index++) {
            new ElemView(szuloElem, index);
        }
    }


}export default FieldView;