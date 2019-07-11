const INITIAL_STATE = {
    items:[
        {
            id: 1,
            altText: 'Crea activitats!',
            caption: 'Clica la opció Esdeveniments del menú superior'
        },
        {
            id: 2,
            altText: 'Controla assistencia!',
            caption: 'Clica la opció Esdeveniments del menú superior'
        },
        {
            id: 3,
            altText: 'Visualitza el Forum dels voluntaris!',
            caption: 'Clica la opció Forum del menú superior'
        }
    ],
    activitat_propera: null,
    activitats_anteriors: [],
    activeIndex: 0,
    idProva:0
}

const homeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_ITEMS':
            return state;
        case 'INC_ITERATOR':
            return { ...state, activeIndex: state.activeIndex+1};
        case 'DEC_ITERATOR':
            return { ...state, activeIndex: state.activeIndex-1};

        case 'CHANGE_ITERATORPARAM':
            return { ...state, activeIndex: action.data.iterator};

        default: return state
    }
};

export {homeReducer}
