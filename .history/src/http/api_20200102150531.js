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
const fx = data =>{
    return axios({
        url: '/fxrole/addfxrole',
        method: 'post',
        data
    })
}

export default{
    login,
    logout,
    fx
}