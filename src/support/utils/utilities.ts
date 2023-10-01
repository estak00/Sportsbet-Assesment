/**
 * @class Utilities
 * @description Class containing various reusable Methods for supporting test execution
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Faker from 'faker';
Faker.locale = 'en_AU';
export default class Utilities {
  dynamicSort(property: string): any {
    let sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a: any, b: any): number => {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      const result: number = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
  isEmpty(obj: any): boolean {
    return Object.keys(obj).length === 0;
  }
  randomText(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  randomNumberBetweenIntervals(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  compareValues(key: string, order = 'asc'): (a: string, b: string) => number {
    return function innerSort(a, b) {
      if (
        !Object.prototype.hasOwnProperty.call(a, key) ||
        !Object.prototype.hasOwnProperty.call(b, key)
      ) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }
  sortObject(obj: any): any {
    const keys = Object.keys(obj).sort();
    const newObj = {};
    keys.forEach((key) => {
      newObj[key] = obj[key];
    });
    return newObj;
  }

  capitalize(word: string): string {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }

  removeDuplicates(array: any): string[] {
    let filtered = [];
    try {
      filtered = array.filter((a: any, b: any) => array.indexOf(a) === b);
    } catch (error) {
      //do nothing
    }
    return filtered;
  }
  randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
