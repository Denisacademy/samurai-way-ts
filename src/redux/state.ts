let rerenderEntireTree = () => {
    console.log('state changed')
}


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const user1 = 'First ensure that all HTML elements have the box-sizing property set to border-box. This makes sure that... '
const user2 = 'The columns inside a row are all floating to the left'
const user3 = 'Disable the automatic acquisition of types for imports and requires.'
const user4 = 'Listen to me man never give up :)'

const posts = [
    {id: 1, message: user1, color: 'blue', status: 'cyan', name: 'Vasilisk', time: '12:45', likesCount: 10},
    {id: 2, message: user2, color: 'red', status: 'orange', name: 'Simbad', time: '14:03', likesCount: 15},
    {id: 3, message: user3, color: 'yellow', status: 'red', name: 'Germina', time: '14:10', likesCount: 2},
    {id: 4, message: user4, color: 'white', status: 'black', name: 'Donald', time: '14:20', likesCount: 7},
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Donald'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Simbad'},
    {id: 5, name: 'Katya'},
    {id: 6, name: 'Peter'},
]

let messages = [
    {id: 1, message: 'are you Ok?'},
    {id: 2, message: 'how is it going?'},
    {id: 3, message: 'dont give up'}
]

//**************
export type PostsType = {
    id: number,
    message: string,
    likesCount: number
    time?: string
    color?: string
    status?: string
    name?: string
}

export type MessagesType = {
    message: string
    id?: number
}

export type DialogsType = {
    name: string
    id: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type dialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}

export const state: RootStateType = {
    profilePage: {
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
    },
    dialogsPage: {
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
        ]
    }
}

// export const addPost = (postMessage: string) => {
//     const newPost: PostsType = {
//         id: 5,
//         color: 'blue',
//         status: 'cyan',
//         time: '13:06',
//         name: 'Pinokio',
//         message: postMessage,
//         likesCount: 0
//     }
//     state.profilePage.newPostText = ''
//     state.profilePage.posts.push(newPost)
//
//     rerenderEntireTree()
//
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree()
// }
//
// export const subscribe = (observer: () => void) => {
//         rerenderEntireTree = observer
// }

// export const subscribe = (observer: (state: RootStateType) => void) => {
//     rerenderEntireTree = observer
// }


export type StoreType = {
    state: RootStateType,
    subscriber: () => void,

    getState: () => RootStateType
    subscribe: (callback: () => void) => void

    updateNewPostText: (newText: string) => void
    addPost: (newPost: string) => void
    dispatch: (action: ActionsTypes) => void
}

// export type AddPostActionType = {
//     type: 'ADD-POST'
//     postMessage: string
// }

//export type AddPostActionType = ReturnType<typeof addPostAC>


//export type updateNewPostText = ReturnType<typeof changeNewText>


// export type updateNewPostText = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }

// export type ActionsTypes = AddPostActionType | updateNewPostText
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewText>

export const store: StoreType = {
    state,
    subscriber() {
        console.log('subscriber')
    },
    subscribe(observer) {
        this.subscriber = observer
    },
    getState() {
        return this.state
    },
    updateNewPostText(newText) {
        this.state.profilePage.newPostText = newText
        this.subscriber()
    },
    addPost(postMessage) {
        const newPost: PostsType = {
            id: 5,
            color: 'blue',
            status: 'cyan',
            time: '13:06',
            name: 'Pinokio',
            message: postMessage,
            likesCount: 0
        }
        this.state.profilePage.newPostText = ''
        this.state.profilePage.posts.push(newPost)
        this.subscriber()
        console.log(this.state)
    },
    dispatch(action) { //{type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: 5,
                color: 'blue',
                status: 'cyan',
                time: '13:06',
                name: 'Pinokio',
                message: action.postMessage,
                likesCount: 0
            }
            this.state.profilePage.newPostText = ''
            this.state.profilePage.posts.push(newPost)
            this.subscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            //console.log('changes')
            this.state.profilePage.newPostText = action.newText
            this.subscriber()
        }
    }
}


export const addPostAC = (postMessage: string)  => {
    return {
        type: ADD_POST,
        postMessage
    } as const
}

// export const addPostAC = (postMessage: string): AddPostActionType => {
//     return {
//         type: ADD_POST,
//         postMessage
//     }
// }

export const changeNewText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}


// export const changeNewText = (newText: string): updateNewPostText => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText
//     }
// }

//store.dispatch({type: "ADD-POST", postMessage : 'olo'})
// @ts-ignore
window.state = state