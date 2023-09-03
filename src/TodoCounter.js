import './TodoCounter.css'

function TodoCounter({text,total,completed}) {
    return(
        <>
        <h1 className='YourTask'>Your Task</h1>
        <h1>{text} {completed} de {total} TODOS</h1>
        </>
      
    );
  }

  export {TodoCounter};