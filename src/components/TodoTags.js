import React from "react";

const TodoTags = ({
  id,
  important,
  starred,
  onImportantChange,
  onStarredChange
}) => (
  <div className="list-item-tags">
    {important && (
      <span
        className="list-item-tag important"
        onClick={() => onImportantChange(id)}
      >
        <i className="fas fa-exclamation-triangle" />
      </span>
    )}
    {starred && (
      <span
        className="list-item-tag starred"
        onClick={() => onStarredChange(id)}
      >
        <i className="fas fa-star" />
      </span>
    )}
  </div>
);

export default TodoTags;
