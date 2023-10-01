/**
 * @class SportsBet Race Card Scripts
 * @description This file contains various steps to test SportsBet Race Card functionality
 *
 * @author Estak Hossan
 */

import { Home, Market } from '../support/model';
import { ICustomWorld } from '../support/helpers';
import expect from 'expect';
import { Then, When } from '@cucumber/cucumber';
let homePage: Home;
let marketPage: Market;

When(
  'Clicking on the specified race card {string} in Next To Jump Carousel',
  async function (this: ICustomWorld, cardNo: string) {
    this && (homePage = new Home(this)) && (marketPage = new Market(this));
    await homePage.clickSpecifiedRaceCard('nextToJump', parseInt(cardNo) - 1);
    await homePage.snapshot(this);
    expect(await marketPage.isOutcomeDetailsVisible()).toBe(true);
  },
);

When(
  'Clicking on the specified race card {string} in Popular Now Carousel',
  async function (this: ICustomWorld, cardNo: string) {
    this && (homePage = new Home(this)) && (marketPage = new Market(this));
    await homePage.clickSpecifiedRaceCard('popularNow', parseInt(cardNo) - 1);
    await homePage.snapshot(this);
    expect(await marketPage.isOutcomeDetailsVisible()).toBe(true);
  },
);

Then('Verify the selected Race card Details', async function (this: ICustomWorld) {
  expect(homePage.raceCardTitle).toBe(await marketPage.getRaceCardTitle());
});
