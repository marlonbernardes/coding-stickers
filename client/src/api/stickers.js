import axios from 'axios';

export default {
  findStickers(query) {
    const byName = sticker =>
      (!query || sticker.title.toLowerCase().indexOf(query.toLowerCase()) >= 0);

    return axios.get('/sticker_data.json')
      .then(response => response.data.filter(byName));
  },
};
