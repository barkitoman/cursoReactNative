const SERVER_URL = 'https://api.themoviedb.org/3'
const API_KEY = '06168d183eab945f1204dabd110f62ed'

async function makeRequest(sufix='/', method = 'GET', payload={},) {
    const general = {
        method,
    }

    if(method==='POST' || method==='PUT'){
        general.body = JSON.stringify(payload)
    }

    return await fetch(`${SERVER_URL}${sufix}?api_key=${API_KEY}`, general).then((response)=> {
        if (!response.ok){
            response.text()
        }
        return response.json()
    })
    .then((jsonResponse) => jsonResponse)
    .catch((err)=> {
        console.log('Error with status ', err)
    })
}

const API = {
    movies: {
        async getPopularMovies() {
            const response  = await makeRequest('/movie/popular')
            return response
        }
    }
}

export default API