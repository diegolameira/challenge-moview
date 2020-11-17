import { Api } from './base';

class Reviews extends Api {
  path = '/reviews';

  public async getReviews(): Promise<Review[]> {
    return await this.getResource<string, Review[]>(this.path);
  }
}

export default new Reviews();
