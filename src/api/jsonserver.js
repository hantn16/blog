import axios from 'axios';
const jsonserver = axios.create({
  baseURL: 'https://2d51-2405-4802-30b4-6c90-416f-6c00-4e95-37bf.ap.ngrok.io',
});

export default jsonserver;
