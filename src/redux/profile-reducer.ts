// @ts-ignore
import {ADD_POST, PostsType, UPDATE_NEW_POST_TEXT} from "./state";

// const profileReducer = (state : any, action: any) => {
//     if (action.type === ADD_POST) {
//         const newPost: PostsType = {
//             id: 5,
//             color: 'blue',
//             status: 'cyan',
//             time: '13:06',
//             name: 'Pinokio',
//             message: action.postMessage,
//             likesCount: 0
//         }
//         state.newPostText = ''
//         state.posts.push(newPost)
//         //subscriber()
//     } else if (action.type === UPDATE_NEW_POST_TEXT) {
//         //console.log('changes')
//         state.newPostText = action.newText
//         //subscriber()
//     }
//     return state
// }