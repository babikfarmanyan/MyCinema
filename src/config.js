import { API_KEY, API_URL, IMG_URL, w500IMG_URL } from "./api";

const getMostPopular = async(catName, page = 1, startYear = 1900, endYear = 2022) => {
    const response = (catName === 'movie') ? await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&primary_release_date.gte=${startYear + 1}&primary_release_date.lte=${endYear + 1}&language=en-US&page=${page}`) : await fetch(`${API_URL}/tv/popular?api_key=${API_KEY}&first_air_date.gte=${startYear + 1}&first_air_date.lte=${endYear + 1}&language=en-US&page=${page}`);

    return response.json();
};

const getTopRated = async(catName) => {
    const response = await fetch(`${API_URL}/${catName}/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

    return response.json();
}

const getGenres = async(catName) => {
    const response = await fetch(`${API_URL}/genre/${catName}/list?api_key=${API_KEY}&language=en-US`);

    return response.json();
}

const getOriginalImg = (imgUrl) => {
    return IMG_URL + imgUrl;
}

const getW500Img = (imgUrl) => {
    return w500IMG_URL + imgUrl;    
}

const getImgFromDb = async() => {
    const response = await fetch('http://localhost:3000/images');
    return response.json();
}

const getDetailById = async (id,catName) => {
    const response = await fetch(`${API_URL}/${catName}/${id}casts?api_key=${API_KEY}`);

    return response.json();
}   

const getActorByMovieId = async (id, catName) => {
    const response = catName === 'movie' ? await fetch(`${API_URL}/movie/${id}/casts?api_key=${API_KEY}`): await fetch(`${API_URL}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`)
    return response.json();
}   
 
const searchMovie = async(query) => {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`);

    return response.json();
}

const searchSerial = async(query) => {
    const response = await fetch(`${API_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`);

    return response.json();
}

const getMoviesByGenre = async(genres, startYear, endYear, page, name) => {
    let response;

    if (genres.length === 0) {
        return getMostPopular(name, page, startYear, endYear);
    }else {
        response = (name === 'movie') ? await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=${genres}`) : await fetch(`${API_URL}/discover/tv?api_key=${API_KEY}&language=en-US&first_air_date.gte=${startYear}&first_air_date.lte=${endYear}&page=${page}&with_genres=${genres}`);
    }

    return response.json();
}

const getVideoById = async(id, catName) => {
    const response =  await fetch(`${API_URL}/${catName}/${id}/videos?api_key=${API_KEY}&language=en-US`);

    return response.json();
}

const getSimilar = async(id, catName) => {
  const response = await fetch(`${API_URL}/${catName}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`);

  return response.json();
}

export {getSimilar, getVideoById, getMostPopular, getOriginalImg, getW500Img, getTopRated, getGenres, getMoviesByGenre, searchSerial, searchMovie, getActorByMovieId, getDetailById, getImgFromDb};