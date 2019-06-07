import axios from 'axios';
import { defaultCoreCipherList } from 'constants';

const api = axios.create({
    baseURL:'http://rocketseat-node.herokuapp.com/api'
})

export default api;