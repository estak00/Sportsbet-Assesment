/**
 * @class Elements Helper
 * @description This class contains various helper methods to interact with page elements.
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { ICustomWorld } from '../helpers';
import { Base } from '../model';
import { ElementLocatingOptions } from '../helpers/interfaces';
import { ElementHandle, Frame } from 'playwright';
// eslint-disable-next-line import/no-unresolved
import { PageFunctionOn } from 'playwright-core/types/structs';

export default class ElementHelper extends Base {
  constructor(world: ICustomWorld) {
    super(world);
  }
  async $(
    selector: string,
    locatingOptions?: ElementLocatingOptions,
  ): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    let element: ElementHandle<SVGElement | HTMLElement> | null;
    const parent = locatingOptions?.parent;
    const options = locatingOptions?.options;
    if (parent) {
      element = (await parent.waitForSelector(selector, options)) && (await parent.$(selector));
    } else {
      element = (await this.waitForSelector(selector, options)) && (await this.page.$(selector));
    }
    if (element) {
      await element.focus();
      await element.scrollIntoViewIfNeeded();
    }
    return element;
  }

  async $$(
    selector: string,
    locatingOptions?: ElementLocatingOptions,
  ): Promise<ElementHandle<SVGElement | HTMLElement>[] | null> {
    let elements: ElementHandle<SVGElement | HTMLElement>[] | null;
    const parent = locatingOptions?.parent;
    const options = locatingOptions?.options;
    if (parent) {
      elements = (await parent.waitForSelector(selector, options)) && (await parent.$$(selector));
    } else {
      elements = (await this.waitForSelector(selector, options)) && (await this.page.$$(selector));
    }
    if (elements) {
      await elements[0].focus();
      await elements[0].scrollIntoViewIfNeeded();
    }
    return elements;
  }

  async $eval(
    selector: string,
    pageFunction: PageFunctionOn<any, void, void>,
    locatingOptions?: ElementLocatingOptions,
    arg?: any,
  ): Promise<void> {
    const parent = locatingOptions?.parent;
    if (parent) {
      await parent.$eval(selector, pageFunction, arg);
    } else {
      await this.page.$eval(selector, pageFunction, arg);
    }
  }

  async $$eval(
    selector: string,
    pageFunction: PageFunctionOn<HTMLElement[], void, void>,
    locatingOptions?: ElementLocatingOptions,
    arg?: any,
  ): Promise<void> {
    const parent = locatingOptions?.parent;
    if (parent) {
      await parent.$$eval(selector, pageFunction, arg);
    } else {
      await this.page.$$eval(selector, pageFunction, arg);
    }
  }

  async checkOption(selector: string, options?: any): Promise<void> {
    await this.page.check(selector, options);
  }

  async click(selector: string, options?: any): Promise<void> {
    await this.page.click(selector, options);
  }

  async dblclick(selector: string, options?: any): Promise<void> {
    await this.page.dblclick(selector, options);
  }

  async fill(selector: string, value: string, options?: any): Promise<void> {
    await this.page.fill(selector, value, options);
  }

  async focus(selector: string, options?: any): Promise<void> {
    await this.page.focus(selector, options);
  }

  frame(frameSelector: string | any): Frame | null {
    return this.page.frame(frameSelector);
  }

  frames(): Array<Frame> | null {
    return this.page.frames();
  }

  async getAttribute(selector: string, name: string, options?: any): Promise<string | null> {
    return this.page.getAttribute(selector, name, options);
  }

  async hover(selector: string, options?: any): Promise<void> {
    return this.page.hover(selector, options);
  }

  async innerHtml(selector: string, options?: any): Promise<string> {
    return this.page.innerHTML(selector, options);
  }

  async innerText(selector: string, options?: any): Promise<string> {
    return this.page.innerText(selector, options);
  }

  async isChecked(selector: string, options?: any): Promise<boolean> {
    return this.page.isChecked(selector, options);
  }

  async isEnabled(selector: string, options?: any): Promise<boolean> {
    return this.page.isEnabled(selector, options);
  }

  async isHidden(selector: string, options?: any): Promise<boolean> {
    return this.page.isHidden(selector, options);
  }

  async isVisible(selector: string, options?: any): Promise<boolean> {
    return this.page.isVisible(selector, options);
  }

  async press(selector: string, key: string, options?: any): Promise<void> {
    return this.page.press(selector, key, options);
  }

  //usage - page.selectOption('select#colors', ['red', 'green', 'blue']);
  async selectOption(selector: string, values: any, options?: any): Promise<Array<string>> {
    return this.page.selectOption(selector, values, options);
  }

  setDefaultTimeout(timeout: number): void {
    return this.page.setDefaultTimeout(timeout);
  }

  async setInputFiles(selector: string, files: any, options?: any): Promise<void> {
    return this.page.setInputFiles(selector, files, options);
  }

  async tap(selector: string, options?: any): Promise<void> {
    return this.page.tap(selector, options);
  }

  async textContent(selector: string, options?: any): Promise<string | null> {
    return this.page.textContent(selector, options);
  }

  async title(): Promise<string> {
    return this.page.title();
  }

  async type(selector: string, text: string, options?: any): Promise<void> {
    return this.page.type(selector, text, options);
  }

  async uncheck(selector: string, options?: any): Promise<void> {
    return this.page.uncheck(selector, options);
  }

  isClosed(): boolean {
    return this.page.isClosed();
  }

  async waitForSelector(selector: string, options?: any): Promise<null | ElementHandle> {
    return this.page.waitForSelector(selector, options);
  }
  async hasClass(selector: string, className: string): Promise<boolean> {
    await this.page.waitForSelector(selector);
    return this.page.$eval(
      selector,
      (el, className) => el.classList.contains(className),
      className,
    );
  }

  async getElementsCount(selector: string): Promise<number> {
    return this.page.$$eval(selector, (elements) => elements.length);
  }

  async waitForNthElement(selector: string, index: number): Promise<void> {
    await this.page.waitForSelector(`${selector}:nth-of-type(${index})`);
  }

  async getNodeName(selector: string): Promise<string> {
    return this.page.$eval(selector, (e) => e.nodeName);
  }

  async getText(selector: string): Promise<string | null> {
    return this.page.$eval(selector, (e) => e.textContent);
  }

  async getBoundingBox(selector: string): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null> {
    const el = await this.page.waitForSelector(selector);
    await el.waitForElementState('stable');
    const box = await el.boundingBox();
    el.dispose();
    return box;
  }

  async getCenterPoint(selector: string): Promise<{ x: number; y: number } | undefined> {
    const box = await this.getBoundingBox(selector);
    if (!box) return;
    return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  }

  async getStyleValue(selector: string, key: string): Promise<string | undefined | null> {
    await this.page.waitForSelector(selector);
    const styleAttribute = await this.page.getAttribute(selector, 'style');
    if (!styleAttribute) return;
    const exp = new RegExp(`${key}:(.+?);`);
    const res = exp.exec(styleAttribute);
    return res && res.pop()?.trim();
  }

  async getTexts(selector: string): Promise<Array<string | null>> {
    return this.page.$$eval(selector, (els) => els.map((e) => e.textContent));
  }
}
