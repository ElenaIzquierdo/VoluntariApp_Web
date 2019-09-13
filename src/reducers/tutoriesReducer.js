const INITIAL_STATE = {
    ekip: [
        {id:0, name:'Elena Izquierdo', photo:require('../images/user1.jpg')},
        {id:1, name:'Laura Gonzalez', photo:require('../images/user2.jpeg')},
        {id:2, name:'Julia Soler', photo:require('../images/user3.jpg')}
        ],
    next_tutories:[
        {id:0, moni: 'Elena Izquierdo', date: '17/05/2019', photo:require('../images/user1.jpg')},
        {id:1, moni: 'Laura Gonzalez', date: '26/05/2019', photo:require('../images/user2.jpeg')},
        {id:2, moni: 'Ema Formage', date: '03/06/2019', photo:require('../images/user3.jpg')}
    ],
    past_tutories:[
        {id:0, moni: 'Elena Izquierdo', date: '17/05/2019',by:'Victor Gasol', photo_moni:require('../images/user1.jpg'),
        photo_edu:require('../images/user1.jpg')},
        {id:1, moni: 'Laura Gonzalez', date: '26/05/2019', by: 'Julia Soler', photo_moni:require('../images/user2.jpeg'),
        photo_edu:require('../images/user1.jpg')},
        {id:2, moni: 'Ema Formage', date: '03/06/2019', by:'Pol Fernandez', photo_moni:require('../images/user3.jpg'),
        photo_edu:require('../images/user1.jpg')}
    ]
};

const tutoriesReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EKIP':
            return state;
        default: return state
    }
};

export {tutoriesReducer}
