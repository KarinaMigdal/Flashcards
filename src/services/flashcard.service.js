import { requestOptions, handleResponse } from '../helpers';

export const flashcardService = {
    downloadFlashcards,
    createFlashcard,
    modifyFlashcard, 
    removeFlashcard, 
};

function downloadFlashcards(folderId) {
    return fetch(`${process.env.VUE_APP_URL}/folders/${folderId}`, requestOptions.get())
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 

function createFlashcard(data, folderId) {
    return fetch(`${process.env.VUE_APP_URL}/folders/${folderId}`, requestOptions.post(data))
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 

function modifyFlashcard(data, folderId) {
    return fetch(`${process.env.VUE_APP_URL}/folders/${folderId}`, requestOptions.put(data))
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 

function removeFlashcard(data, folderId) {
    return fetch(`${process.env.VUE_APP_URL}/folders/${folderId}`, requestOptions.delete(data))
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 