interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class Circle extends Shape {
  constructor(public radius: number, public properties: ShapeProperties) {
    super(properties);
  }

  public clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle(this.radius, clonedProperties);
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number, public properties: ShapeProperties) {
    super(properties);
  }

  public clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(this.width, this.height, clonedProperties);
  }
}

export { Circle, Rectangle };
