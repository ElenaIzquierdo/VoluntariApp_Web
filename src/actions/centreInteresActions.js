

export const fetchExplicacions = (centreInteresId) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        dispatch(requestExplicacions());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/schedule/centreinteres/';
        
        fetch(baseUrl+centreInteresId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveExplicacions(body)))
            );
          
    }
}

const requestExplicacions = () =>{
    return{
        type: 'REQUEST_EXPLICACIONS'
    }
}


const receiveExplicacions =(explicacions)=>{
    return {
        type: 'RECEIVE_EXPLICACIONS',
        data: explicacions
    }
}

export const fetchObjectius = (centreInteresId) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        dispatch(requestObjectius());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/goal/centreinteres/';
        
        fetch(baseUrl+centreInteresId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveObjectius(body)))
            );
          
    }
}

const requestObjectius = () =>{
    return{
        type: 'REQUEST_OBJECTIUS'
    }
}

const receiveObjectius =(objectius)=>{
    return {
        type: 'RECEIVE_OBJECTIUS',
        data: objectius
    }
}

export const fetchObjectiusWithURL = (url) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        dispatch(requestObjectius());
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveObjectius(body)))
            );
          
    }
}
export const fetchExplicacionsWithURL = (url) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        dispatch(requestExplicacions());
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveExplicacions(body)))
            );
          
    }
}

export const fetchCentreInteres = (centreInteresId) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        dispatch(requestCentreInteres());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/centreinteres/';
        fetch(baseUrl+centreInteresId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveCentreInteres(body)))
            );
          
    }
}

const requestCentreInteres = () =>{
    return{
        type: 'REQUEST_CENTRE_INTERES'
    }
}

const receiveCentreInteres =(centreInteres)=>{
    return {
        type: 'RECEIVE_CENTRE_INTERES',
        data: centreInteres
    }
}

