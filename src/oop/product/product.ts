class Product {
  constructor(public id: string, public price: number, public description: string) {}

  display(): void {
    console.log(`ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`);
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public author: string,
    public title: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  }
}

class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

export { Book, Electronic, Product };
