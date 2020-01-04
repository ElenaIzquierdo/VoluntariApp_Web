export const changeCreateEventFormProperty=(propertyName, value) =>{
    console.log("data ", value)
    return {
        type:'CHANGE_PROPERTY_CREATE_EVENT',
        data:{
            propertyName,
            value
        }
    }
};

export const createEvent=(topicInfo) =>{
    return (dispatch) => {
        const token = localStorage.getItem('token')
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum';
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(topicInfo)
        }).then((resp) =>{
            if(resp.ok){
                dispatch(changeNewEvent())
            }
            else{
                console.log("Server responded with ", resp.code)
            }
        });
    }
}

export const changeDropDown=() =>{
    return {
        type:'CHANGE_DROPDOWN_EVENT'
    }
}

const changeNewEvent=() =>{
    return {
        type:'CHANGE_NEW_EVENT'
    }
}