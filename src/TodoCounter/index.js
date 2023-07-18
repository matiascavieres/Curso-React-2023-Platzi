import './TodoCounter.css'

// Titulo que cuenta los todos
// Destructura el total de todos y los todos completados desde App.js
function TodoCounter({total, completed}){
    return(
        <h1 className="TodoCounter">
          Has completado <span>{completed}</span> de <span>{total}
          </span> TODOs
        </h1>
    );
  }

export { TodoCounter };