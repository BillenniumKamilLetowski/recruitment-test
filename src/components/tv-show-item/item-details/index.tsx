import TvShow from '../../../models/tv-show';
import getMovieDbImgPath from '../../../utils/getMovieDbImgPath';

import * as Styled from './styles';

type Props = Omit<TvShow, 'name'>;
const ItemDetails = ({
  firstAirDate,
  originCountry,
  originalLanguage,
  originalName,
  overview,
  posterPath,
  voteAverage,
  voteCount,
}: Props) => {
  return (
    <Styled.Wrapper>
      <img alt={originalName} src={getMovieDbImgPath(posterPath)} />
      <Styled.Details>
        <Styled.LabelText>
          <b>First air date:</b> {firstAirDate}
        </Styled.LabelText>
        <Styled.LabelText>
          <b>Origin country:</b> {originCountry}
        </Styled.LabelText>
        <Styled.LabelText>
          <b>Original language:</b> {originalLanguage}
        </Styled.LabelText>
        <Styled.LabelText>
          <b>Vote average:</b> {voteAverage}
        </Styled.LabelText>
        <Styled.LabelText>
          <b>Vote count:</b> {voteCount}
        </Styled.LabelText>
        <Styled.Paragraph>{overview}</Styled.Paragraph>
      </Styled.Details>
    </Styled.Wrapper>
  );
};

export default ItemDetails;
