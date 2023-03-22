import axios from "axios";
import md5 from "crypto-js/md5";


const public_key = "a9e45dd5f763e17be3b82858f0800f00";
const private_key = "ba226b1c9f8b9a563d0ed9195d339730f299c352";

const TIMESTAMP = new Date().getTime();
const HASH = md5(`${TIMESTAMP}${private_key}${public_key}`).toString();

console.log("TIMESTAMP: ", TIMESTAMP)
console.log("hash: ", HASH)

const marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params: {
    apikey: public_key,
    ts: TIMESTAMP,
    hash: HASH, 
  },
});

export default marvelApi;