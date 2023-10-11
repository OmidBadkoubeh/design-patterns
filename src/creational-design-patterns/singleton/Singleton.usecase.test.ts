import { beforeEach, describe, expect, it } from "bun:test";
import { Logger } from "./Singleton.usecase";

describe("Singleton UseCase", () => {
  let logger1: Logger;
  let logger2: Logger;

  beforeEach(() => {
    logger1 = Logger.getInstance();
    logger2 = Logger.getInstance();
  });

  it("should log from logger1", () => {
    logger1.log("first message");
  });

  it("should log from logger2", () => {
    logger2.log("first message");
  });

  it("should show instance1 and instance2 are equal", () => {
    expect(logger1).toBe(logger2);
  });
});
