import  React from 'react';

export default ({input,label,meta})=>{
    return (
        <div>
            <label>{label}</label>
            <select {...input} id="select">
                <option />
                <option value="volunteer">volunteer</option>
                <option value="ngo">ngo</option>
            </select>
            <div className="red-text error">
                {meta.touched? meta.error :""}
            </div>
        </div>
    )
}