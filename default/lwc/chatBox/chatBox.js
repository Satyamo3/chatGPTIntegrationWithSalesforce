import { LightningElement } from 'lwc';

export default class ChatBox extends LightningElement {
    // create handler for button click
    handleClick() {
        // fire event from child
        this.dispatchEvent(new CustomEvent('sendmessage'));
    }
}