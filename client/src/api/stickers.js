import axios from 'axios';

export default {
  findStickers() {
    return axios.get('/sticker_data.json');
  },
};
