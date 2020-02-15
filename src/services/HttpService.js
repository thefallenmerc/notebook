

export const endpoint = {
    // base: 'http://localhost:8000/api/',
    base: 'https://notebook-api.shubhamschahar.com/api/',
    auth: 'login',
    note: 'note'
}


export const handleResponse = response => {
    if (response.status !== 200) {
    }
    return response.json().then(jsonResponse => {
        return {
            status: response.status,
            message: response.statusText,
            body: jsonResponse
        };
    })
}