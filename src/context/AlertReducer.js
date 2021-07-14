import { ALERT_HIDE, ALERT_SHOW } from './ActionTypes'

const handlers = {
    [ALERT_SHOW]: (state, action) => action.payload,
    [ALERT_HIDE]: () => null,
    DEFAULT: state => state
}

export const AlertReducer = (state, action) => {
    //1
    // switch(action.type) {
    //     case ALERT_SHOW: return action.payload
    //     case ALERT_HIDE: return  null
    //     default: return state
    // }
    //2
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}