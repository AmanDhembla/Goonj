export default (state=null,action)=>{
    console.log(action);
    switch(action.type){
        case 'FETCH_VOLUNTEER':
            return action.payload || false; 
        default:
            return state;
    }
}