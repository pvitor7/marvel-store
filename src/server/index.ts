import axios from "axios";
import md5 from "crypto-js/md5";


const public_key = "a93afdf852ebe2ee61d4259849044735";
const private_key = "9ec5c5e4b7eca4a2e352455d1001595db9511a64";

const TIMESTAMP = new Date().getTime();
const HASH = md5(`${TIMESTAMP}${private_key}${public_key}`).toString();

// Cria uma instância do Axios com as configurações padrão da Marvel API
const marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params: {
    apikey: public_key,
    ts: TIMESTAMP,
    hash: HASH,
  },
});

console.log(public_key, TIMESTAMP, HASH,)

export { marvelApi, TIMESTAMP, public_key, private_key, HASH};