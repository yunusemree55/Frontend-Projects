import axios from "axios"


const searchFilms = async (text) =>{

    const response = await axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1',{
        headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTk3ZDU1ZWM1ZTE1NWM0MzY1MzA1Y2QyNjBmOWFhYiIsInN1YiI6IjYxNDAwMjAwNWUxMjAwMDAyMGE5ODRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oWssA4272d_vUd_QEjoRd0Qgbrh4SdwbaWxRZ3N_VM8'
        },
        params:{
            query:text
        }
    });

    console.log(response.data.results);
    return response.data.results;


}


export default searchFilms;