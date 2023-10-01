/**
 * @class Base
 * @description This class contains common reusable methods across various pages.
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Endpoints } from '../config';
import { GroupAssertionEvaluator, ICustomWorld } from '../helpers';
import { BrowserContext, ElementHandle, Frame, Page, Response } from 'playwright';
// eslint-disable-next-line import/no-unresolved
import { Serializable } from 'playwright-core/types/structs';
import { join } from 'path';
export default class Base {
  world: ICustomWorld;
  page!: Page;
  private _endpointsInstance!: Endpoints;
  private _evaluatorInstance!: GroupAssertionEvaluator;

  constructor(world: ICustomWorld) {
    this.world = world;
    const { page } = world;
    page && (this.page = page);
  }

  get endpoints(): Endpoints {
    if (!this._endpointsInstance) {
      this._endpointsInstance = Endpoints.getInstance;
    }
    return this._endpointsInstance;
  }

  get evaluator(): GroupAssertionEvaluator {
    if (!this._evaluatorInstance) {
      this._evaluatorInstance = GroupAssertionEvaluator.getInstance;
    }
    return this._evaluatorInstance;
  }

  url(): string {
    return this.page.url();
  }
  async goto(url?: string, options?: any): Promise<Response | null> {
    return this.page.goto(url ? url : this.endpoints.app_base_url, options);
  }

  async bringToFront(): Promise<void> {
    this.page.bringToFront();
  }

  async close(): Promise<void> {
    this.page.close();
  }

  async goBack(options?: any): Promise<Response | null> {
    return this.page.goBack(options);
  }

  async goForward(options?: any): Promise<Response | null> {
    return this.page.goForward(options);
  }

  async reload(options?: any): Promise<Response | null> {
    return this.page.reload(options);
  }
  async snapshot(world: ICustomWorld, options?: any): Promise<void> {
    await world.page?.waitForLoadState('load', options);
    const image = await world.page?.screenshot({
      path: join('misc/screenshots', `Snapshot_${Date.now().toString()}.png`),
    });
    image && world.attach(image, 'image/png');
  }

  async screenshot(options: any): Promise<Buffer> {
    return this.page.screenshot(options);
  }

  async getPageContent(): Promise<string | undefined> {
    return this.page?.content();
  }

  getPageContext(): BrowserContext {
    return this.page.context();
  }

  async getFrame(parent: ElementHandle<Node> | null): Promise<Frame | null> {
    return parent && parent.contentFrame();
  }

  async evaluateFunction(pageFunction: any | string, arg?: any): Promise<Serializable | undefined> {
    return this.page?.evaluate(pageFunction, arg);
  }

  async setViewportSize(viewportSize: any): Promise<void> {
    return this.page.setViewportSize(viewportSize);
  }

  viewportSize(): { width: number; height: number } | null {
    return this.page.viewportSize();
  }

  async waitForLoadState(
    state: 'load' | 'domcontentloaded' | 'networkidle',
    options?: any,
  ): Promise<void> {
    await this.page.waitForLoadState(state, options);
  }

  async waitForNavigation(options?: any): Promise<Response | null> {
    return this.page.waitForNavigation(options);
  }

  async waitForURL(url: string, options?: any): Promise<void> {
    await this.page.waitForURL(url, options);
  }

  async waitForTimeout(timeout: number): Promise<void> {
    await this.page.waitForTimeout(timeout);
  }

  async scrollToElement(element: ElementHandle<SVGElement | HTMLElement>): Promise<void> {
    element &&
      (await this.page.evaluate((ele) => {
        ele.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }, element));
  }
}
