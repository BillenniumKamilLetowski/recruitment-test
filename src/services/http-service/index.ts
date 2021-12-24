import getApiFullUrl from "../../utils/getFullApiUrl";
import getMovieDbApiKey from "../../utils/getMovieDbApiKey";

class HttpService {
  private _url = '';
  private _apiKey = '';

  constructor(url: string, apiKey: string) {
    this._url = url;
    this._apiKey = apiKey;
  }

  async get<T>(endpoint: string, simpleQueryParams: Record<string, string | number> = {}): Promise<T> {
    const queryString = new URLSearchParams(simpleQueryParams as Record<string, string>);
    queryString.append('api_key', this._apiKey);
    const url = new URL(this._url + endpoint);
    url.search = queryString.toString();
    const response = await fetch(url.toString(), {
      method: 'GET'
    })

    return await response.json();
  }
}

const url = getApiFullUrl();
const apiKey = getMovieDbApiKey();
const http = new HttpService(url, apiKey);

export default http;