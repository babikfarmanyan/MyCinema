import { API_KEY, API_URL, IMG_URL, w500IMG_URL } from "./api";

const getMostPopular = async(catName) => {
    let response;

    if (catName === 'movies') {
        response = await fetch(API_URL + '/movie/popular?api_key=' + API_KEY + '&language=en-US&page=1');
    }else if (catName === 'serials') {
        response = await fetch(`${API_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    }
    return response.json();
};

const getTopRated = async(catName, page) => {
    let response;

    if (catName === 'movies') {
        response = await fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    }else if (catName === 'serials') {
        response = await fetch(`${API_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    }

    return response.json();
}

const getGenres = async(catName) => {
    let response;

    if (catName === 'movies') {
        response = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    }else if (catName === 'serials') {
        response = await fetch(`${API_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`);
    }

    return response.json();
}

const getOriginalImg = (imgUrl) => {
    return IMG_URL + imgUrl;
}

const getW500Img = (imgUrl) => {
    return w500IMG_URL + imgUrl;
}

const getMoviesByGenre = async(genre, startYear, endYear, page, name) => {
    let response;

    if (name === 'movies') {
        response = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=14&page=${page}`);
    }else if (name === 'serials') {
        response = await fetch()
    }

    return response.json();
}

export {getMostPopular, getOriginalImg, getW500Img, getTopRated, getGenres, getMoviesByGenre};