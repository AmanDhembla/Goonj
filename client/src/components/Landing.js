import React from 'react';


export default ()=>{
    return (
        <div>
            <div className="parallax-container">
                <div className="parallax"><img src={require("../images/goonj1.jpg")} alt="" /></div>
            </div>
            <div className="section white">
                <div className="row container">
                <h2 className="header">Goonj</h2>
                <p className="grey-text text-darken-3 lighten-3">Coonect with ngo's</p>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src={require("../images/goonj2.jpg")} alt=""/></div>
            </div>
        </div>
    )
}