// Enunciado: https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

function bonAppetit(bill, k, b) {
  // Write your code here
  const totalBill = bill.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const totalAnnaEat = totalBill - bill[k];
  const annaShouldPay = totalAnnaEat/2;

  if (annaShouldPay != b) {
    const brianRefundAnna = b - annaShouldPay;
    console.log(brianRefundAnna);
  } else {
    console.log('Bon Appetit');
  }
}
