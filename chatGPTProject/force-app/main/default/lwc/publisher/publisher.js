import { LightningElement } from 'lwc';

export default class Publisher extends LightningElement {
    // title;
    // body;

    // handleTitleChange(event) {
    //     this.title = event.target.value;
    // }

    // handleBodyChange(event) {
    //     this.body = event.target.value;
    // }

    // handlePublish() {
    //     const detail = { title: this.title, body: this.body };
    //     this.dispatchEvent(new CustomEvent('publish', { detail, bubbles: true }));
    // }

    value;

    handleChange(event){
        this.value = event.target.value;
    }

    handleClick(){
        let event = new CustomEvent('messaget',{
            detail: {
                value: this.value
            },
            bubbles:true
        });
        this.dispatchEvent(event);
    }
}