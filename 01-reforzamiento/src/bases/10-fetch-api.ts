import type { GiphyRandomResponse } from "./data/giphy.response";


const API_KEY  = 'ifUc0PxsO0BBGCjpxs3bl64CXuzGlBya';



const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);


//insertamos el gif a nuestra  web
const createImageInsideDom = (url:string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

//hacemos la peticion a giphy
myRequest.then((response) => response.json())
.then(({data}:GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDom(imageUrl);
})
.catch((error) => {
    console.error(error);
})