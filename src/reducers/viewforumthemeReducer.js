const INITIAL_STATE = {
    forumtheme: {
        id:0,
        title:'Comisio centre interes',
        description:'La comisio del centre d\'interes es per coordinar tasques i que tot surti genial!',
        createdDate:'27/05/2019',
        finished:false
    },
    comments:[
        {
            id:0,author:'Elena',content:'Quines són les tasques que falta repertir?',created_date:'25/05/2019 17:55'
        },
        {
            id:1,author:'Julia',content:'Fer les cartes dels personatges del segon pis i del primer',created_date:'26/05/2019 15:55'
        },
        {
            id:2,author:'Elena',content:'Vale, genial!',created_date:'26/05/2019 19:05'
        },
    ]
}

const viewforumthemeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_FORUMTHEME':
            return state;
        default: return state
    }
};
export {viewforumthemeReducer}
