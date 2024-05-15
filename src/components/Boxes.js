import React from 'react'

export default function Boxes(props){

    const styles = {
        backgroundColor: props.on? "#222222" : "transparent"
    }
    return(
        <div 
            style={styles} 
            className='boxes' 
            onClick={props.toggle}>
        </div>
    )
}
