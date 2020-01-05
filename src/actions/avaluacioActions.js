export const fetchEvent = (id) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        dispatch(requestEvent());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event/';
        const finalPath = baseUrl + id;
        fetch(finalPath, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveEvent(body)))
            );
    }
}

const requestEvent = () =>{
    return{
        type: 'REQUEST_EVENT'
    }
}

const receiveEvent =(event)=>{
    return {
        type: 'RECEIVE_EVENT',
        data: event
    }
}

