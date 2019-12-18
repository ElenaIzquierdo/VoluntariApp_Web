const INITIAL_STATE = {
    dropdownOpen: false,
    opened_topics:[],
    closed_topics:[],
    isOpen: false,
    isFetching: false,
    filters:{
        closed: true,
        opened: true, 
        order_by_name: false,
        order_by_date: true
    }
}

const forumReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_FORUMTHEMES':
            return state;
        case 'CHANGE_DROPDOWN':
            var dropdownOpen_copy = state.dropdownOpen;
            dropdownOpen_copy = !dropdownOpen_copy;
            return {...state, dropdownOpen: dropdownOpen_copy}
        case 'REQUEST_FORUM_TOPICS':
                return{...state, isFetching: true};
            
        case 'RECEIVE_CLOSED_TOPICS':
            return {
                ...state,
                closed_topics: action.data,
                isFetching:false
            }

        case 'RECEIVE_OPENED_TOPICS':
            return {
                ...state,
                opened_topics: action.data,
                isFetching:false
            }

        default: return state
    }
};

export {forumReducer}
