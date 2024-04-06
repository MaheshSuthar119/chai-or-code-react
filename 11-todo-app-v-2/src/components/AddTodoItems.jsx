import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, onDelete}) => {
    return (
       <div className="items-container">
        {todoItems.map(item => (
        <TodoItem key={item.name} 
        todoName={item.name} 
        todoDate={item.dueDate} onDelete = {onDelete}/>
 ))}
      </div>
    );
}
export default TodoItems;

 
