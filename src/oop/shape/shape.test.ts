import { describe, expect, it } from "bun:test";
import { Circle, Rectangle, calculateTotalArea } from "./shape";

describe("OOP concepts", () => {
  let circle: Circle;
  let rectangle: Rectangle;

  it("Can create class instances", () => {
    circle = new Circle(5);
    rectangle = new Rectangle(4, 6);
  });

  it("Can calculate area of circle", () => {
    const circleArea = calculateTotalArea(circle);
    expect(circleArea).toBeNumber();
  });

  it("Can calculate area of rectangle", () => {
    const rectangleArea = calculateTotalArea(rectangle);
    expect(rectangleArea).toBeInteger();
  });
});
