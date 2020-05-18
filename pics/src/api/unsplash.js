import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID Ws1Pp9TTWrv9wjsRtci1xcNYeybWAnjRG8NzlHIjQDk",
      }
});