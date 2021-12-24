const getApiFullUrl = () => {
  return `${process.env.REACT_APP_MOVIE_DB_API_URL}/${process.env.REACT_APP_MOVIE_DB_API_VERSION}`;
}

export default getApiFullUrl;