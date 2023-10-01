/**
 * @class CustomWorld
 * @description This class extends the default Cucumber World class with additional features.
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
// import { messages } from '@cucumber/messages';
import { BrowserContext, Page } from 'playwright';

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ICustomWorld extends World {
  debug: boolean;
  feature?: any;
  context?: BrowserContext;
  page?: Page;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
}

setWorldConstructor(CustomWorld);
