  import axios from 'axios';
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID DpOU0w6iAoS_uvzBkc3YIncoNr99EEpz9mxwyPpWob8',
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};

export default searchImages;
