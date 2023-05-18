import React,{ useEffect, useRef, useState } from 'react';
import  TodoItem from '../componets/ToDoItem';
import { Todo } from '../interfaces/Todo';

const TodoList:React.FC = () => {
const [items,setItems] = useState<Todo[]>([])
const inputRef = useRef<HTMLInputElement>(null)


useEffect(()=>{
    setItems([
        {id:1,name:'HTML',status:true},
        {id:2,name:'Javascript',status:true},
        {id:3,name:'Node',status:true},
        {id:4,name:'Vue',status:true},
        {id:5,name:'Angular',status:true}
])
},[])

const getMaxId = (dataArray: { id: number }[]): number => {
    return dataArray.reduce((maxId, obj) => (obj.id > maxId ? obj.id : maxId), 0);
  };

const addItem = () =>{
  const value:string|undefined = inputRef?.current?.value;
  const id = getMaxId(items);
  if(value!=''&&value!=undefined){
    setItems([...items,{id:id+1,name:value,status:true}]);
    if (inputRef.current) {
        inputRef.current.value = '';
      }
  }
}

const removeItem = (id:number) =>{
   if(items.length>0){
    const data:Todo[] = items.filter(item=>item.id!=id);
    setItems(data);
   }
  }
    return(
        <div>
         <h1>Todo List:</h1>
        <ul>
        {items?.length>0?items?.map((item)=><TodoItem removeItem={removeItem} key={item?.id} item={item}/>):null}
        </ul>
        <input type='text' ref={inputRef} name='todoItem' />
        <button onClick={addItem}>+Add</button>
        </div>
    )
}

export default TodoList