const INITIAL_STATE ={
    title: "",
    description: "",
    group: "",
    group_choices: ["Casalet", "Petits", "Mitjans", "Grans", "Adolescents"],
    dropdownOpen: false,
    start_date: Date.now(),
    new_event: false
};

const createEventReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'CHANGE_PROPERTY_CREATE_EVENT':
            let result = {...state}
            result[action.data.propertyName]=action.data.value
            return result;
        case 'CHANGE_DROPDOWN_EVENT':
            return {...state, dropdownOpen: !state.dropdownOpen}
        case 'CHANGE_NEW_EVENT':
            return {...state, new_topic: true}

        default: return state
    }
};

export {createEventReducer}