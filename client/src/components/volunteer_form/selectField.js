import  React from 'react';

export default ({input,label,meta})=>{
    return (
        <div>
            <label>{label}</label>
            <select {...input} id="select">
                <option value="j">Choose an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

            <div className="red-text error">
                {meta.touched? meta.error :""}
            </div>
        </div>
    )
}
