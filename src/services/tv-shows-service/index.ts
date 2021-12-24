import PaginationResponse from '../../api-repositories/dto/paginationResponse';
import { searchTvShows } from '../../api-repositories/tv-shows';
import TvShowResponse from '../../api-repositories/tv-shows/dto/tvShowResponse';
import SearchParams from '../../models/search-params';

interface TvShowsMetadata {
  page: number;
  totalResults: number;
  totalPages: number;
}

class TvShowsService {
  async searchTvShows(params: SearchParams) {
    const response = await searchTvShows(params);
    return response;
  }

  transformResponse(response: PaginationResponse<TvShowResponse[]>) {
    const { results, page, total_pages, total_results } = response;
    const tvShowsMetadata: TvShowsMetadata = {
      page,
      totalPages: total_pages,
      totalResults: total_results,
    };
    const tvShows = results.map(
      ({
        backdrop_path,
        first_air_date,
        genre_ids,
        id,
        name,
        origin_country,
        original_language,
        original_name,
        overview,
        popularity,
        poster_path,
        vote_average,
        vote_count,
      }) => ({
        backdropPath: backdrop_path,
        firstAirDate: first_air_date,
        genreIds: genre_ids,
        id,
        name,
        originCountry: origin_country,
        originalLanguage: original_language,
        originalName: original_name,
        overview,
        popularity,
        posterPath: poster_path,
        voteAverage: vote_average,
        voteCount: vote_count,
      })
    );

    return { tvShowsMetadata, tvShows };
  }
}

const tvShowsService = new TvShowsService();
export default tvShowsService;
