import { beforeEach, describe, expect, it } from "bun:test";
import { BankAccount } from "./bank-account";

describe("Encapsulation", () => {
  let bankAccount: BankAccount;
  const initialBalance = 1000;

  beforeEach(() => {
    bankAccount = new BankAccount(initialBalance);
  });

  it("Can deposit a value to bank account", () => {
    bankAccount.deposit(100);
    expect(bankAccount.balance).toBe(initialBalance + 100);
  });

  it("Cannot deposit a minus value to bank account", () => {
    bankAccount.deposit(-100);
    expect(bankAccount.balance).toBe(initialBalance);
  });

  it("Can withdraw a value to bank account", () => {
    bankAccount.withdraw(100);
    expect(bankAccount.balance).toBe(initialBalance - 100);
  });

  it("Cannot withdraw a minus value to bank account", () => {
    bankAccount.withdraw(-100);
    expect(bankAccount.balance).toBe(initialBalance);
  });

  it("Cannot withdraw account value bigger than balance of bank account", () => {
    bankAccount.withdraw(initialBalance + 200);
    expect(bankAccount.balance).toBe(initialBalance);
  });
});
