import axios from 'axios'

const apiKey = ''

const Send = axios.create({
  baseURL: `"https://bling.com.br/Api/v2/pedido/json/"`,
  timeout: 1000,
  headers: {
      'Content-Type': 'multipart/form-data'
  }
});

