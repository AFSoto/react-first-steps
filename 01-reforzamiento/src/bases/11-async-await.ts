import type { GiphyRandomResponse } from "./data/giphy.response";


const API_KEY  = 'ifUc0PxsO0BBGCjpxs3bl64CXuzGlBya';





//insertamos el gif a nuestra  web
const createImageInsideDom = (url:string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

const getGiftUrl = async (): Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    const {data} : GiphyRandomResponse = await response.json();

    return data.images.original.url;

}

// getGiftUrl().then(url => createImageInsideDom(url));

//codigo mas optimizado
getGiftUrl().then(createImageInsideDom);



