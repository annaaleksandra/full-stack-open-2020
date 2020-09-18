import React from 'react'

function Part(props) {
    return(
        <div>
            <p>
                <strong>Part: </strong>{props.props.name} 
                <strong>  Exercises: </strong>{props.props.exercises}
            </p>
        </div>
    )
}

export default Part