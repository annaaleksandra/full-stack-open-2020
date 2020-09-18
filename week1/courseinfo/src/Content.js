import React from 'react'
import Part from './Part'

const Content = (props) => {
    return (
        <div>
            <Part props={props.parts[0]}/>
            <Part props={props.parts[1]}/>
            <Part props={props.parts[2]}/>
        </div>
    )
}

export default Content