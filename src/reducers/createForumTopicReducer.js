const INITIAL_STATE ={
    title: "",
    description: "",
    group: "",
    group_choices: ["Casalet", "Petits", "Mitjans", "Grans", "Adolescents"],
    dropdownOpen: false
};

const createForumTopicReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'CHANGE_PROPERTY_CREATE_TOPIC':
            let result = {...state}
            result[action.data.propertyName]=action.data.value
            return result;
        case 'CHANGE_DROPDOWN':
            return {...state, dropdownOpen: !state.dropdownOpen}

        default: return state
    }
};

export {createForumTopicReducer}