import { requestOptions, handleResponse } from '../helpers';

export const folderService = {
    downloadFolders, 
    createFolder,
    modifyFolder,
    removeFolder,

};

function downloadFolders() {
    return fetch(`${process.env.VUE_APP_URL}/folders`, requestOptions.get())
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 

function createFolder(data) {
    return fetch(`${process.env.VUE_APP_URL}/folders`, requestOptions.post(data))
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 

function modifyFolder(data) {
    return fetch(`${process.env.VUE_APP_URL}/folders`, requestOptions.put(data))
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}

function removeFolder(data) {
    return fetch(`${process.env.VUE_APP_URL}/folders`, requestOptions.delete(data))
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}
