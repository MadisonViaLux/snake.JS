import React from 'react';

export default (props) => {

    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }
    // Using a div as the body of the food
    return(
        <div className="snake-food" style={style}></div>
    )

}