import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:             {   Authorization: "Client-ID yQEBI8pjboQBETokq0nGqbc65nNCFMWxD1VR3-WExGI"}

})