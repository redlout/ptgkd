import axios from './axios'

const login = data =>{
    return axios({
        url: '/login',
        method: 'post',
        data
    })
}

const logout = () =>{
    return axios({

    })
}

export default{
    login,
    logout
}