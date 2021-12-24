const getSearchParamsFromUrl = (): Record<string, string> => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params;
}

export default getSearchParamsFromUrl;