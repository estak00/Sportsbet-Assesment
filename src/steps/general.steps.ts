/**
 * @class Common Scripts
 * @description This file contains common reusable scripts.
 *
 * @author Estak Hossan
 */

import { Home } from '../support/model';
import { ICustomWorld } from '../support/helpers';
import { Given, Then } from '@cucumber/cucumber';
import expect from 'expect';
let homePage: Home;

Given('Navigate to the SportsBet website', async function (this: ICustomWorld) {
  this && (homePage = new Home(this));
  await homePage.goto(homePage.endpoints.app_base_url);
  await homePage.snapshot(this);
  expect(await homePage.isBetslipCountVisible()).toBe(true);
});

Then('debug', async function () {
  // eslint-disable-next-line no-debugger
  debugger;
});
