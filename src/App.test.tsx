import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import useFetchTvShows from './hooks/use-fetch-tv-shows';
import setUrlFromParams from './utils/setUrlFromParams';

jest.mock('./hooks/use-fetch-tv-shows');
const mockedUseFetchThShows = useFetchTvShows as jest.Mocked<any>;

const query = 'some query'
jest.mock('./utils/getSearchParamsFromUrl', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({ query })
}));

jest.mock('./utils/setUrlFromParams', () => ({
  __esModule: true,
  default: jest.fn()
}));

const buttonClickArg = 'some title'
const SearchMock = ({ onButtonClick }: any) => {
  const handleButtonClick = () => {
    onButtonClick(buttonClickArg)
  }

  return <button role="search" onClick={handleButtonClick}>search</button>
}

jest.mock('./components/search', () => ({
  __esModule: true,
  default: SearchMock
}))

test('renders App without crash', () => {
  mockedUseFetchThShows.mockReturnValue({
    tvShows: [],
    params: {
      query: '',
    },
    changeSearchingTitle: jest.fn()
  });
  render(<App />);
  const infoTitle = screen.getByText(
    /please provide some text and press search button/i
  );
  expect(infoTitle).toBeInTheDocument();
});

test('call searchAndSetTvShows and changeSearchingTitle', () => {
  const searchAndSetTvShows = jest.fn();
  const changeSearchingTitle = jest.fn();
  mockedUseFetchThShows.mockReturnValue({
    tvShows: [],
    params: {
      query: 'some query',
    },
    searchAndSetTvShows,
    changeSearchingTitle
  });
  render(<App />);
  expect(searchAndSetTvShows).toHaveBeenCalled();
  expect(changeSearchingTitle).toHaveBeenLastCalledWith(query)
});

test('call handleSearchButtonClick', () => {
  const searchAndSetTvShows = jest.fn();
  const changeSearchingTitle = jest.fn();
  mockedUseFetchThShows.mockReturnValue({
    tvShows: [],
    params: {
      query: 'some query',
    },
    searchAndSetTvShows,
    changeSearchingTitle
  });
  render(<App />);
  const searchBtn = screen.getByRole('search');
  userEvent.click(searchBtn);
  expect(setUrlFromParams).toHaveBeenLastCalledWith({
    query: buttonClickArg
  })
  expect(changeSearchingTitle).toHaveBeenLastCalledWith(buttonClickArg)
});
