import React, { Component } from 'react'

class UpdatelifecycleB extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
       name: "Mahesh"
   }
   console.log('LifecycleB Constructor')
 } 

 static getDerivedStateFromProps(props, state){
    console.log('LifecycleB getDerivedStateFromProps')
    return null
 }

componentDidMount(){
    console.log('LifecycleB componentDidMount')
}

shouldComponentUpdate(){
    console.log('LifecycleB shouldComponentUpdate');
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate(){
    console.log('LifecycleB componentDidUpdate')
}

render() {
    console.log('LifecycleB render')
    return (
      <div>UpdatelifecycleB</div>
    )
  }
}

export default UpdatelifecycleB