import React from 'react'

const Hello = () => {
    // With JSX
    // return (
    //     <div>
    //         <h1>Hello Mahesh</h1>
    //     </div>
    // )

    //without JSX
    return React.createElement(
        'div', 
        null, 
        React.createElement('h1', null, "Hello Mahesh Suthar"))
}

export default Hello