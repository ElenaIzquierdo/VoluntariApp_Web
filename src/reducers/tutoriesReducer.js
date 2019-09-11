const INITIAL_STATE = {
    ekip: [
        {id:0, name:'Elena Izquierdo', photo:require('../images/user1.jpg')},
        {id:1, name:'Laura Gonzalez', photo:require('../images/user2.jpeg')},
        {id:2, name:'Julia Soler', photo:require('../images/user3.jpg')}
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
