import { LightningElement } from 'lwc';

export default class EventSimple extends LightningElement {
    page = 1;

    handlePrevious(event){
        if(this.page > 1){
            this.page = this.page - 1;
        }
    }
    handleNext(){
        this.page = this.page + 1;
    }
}