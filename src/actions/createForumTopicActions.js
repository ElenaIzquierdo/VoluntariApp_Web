
import {request} from "../request";

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
    return () => {
        request('/forum', 'POST', topicInfo);
    }   
}

export const changeDropDown=() =>{
    return {
        type:'CHANGE_DROPDOWN'
    }
}