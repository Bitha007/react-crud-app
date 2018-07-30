import React from "react";

const ListItem = (props) => {
    return <li 
    className="list-group-item">
    <button
     className="btn btn-sm btn-info mr-3"
     onClick={props.editTodo}
     >U</button>
    {props.item.name}
    <button
     className="btn btn-sm btn-danger ml-3"
     onClick= {props.deleteTodo}
     >X</button>
    </li>
}

export default ListItem;