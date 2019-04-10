import React from 'react';
//import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div alt="exercise" to="/workouts" >
      <div>{props.exercise.exerciseName}</div>
      <img src={props.exercise.img} />
      <div>{props.exercise.difficultyLevel}</div>
      <div>{props.exercise.categoryName}</div>
    </div>
  );
}

export default Card;
