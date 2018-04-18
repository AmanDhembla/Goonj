import  React from 'react';

export default ({input,meta})=>{
    return (
        <div id="search_selectdiv">
            <select {...input} id="search_select">
                <option value="">Choose an option</option>
                <option value="volunteer">Volunteer</option>
                <option value="ngo">Ngo</option>
                <option value="event">Event</option>
              </select>
        </div>
    )
}
