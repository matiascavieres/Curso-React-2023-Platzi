import './TodoList.css'

// Recibe a los todos de defualtTodos
function TodoList({ children }){
  return(
    <ul className="TodoList">{
      console.log({children})

    }
        { children }
    </ul>
  );
}

export { TodoList };