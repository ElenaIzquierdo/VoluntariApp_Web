export const showWeek =() => {
    return{
        type: 'SHOW_WEEK'
    }
}

export const unshowWeek =() => {
    return{
        type: 'UNSHOW_WEEK'
    }
}

export const fetchWeeksForQuarter = (quarter) => {
    return (dispatch) => {
        dispatch(requestWeeks());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/week/quarter/'+quarter;
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveWeeksForQuarter(body)))
            );
          
    }
}

const requestWeeks = () =>{
    return{
        type: 'REQUEST_WEEKS'
    }
}

const receiveWeeksForQuarter =(weeks)=>{
    return {
        type: 'RECEIVE_WEEKS',
        data: weeks
    }
}

export const nextQuarter = () =>{
    return {
        type: 'NEXT_QUARTER'
    }
}

export const previousQuarter = () =>{
    return {
        type: 'PREVIOUS_QUARTER'
    }
}

export const fetchWeeksForQuarterWithURL = (url) => {
    return (dispatch) => {
        dispatch(requestWeeks());
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveWeeksForQuarter(body)))
            );
          
    }
}

export const getQuartersFromCours = (cours) => {
    return (dispatch) => {
        dispatch(requestQuarters());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/quarter/cours/'+cours;
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveQuartersFromCours(body)))
            );
          
    }
}

const requestQuarters = () =>{
    return{
        type: 'REQUEST_QUARTERS'
    }
}

const receiveQuartersFromCours =(quarters)=>{
    return {
        type: 'RECEIVE_QUARTERS',
        data: quarters
    }
}