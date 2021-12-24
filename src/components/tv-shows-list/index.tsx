import InfiniteScroll from 'react-infinite-scroll-component';
import TvShow from '../../models/tv-show';

import TvShowItem from '../tv-show-item';

import * as Styled from './styles';

type Props = {
  tvShows: TvShow[];
  fetchMore: () => void;
  totalResults: number;
};

const TvShowsList = ({ tvShows, fetchMore, totalResults }: Props) => {
  return (
    <Styled.Wrapper>
      <InfiniteScroll
        dataLength={tvShows.length}
        next={fetchMore}
        hasMore={totalResults !== tvShows.length}
        loader={<Styled.Spinner />}
      >
        {/* I used index as a key here bcs in a response are duplicated records */}
        {tvShows.map((tvShow, index) => (
          <TvShowItem key={index} {...tvShow} />
        ))}
      </InfiniteScroll>
    </Styled.Wrapper>
  );
};

export default TvShowsList;
