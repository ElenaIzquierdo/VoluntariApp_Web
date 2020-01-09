const INITIAL_STATE ={
    week: {},
    isFetching: false,
    activities:[
        {
            "id": 1,
            "creator": null,
            "title": "Dilluns 14/01",
            "group": "Petits",
            "start_date": "2019-01-14T16:00:01.846839Z",
            "end_date": "2019-01-14T20:30:01.846839Z",
            "description": "Avui ens ho passarem genial!",
            "attendance": 0,
            "attending": false,
            "attendance_control": false,
            "rate":{
                "id":0,
                "comments": "Avui s'han portat molt malament i ha sigut molt complicat parlar amb ells per fer l'activitat, les files, etc.Avui s'han portat molt malament i ha sigut molt complicat parlar amb ells per fer l'activitat, les files, etc.Avui s'han portat molt malament i ha sigut molt complicat parlar amb ells per fer l'activitat, les files, etc.",
                "snack_rate": 1,
                "line_rate": 2,
                "circle_rate": 2,
                "respect_rate": 2,
                "activity_rate": 0,
                "total_rate": 3.5
            }
        },
    ],
    modal: false
}

const weekReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_THEME':
            return state;
        case 'REQUEST_WEEK':
            console.log("request week")
            return {...state, isFetching: true}
        case 'RECEIVE_WEEK':
            console.log("receive week")
            return {...state, week:action.data, isFetching: false}
        case 'REQUEST_ACTIVITIES_FROM_WEEK':
            console.log("request activities")
            return {...state, isFetching: true}
        case 'RECEIVE_ACTIVITIES_FROM_WEEK':
            console.log("receive activities")
            return {...state, activities:action.data, isFetching: false}
        case 'CHANGE_MODAL_ACTIVITY':
            return {...state, modal: !state.modal}


        default: return state
    }
};

export {weekReducer}