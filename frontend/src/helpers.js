export const authenticate=(response,next) =>{

    if(window !== 'undefined' ){
        sessionStorage.setItem('token', JSON.stringify(response.data.token));
        sessionStorage.setItem('user', JSON.stringify(response.data.name));

    }
    next();

};

export const getToken=(response,next) =>{

    if(window !== 'undefined' ){
        if(sessionStorage.getItem('token')){
            return JSON.parse(sessionStorage.getItem('token'))

        }
        else{
            return false;
        }
        

    }

};

export const getUser=(response,next) =>{

    if(window !== 'undefined' ){
        if(sessionStorage.getItem('user')){
            return JSON.parse(sessionStorage.getItem('user'))

        }
        else{
            return false;
        }
        

    }

};

export const logout=next =>{

    if(window !== 'undefined' ){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');

    }
    next();

};