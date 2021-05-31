
import axios from 'axios'
const KEY = 'AIzaSyC_TbTGsL3c0Aj6Z__EfBilu5SkipBIOno';

export default axios.create(
    {
      baseURL : 'https://www.googleapis.com/youtube/v3',
      params : {
          part : 'snippet',
          maxResults : 10,
          type : "video",
          key : KEY 
      }
    }
);