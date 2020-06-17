import React, { useState } from 'react';


const App = () =>
{
  const[inputList,setInputList] = useState('buy apple');
  const[Items,SetItems]= useState([]);  

  const itemEvent = (event) => {

setInputList(event.target.value);
  };

  const addItem =() =>
{

  
}
    
  
  return(<>
  <div className='main_div'>
     <div className='center_div'>
     <br/>
     <h1>TO DO LIST </h1>
     <br/>
     <input type='text' placeholder='Add a task to do' onChange ={itemEvent}/>
     <button onClick={addItem}> + </button>

   
  <ol>
    {Items.map( (itemVal) =>
    {
      return <li>{inputList} </li>
    })}
  </ol>

     </div>

  </div>

</>  )
}

export default App;
