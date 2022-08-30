// see web https://developers.giphy.com/dashboard/?

export const getImagen = async () => {

    try {

        const apiKey = 'CQMNnIQSQ0Qu4ni6z4rB1KuR66Mz9KK7';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append(img);

    } catch (error) {
        // console.error(error)
        console.error(error)
        throw 'No se encontro imagen';
    }
}



