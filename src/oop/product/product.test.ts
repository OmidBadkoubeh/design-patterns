import { beforeEach, describe, expect, it, spyOn } from "bun:test";
import { Book, Electronic, Product } from "./product";

describe("Polymorphism", () => {
  let phone: Electronic;
  let book: Book;

  beforeEach(() => {
    phone = new Electronic("1", 1000, "A good phone", "Apple", "iPhone 15");
    book = new Book("2", 200, "A good book", "Mark", "The subtle art");
  });

  it("Can call their display method despite their class", () => {
    // phone
    spyOn(phone, "display");
    phone.display();
    expect(phone.display).toHaveBeenCalled();

    // book
    spyOn(book, "display");
    book.display();
    expect(book.display).toHaveBeenCalled();
  });
});
