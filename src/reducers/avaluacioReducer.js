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
    rate:{
        snack_rate: "Baixa",
        line_rate: "Baixa",
        circle_rate: "Baixa",
        respect_rate: "Baixa",
        activity_rate: "Baixa",
        comments: "",
    },
    dropDowns_rate:{
        snack: false,
        line: false,
        circle: false, 
        respect: false, 
        activity: false
    },
    evaluation_done: false,
    rate_done: false,
    activity_file: null
}

const avaluacioReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'REQUEST_EVENT':
            return {...state, isFetching: true}
        case 'RECEIVE_EVENT':
            return {...state, event:action.data, isFetching: false}
        case 'CHANGE_PROPERTY_RATE_FORM':
            const rate_new = {...state.rate}
            rate_new[action.data.propertyName]=action.data.value
            return {...state, rate:rate_new}
        case 'CHANGE_DROPDOWN_RATE':
            const dropDowns_rate_new = {...state.dropDowns_rate}
            if(dropDowns_rate_new[action.data]){
                dropDowns_rate_new[action.data] = false
            }
            else dropDowns_rate_new[action.data] = true
            return {...state, dropDowns_rate:dropDowns_rate_new}
        case 'EVALUATION_DONE':
            return {...state, evaluation_done: true}
        case 'RATE_DONE':
            return {...state, rate_done: true}
        case 'UPLOAD_FILE':
            return {...state, activity_file:action.data}
        default: return state
    }
};

export {avaluacioReducer}