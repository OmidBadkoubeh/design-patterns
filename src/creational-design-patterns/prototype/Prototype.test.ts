import { beforeEach, describe, expect, it } from "bun:test";
import { Circle, Rectangle } from "./Prototype";

describe("Prototype Pattern", () => {
  let circle: Circle;
  let rectangle: Rectangle;

  beforeEach(() => {
    circle = new Circle(5, { color: "red", x: 10, y: 10 });
    rectangle = new Rectangle(5, 4, { color: "blue", x: 0, y: 2 });
  });

  it("should create a clone from circle", () => {
    const circle2 = circle.clone();
    expect(circle2.properties.color).toBe(circle.properties.color);
  });

  it("should create a clone from rectangle", () => {
    const rectangle2 = rectangle.clone();
    expect(rectangle2.properties.color).toBe(rectangle.properties.color);
  });

  it("should mutate a cloned circle", () => {
    const circle2 = circle.clone();
    circle2.properties.color = "green";
    expect(circle.properties.color).toBe("red");
    expect(circle2.properties.color).toBe("green");
  });

  it("should mutate a cloned rectangle", () => {
    const rectangle2 = rectangle.clone();
    rectangle2.properties.color = "green";
    expect(rectangle.properties.color).toBe("blue");
    expect(rectangle2.properties.color).toBe("green");
  });
});
