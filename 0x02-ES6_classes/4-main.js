// 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p);
console.log(p.displayFullPrice());

// Tester la méthode statique convertPrice
console.log(Pricing.convertPrice(100, 1.2)); // Affiche : 120
