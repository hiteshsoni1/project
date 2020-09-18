const API_KEY = '3e120b161195c11e5e35d6dac8a1b548';
export const getData = async (search, page) => {
    let data = [];
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=25&api_key=${API_KEY}&text=${search}&page=${page}&format=json&nojsoncallback=1`;
    await fetch(url)
        .then((response) => response.json())
        .then(value => {
            if ('photos' in value) {
                data = value.photos.photo;
            }
        })
        .catch((error) => {
            console.log(error);
        });
    return data;
}
