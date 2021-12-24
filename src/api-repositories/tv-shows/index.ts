import SearchParams from '../../models/search-params';
import http from '../../services/http-service';
import PaginationResponse from '../dto/paginationResponse';
import TvShowResponse from './dto/tvShowResponse';

export const searchTvShows = async (params: SearchParams) => {
  const url = '/search/tv';
  return await http.get<PaginationResponse<TvShowResponse[]>>(url, {
    ...params,
  });
};
