import { GIFResponse } from "../interfaces/gif.response";


const apikey = 'MlYilCvXAW7cuCE93uwrZoVwuQ9O5clM';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
.then(resp => resp.json())
.then( (body: GIFResponse) => {
    console.log(body.data.images.downsized_still.url)
})
.catch( err => console.log(err))

//https://api.giphy.com/v1/gifs/random?api_key=MlYilCvXAW7cuCE93uwrZoVwuQ9O5clM