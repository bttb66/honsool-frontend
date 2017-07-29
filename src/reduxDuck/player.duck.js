import { fromJS } from 'immutable';
import { createAction } from 'redux-actions';

const MUSIC_INIT = "music/MUSIC_INIT";
const MUSIC_PLAY = "music/MUSIC_PLAY";
const MUSIC_STOP = "music/MUSIC_STOP";

export const musicInit = createAction(MUSIC_INIT);
export const musicPlay = createAction(MUSIC_PLAY);
export const musicStop = createAction(MUSIC_STOP);

const initialState = fromJS({
    playing: false,
    player: null
});

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case MUSIC_INIT:
            return state.set('player', fromJS(action.payload.value));
        case MUSIC_PLAY:
            return state.set('playing', true);
        case MUSIC_STOP:
            return state.set('playing', false);
        default:
            return state;
    }
}