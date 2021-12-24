import { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import Search from './components/search';
import TvShowsList from './components/tv-shows-list';
import useFetchTvShows from './hooks/use-fetch-tv-shows';
import getSearchParamsFromUrl from './utils/getSearchParamsFromUrl';
import setUrlFromParams from './utils/setUrlFromParams';

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  max-width: 800px;
  margin: 0 auto;
`;

function App() {
  const {
    tvShows,
    tvShowsMetadata,
    changeSearchingTitle,
    incrementPage,
    params,
    searchAndSetTvShows,
  } = useFetchTvShows();

  useEffect(() => {
    if (params.query) {
      searchAndSetTvShows();
    }
  }, [params, searchAndSetTvShows]);

  useEffect(() => {
    const params = getSearchParamsFromUrl();
    if (params.query) {
      changeSearchingTitle(params.query);
    }
  }, [changeSearchingTitle]);

  const handleSearchButtonClick = useCallback(
    (searchingTitle: string) => {
      setUrlFromParams({
        query: searchingTitle,
      });
      changeSearchingTitle(searchingTitle);
    },
    [changeSearchingTitle]
  );

  return (
    <StyledMain>
      <h1>Please provide some text and press search button</h1>
      <Search titleFromUrl={params.query} onButtonClick={handleSearchButtonClick} />
      <TvShowsList
        totalResults={tvShowsMetadata?.totalResults || 0}
        fetchMore={incrementPage}
        tvShows={tvShows}
      />
    </StyledMain>
  );
}

export default App;
