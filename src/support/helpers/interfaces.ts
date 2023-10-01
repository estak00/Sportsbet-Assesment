/**
 * @class Interfaces
 * @description Class containing various reusable interfaces for supporting test execution
 *
 * @author Estak Hossan
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ElementHandle, Frame } from 'playwright';

export interface ElementLocatingOptions {
  parent?: Frame | ElementHandle | undefined;
  options?: any;
}

export interface ElementInteractingOptions {
  value?: string | string[];
  frame?: Frame | undefined;
  triggerField?: boolean;
  options?: any;
}
