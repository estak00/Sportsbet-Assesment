/**
 * @class Endpoints
 * @description Class containing various endpoints of the application
 *
 * @author Estak Hossan
 */

export default class Endpoints {
  app_base_url!: string;
  private static instance: Endpoints;

  private constructor() {
    this.appConfig();
  }

  static get getInstance(): Endpoints {
    if (!this.instance) {
      this.instance = new Endpoints();
    }
    return this.instance;
  }

  get environment(): string {
    return process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'staging';
  }

  appConfig(): void {
    switch (this.environment) {
      case 'staging':
        this.app_base_url = 'https://www.sportsbet.com.au/';
        break;
    }
  }
}
