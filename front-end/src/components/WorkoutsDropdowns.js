import React, { Component } from 'react';
import { exerciseDefaults } from '../defaults/index';
import { getData } from '../actions/actions';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';

class WorkoutsDropdowns extends Component {
  state = {
    exercises: exerciseDefaults,
    data: this.props.data
  };

  componentDidMount() {
    this.props.getData();
  }

  // takes in a categoryName as a callback
  // if you want to know what categoryNames we have available
  // take a look at the exerciseDefaults array in'../defaults/index.js'
  renderExerciseNames = category => {
    const exercises = this.state.exercises;
    const filteredExercises = exercises.filter(exercises => {
      return exercises.categoryName === category;
    });
    const filteredExerciseNames = filteredExercises.map(exerciseType => (
      <p className="drop-down">{exerciseType.exerciseName}</p>
    ));
    return filteredExerciseNames;
  };

  render() {
    return (
      <div className="workouts-dropdowns">
        {['Arms', 'Legs', 'Cardio', 'Abs'].map(type => {
          return (
            <Collapsible trigger={type}>
              {this.renderExerciseNames(type)}
            </Collapsible>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error,
    fetchingUsers: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(WorkoutsDropdowns);
