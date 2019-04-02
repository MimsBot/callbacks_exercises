const numPurchases;
const isPurchase = transaction => transaction.type === 'purchase';
const allPurchases = transactions.filter(isPurchase);
const numPurchases = allPurchases.length;


console.log( 'The total number of purchases is:', numPurchases );