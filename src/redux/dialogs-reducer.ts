// @ts-ignore
import {CHANGE_BODY_TEXT, MessagesType, SEND_MESSAGE} from "./state";

// const CHANGE_BODY_TEXT = 'CHANGE-BODY-TEXT'
// const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case  CHANGE_BODY_TEXT:
            state.newMessageBody = action.newBody
            return state
        case SEND_MESSAGE :
            state.messages.push({id: 7, message: action.message})
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export const changeTextBodyAC = (newBody: string) => {
    return {
        type: CHANGE_BODY_TEXT,
        newBody
    } as const
}

export const sendMessageAC = (message: string) => {
    return {
        type: SEND_MESSAGE,
        message
    } as const
}

export default dialogsReducer