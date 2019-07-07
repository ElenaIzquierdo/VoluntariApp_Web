const INITIAL_STATE = {
    showWeek: false,
    events:[]
}

const eventsReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENTS':
            return state;
        case 'SHOW_WEEK':
            return { ...state, showWeek: true};
        case 'UNSHOW_WEEK':
            return { ...state, showWeek: false};
        default: return state
    }
};

export {eventsReducer}
