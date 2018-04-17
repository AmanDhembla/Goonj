import  React from 'react';

export default ({input,label,meta})=>{
    return (
        <div>
            <label>{label}</label>
            <select {...input} id="select">
                <option />
                <option value="food">Food</option>
                <option value="clothes">Clothes</option>
                <option value="book">Books</option>
            </select>
            <div className="red-text error">
                {meta.touched? meta.error :""}
            </div>
        </div>
    )
}
