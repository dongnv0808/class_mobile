class Mobile{
    status;
    battery;
    draftMessage;
    sendMessage;
    inboxMessage;
    constructor(status, battery, draftMessage, sendMessage, inboxMessage){
        this.status = status;
        this.battery = battery;
        this.draftMessage = draftMessage;
        this.sendMessage = sendMessage;
        this.inboxMessage = inboxMessage;
    }

    getStatus(){
        if(this.status){
            return "Đang bật";
        }else{
            return "Đang tắt";
        }
    }

    getBattery(){
        return this.battery;
    }

    getChargeBattery(){
        this.battery++;
    }

    getDrafMessage(message){
        this.draftMessage.push(message);
    }

    getSendMessage(mobile2){
        let message = this.draftMessage.pop();
        this.sendMessage.push(message);
        mobile2.inboxMessage.push(message);
    }

    getSendMessage(mobile1){
        let message = this.draftMessage.pop();
        this.sendMessage.push(message);
        mobile1.inboxMessage.push(message);
    }
}