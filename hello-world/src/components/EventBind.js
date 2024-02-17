import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message: 'Hello'
        }
        // for method 3
        // this.clickHandler = this.clickHandler.bind(this)
      }
    // clickHandler(){
    //     this.setState({
    //         message: 'GoodBye!'
    //     })

    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
             message: 'GoodBye!'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}> Click</button> */}

        {/* <button onClick={() => this.clickHandler()}> Click</button> */}

        <button onClick={this.clickHandler}> Click</button>


      </div>
    )
  }
}

export default EventBind