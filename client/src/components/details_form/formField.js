import  React from 'react';

export default ({input,label,meta})=>{
    console.log("he he ha ha",meta);
    return (
        <div>
            <label>{label}</label>
            <input id="field" {...input}/>
            <div className="red-text error">
                {meta.touched? meta.error :""}
            </div>
        </div>
    )
}