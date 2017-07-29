import { fromJS } from 'immutable';
import * as api from 'services/api';
import * as rs from './helpers/requestStatus';

/* ACTION TYPES */
const GET_BEER_INFO = "beer/GET_BEER_INFO";

export const getBeerInfo = () => ({
    type: GET_BEER_INFO,
    // payload: api.
});

const initialState = fromJS({
    requests: {
        getBeer: { ...rs.request }
    }
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case `${GET_BEER_INFO}_PENDING`:
            return state.mergeIn(['requests', 'sendPhoto'], ...rs.pending);
        case `${GET_BEER_INFO}_FULFILLED`:
            return state.mergeIn(['requests', 'sendPhoto'], ...rs.fulfilled);
        case `${GET_BEER_INFO}_REJECTED`:
            return state.mergeIn(['requests', 'sendPhoto'], ...rs.rejected);
        default:
            return state;
    }
}