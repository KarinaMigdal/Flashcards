export const requestService = {
    register, removeAccount, login, logout, downloadFolders, downloadFlashcards,
    handleFlashcard, handleFolder,  
};

function register(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch('http://www.flashcards.com:5000/api/users', requestOptions)
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}

function removeAccount() {
    const requestOptions = {
        method: 'DELETE',
        credentials: 'include'
    };
    return fetch('http://www.flashcards.com:5000/api/users', requestOptions)
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}

function login(data) {
    const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch('http://www.flashcards.com:5000/api/login', requestOptions)
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}

function logout() {
    const requestOptions = {
        method: 'POST',
        credentials: 'include',
    };
    return fetch('http://www.flashcards.com:5000/api/logout', requestOptions)
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
}

function downloadFolders() {
    const requestOptions = {
        method: 'GET',
        credentials: 'include',
    };
    return fetch('http://www.flashcards.com:5000/api/folders', requestOptions)
        .then(handleResponse)
        .then(result => {
            console.log(result)
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 

function  downloadFlashcards(folderId) {
    const requestOptions = {
        method: 'GET',
        credentials: 'include',
    };
    return fetch(`http://www.flashcards.com:5000/api/folders/${folderId}`, requestOptions)
        .then(handleResponse)
        .then(result => {
            console.log(result)
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 

function handleFolder(data, method) {
    const requestOptions = {
        method: method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch('http://www.flashcards.com:5000/api/folders', requestOptions)
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 

function handleFlashcard(method, data, folderId, ) {
    const requestOptions = {
        method: method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(`http://www.flashcards.com:5000/api/folders/${folderId}`, requestOptions)
        .then(handleResponse)
        .then(result => {
            return result;
        }).catch(error => {console.log("Error: ", error); return error});
} 

function handleResponse(response) {
    return response.text().then(text => {
        let data = JSON.parse(text);
        if (!response.ok) {
            console.log("Error: ", data)
            if (response.status === 400 ||response.status === 401) {
                const error = `${data.data}`
                return Promise.reject(error);
            }
            else {
                const error = `Ooops! Something went wrong! StatusCode: ${response.status}`
                return Promise.reject(error);
            }
        }
        return data;
    });
}