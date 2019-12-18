export const changeDropDown =() => {
    return{
        type: 'CHANGE_DROPDOWN'
    }
}

export const fetchClosedForumTopics = (order) => {
    return (dispatch) => {
        dispatch(requestForumTopics());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum?status=closed';
        if(order != ""){
            const url1 = '&sort='+order
            fetch(baseUrl+url1, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) =>
                    dispatch(receiveClosedForumTopics(body)))
                );
        }
        else{
            fetch(baseUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) =>
                    dispatch(receiveClosedForumTopics(body)))
                );
        }  
    }
}

const requestForumTopics = () =>{
    return{
        type: 'REQUEST_FORUM_TOPICS'
    }
}

const receiveClosedForumTopics =(closedTopics)=>{
    console.log("closed topics ", closedTopics)
    return {
        type: 'RECEIVE_CLOSED_TOPICS',
        data: closedTopics
    }
}

export const fetchOpenedForumTopics = (order) => {
    return (dispatch) => {
        dispatch(requestForumTopics());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum?status=open';
        if(order != ""){
            const url1 = '&sort='+order
            fetch(baseUrl+url1, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) =>
                    dispatch(receiveOpenedForumTopics(body)))
                );
        }
        else{
            fetch(baseUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) =>
                    dispatch(receiveOpenedForumTopics(body)))
                );
        }
                
    }
}

const receiveOpenedForumTopics =(openedTopics)=>{
    return {
        type: 'RECEIVE_OPENED_TOPICS',
        data: openedTopics
    }
}

export const changeFilterProperty=(propertyName) =>{
    return {
        type:'CHANGE_FILTER_PROPERTY',
        data:{
            propertyName
        }
    }
};
