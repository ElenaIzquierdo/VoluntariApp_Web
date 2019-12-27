
export const changeLoginFormProperty=(propertyName, value) =>{
    return {
        type:'CHANGE_PROPERTY',
        data:{
            propertyName,
            value
        }
    }
};

export const changeErrorLoginMapProperty=(propertyName) =>{
    return {
        type:'CHANGE_ERROR_PROPERTY',
        data:{
            propertyName
        }
    }
};

export const resetErrorLoginMap=() =>{
    return{
        type: 'RESET_ERROR_MAP'
    }
}

export const login = (loginInfo) =>{
    return(dispatch) => {
        fetch("http://165.22.76.147:8080/voluntariapp/token", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
        }).then((response) => {
            if(response.ok){
                console.log(response)
                return response.json().then(body => {
                    dispatch(receiveToken(body.access))
                })
                
            }
            else {
                console.log('Error sending login. Status: ' + response.status);
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const requestLogin=() =>{
    return{
        type: 'REQUEST_LOGIN'
    }
}

export const receiveToken=(token) =>{
    localStorage.setItem('token',token)
    
    return{
        type: 'RECEIVE_TOKEN',
    }
}