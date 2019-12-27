export const changeCreateTopicFormProperty=(propertyName, value) =>{
    return {
        type:'CHANGE_PROPERTY_CREATE_TOPIC',
        data:{
            propertyName,
            value
        }
    }
};

export const createForumTopic=(topicInfo) =>{
    return (dispatch) => {
        const token = localStorage.getItem('token')
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum/new';
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
                dispatch(changeNewForumTopic())
            }
            else{
                console.log("Server responded with ", resp.code)
            }
        });
    }
}

export const changeDropDown=() =>{
    return {
        type:'CHANGE_DROPDOWN'
    }
}

const changeNewForumTopic=() =>{
    return {
        type:'CHANGE_NEW_TOPIC'
    }
}

export const changeNewTopicProperty=(propertyName, value)=>{
    return {
        type:'CHANGE_NEW_TOPIC_PROPERTY_NAME',
        data: {
            propertyName,
            value
        }
    }
}