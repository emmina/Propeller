function getOffices() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch('/api/offices', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            console.log(error)
            return Promise.reject(error);
        }
        return data;
    }, error => {
        console.log(error)
    });
}


export const aboutService = {
    getOffices
};