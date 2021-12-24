import { useCallback, useReducer } from 'react';
import tvShowsService from '../../services/tv-shows-service';
import reducer, { initialState } from './reducer';

const useFetchTvShows = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchAndSetTvShows = useCallback(async () => {
    dispatch({ type: 'TV_SHOWS_FETCHING_STATUS', status: 'PENDING' });
    try {
      const response = await tvShowsService.searchTvShows(state.params);
      const { tvShows, tvShowsMetadata } =
        tvShowsService.transformResponse(response);
      dispatch({ type: 'SET_TV_SHOWS', tvShows, tvShowsMetadata });
    } catch (error) {
      dispatch({
        type: 'TV_SHOWS_FETCHING_ERROR',
        error: 'Some error appear!',
      });
    }
  }, [state.params]);

  const changeSearchingTitle = useCallback((title: string) => {
    dispatch({
      type: 'SET_SEARCH_PARAMS',
      params: {
        page: 1,
        query: title,
      },
    });
  }, []);

  const incrementPage = useCallback(() => {
    dispatch({
      type: 'SET_SEARCH_PARAMS',
      params: {
        ...state.params,
        page: state.params.page + 1,
      },
    });
  }, [state.params]);

  return {
    ...state,
    searchAndSetTvShows,
    changeSearchingTitle,
    incrementPage,
  };
};

export default useFetchTvShows;
