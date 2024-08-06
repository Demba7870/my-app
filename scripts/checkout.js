import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loaProducts } from '../data/products.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

loaProducts(() => {
renderOrderSummary();
renderPaymentSummary();

});
