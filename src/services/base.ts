import { loggy } from 'services/loggy';
import { setItem, getItem } from 'services/storage';

export abstract class Api {
  private baseUrl: string = '';
  path: string = '';

  constructor(baseUrl = process.env.REACT_APP_API_URL || '') {
    this.baseUrl = baseUrl;
  }

  private saveCache = (value: any) => {
    setItem(this.path, value);
    return value;
  };

  private loadCache = () => {
    return getItem(this.path);
  };

  protected async getResource<T extends string, Return>(
    route: T
  ): Promise<Return> {
    try {
      const cache = this.loadCache();
      if (cache) return cache;
      const response = await fetch(`${this.baseUrl}${route}`);
      return response.json().then(this.saveCache);
    } catch (e) {
      loggy(e);
      return e;
    }
  }
}
