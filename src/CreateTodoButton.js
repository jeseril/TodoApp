import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className='CreateButton' onClick={(event)=>{
      console.log('Le diste click');
      console.log(event);
      console.log(event.target);
      }}>
      +
      </button>
  )
}

export {CreateTodoButton}