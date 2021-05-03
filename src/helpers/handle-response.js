export function handleResponse(response) {
    return response.text().then(text => {
        let data = JSON.parse(text);
        if (!response.ok) {
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