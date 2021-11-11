import Module from './module.js';


export default async function taskRun(taskId, taskProxyFile, taskPid, taskDelay, taskMonitorDelay, taskEmail, taskShipBillSame, taskAccountEmail, taskAccountPassword, taskShippingPhone, taskShippingFirstName, taskShippingLastName, taskShippingAddress, taskShippingCity, taskShippingZip, taskShippingState, taskShippingCountry, taskBillingPhone, taskBillingFirstName, taskBillingLastName, taskBillingAddress, taskBillingCity, taskBillingZip, taskBillingState, taskBillingCountry, taskCardNumber, taskCardExpiryMonth, taskCardExpiryYear, taskCardCVV) {
    var taskData = new Module(taskId, taskProxyFile, taskPid, taskDelay, taskMonitorDelay, taskEmail, taskShipBillSame, taskAccountEmail, taskAccountPassword, taskShippingPhone, taskShippingFirstName, taskShippingLastName, taskShippingAddress, taskShippingCity, taskShippingZip, taskShippingState, taskShippingCountry, taskBillingPhone, taskBillingFirstName, taskBillingLastName, taskBillingAddress, taskBillingCity, taskBillingZip, taskBillingState, taskBillingCountry, taskCardNumber, taskCardExpiryMonth, taskCardExpiryYear, taskCardCVV);


    await taskData.getProxy();

    if (taskData.taskIsPassable = true) {
        //move forward

    }
};