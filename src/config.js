import { API_KEY, API_URL, IMG_URL, w500IMG_URL } from "./api";

const getMostPopularMovies = async(page) => {
    const response = await fetch(API_URL + '/movie/popular?api_key=' + API_KEY + '&language=en-US&page=1');
    return response.json();
};

const getTopRated = async(catName) => {
    let response;

    if (catName === 'movies') {
        response = await fetch(API_URL + '/movie/top_rated');
    }else if (catName === 'serials') {
        response = await fetch(API_URL + '/tv/top_rated');
    }

    return response.json();
}

const getOriginalImg = (imgUrl) => {
    return IMG_URL + imgUrl;
}

const getW500Img = (imgUrl) => {
    return w500IMG_URL + imgUrl;
}

export {getMostPopularMovies, getOriginalImg, getW500Img};