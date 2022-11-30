const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
    time?: string
    color?: string
    status?: string
    name?: string
}

export type initialStateType = {
    posts: PostsType[]
    newPostText: string
}

const initialState: initialStateType = {
    newPostText: 'some text',
    posts: [
        {
            id: 1,
            color: 'blue',
            status: 'cyan',
            time: '12:45',
            name: 'Vasilisk',
            message: '\'First ensure that all HTML elements have the box-sizing property set to border-box. This makes sure that... \'',
            likesCount: 15
        },
        {
            id: 2,
            message: 'The columns inside a row are all floating to the left',
            color: 'red',
            status: 'orange',
            name: 'Simbad',
            time: '14:03',
            likesCount: 20
        },
        {
            id: 3,
            message: 'Disable the automatic acquisition of types for imports and requires.',
            color: 'yellow',
            status: 'red',
            name: 'Germina',
            time: '14:10',
            likesCount: 20
        },
        {
            id: 4,
            message: 'Listen to me man never give up :)',
            color: 'white',
            status: 'black',
            name: 'Donald',
            time: '14:20',
            likesCount: 20
        }
    ]
}

const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                color: 'blue',
                status: 'cyan',
                time: '13:06',
                name: 'Pinokio',
                message: action.postMessage,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

export const addPostAC = (postMessage: string) => ({
    type: ADD_POST,
    postMessage
} as const)


export const changeNewTextAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
} as const)


export default profileReducer
