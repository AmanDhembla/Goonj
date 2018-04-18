import axios from 'axios';

export const fetchUser=()=>{
    return async (dispatch)=>{
        const res=await axios.get('/api/user/current_user');
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
    }
}

export const submitSurvey=(values,history)=>{
    return async (dispatch)=>{
        const res=await axios.post('/api/user/profile',values);
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
        history.push("/profile");
    }
}


export const fetchVolunteer=()=>{
    return async (dispatch)=>{
        const res=await axios.get('/api/volunteer');
        console.log(res);
        dispatch({
            type: 'FETCH_VOLUNTEER',
            payload: res.data
        });
    }
}


export const saveVolunteer=(values,history)=>{
    return async (dispatch)=>{
        const res=await axios.post('/api/volunteer',values);
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
        history.push("/profile");
    }
}

export const fetchNgo=()=>{
    return async (dispatch)=>{
        const res=await axios.get('/api/ngo');
        console.log(res);
        dispatch({
            type: 'FETCH_NGO',
            payload: res.data
        });
    }
}



export const saveNgo=(values,history)=>{
    console.log(values);
    return async (dispatch)=>{
        const res=await axios.post('/api/ngo',values);
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
        history.push("/profile");
    }
}

export const saveEvent=(values,history)=>{
    console.log(values);
    return async (dispatch)=>{
        const res=await axios.post('/api/event',values);
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
        history.push("/profile");
    }
}
