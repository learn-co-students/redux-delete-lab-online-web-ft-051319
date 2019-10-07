import React from 'react'

const Band = props => {
    return ( <li>{props.name}<span><button onClick={() => props.delete(props.band.id)}>Delete</button></span></li>)    
}

export default Band