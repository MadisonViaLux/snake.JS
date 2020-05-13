import React from 'react';

export default (props) => {

    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    // conditional if user has a score of 10 or more to have this appear
    if(props.body.length-2 >= 10){
        return(
            <div className="snake-superFood" style={style}></div>
        )
    } else {
        return(
            null
        )
    }
    

}