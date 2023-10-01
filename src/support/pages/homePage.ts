/**
 * @class HomePage
 * @description This class contains home page element locators.
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import BasePage from './basePage';
import { ICustomWorld } from '../helpers';
import { ElementHandle } from 'playwright';
export default class HomePage extends BasePage {
  constructor(world: ICustomWorld) {
    super(world);
  }

  hamburger = `button[class*='hamburger']`;
  searchBtn = `[data-automation-id='search-touchable']`;
  joinBtn = `[data-automation-id='header-join-touchable']`;
  loginBtn = `[data-automation-id='header-login-touchable']`;
  betslipCounterBtn = `button[data-automation-id='header-betslip-touchable']`;
  betslipContentContainer = this.betslipCounterBtn.concat(` div[class*='contentContainer']`);
  betslipCountLocator = this.betslipCounterBtn.concat(` [data-automation-id='header-bet-count']`);

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
  nextToJumpCarousel = `[data-automation-id="group-1-carousel-1-container"]`;
  nextToJumpRaceCards = this.nextToJumpCarousel.concat(
    ` [data-automation-id*="group-1-carousel-1-body-container-cell"] a`,
  );
  eventTitle = 'span';
  popularNowCarousel = `[data-automation-id="group-2-carousel-1-container"]`;
  popularNowRaceCards = this.popularNowCarousel.concat(
    ` [data-automation-id*="group-2-carousel-1-body-container-cell"] a`,
  );
  async nextToJumpRaceCardsElements(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement>[] | null> {
    return this.$$(this.nextToJumpRaceCards, { options: options });
  }
  async popularNowRaceCardsElements(
    options?: any,
  ): Promise<ElementHandle<SVGElement | HTMLElement>[] | null> {
    return this.$$(this.popularNowRaceCards, { options: options });
  }
}
