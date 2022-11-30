const CHANGE_BODY_TEXT = 'CHANGE-BODY-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type InitialStateType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

const initialState: InitialStateType = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    newMessageBody: 'Party size'
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case  CHANGE_BODY_TEXT:
            return {...state, newMessageBody: action.newBody}
        case SEND_MESSAGE :
            return {...state, messages: [...state.messages, {id: 7, message: action.message}], newMessageBody: ''}
        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof changeTextBodyAC> | ReturnType<typeof sendMessageAC>

export const changeTextBodyAC = (newBody: string) => {
    return ({
        type: CHANGE_BODY_TEXT,
        newBody
    }) as const
}

export const sendMessageAC = (message: string) => {
    return ({
        type: SEND_MESSAGE,
        message
    }) as const
}

export default dialogsReducer