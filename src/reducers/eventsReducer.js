const INITIAL_STATE = {
    weeks:{
        results:[]
    },
    isFetching: false,
    quarter_iterator: 1,
    quarters:[
        {
            name: ""
        },
        {
            name: ""
        },
        {
            name: ""
        }
    ]

}

const eventsReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENTS':
            return state;
        case 'REQUEST_WEEKS':
                return {...state, isFetching: true}
        case 'RECEIVE_WEEKS':
            return {...state, weeks:action.data, isFetching: false}
        case 'NEXT_QUARTER':
            if(state.quarter_iterator === 3){
                var new_iterator = 1;
            }
            else new_iterator = state.quarter_iterator + 1;
            return {...state, quarter_iterator: new_iterator}
        case 'PREVIOUS_QUARTER':
            if(state.quarter_iterator === 1){
                new_iterator = 3;
            }
            else new_iterator = state.quarter_iterator - 1;
            return {...state, quarter_iterator: new_iterator}
        case 'REQUEST_QUARTERS':
            return {...state, isFetching: true}
        case 'RECEIVE_QUARTERS':
            return {...state, quarters: action.data}
        default: return state
    }
};

export {eventsReducer}
