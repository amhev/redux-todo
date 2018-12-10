import React from "react";
import { connect } from "react-redux";
import { toggleTodos } from "../actions";
import { getTotalState, getCompletedState } from "../selectors";

const TodosStatus = props => {
  const completedPrecent = Math.round(
    props.total ? (props.completed / props.total) * 100 : 0
  );
  return (
    <div className="status-bar">
      <div>
        <span className="status-bar-info__title">Your progress</span>
      </div>
      <div className="status-bar-info">
        <div className="status-bar-info__remain">
          {`${100 - completedPrecent}`}% to complete
        </div>
        <div className="status-bar-info__complete">
          <span className="status-bar-info__complete-icon">
            <i className="far fa-check-circle" />
          </span>
          <span className="status-bar-info__complete-text">
            {`${props.completed}/${props.total}`}
          </span>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-completed"
          style={{ width: completedPrecent + "%" }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  completed: getCompletedState(state),
  total: getTotalState(state)
});
const mapDispatchToProps = dispatch => ({
  checkAllTodos: value => dispatch(toggleTodos(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosStatus);
