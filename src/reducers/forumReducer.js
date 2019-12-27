const INITIAL_STATE = {
    dropdownOpen: false,
    opened_topics:[
        {
            "id": 1,
            "title": "Tema 1",
            "creator": 1,
            "description": "Aquest es un tema moplt guai",
            "finished": false,
            "created_date": "2019-12-26T18:19:44.003479Z",
            "group": "Petits"
            }
    ],
    closed_topics:[
        {
            "id": 2,
            "title": "Tema 2",
            "creator": 1,
            "description": "Aquest es un tema tancat",
            "finished": true,
            "created_date": "2019-12-26T18:20:18.868471Z",
            "group": "Petits"
            }
    ],
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
        case 'CHANGE_FILTER_PROPERTY':
            let new_filters = {...state.filters}
            new_filters[action.data.propertyName]=!new_filters[action.data.propertyName]
            if(action.data.propertyName === "order_by_name"){
                new_filters["order_by_date"]=!new_filters["order_by_date"]
            }
            if(action.data.propertyName === "order_by_date"){
                new_filters["order_by_name"]=!new_filters["order_by_name"]
            }
            return {...state, filters: new_filters}

        default: return state
    }
};

export {forumReducer}
