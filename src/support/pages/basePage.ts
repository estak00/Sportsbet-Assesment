/**
 * @class BasePage
 * @description This class contains base page element locators.
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { ICustomWorld } from '../helpers';
import { ElementHelper } from '../utils';
export default class BasePage extends ElementHelper {
  constructor(world: ICustomWorld) {
    super(world);
  }
}
