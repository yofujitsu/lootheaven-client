const prod = {
    url: {
        API_BASE_URL: process.env.REACT_APP_BACKEND_BASE_URI
    }
}

const dev = {
    url: {
        API_BASE_URL: 'http://147.45.246.193:8082'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod