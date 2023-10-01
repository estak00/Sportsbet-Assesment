/**
 * @class PlayWright Scripts
 * @description This file contains various tests related to PlayWright Website.
 *
 * @author Estak Hossan
 */

import { ElementHelper } from '../support/utils';
import { ICustomWorld } from '../support/helpers';
import { Given, Then, When } from '@cucumber/cucumber';
import expect from 'expect';
let helper: ElementHelper;
const url = 'https://playwright.dev';
const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';

Given('Go to the playwright website', async function (this: ICustomWorld) {
  helper = new ElementHelper(this);
  await helper.goto(url);
  await helper.waitForSelector('nav >> a >> text="Playwright"');
  const actualTitle = await helper.title();
  helper.evaluator.addAssertion(() => expect(actualTitle).toBe(expectedTitle));
  helper.evaluator.evaluate();
});

When('Change theme to {string} mode', async function (this: ICustomWorld, mode: string) {
  helper = new ElementHelper(this);
  const current = await helper.getAttribute('html', 'data-theme');
  if (current !== mode) {
    await helper.click(`button[class*='clean-btn toggleButton']`);
  }
  await helper.waitForSelector(`html[data-theme=${mode}]`);
  await helper.snapshot(this);
});

Then('Perform Custom Assertions', function (this: ICustomWorld) {
  helper = new ElementHelper(this);
  helper.evaluator.addAssertion(() => expect(true).toBe(true));
  helper.evaluator.addAssertion(() => expect(false).toBe(true));
  helper.evaluator.addAssertion(() => expect(1).toEqual(1));
  helper.evaluator.addAssertion(() => expect(2).toEqual(3));
  helper.evaluator.evaluate();
});
