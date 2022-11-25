// @ts-ignore
import {ADD_POST, PostsType, UPDATE_NEW_POST_TEXT} from "./state";

// const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                color: 'blue',
                status: 'cyan',
                time: '13:06',
                name: 'Pinokio',
                message: action.postMessage,
                likesCount: 0
            }
            state.newPostText = ''
            state.posts.push(newPost)

            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export default profileReducer

export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}
