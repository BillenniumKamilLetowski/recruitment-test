interface TvShow {
  posterPath: string;
  popularity: number;
  id: number;
  backdropPath: string;
  voteAverage: number;
  overview: string;
  firstAirDate: string;
  originCountry: Array<string>;
  genreIds: Array<number>;
  originalLanguage: string;
  voteCount: number;
  name: string;
  originalName: string;
}

export default TvShow