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
        history.push("/dashboard");
    }
}

export const saveVolunteer=(values,history)=>{
    console.log(values);
    return async (dispatch)=>{
        const res=await axios.post('/api/volunteer',values);
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
        history.push("/dashboard");
    }
}


export const submitform1=(values,history,step)=>{
  console.log(step);
}
