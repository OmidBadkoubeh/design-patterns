import { beforeEach, describe, expect, it } from "bun:test";
import { Singleton } from "./Singleton";

describe("Singleton pattern", () => {
  let instance1: Singleton;
  let instance2: Singleton;

  beforeEach(() => {
    instance1 = Singleton.getInstance();
    instance2 = Singleton.getInstance();
  });

  it("should set value of instance1 to 10", () => {
    instance1.value = 10;
    expect(instance1.value).toBe(10);
  });

  it("should get value of instance1 and equals to 10", () => {
    expect(instance1.value).toBe(10);
  });

  it("should get value of instance2 and equals to 10", () => {
    expect(instance2.value).toBe(10);
  });

  it("should show instance1 and instance2 are equal", () => {
    expect(instance1).toBe(instance2);
  });
});
