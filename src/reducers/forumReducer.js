const INITIAL_STATE = {
    forumthemes:[
        {id:0,title:'Comisio centre interes',description:'La comisio del centre d\'interes es per coordinar tasques i que tot surti genial!',createdDate:'27/05/2019'},
        {id:1,title:'Cançons per petits',description:'Aquest tema és per recopilar cançons per poder cantar amb els infants',createdDate:'15/04/2019'},
        {id:2,title:'Activitat voluntaries dill',description:'El grup de voluntaries del grup de petits dels dilluns hem decidit dinamitzar una activitat molt xula',createdDate:'05/02/2019'}
    ]
}

const forumReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_FORUMTHEMES':
            return state;

        default: return state
    }
};

export {forumReducer}
