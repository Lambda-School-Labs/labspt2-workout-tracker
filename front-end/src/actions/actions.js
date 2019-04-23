import axios from "axios";
import auth from "../Auth";

export const FETCHED = "FETCHED";
export const FETCHING = "FETCHING";
export const FETCHED_USERINFO = "FETCHED_USERINFO";
export const FETCHING_USERINFO = "FETCHING_USERINFO";
export const FETCHED_NOTES = "FETCHED_NOTES";
export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCHING_ERROR = "FETCHING_ERROR";
export const DATE_CLICKED = "DATE_CLICKED";


const DEPLOYED = "https://workout-tracker-pt2.herokuapp.com";
const LOCAL = "http://localhost:3333";

export const getData = () => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.get(`${DEPLOYED}/api/users`, { headers });
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_ERROR, payload: err });
      });
  };
};

export const postCategory = categoryName => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.post(`${DEPLOYED}/api/categories`, categoryName, {
    headers
  });
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_ERROR, payload: err });
      });
  };
};

export const postExercise = exerciseBody => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.post(`${DEPLOYED}/api/exercises`, exerciseBody, {
    headers
  });
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_ERROR, payload: err });
      });
  };
};

export const postNote = noteBody => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.post(`${DEPLOYED}/api/notes`, noteBody, {
    headers
  });
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    promise
      .then(response => {
        dispatch({ type: FETCHED_NOTES, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_ERROR, payload: err });
      });
  };
};

export const updateUser = userUpdates => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.patch(`${DEPLOYED}/userupdate`, userUpdates, {
    headers
  });
  return dispatch => {
    dispatch({ type: FETCHING_USERINFO });
    promise
      .then(response => {
        dispatch({
          type: FETCHED_USERINFO,
          payload: JSON.parse(response.data.text)
        });
      })
      .catch(err => {
        dispatch({ type: FETCHING_ERROR, payload: err });
      });
  };
};

export const clickedDate = (date) => {
  return dispatch => {
    dispatch({
      type: DATE_CLICKED,
      payload: date,
     });
  }
};