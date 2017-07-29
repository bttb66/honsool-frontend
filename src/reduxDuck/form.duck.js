import { fromJS } from 'immutable';
import { createAction } from 'redux-actions';

const FORM_CHANGE = "form/FORM_CHANGE";

export const formChange = createAction(FORM_CHANGE);

const initialState = fromJS({
    chat: {
        message: ''
    }
});

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case FORM_CHANGE:
            return state.setIn([action.payload.formName, action.payload.name], action.payload.value);
        default:
            return state;
    }
}