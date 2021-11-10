import * as fs from 'fs';
import parser from 'csv-parse';
import { default as taskRun } from './src/taskFlow.js';

var data;

async function createTasks() {
    var data = parser({ columns: true }, (error, records) => {
        fs.writeFile('./data/tasks.json', JSON.stringify(records), (error) => { })
        return true;
    });
    fs.createReadStream('./data/tasks.csv').pipe(data);

};

async function readTasks() {
    await createTasks();
    setTimeout(function () {
        data = JSON.parse(fs.readFileSync('./data/tasks.json'));
    }, 100);
}


async function formTasks() {
    setTimeout(async function () {
        data.forEach(async function (element, index) {
            if (element.site == 'SITEKEY') {
                await taskRun(index + 1, element.proxyFile, element.pid, element.taskDelay, element.monitorDelay, element.email, element.shipSameBill, element.accountEmail, element.accountPassword, element.shippingPhone, element.shippingFirstName, element.shippingLastName, element.shippingAddress, element.shippingCity, element.shippingZip, element.shippingState, element.shippingCountry, element.billingPhone, element.billingFirstName, element.billingLastName, element.billingAddress, element.billingCity, element.billingZip, element.billingState, element.billingCountry, element.cardNumber, element.cardExpiryMonth, element.cardExpiryYear, element.cardCVV);
            }
        });
    }, 300);
}



(async () => {
    await readTasks();
    await formTasks();
})
    ();

