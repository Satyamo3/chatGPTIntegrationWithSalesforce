import { LightningElement, track } from 'lwc';

export default class Subscriber extends LightningElement {
    // title;
    // body;

    // connectedCallback() {
    //     window.addEventListener('publish', this.handlePublish);
    // }

    // handlePublish = (event) => {
    //     const detail = event.detail;
        
    //     this.title = detail.title;
    //     this.body = detail.body;
    // }

    // disconnectedCallback() {
    //     window.removeEventListener('publish', this.handlePublish);
    // }

    @track itemList = [];

    connectedCallback(){
        window.addEventListener('messaget', this.handleMessage, false);
    }

    handleMessage = (event) => {
        let detail = event.detail.value;
        this.itemList.push(detail);
    }

    disconnectedCallback(){
        window.removeEventListener('messaget', this.handleMessage, false);
    }

    get showItemList(){
        return this.itemList.length >= 1;
    }
}