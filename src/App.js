import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//     {text:'Cortar cebolla', completed: true},
//     {text:'Tomar el Curso de intro a React.js', completed: true},
//     {text:'Llorar con la llorona ', completed: true},
//     {text:'EUUEUEUEUEU', completed: false},
//     {text:'Poto', completed: false}
//   ]
  
  
//   localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));


  // localStorage.removeItem('TODOS_V1');
  

function useLocalStorage(itemName, initalValue){


  const localStorageItem = localStorage.getItem
  (itemName);

  
  // Estado inicial de nuestra aplicacion
  let parsedItem;


  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.
    stringify(initalValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const saveItem = (newItem) => {
    localStorage.setItem(itemName,JSON.
    stringify(newItem));

    setItem(newItem);
  };

  const [item, setItem] = React.useState();

}
  
function App() {
  

  // Estado de las tareas / Funcion que las actualiza  <TodoList/>
  const [todos, setTodos] = React.useState(parsedItem);
  
  // Estado de escribir en la barra de busqueda / Funcion que la actualiza <TodoSearch/>
  const [searchValue, setSearchValue] = React.useState('');
  
  //Valida los todos completados en base al largo del arreglo de todos <TodoCounter>
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  
  // Cuenta los todos completados <TodoCounter/>
  const totalTodos = todos.length;
  
  // Verifica que el valor de searchValue coincida con el todo que se esta buscando
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
    );
    
    
    // Funcion actualizadora de estado en base 
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      );
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
    };


    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      );
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
    }


  return (
    <>
      {/* Titulo que muestra los todos completados */}
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos} />

      {/* Barra para buscar un nuevo Todo */}
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {/* Lista con todos los todos agregados */}
      <TodoList>
        {searchedTodos.map(todo => (

          // Valor individual de cada todo
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}

      </TodoList>

      {/* Boton para crear un nuevo todo */}
      <CreateTodoButton />
    </>
  );
}

export default App;
