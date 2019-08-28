/**
 * ************************************
 *
 * @module  actions.js
 * @description Action Creators
 *
 * ************************************
 */

//Import all types from constant file (actionTypes);
import * as types from "./actionTypes";

//For reducer to grab and use;
export const addMessage = data => ({
  type: types.ADD_MESSAGE,
  payload: data // Data OBJECT we sent from the server;
});
