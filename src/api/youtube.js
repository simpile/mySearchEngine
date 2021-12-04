
import axios from "axios";
const KEY = "AIzaSyCfZeDV7_rGWX-o0Kf5tG9dyPGX1_YCE4o";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:             {   
part: 'snippet',
maxResult: 5,
key: KEY,
    }

})