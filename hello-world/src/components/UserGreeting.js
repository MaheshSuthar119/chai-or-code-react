import React, { Component } from 'react'

class UserGreeting extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
       isLoggedIn: true
   }
 }
  render() {

    // method 4 Sort circuit method
    return this.state.isLoggedIn && <div>Welcome Mahesh</div>


    // method 3 Ternary Operation
    // return(
    //     this.state.isLoggedIn ?(

    //         <div>Welcome Mahesh</div> 
    //     ):
    //     (<div>Welcome Guest</div>)

    // )

    // method 2 element variable
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Mahesh</div>
    // }
    // else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // if-else method for conditional Rendering
    // if(this.state.isLoggedIn){

    //     return (

    //         <div>Welcome Mahesh</div>
            
    //         )
    //     }
    //     else{
    //         return (

    //             <div>Welcome Guest</div>
    //         )

    // }

    // return (
        // <div> 

        //     <div>Welcome Mahesh</div>
        //     <div>Welcome Guest</div>
        // </div>
        // )
 }
}

export default UserGreeting