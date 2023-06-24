import axios from "../axios";
// eslint-disable-next-line no-undef
const handleLoginApi = (userEmail, userPassword) => {

    return axios.post('/api/login', { email: userEmail, password: userPassword })
}
export { handleLoginApi }