import { fromJS } from 'immutable';
import * as api from 'services/api';
import * as rs from './helpers/requestStatus';

/* ACTION TYPES */
const SEND_PHOTO = "photo/SEND_PHOTO";

export const sendPhoto = (file) => ({
    type: SEND_PHOTO,
    payload: api.postPicture(file)
});

const initialState = fromJS({
    requests: {
        sendPhoto: { ...rs.request }
    },
    valid: false
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case `${SEND_PHOTO}_PENDING`:
            return state.mergeIn(['requests', 'sendPhoto'], fromJS(rs.pending));
        case `${SEND_PHOTO}_FULFILLED`:
            return state.mergeIn(['requests', 'sendPhoto'], fromJS(rs.fulfilled))
                        .set('valid', true);
        case `${SEND_PHOTO}_REJECTED`:
            return state.mergeIn(['requests', 'sendPhoto'], fromJS(rs.rejected));
        default:
            return state;
    }
}