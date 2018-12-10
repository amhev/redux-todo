import React from "react";

const TodoActions = props => (
  <React.Fragment>
    <span
      className="list-item__action remove"
      title="Delete"
      onClick={() => props.removeTodo(props.id)}
    >
      <i className="far fa-trash-alt" />
    </span>
    <span
      className="list-item__action important"
      title="Important"
      onClick={() => props.onImportantChange(props.id)}
    >
      <i className="fas fa-exclamation-triangle" />
    </span>
    <span
      className="list-item__action star"
      title="Favorite"
      onClick={() => props.onStarredChange(props.id)}
    >
      <i className="fas fa-star" />
    </span>
    <span
      className="list-item__action edit"
      title="Edit"
      onClick={() => props.startEditTodo(props.id)}
    >
      <i className="far fa-edit" />
    </span>
  </React.Fragment>
);

export default TodoActions;
