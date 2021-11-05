import axios from 'axios';


const KEY = 'AIzaSyAroYYJ9GtHfa7Nw3JW3LPzO_rTS2H3Eog';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

});