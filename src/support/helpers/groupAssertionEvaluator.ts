/**
 * @class GroupAssertionEvaluator
 * @description This file contains methods to group all the assertions from the tests and evaluate them at the end.
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

export default class GroupAssertionEvaluator {
  private _assertions: any[] = [];
  private _errors: any[] = [];
  static instance: GroupAssertionEvaluator;

  static get getInstance(): GroupAssertionEvaluator {
    if (!this.instance) {
      this.instance = new GroupAssertionEvaluator();
    }
    return this.instance;
  }

  addAssertion(callback: () => void): void {
    if (typeof callback !== 'function') {
      throw new Error('callback must be a function');
    }
    this._assertions.push(callback);
  }

  evaluate(): void {
    this._errors = [];
    for (const i in this._assertions) {
      try {
        this._assertions[i]();
      } catch (error: any) {
        this._errors.push(`${error.message}`);
      }
    }
    this._assertions = [];
    if (this._errors.length > 0) {
      throw new Error(this._errors.join('\r\n'));
    }
  }
}
