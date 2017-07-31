import { fromJS } from 'immutable';
import { createAction } from 'redux-actions';
import * as api from 'services/api';
import * as rs from './helpers/requestStatus';

/* ACTION TYPES */
const GET_MESSAGE = "chat/GET_MESSAGE";
const SET_USER_NUMBER = "chat/SET_USER_NUMBER";

/* action creators */
export const getMessage = createAction(GET_MESSAGE);
export const setUserNumber = createAction(SET_USER_NUMBER);

const initialState = fromJS({
    message: [],
    userNumber: 0,
    name: ''
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_MESSAGE:
            return state.update('message', (data) => data.push(action.payload.value))
                        .set('name', action.payload.name);
        case SET_USER_NUMBER:
            return state.set('userNumber', action.payload.value);
        default:
            return state;
    }
}