import React from 'react';

export default (props) => {

    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    // console.log(props.body.length)

    if(props.body.length-2 >= 10){
        return(
            <div className="snake-food2" style={style}></div>
        )
    } else {
        return(
            null
        )
    }
    

}