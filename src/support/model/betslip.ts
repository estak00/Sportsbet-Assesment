/**
 * @class Betslip
 * @description This class contains methods to interact with betslip page elements.
 *
 * @author Estak Hossan
 */

import { ICustomWorld } from '../helpers';
import { BetslipPage } from '../pages';

const options = { timeout: 60000 };
export default class Betslip extends BetslipPage {
  betslipPriceItemArray: string[] = [];
  private static instance: Betslip;
  constructor(world: ICustomWorld) {
    super(world);
  }

  static getInstance(world: ICustomWorld): Betslip {
    if (!this.instance) {
      this.instance = new Betslip(world);
    }
    return this.instance;
  }

  async constructBetslipPriceItemsArray(): Promise<void> {
    const priceItemArr = await this.betslipPriceItemElementsArray(options);
    if (priceItemArr) {
      for (let i = 0; i < priceItemArr.length; i++) {
        const priceItem = await priceItemArr[i].textContent();
        priceItem && this.betslipPriceItemArray.push(priceItem);
      }
    }
  }
}
