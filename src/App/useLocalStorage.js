import React from "react";

function useLocalStorage(itemName, initalValue){


    const localStorageItem = localStorage.getItem(itemName);
  
    
    // Estado inicial de nuestra aplicacion
    let parsedItem;
  
    
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initalValue));
      parsedItem = initalValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName,JSON.
      stringify(newItem));
  
      setItem(newItem);
    };
  
  
    return [item, saveItem]
  
  }

export {useLocalStorage};