/**
 * @class MarketPage
 * @description This class contains market page element locators.
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import BasePage from './basePage';
import { ICustomWorld } from '../helpers';
import { ElementHandle } from 'playwright';
export default class MarketPage extends BasePage {
  constructor(world: ICustomWorld) {
    super(world);
  }
  hamburger = `button[class*="hamburger"]`;
  searchBtn = `[data-automation-id="search-touchable"]`;
  joinBtn = `[data-automation-id="header-join-touchable"]`;
  loginBtn = `[data-automation-id="header-login-touchable"]`;
  betslipCounterBtn = `button[data-automation-id="header-betslip-touchable"]`;
  betslipContentContainer = this.betslipCounterBtn.concat(` div[class*="contentContainer"]`);
  betslipCountLocator = this.betslipCounterBtn.concat(` [data-automation-id="header-bet-count"]`);
  async hamburgerIcon(options?: any): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.hamburger, { options: options });
  }
  async searchIcon(options?: any): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.searchBtn, { options: options });
  }
  async join(options?: any): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.joinBtn, { options: options });
  }
  async login(options?: any): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.loginBtn, { options: options });
  }
  async betslipCounterBtnElement(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.betslipCounterBtn, { options: options });
  }
  async betslipContentElement(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.betslipContentContainer, { options: options });
  }
  async betslipCountElement(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.betslipCountLocator, { options: options });
  }
  raceCardTitleLocator = `[data-automation-id='contextual-nav-title-select']`;
  raceCardBody = `[data-automation-id='racecard-body']`;
  outcomeDetails = `[class*='outcomeDetails_']`;
  outcomeName = this.outcomeDetails.concat(` [data-automation-id='racecard-outcome-name']`);
  outcomeInfo = this.outcomeDetails.concat(` [data-automation-id='racecard-outcome-info']`);
  winPriceBtn = this.outcomeDetails.concat(
    ` div[data-automation-id='racecard-outcome-0-L-price'] button`,
  );
  placePriceBtn = this.outcomeDetails.concat(
    ` div[data-automation-id='racecard-outcome-1-L-price'] button`,
  );
  async raceCardTitleElement(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return this.$(this.raceCardTitleLocator, { options: options });
  }
  async outcomeDetailsElements(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement>[] | null> {
    return this.$$(this.outcomeDetails, { options: options });
  }
  async outcomeNameElements(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement>[] | null> {
    return this.$$(this.outcomeName, { options: options });
  }
  async outcomeInfoElements(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement>[] | null> {
    return this.$$(this.outcomeInfo, { options: options });
  }
  async winPriceBtnElements(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement>[] | null> {
    return this.$$(this.winPriceBtn, { options: options });
  }
  async placePriceBtnElements(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement>[] | null> {
    return this.$$(this.placePriceBtn, { options: options });
  }
}
