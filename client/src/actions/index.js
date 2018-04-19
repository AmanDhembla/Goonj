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

//for volunteer

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

//for Ngo

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

//for Event

export const saveEvent=(values,history)=>{
    console.log(values);
    return async (dispatch)=>{
        const res=await axios.post('/api/event',values);
        dispatch({
            type: 'FETCH_NGO',
            payload: res.data
        });
        history.push("/profile");
    }
}


//for donation

export const saveDonation=(values,history)=>{
    console.log(values);
    return async (dispatch)=>{
        const res=await axios.post('/api/donation/5ad82b30a12614266348f0bf',values);
        dispatch({
            type: 'FETCH_VOLUNTEER',
            payload: res.data
        });
        history.push("/profile");
    }
}

//for search
export const search=(values,history)=>{
    console.log(values);
    return async (dispatch)=>{
        const res=await axios.post('/api/search',values);
        dispatch({
            type: 'SEARCH',
            payload: res.data
        });
        history.push("/searchResults");
    }
}
