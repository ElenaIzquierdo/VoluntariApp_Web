const INITIAL_STATE ={
    centreInteres: {
        id:1,
        name: "Centre Interes curs 2019-2020: Persona prehistòrica"
    },
    objectius: [],
    explicacions: {
        results:[]
    },
    isFetching: false
}

const centreInteresReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENT':
            return state;
        case 'REQUEST_EXPLICACIONS':
            return {...state, isFetching: true}
        case 'RECEIVE_EXPLICACIONS':
            return {...state, explicacions: action.data, isFetching: false}
        case 'REQUEST_OBJECTIUS':
            return {...state, isFetching: true}
        case 'RECEIVE_OBJECTIUS':
            return {...state, objectius: action.data, isFetching: false}

        default: return state
    }
};

export {centreInteresReducer}