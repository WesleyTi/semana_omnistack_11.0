import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.0.103:3333'// 3333 é o localhost onde o node está rodando.
});

export default api;
