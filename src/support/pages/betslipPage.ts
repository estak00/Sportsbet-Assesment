/**
 * @class BetslipPage
 * @description This class contains betslip page element locators.
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import BasePage from './basePage';
import { ICustomWorld } from '../helpers';
import { ElementHandle } from 'playwright';
export default class BetslipPage extends BasePage {
  constructor(world: ICustomWorld) {
    super(world);
  }
  betslipTitleLocator = `[data-automation-id="betslip-header-title"]`;
  betslipCloseLocator = `[data-automation-id="betslip-header-hide"]`;
  betslipItemsContainer = `[data-automation-id*="betslip-single-"]`;
  betslipItemHorseNameLocator = `div[data-automation-id="betslip-bet-info"] span[data-automation-id="betslip-bet-title"]`;
  betslipItemRemoveBtnLocator = `[data-automation-id="betslip-bet-remove"]`;
  betslipPriceLocatorElements = `[data-automation-id="betslip-bet-odds"]`;
  clearBetslipBtnLocator = `div[data-automation-id="betslip-clear-button"] button`;
  async betslipTitleElement(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.betslipTitleLocator, { options: options });
  }
  async betslipCloseElement(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.betslipCloseLocator, { options: options });
  }
  async betslipItemRemoveElement(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.betslipItemRemoveBtnLocator, { options: options });
  }
  async clearBetslipBtnElement(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.clearBetslipBtnLocator, { options: options });
  }
  async betslipPriceItemElementsArray(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement>[] | null> {
    return this.$$(this.betslipPriceLocatorElements, { options: options });
  }
}
