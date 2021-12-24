import { renderHook, act } from '@testing-library/react-hooks';
import { useReducer } from 'react';

import useFetchTvShows from '.';

jest.mock('../../services/tv-shows-service', () => ({
  __esModule: true,
  default: {
    searchTvShows: jest.fn().mockResolvedValue({
      page: 1,
      results: new Array(5).fill(null).map((_, index) => ({
        id: index,
      })),
    }),
    transformResponse: jest.fn().mockReturnValue({
      tvShows: [],
      tvShowsMetadata: {},
    }),
  },
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn(),
}));
const mockUseReducer = useReducer as jest.Mocked<any>;

beforeEach(() => {
  mockUseReducer.mockImplementation(jest.requireActual('react').useReducer)
})

test('call searchAndSetTvShows', async () => {
  const dispatchMock = jest.fn();
  mockUseReducer.mockReturnValue([{}, dispatchMock]);
  const { result } = renderHook(useFetchTvShows);
  await result.current.searchAndSetTvShows();
  expect(dispatchMock).toHaveBeenCalledWith({
    type: 'TV_SHOWS_FETCHING_STATUS',
    status: 'PENDING',
  });
  expect(dispatchMock).toHaveBeenLastCalledWith({
    type: 'SET_TV_SHOWS',
    tvShows: [],
    tvShowsMetadata: {},
  });
});

test('call incrementPage', () => {
  const { result } = renderHook(useFetchTvShows);
  act(() => {
    result.current.incrementPage();
  })
  expect(result.current.params.page).toBe(2);
});

test('call changeSearchingTitle', () => {
  const title = 'some title';
  const { result } = renderHook(useFetchTvShows);
  act(() => {
    result.current.changeSearchingTitle(title);
  })
  expect(result.current.params).toStrictEqual({
    page: 1,
    query: title
  });
});
