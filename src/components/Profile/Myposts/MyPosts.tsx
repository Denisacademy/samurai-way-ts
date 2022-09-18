import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = () => {
    const user1 = 'First ensure that all HTML elements have the box-sizing property set to border-box. This makes sure that the padding and border are included in the total width and height of the elements.'
    const user2 = 'The columns inside a row are all floating to the left, and are therefore taken out of the flow of the page, and other elements will be placed as if the columns do not exist. To prevent this, we will add a style that clears the flow:'
    const user3 = 'Disable the automatic acquisition of types for imports and requires.'
    const user4 = 'Dont give up bro :)'

    const posts = [
        {message: user1, color: 'blue', status: 'cyan', name: 'Vasilisk', time: '12:45'},
        {message: user2, color: 'red', status: 'orange', name: 'Simbad', time: '14:03'},
        {message: user3, color: 'yellow', status: 'red', name: 'Germina', time: '14:10'},
        {message: user4, color: 'white', status: 'black', name: 'Donald', time: '14:20'},
    ]

    return (
        <>
            <div className={styles.myPosts}>
                <form action="src/components/Profile/Profile">
                    <h2>My posts</h2>
                    <input type="text" placeholder='your news...'/>
                    <div>
                        <button className={styles.btn} type='submit'>Send</button>
                    </div>
                </form>
                {posts.map((post, idx) => {
                    return <Post key={idx} {...post}/>
                })}

                {/*<Post name='Vasilisk' message={user1}/>*/}
                {/*<Post name='Simbad' message={user2}/>*/}
            </div>
        </>
    )
}

export default MyPosts

