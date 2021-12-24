import SearchParams from "../../models/search-params";
import TvShow from "../../models/tv-show";
import TvShowsMetadata from "../../models/tv-shows-metadata";

type RequestStatus = 'PENDING' | 'NONE' | 'RESOLVED' | 'ERROR';

type Actions =
  | {
      type: 'SET_TV_SHOWS';
      tvShows: TvShow[];
      tvShowsMetadata: TvShowsMetadata;
    }
  | {
      type: 'TV_SHOWS_FETCHING_STATUS';
      status: RequestStatus;
    }
  | {
      type: 'TV_SHOWS_FETCHING_ERROR';
      error: string;
    }
  | {
      type: 'SET_SEARCH_PARAMS';
      params: Partial<SearchParams>;
    };

type State = {
  tvShows: TvShow[];
  status: RequestStatus;
  error?: string;
  tvShowsMetadata?: TvShowsMetadata;
  params: SearchParams;
};

export const initialState: State = {
  tvShows: [],
  status: 'NONE',
  params: {
    query: '',
    page: 1,
  },
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'SET_TV_SHOWS':
      return {
        ...state,
        tvShows:
          state.params.page === 1
            ? action.tvShows
            : [...state.tvShows, ...action.tvShows],
        tvShowsMetadata: action.tvShowsMetadata,
        status: 'RESOLVED',
      };
    case 'TV_SHOWS_FETCHING_STATUS': {
      return {
        ...state,
        status: action.status,
      };
    }
    case 'TV_SHOWS_FETCHING_ERROR': {
      return {
        ...state,
        status: 'ERROR',
        error: action.error,
      };
    }
    case 'SET_SEARCH_PARAMS': {
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;