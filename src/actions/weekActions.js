export const fetchWeek = (id) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        dispatch(requestWeek());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/week/';
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
                dispatch(receiveWeek(body)))
            );
    }
}

const requestWeek = () =>{
    return{
        type: 'REQUEST_WEEK'
    }
}

const receiveWeek =(week)=>{
    return {
        type: 'RECEIVE_WEEK',
        data: week
    }
}

export const fetchActivitiesFromWeek = (weekid) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        dispatch(requestActivitiesFromWeek());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event/week/';
        const finalPath = baseUrl + weekid;
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
                dispatch(receiveActivitiesFromWeek(body)))
            );
    }
}

const requestActivitiesFromWeek = () =>{
    return{
        type: 'REQUEST_ACTIVITIES_FROM_WEEK'
    }
}

const receiveActivitiesFromWeek =(activities)=>{
    return {
        type: 'RECEIVE_ACTIVITIES_FROM_WEEK',
        data: activities
    }
}

export const changeAttendanceControl = (eventattendeeId, eventattendeeInfo) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/eventattendee/';
        const finalUrl = baseUrl + eventattendeeId
        fetch(finalUrl, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(eventattendeeInfo)
        }).then((resp) =>{
            if(resp.ok){
                console.log("ok")
            }
            else{
                console.log("Server responded with ", resp.code)
            }
        });
    }
}

export const changeModal =()=>{
    return{
        type: 'CHANGE_MODAL_ACTIVITY'
    }
}
