import React, {ChangeEventHandler, createRef} from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";

import {dialogsPageType,} from "../../redux/state";

type DialogsProps = {
    dialogsPage: dialogsPageType
    addMessage: (message: string) => void
    changeBodyText: (newBody: string) => void
}

const Dialogs = (props: DialogsProps) => {
    const state = props.dialogsPage
    console.log('dialogs', state, props)

    // const textMessage = createRef<HTMLTextAreaElement>()
    //
    // const addMessage = () => {
    //     console.log(textMessage.current?.value)
    // }

    const changeBodyText = (e: any) => {
        const letter = e.target.value
        props.changeBodyText(letter)
    }

    const addMessage = () => props.addMessage(state.newMessageBody)

    const dialogElements = state.dialogs.map((dialog: any) => <DialogItem key={dialog.id} name={dialog.name}
                                                                          id={dialog.id}/>)
    const messagesElements = state.messages.map((message: any) => <MessageItem key={message.id}
                                                                               message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            {/*<textarea  ref={textMessage} placeholder='type smth'></textarea>*/}
            <textarea onChange={changeBodyText} value={state.newMessageBody} placeholder='type smth'></textarea>
            <button onClick={addMessage}>add message</button>
        </div>
    )
}

export default Dialogs