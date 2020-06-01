import React from 'react'

export default (props) => {

    // Div used as the body
    return(
        <div>
            {props.snakeBod.map((body, i) => {
                const style = {
                    left: `${body[0]}%`,
                    top: `${body[1]}%`
                }
                return(
                    <div className="snake-body" key={i} style={style}></div>
                )
            })}
        </div>
    )
}