import { fromJS } from 'immutable';
import { createAction } from 'redux-actions';
import * as api from 'services/api';
import * as rs from './helpers/requestStatus';

/* ACTION TYPES */
const GET_MESSAGE = "chat/GET_MESSAGE";

/* action creators */
export const getMessage = createAction(GET_MESSAGE);

const initialState = fromJS({
    message: []
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_MESSAGE:
            return state.update('message', (data) => data.push(action.payload.value))
        default:
            return state;
    }
}