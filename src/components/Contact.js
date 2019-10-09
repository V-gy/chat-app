import React from 'react'
function Contacts(props){
    return(
        <figure className="Contact">
            
            <img className = "avatar"
                src={props.user.avatar}
                alt={props.user.name}/>
            <div>
                <h2 className = "name"> {props.user.name} </h2>
                <div className = "status">
                {props.user.status?<p className = "status-online"></p>:<p className = "status-offline "></p> }
                {props.user.status?<p className ="status-text">online</p>:<p className = "status-text">offline</p>}
                
                </div>            
            </div>
        </figure>
    )
}

export default Contacts