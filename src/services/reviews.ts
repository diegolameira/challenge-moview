import { Api } from './base';

class Reviews extends Api {
  path = '/reviews';

  public async getReviewByMovieId(movieId: number): Promise<Review> {
    return await this.getResource<string, Review>(
      `${this.path}?movie-id=${movieId}`
    );
  }
}

export default new Reviews();
