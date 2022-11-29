import React, {ChangeEventHandler, createRef} from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem, DialogItemProps} from "./DialogItem/DialogItem";
import {MessageItem, MessageItemProps} from "./Message/Message";
import {ActionsTypes, changeTextBodyAC, dialogsPageType, sendMessageAC} from "../../redux/state";

type DialogsProps = {
    state: dialogsPageType
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string
}
const Dialogs = (props: any) => {
    // const textMessage = createRef<HTMLTextAreaElement>()
    //
    // const addMessage = () => {
    //     console.log(textMessage.current?.value)
    // }

    // const changeBodyText = (e: any) => {
    //     const letter = e.target.value
    //     props.dispatch(changeTextBodyAC(letter))
    //
    // }
    //
    // const addMessage = () => {
    //     props.dispatch(sendMessageAC(props.newMessageBody))
    // }
    //
    // const dialogElements = props.state.dialogs.map(dialog => <DialogItem
    //     key={dialog.id}
    //     name={dialog.name}
    //     id={dialog.id}/>)
    // const messagesElements = props.state.messages.map(message => <MessageItem
    //     key={message.id}
    //     message={message.message}/>)

    return (
        <div className={style.dialogs}>
            {/*<div className={style.dialogsItems}>*/}
            {/*    {dialogElements}*/}
            {/*</div>*/}
            {/*<div className={style.messages}>*/}
            {/*    {messagesElements}*/}
            {/*</div>*/}
            {/*/!*<textarea  ref={textMessage} placeholder='type smth'></textarea>*!/*/}
            {/*<textarea onChange={changeBodyText} value={props.newMessageBody} placeholder='type smth'></textarea>*/}
            {/*<button onClick={addMessage}>add message</button>*/}
            <h1>dialog</h1>
        </div>
    )
}

export default Dialogs