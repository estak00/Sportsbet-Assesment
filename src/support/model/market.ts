/**
 * @class Market
 * @description This class contains methods to interact with market page elements.
 *
 * @author Estak Hossan
 */

import Betslip from './betslip';
import { ICustomWorld } from '../helpers';
import { MarketPage } from '../pages';
import expect from 'expect';
const options = { timeout: 60000 };

export default class Market extends MarketPage {
  winPriceItemArray: string[] = [];
  constructor(world: ICustomWorld) {
    super(world);
  }
  get betslipPage(): Betslip {
    return Betslip.getInstance(this.world);
  }
  async clickBetslipCounterBtn(): Promise<void> {
    const betslipCountEle = await this.betslipCounterBtnElement(options);
    await betslipCountEle?.click();
    await this.waitForLoadState('domcontentloaded');
  }

  async getBetslipCount(): Promise<string | null | undefined> {
    const betslipCountEle = await this.betslipCountElement(options);
    const betslipCount = await betslipCountEle?.textContent();
    return betslipCount;
  }
  async getRaceCardTitle(): Promise<string | null | undefined> {
    const raceCardTitleEle = await this.raceCardTitleElement(options);
    const raceCardTitle = await raceCardTitleEle?.textContent();
    return raceCardTitle;
  }
  async isOutcomeDetailsVisible(): Promise<boolean> {
    const outcomeDetails = await this.outcomeDetailsElements(options);
    if (outcomeDetails) {
      const result = await outcomeDetails[0]?.isVisible();
      return result;
    }
    return false;
  }
  async placeSpecifiedBets(noofbets: number): Promise<void> {
    const winPriceBtn = await this.winPriceBtnElements(options);
    for (let i = 0; i < noofbets; i++) {
      if (winPriceBtn) {
        const priceItem = await winPriceBtn[i].textContent();
        priceItem && this.winPriceItemArray.push(priceItem);
        await winPriceBtn[i].click();
        if (i === noofbets - 1) break;
      }
      try {
        const betslipClose = await this.betslipPage.betslipCloseElement();
        if (betslipClose && (await betslipClose.isVisible())) {
          betslipClose.click();
        }
      } catch (ex) {
        //handle in a different way
        const hamburgerEle = await this.hamburgerIcon(options);
        const labelBounds = await hamburgerEle?.boundingBox();
        expect(labelBounds).toBeTruthy();

        const bounds = labelBounds!;
        const clickX = bounds.x - bounds.height;
        const clickY = bounds.y + bounds.height / 2;
        await this.page.mouse.click(clickX, clickY);
      }
    }
  }
}
