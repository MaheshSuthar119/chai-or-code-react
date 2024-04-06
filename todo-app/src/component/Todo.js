import React from 'react'
import styles from './Todo.module.css'

function Todo() {
  return (
    <center>
    <div className={styles.mainDiv}>
        <div className='child-div'>
          <figcaption>Add Your List Here </figcaption>
        </div>
        <div className={styles.addItems}>
          <input type='text' placeholder='Add items ....'/>
            
        </div>
    </div>
    </center>
  )
}

export default Todo