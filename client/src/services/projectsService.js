function getProjects() {
    const requestOptions = {
        method: 'GET'
    };
    console.log('USLO')

    return fetch('/api/projects', requestOptions).then(handleResponse);
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


export const projectsService = {
    getProjects
};