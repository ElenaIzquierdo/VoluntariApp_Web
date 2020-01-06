import {request} from "../request";
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

export const changeAttendanceControl = (id, eventattendeeInfo) => {
    return () => {
        request('/eventattendee/'+id, 'PATCH', eventattendeeInfo);
    }
}

export const deleteEventAttendee = (id) => {
    return () => {
        request('/eventattendee/'+id, 'DELETE');
    }
}

export const createRateEvent = (rateInfo) => {
    return () => {
        request('/rate', 'POST', rateInfo);
    }
}

export const changeRateFormProperty=(propertyName, value) =>{
    return {
        type:'CHANGE_PROPERTY_RATE_FORM',
        data:{
            propertyName,
            value
        }
    }
};

export const changeDropDown=(dropdown) =>{
    return{
        type: 'CHANGE_DROPDOWN_RATE',
        data: dropdown
    }
}

export const evaluationDone=() =>{
    return{
        type: 'EVALUATION_DONE',
    }
}

export const rateDone=() =>{
    return{
        type: 'RATE_DONE',
    }
}