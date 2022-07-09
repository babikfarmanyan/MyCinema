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

const getGanres = async(catName) => {
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

const getDetailById = async (id,catName) => {
    let response;
   (catName === 'movies') ?  response = await fetch(`${API_URL}/movie/${id}casts?api_key=${API_KEY}`)
    : response = await fetch(`${API_URL}/tv/${id}casts?api_key=${API_KEY}`)
   ;
    return response.json();

}   

const getActorByMovieId = async (id) => {
    let response = await fetch(`${API_URL}/movie/${id}/casts?api_key=${API_KEY}`)
    return response.json();

}   
 
export {getMostPopular, getOriginalImg, getW500Img, getTopRated, getGanres, getDetailById,getActorByMovieId};
