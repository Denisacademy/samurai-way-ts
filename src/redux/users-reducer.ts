const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type LocationType = {
    country: string
    city: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type initialStateType = {
    users: Array<UserType>
    // page?: number
}

const initialState: initialStateType = {
    // page: 0,
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://www.bestfree.ru/glossary/rus-p/Polzovatel.jpg',
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://www.bestfree.ru/glossary/rus-p/Polzovatel.jpg',
        //     followed: true,
        //     fullName: 'Sasha',
        //     status: 'I am a boss too',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://www.bestfree.ru/glossary/rus-p/Polzovatel.jpg',
        //     followed: false,
        //     fullName: 'Andrew',
        //     status: 'I am a boss too',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // }
    ]
}

const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? ({...u, followed: true}) : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? ({...u, followed: false}) : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]} //for show more
        default:
            return state
    }
}

type ActionsTypes =
    ReturnType<typeof followedUserAC>
    | ReturnType<typeof unfollowedUserAC>
    | ReturnType<typeof setUsersAC>

export const followedUserAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowedUserAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)

export default usersReducer