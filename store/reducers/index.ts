import { HYDRATE } from 'next-redux-wrapper';
import {combineReducers} from 'redux';

import { playerReducer } from './playerReducer';
import { trackReducer } from './trackReducer';

export const rootReducer = combineReducers({
    player: playerReducer,
    track: trackReducer,
})

export const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }

        if (state.count) nextState.count = state.count

        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>