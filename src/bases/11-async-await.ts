import { GIFResponse } from "../interfaces/gif.response";
import { giphyApi } from "./10-axios";


export const obtineImago = async() => {

    try {
        const resp = await giphyApi.get<GIFResponse>('/random');

        return resp.data.data.images.downsized_large.url;
    } catch (error) {
        throw 'Url no encontrada'
    }

}

//export cosnt obtineImagoPromise = () => {
// return new Promise(resolve => {
// resolve('https//url-de-mi-sitio-web/imagen/1.jpg')
// });
//}

obtineImago()
.then(url => console.log(url))
.catch(error => console.log(error))