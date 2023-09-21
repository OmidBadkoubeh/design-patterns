interface Customer {
  getDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 1;
  }
  getDiscount(): number {
    return 10;
  }
}

class PremiumCustomer implements Customer {
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
  getDiscount(): number {
    return 20;
  }
}

class GoldCustomer implements Customer {
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
  getDiscount(): number {
    return 30;
  }
}

class Discount {
  getDiscount(customer: Customer) {
    return customer.getDiscount();
  }
}

const regularCustomer: RegularCustomer = new RegularCustomer();
const premiumCustomer: PremiumCustomer = new PremiumCustomer();
const goldCustomer: GoldCustomer = new GoldCustomer();

const discount = new Discount();

console.log(discount.getDiscount(regularCustomer));
console.log(discount.getDiscount(premiumCustomer));
console.log(discount.getDiscount(goldCustomer));
