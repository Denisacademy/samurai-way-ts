import {connect} from "react-redux";
import Users from "./Users";
import {followedUserAC, initialStateType, setUsersAC, unfollowedUserAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

export type mapStateToPropsType = {
    usersPage: initialStateType
}

export type mapDispatchToPropsType = {
    userFollow: (userId: number) => void
    userUnfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        userFollow: (userId: number) => {
            dispatch(followedUserAC(userId))
        },
        userUnfollow: (userId: number) => {
            dispatch(unfollowedUserAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)