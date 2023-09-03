import './TodoFilter.css'

function TodoFilter({showAllTodo,showActiveTodo,showCompletedTodo}) {
  return (
    <div className='filter-container'>

      <button onClick={showAllTodo}>All</button>
      <button onClick={showActiveTodo}>Active</button>
      <button onClick={showCompletedTodo}>Completed</button>
    </div>
  )
}

export {TodoFilter}