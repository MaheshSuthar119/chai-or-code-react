import React from 'react'

// function Greet({name, heroName}){
//     // console.log(props);
//     return(
//         <div>
//             {/* <h1>Hello {props.name}</h1>
//             {props.children} */}

//             <h1>Hello {name} a.k.s {heroName}</h1>
//             {/* {children} */}
//         </div>

//     )
// }

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.s {heroName}
            </h1>
        </div>
    )
}

export default Greet