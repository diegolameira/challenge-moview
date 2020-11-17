import { loggy } from 'services/loggy';
import { setItem, getItem } from 'services/storage';

export abstract class Api {
  private baseUrl: string = '';
  path: string = '';

  constructor(baseUrl = process.env.REACT_APP_API_URL || '') {
    this.baseUrl = baseUrl;
  }

  private saveCache = (key: string) => (value: any) => {
    setItem(key, value);
    return value;
  };

  private loadCache = (key: string) => {
    return getItem(key);
  };

  protected async getResource<T extends string, Return>(
    route: T
  ): Promise<Return> {
    try {
      const cache = this.loadCache(`${this.path}${route}`);
      if (cache) return cache;
      const response = await fetch(`${this.baseUrl}${route}`);
      return response.json().then(this.saveCache(`${this.path}${route}`));
    } catch (e) {
      loggy(e);
      return e;
    }
  }
}
