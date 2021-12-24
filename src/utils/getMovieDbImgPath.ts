type Options = {
  size: string;
};

const getMovieDbImgPath = (
  path: string,
  options: Options = {
    size: 'w200',
  }
) => `${process.env.REACT_APP_MOVIE_DB_IMG}/${options.size}/${path}`;

export default getMovieDbImgPath;
