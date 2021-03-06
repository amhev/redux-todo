import React from "react";
import { connect } from "react-redux";
import TodoTags from "./TodoTags";
import TodoActions from "./TodoActions";
import {
  toggleTodo,
  toggleImportantTodo,
  toggleStarredTodo,
  removeTodo,
  startEditTodo,
  editTodo,
  cancelEditTodo
} from "../actions";

const Todo = props => {
  return (
    <div
      className={`list-item ${props.completed ? "completed " : "opened "} 
            ${props.important ? "important " : " "} 
            ${props.starred ? "starred" : ""}`}
    >
      {!props.editing && (
        <React.Fragment>
          {!props.completed && (
            <span
              className="list-item__state todo"
              onClick={() => props.toggleTodo(props.id)}
            >
              <i className="far fa-circle" />
            </span>
          )}
          {props.completed && (
            <span
              className="list-item__state completed"
              onClick={() => props.toggleTodo(props.id)}
            >
              <i className="far fa-check-circle" />
            </span>
          )}
          <span className="list-item__text">
            <TodoTags
              {...props}
              onImportantChange={props.onImportantChange}
              onStarredChange={props.onStarredChange}
            />
            {props.text}
          </span>
          <TodoActions
            {...props}
            removeTodo={props.removeTodo}
            startEditTodo={props.startEditTodo}
            onImportantChange={props.onImportantChange}
            onStarredChange={props.onStarredChange}
          />
        </React.Fragment>
      )}

      {props.editing && (
        <React.Fragment>
          <input
            className="list-item__text"
            type="text"
            autoFocus
            defaultValue={props.text}
            onBlur={event => props.onDoneEdit(props.id, event)}
            onKeyUp={event => {
              if (event.key === "Enter") {
                props.onDoneEdit(props.id, event);
              } else if (event.key === "Escape") {
                props.onCancelEdit(props.id);
              }
            }}
          />
        </React.Fragment>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  onImportantChange: id => dispatch(toggleImportantTodo(id)),
  onStarredChange: id => dispatch(toggleStarredTodo(id)),
  removeTodo: id => dispatch(removeTodo(id)),
  startEditTodo: id => dispatch(startEditTodo(id)),
  onDoneEdit: (id, event) => dispatch(editTodo(id, event)),
  onCancelEdit: id => dispatch(cancelEditTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Todo);
