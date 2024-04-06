import { useState } from "react"

function AddTodo({AddItems}){
  const [todoName, setTodoName] = useState()
  const [dueDate, setDueDate] = useState()
  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }
  const handleDateChange = (event) => {
    setDueDate(event.target.value)
  }
  const handleAddButton = () => {
    AddItems(todoName, dueDate);
  }
    return (
        <div className="container text-center">
        <div className="row">
            <div className="col-6">
              <input type="text" 
              placeholder="Enter todo Here"
              onChange={handleNameChange}/>
            </div>
            <div className="col-4">
              <input type="date"
              onChange={handleDateChange}/>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success kg-button" 
              onClick={handleAddButton}>Add</button>
            </div>
        </div>
        </div>
    )
}

export default AddTodo;