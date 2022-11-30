import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'

type UsersProps = {
    users: Array<UserType>
    userFollow: (usedId: string) => void
    userUnfollow: (usedId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.bestfree.ru/glossary/rus-p/Polzovatel.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'Flow is a static type checker that helps you write code with fewer bugs. Check out this introduction to using static types in JavaScript if you are new to this concept.',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://www.bestfree.ru/glossary/rus-p/Polzovatel.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.bestfree.ru/glossary/rus-p/Polzovatel.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies in package.json. ',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }
    return (<div className={styles.users}>
        <h2>Users</h2>
        {
            props.usersPage.users.map(u => (
                <div className={styles.user} key={u.id}>
                    <div>
                        <div>
                            <img src={u.photoUrl} className={styles.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={styles.btnStatus} onClick={() => {
                                    props.userUnfollow(u.id)
                                }}>Unfollow</button>
                                : <button className={styles.btnStatus} onClick={() => {
                                    props.userFollow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.userInfoBlock}>
                            <div><b>{u.fullName}</b></div>
                            <div><i>{u.status}</i></div>
                        </div>
                        <div  className={styles.userInfoBlock}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>)
            )}
    </div>)
}

export default Users;