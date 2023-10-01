/**
 * @class Common Hooks
 * @description This class will help to perform various actions with cucumber hooks.
 *
 * @author Estak Hossan
 */

import { ICustomWorld } from '../helpers';
import fse from 'fs-extra';
import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import {
  chromium,
  ChromiumBrowser,
  firefox,
  FirefoxBrowser,
  LaunchOptions,
  webkit,
  WebKitBrowser,
} from 'playwright';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types';
const videoPath = 'misc/videos/';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser; //change to your favorite browser
    }
  }
}

//currently total execution timeout is 20 mins. when debugging, timeout is disabled. change this as per the number of tests.
setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 20000);

const browserOptions: LaunchOptions = {
  headless: false,
  slowMo: 0,
  args: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
    '--disable-dev-shm-usage',
  ],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

BeforeAll(async function () {
  switch (process.env.BROWSER) {
    case 'firefox':
      global.browser = await firefox.launch(browserOptions);
      break;
    case 'webkit':
      global.browser = await webkit.launch(browserOptions);
      break;
    default:
      global.browser = await chromium.launch(browserOptions);
  }
});

Before({ tags: '@ignore' }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return 'skipped' as any;
});

Before({ tags: '@debug' }, async function (this: ICustomWorld) {
  this.debug = true;
});

Before(async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
  // customize the [browser context](https://playwright.dev/docs/next/api/class-browser#browsernewcontextoptions)
  this.context = await global.browser.newContext({
    acceptDownloads: true,
    recordVideo: process.env.PWVIDEO ? { dir: videoPath } : undefined,
    viewport: { width: 420, height: 508 },
  });
  //this.context.setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);
  this.page = await this.context?.newPage();
  this.feature = pickle;
});

// AfterStep(async function (this: ICustomWorld) {
//   await this.page?.waitForLoadState('networkidle');
//   const image = await this.page?.screenshot({ path: screenshotPath });
//   image && (await this.attach(image, 'image/png'));
// });

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
  if (result) {
    if (result.status !== Status.PASSED) {
      const image = await this.page?.screenshot({ timeout: 60000 });
      image && (await this.attach(image, 'image/png'));
    }
  }
  const path = await this.page?.video()?.path();
  const data = path && fse.readFileSync(path);
  if (data) {
    await this.attach(data, 'video/mp4');
  }
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await global.browser.close();
});
