import { LightningElement } from 'lwc';
import { subscribe, unsubscribe, onError, setDebugFlag, isEmpEnabled } from 'lightning/empApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PublisherSubscriberWrapper extends LightningElement {
    subscription = {};
    
    channelName = '/event/ChatBotEvent__e';
 
    connectedCallback() {
        this.registerErrorListener();
        this.handleSubscribe();
    }

    proxyToObj(obj){
        return JSON.parse(JSON.stringify(obj));
    }
 
    handleSubscribe() {
        const self = this;
        const messageCallback = function (response) {
            console.log('New message received 1: ', JSON.stringify(response));
            console.log('New message received 2: ', response);

            var obj = JSON.parse(JSON.stringify(response));
            console.log(obj.data.payload);
            console.log(obj.data.payload.Message__c);

            console.log(self.channelName);

            let objData = obj.data.payload;
            self.message = objData.Message__c;
            self.status = objData.Topic__c;
            self.ShowToast('Plaform Event', self.message, 'success', 'dismissable');
        };
 
        subscribe(this.channelName, -1, messageCallback).then(response => {
            console.log('Subscription request sent to: ', JSON.stringify(response.channel));
            this.subscription = response;
        });
    }

    registerErrorListener() {
        onError(error => {
            console.log('Received error from server: ', JSON.stringify(error));
        });
    }
 
    ShowToast(title, message, variant, mode) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(evt);
    }
}