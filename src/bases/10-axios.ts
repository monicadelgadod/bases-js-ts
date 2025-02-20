import axios from 'axios'
//import { GIFResponse } from '../interfaces/gif.response';


const apikey = 'MlYilCvXAW7cuCE93uwrZoVwuQ9O5clM';

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs', 
    params: {
        api_key: apikey,
    }
});

//giphyApi.get<GIFResponse>('/random')
//.then(resp =>console.log(resp.data.data.images.downsized.url))
//.catch(err =>console.log(err))