const INITIAL_STATE ={
    event: {
        "id": 2,
        "title": "Casal dimarts 11",
        "group": "Petits",
        "start_date": "2019-12-11T16:00:01.846839Z",
        "end_date": "2019-12-11T20:30:01.846839Z",
        "description": "Aquesta tarda sera molt guai!",
        "attendance": 0,
        "week": 13,
        "attending": false,
        "finished": true,
        "attenders": [ ],
        "rate": null
        },
    isFetching: false,
}

const avaluacioReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'REQUEST_EVENT':
            return {...state, isFetching: true}
        case 'RECEIVE_EVENT':
            return {...state, event:action.data, isFetching: false}
        default: return state
    }
};

export {avaluacioReducer}