import axios from 'axios'

const apiKey = 'fe2fdeec547997667cc629cb4cb30925bf70875ccbb1c52ee095e460bc89603f0633d949'

const Send = axios.create({
  baseURL: `"https://bling.com.br/Api/v2/pedido/json/"`,
  timeout: 1000,
  headers: {
      'Content-Type': 'multipart/form-data'
  }
});

