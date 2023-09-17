export interface Shape {
  /**
   * Calculates the area of shape
   */
  area(): number;

  /**
   * Calculates the perimeter of shape.
   */
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

/**
 * Calculates the area of given shape, no matter what shape
 * you pass, because of the `Shape` interface guarantees
 * that we have a `area()` method for each shape instance.
 *
 * @param shape Any shape you want to calculate it's area
 * @returns Area of the given shape
 */
export function calculateTotalArea(shape: Shape): number {
  return shape.area();
}
