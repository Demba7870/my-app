import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loaProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
    
    await loadProductsFetch();

    const value = await new Promise( (resolve) =>{
        loadCart(() =>{
            resolve('values3');
        });
    });       


    renderOrderSummary();
    renderPaymentSummary();
   
}

loadPage();


/*

Promise.all([
   loadProductsFetch(),

     new Promise( (resolve) =>{
        loadCart(() =>{
            resolve();
        });
    })
]).then( (values) =>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();

});
*/

/*
new Promise ((resolve) => {
 
   loaProducts( () =>{
    
    resolve('value1');
   });
}).then( (value) =>{
    console.log(value);
    return new Promise( (resolve) =>{
        loadCart(() =>{
            resolve();
        });
    });    
}).then( () =>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loaProducts(() => {
    loadCart( () =>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/