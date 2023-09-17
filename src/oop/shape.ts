export interface Shape {
  area(): number;
  perimeter(): number;
}

export class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return Math.PI * this.radius * 2;
  }
}

export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return (this.width + this.height) * 2;
  }
}

export function calculateTotalArea(shape: Shape): number {
  return shape.area();
}
