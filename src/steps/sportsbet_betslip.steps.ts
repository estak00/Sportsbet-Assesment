/**
 * @class Login Scripts
 * @description This file contains various steps to test login functionality
 *
 * @author Estak Hossan
 */

import { Market } from '../support/model';
import { ICustomWorld } from '../support/helpers';
import expect from 'expect';
import { Then, When } from '@cucumber/cucumber';
let marketPage: Market;

When(
  'place specified bets {string} on the selected horse',
  async function (this: ICustomWorld, noofbets: string) {
    this && (marketPage = new Market(this));
    await marketPage.placeSpecifiedBets(parseInt(noofbets));
    await marketPage.snapshot(this);
    expect(await marketPage.getBetslipCount()).toBe(noofbets);
  },
);

Then('Verify the Bet Slip Details', async function (this: ICustomWorld) {
  await marketPage.clickBetslipCounterBtn();
  await marketPage.snapshot(this);
  await marketPage.betslipPage.constructBetslipPriceItemsArray();
  expect(marketPage.betslipPage.betslipPriceItemArray).toStrictEqual(marketPage.winPriceItemArray);
});
