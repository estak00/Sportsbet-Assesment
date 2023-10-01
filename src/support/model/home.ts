/**
 * @class Home
 * @description This class contains methods to interact with home page elements.
 *
 * @author Estak Hossan
 */

import { ICustomWorld } from '../helpers';
import { HomePage } from '../pages';
import { ElementHandle } from 'playwright';
const options = { timeout: 60000 };
export default class Home extends HomePage {
  raceCardTitle: string | null | undefined;
  constructor(world: ICustomWorld) {
    super(world);
  }
  async isBetslipCountVisible(): Promise<boolean> {
    const betslipCountEle = await this.betslipCountElement(options);
    if (betslipCountEle) {
      const result = await betslipCountEle?.isVisible();
      return result;
    }
    return false;
  }
  async navigateToMainMenu(): Promise<void> {
    const hamburger = await this.hamburgerIcon();
    await hamburger?.click();
  }
  async navigateToBetslipScreen(): Promise<void> {
    const betslipCounter = await this.betslipCounterBtnElement();
    await betslipCounter?.click();
  }
  async clickSpecifiedRaceCard(carousel: string, raceCardNo: number): Promise<void> {
    let raceCards: ElementHandle<SVGElement | HTMLElement>[] | null;
    let raceCardTitleElement: ElementHandle<SVGElement | HTMLElement> | null;
    switch (carousel) {
      case 'nextToJump':
        raceCards = await this.nextToJumpRaceCardsElements(options);
        raceCardTitleElement = raceCards && (await raceCards[raceCardNo].$(this.eventTitle));
        this.raceCardTitle = await raceCardTitleElement?.textContent();
        raceCards && (await raceCards[raceCardNo].click());
        break;
      case 'popularNow':
        raceCards = await this.popularNowRaceCardsElements(options);
        raceCardTitleElement = raceCards && (await raceCards[raceCardNo].$(this.eventTitle));
        this.raceCardTitle = await raceCardTitleElement?.textContent();
        raceCards && (await raceCards[raceCardNo].click());
        break;
    }
  }
}
