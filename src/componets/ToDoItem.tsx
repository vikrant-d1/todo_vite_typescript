import React from 'react'
import { Todo } from '../interfaces/Todo';

type TodoItemProps = {
    key: number;
    item: Todo;
    removeItem:(number:number) => void;
  }; 

const TodoItem:React.FC<TodoItemProps> = (props) => {
    return <li><span>{props?.item?.id} : {props?.item?.name}</span> <span onClick={()=>props?.removeItem(props?.item?.id)}>-</span></li>
}

export default TodoItem;