import { requestOptions, handleResponse } from '../helpers';
// import { handleResponse } from '../helpers/handle-response';
// import { requestOptions } from '../helpers/request-options';

export const authenticationService = {
    register, removeAccount, login, logout,
};

function register(data) {
    return fetch(`${process.env.VUE_APP_URL}/users`, requestOptions.post( data ))
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}

function removeAccount() {
    return fetch(`${process.env.VUE_APP_URL}/users`, requestOptions.delete())
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}

function login(data) {
    return fetch(`${process.env.VUE_APP_URL}/login`, requestOptions.post( data ))
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}

function logout() {
    return fetch(`${process.env.VUE_APP_URL}/logout`, requestOptions.post())
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}