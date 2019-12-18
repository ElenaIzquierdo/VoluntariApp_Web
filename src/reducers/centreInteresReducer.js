const INITIAL_STATE ={
    centreInteres: {
        id:1,
        name: "Centre Interes curs 2019-2020: Persona prehistòrica"
    },
    objectius: [
        {id:0, description: 'Estimular la imaginació i la creativitat dels infants'},
        {id:1, description: 'Potenciar les vivencies comunes del grup'},
        {id:2, description: 'Crear un mon imaginatiu'},
        {id:3, description: 'Motivar els infants a participar en les diverses activitats'},
        {id:4, description: 'Gaudir de lacompanyament de personatges màgics en un entorn diferent'},
        {id:5, description: 'Fomentar la cooperació entre els membres dels grups'}
    ],
    explicacions: [
        {id: 0, date: '2019-12-15T09:46:01.846839Z', 
        description: 'Trobem un pendrive lligat a una pedra, quan acabem de dinar reproduim el video' +
                'que hi ha dins. El video es la cientiica que en sexplica la historia de la maquina del temps que va construir' +
                'i que una persona prehistòrica es va colar a la maquina i ha viatjat fins lactualitat. Ens demana' +
                'ajuda per tornar-la a la seva època.', finished: true},

        {id: 1, date: '2019-12-16T09:46:01.846839Z', 
        description: 'Arrel de lactivitat daquest dia, ens comuniquem amb la persona prehistorica i li' +
                'expliquem on es la maquina del temps i que ha de tornar a la seva època.', finished: true},
        
        {id: 2, date: '2019-12-18T09:46:01.846839Z', 
        description: 'Petits rep una carta de la cientifica on explica que ha tonrat el personatge prehistoric' +
                'pero que ha espatllat tota la maquina i ara ella sha quedat atrapada en el temps! Ens demana' +
                'que lajudem a reconstruir la maquina.', finished: true},
        
        {id: 3, date: '2019-12-19T09:46:01.846839Z', 
        description: 'Trobem les peces per arreglar la maquina', finished: false},
        
        {id: 4, date: '2019-12-20T09:46:01.846839Z', 
        description: 'Arreglem la màquina i la cientifica arriba a lactualitat per donar-nos les gràcies i ' +
                'marxar a casa seva.', finished: false},

    ],
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