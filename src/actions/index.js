import { ADD_TASK, DELETE_TASK } from '../constants';

export const addTask = (text) => {
  const action = {
    type: ADD_TASK,
    text,    
  }  
  return action;
}

export const deleteTask = (id) => {
  const action = {
    type: DELETE_TASK,
    id
  }  
  return action;
}
