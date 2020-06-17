import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';


const Todo = () =>
{
  const[inputList,setInputList] = useState([]);
  const[Item,SetItems]= useState('');  

  const itemEvent = (event) => {

SetItems(event.target.value);
  };
   const listOfItems =() => {

    setInputList((prevValue ) =>{
      return[...prevValue,Item]

    });
    SetItems(" ");
   };

 
  
  return(<>
  <div className='main_div'>
     <div className='center_div'>
     <br/>
     <h1>TO DO LIST </h1>
     <br/>
     <input type='text'  value={ Item} placeholder='Add a task to do' onChange ={itemEvent}/>
     <Button className='newBtn' onClick= {listOfItems}> <AddIcon/>
    
     </Button>
    

   <br/>
  <ol>
  

   {inputList.map((val,index) =>
   {
     return  <ListCom key={index} text={val} /> ;
   })}
  </ol>

     </div>

  </div>

</>  )
}
export default Todo;