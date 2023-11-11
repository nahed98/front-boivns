import axios from 'axios';

const agricclienthttp=axios.create({
baseURL: process.env.REACT_APP_URL,
headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: '*',
    'Content-Type': 'application/json',
}
});
export default  agricclienthttp
