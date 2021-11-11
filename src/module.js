import fs from 'fs';

export default class Module {
    constructor(taskId, taskProxyFile, taskPid, taskDelay, taskMonitorDelay, taskEmail, taskShipBillSame, taskAccountEmail, taskAccountPassword, taskShippingPhone, taskShippingFirstName, taskShippingLastName, taskShippingAddress, taskShippingCity, taskShippingZip, taskShippingState, taskShippingCountry, taskBillingPhone, taskBillingFirstName, taskBillingLastName, taskBillingAddress, taskBillingCity, taskBillingZip, taskBillingState, taskBillingCountry, taskCardNumber, taskCardExpiryMonth, taskCardExpiryYear, taskCardCVV) {
        this.taskId = taskId;
        this.taskProxyFile = taskProxyFile;
        this.taskPid = taskPid;
        this.taskDelay = taskDelay;
        this.taskMonitorDelay = taskMonitorDelay;
        this.taskEmail = taskEmail;
        this.taskShipBillSame = taskShipBillSame;
        this.taskAccountEmail = taskAccountEmail;
        this.taskAccountPassword = taskAccountPassword;
        this.taskShippingPhone = taskShippingPhone;
        this.taskShippingFirstName = taskShippingFirstName;
        this.taskShippingLastName = taskShippingLastName;
        this.taskShippingAddress = taskShippingAddress;
        this.taskShippingCity = taskShippingCity;
        this.taskShippingZip = taskShippingZip;
        this.taskShippingState = taskShippingState;
        this.taskShippingCountry = taskShippingCountry;
        this.taskBillingPhone = taskBillingPhone;
        this.taskBillingFirstName = taskBillingFirstName;
        this.taskBillingLastName = taskBillingLastName;
        this.taskBillingAddress = taskBillingAddress;
        this.taskBillingCity = taskBillingCity;
        this.taskBillingZip = taskBillingZip;
        this.taskBillingState = taskBillingState;
        this.taskBillingCountry = taskBillingCountry;
        this.taskCardNumber = taskCardNumber;
        this.taskCardExpiryMonth = taskCardExpiryMonth;
        this.taskCardExpiryYear = taskCardExpiryYear;
        this.taskCardCVV = taskCardCVV;
        this.taskProxy;
        this.taskIsError;
        this.taskIsPassable;

        // all objects - add additional for your own usage

    };


    async getProxy() {
        //read proxies 

        var data = fs.readFileSync(`./data/${this.taskProxyFile}.txt`).toString();
        if (data) {
            var lines = data.split('\n');
            var proxyData = lines[Math.floor(Math.random() * lines.length)];
            var password = proxyData.split(':')[3].split(', ').toString();
            var realPassword = password.replace('\r', '');
            var proxy = `http://${proxyData.split(':')[2].split(', ').toString()}:${realPassword}@${proxyData.split(':')[0].split(', ').toString()}:${proxyData.split(':')[1].split(', ').toString()}`
            this.taskProxy = proxy;
            return true;

            //convert to http and store
        } else {
            console.log('No Proxies Found');
            return this.taskIsPassable = false;
        };



    };
}