import { Api } from './base';

class Movies extends Api {
  private path = '/movies';

  public async getMovies(): Promise<Movie[]> {
    return await this.getResource<string, Movie[]>(this.path);
  }
}

export default new Movies();
