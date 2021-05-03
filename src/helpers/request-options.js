export const requestOptions = {
    get() {
        return {
            method: 'GET',
            ...credentials(),
            ...headers()
        };
    },
    post(body) {
        return {
            method: 'POST',
            ...headers(),
            ...credentials(),
            body: JSON.stringify(body)
        };
    },
    put(body) {
        return {
            method: 'PUT',
            ...headers(),
            ...credentials(),
            body: JSON.stringify(body)
        };
    },
    delete(body) {
        return {
            method: 'DELETE',
            ...headers(),
            ...credentials(),
            body: JSON.stringify(body)
        };
    }
}

function headers() {
    return {
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

function credentials() {
    return {
        credentials: 'include',  
    }
}