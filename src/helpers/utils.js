export const http = async (url, method = 'GET', data = {}) => {
    let request = { method }

    if(method !== 'GET'){
        request = {
            ...request,
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        }
    }

    const response = await fetch(url, request)

    return await response.json()
}