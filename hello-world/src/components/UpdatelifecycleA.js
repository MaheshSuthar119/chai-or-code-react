import React, { Component } from 'react'
import UpdatelifecycleB from './UpdatelifecycleB'

class UpdatelifecycleA extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
       name: "Mahesh"
   }
   console.log('LifecycleA Constructor')
 } 

 static getDerivedStateFromProps(props, state){
    console.log('LifecycleA getDerivedStateFromProps')
    return null
 }
componentDidMount(){
    console.log('LifecycleA componentDidMount')
}

shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate(){
    console.log('LifecycleA componentDidUpdate')
}

changeState = () => {
    this.setState({
        name: "Hello-World!"
    })
}

render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>
        UpdatelifecycleA
        </div>
        <button onChange={this.changeState}>Change State</button>
        <UpdatelifecycleB/>
      </div>
    )
  }
}

export default UpdatelifecycleA