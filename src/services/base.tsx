import { loggy } from 'services/loggy';

export class Api {
  private baseUrl: string = '';

  constructor(baseUrl = process.env.REACT_APP_API_URL || '') {
    this.baseUrl = baseUrl;
  }

  protected async getResource<T extends string, Return>(
    route: T
  ): Promise<Return> {
    try {
      const response = await fetch(`${this.baseUrl}${route}`);
      return await response.json();
    } catch (e) {
      loggy(e);
      return e;
    }
  }
}
