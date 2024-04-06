import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css'
import TodoItems from "./components/AddTodoItems"
import { useState } from "react"
import Message from "./components/Message"

function App() {
//   const initialItems = [{
//     name: 'Buy Milk',
//     dueDate: '4/10/2023',
//   },
//   {
//     name: 'Go To College',
//     dueDate: '4/10/2023',
//   },
// ]

const [todoItems, setTodoItems] = useState([])

const AddItems = (itemName, itemDueDate) => {
  console.log(`New Item added: ${itemName} Date:${itemDueDate}`)
  const newTodoitems = [...todoItems, {name: itemName,
    dueDate: itemDueDate}];
    setTodoItems(newTodoitems)
}

const handledeleteItem = (todoItemName) => {
  console.log(`Item Deleted: ${todoItemName}`)
  const newTodoitems = todoItems.filter(item => item.name !== todoItemName)
  setTodoItems(newTodoitems)
}
  return (
    <center className='todo-container'>
       <AppName/>    
      <AddTodo AddItems={AddItems}/>
      {todoItems.length === 0 && <Message todoItems={todoItems}/>}
      <TodoItems todoItems={todoItems} onDelete={handledeleteItem}/>   
    </center>
  )
}

export default App
