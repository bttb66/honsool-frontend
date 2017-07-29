import { fromJS } from 'immutable';
import * as api from 'services/api';
import * as rs from './helpers/requestStatus';

/* ACTION TYPES */
const SEND_PHOTO = "photo/SEND_PHOTO";

export const sendPhoto = () => ({
    type: SEND_PHOTO,
    // payload: api.
});

const initialState = fromJS({
    requests: {
        sendPhoto: { ...rs.request }
    }
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case `${SEND_PHOTO}_PENDING`:
            return state.mergeIn(['requests', 'sendPhoto'], ...rs.pending);
        case `${SEND_PHOTO}_FULFILLED`:
            return state.mergeIn(['requests', 'sendPhoto'], ...rs.fulfilled);
        case `${SEND_PHOTO}_REJECTED`:
            return state.mergeIn(['requests', 'sendPhoto'], ...rs.rejected);
        default:
            return state;
    }
}