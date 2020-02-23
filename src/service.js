const API_KEY = '92238c1308cfdba1d617e6a61895d886';
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
