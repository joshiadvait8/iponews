import React, { useEffect,useState } from 'react'
import './NameCard.css'
import {BrowserRouter, Redirect, withRouter} from 'react-router-dom'
import dataipo from "../data.json"

function NameCard({ name,price,date,img,k,history}) {

    const handleClick=()=>{
        // console.log(name);
           
            history.push(`/${k}`);     
      };

     
    return (
        <div className="shadow-sm card m-3 py-2" onClick={handleClick}>
            <p className="m-0 font-weight-bold py-2 pl-3">{name}</p>
            <div class="px-3 m-0 d-flex flex-row align-items-center justify-content-between">
                <div className="p-0 overflow-hidden d-flex pb-2 flex-column">
                    <p className="p-0 m-0 font-weight-bold namecard__price">{price}</p>
                    <p className="p-0 m-0 text-secondary namecard__date">{date}</p>
                </div>
                <img className="namecard_image" src={require('../images/'+img)} />
            </div>
        </div>
    )
}

export default withRouter(NameCard);
