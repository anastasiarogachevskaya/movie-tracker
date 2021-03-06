import axios from 'axios';

const getMovieByTitle = async (title: string) => {
  try {
    const { data } = await axios.get(`https://data-imdb1.p.rapidapi.com/titles/search/title/${title}`, {
      params: {info: 'mini_info', limit: '10', page: '1', sort: 'year.decr'},
      headers: {
        'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPID_API_KEY,
      }
    });
    console.log(data)
    return data;
  } catch (e) {
    console.error(`Error in getMovieByTitle: ${e}`);
    return [];
  }
};

export default getMovieByTitle;
