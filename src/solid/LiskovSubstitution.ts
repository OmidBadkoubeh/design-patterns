abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment - amount: ${amount}`);
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing debit card payment - amount: ${amount}`);
  }
}

class PaypalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing paypal payment - amount: ${amount}`);
  }
}

class BitcoinProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing bitcoin payment - amount: ${amount}`);
  }
}

function executePayment(paymentProcessor: PaymentProcessor, amount: number): void {
  paymentProcessor.processPayment(amount);
}

const creditCard = new CreditCardProcessor();
const debitCard = new DebitCardProcessor();
const paypal = new PaypalProcessor();
const bitcoin = new BitcoinProcessor();

executePayment(creditCard, 100);
executePayment(debitCard, 200);
executePayment(paypal, 150);
executePayment(bitcoin, 1);
