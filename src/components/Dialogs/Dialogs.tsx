import React, {ChangeEventHandler, createRef} from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {ActionsTypes,  dialogsPageType,} from "../../redux/state";

type DialogsProps = {
    state: dialogsPageType
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string
}
const Dialogs = (props: any) => {
    console.log('dialogs', props.newMessageBody)
    // const textMessage = createRef<HTMLTextAreaElement>()
    //
    // const addMessage = () => {
    //     console.log(textMessage.current?.value)
    // }

    const changeBodyText = (e: any) => {
        const letter = e.target.value
        props.changeBodyText(letter)
    }

    const addMessage = () => {
        props.addMessage(props.newMessageBody)
    }

    const dialogElements = props.dialogs.map((dialog: any) => <DialogItem key={dialog.id} name={dialog.name}
                                                                          id={dialog.id}/>)

    const messagesElements = props.messages.map((message: any) => <MessageItem key={message.id}
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
            <textarea onChange={changeBodyText} value={props.newMessageBody} placeholder='type smth'></textarea>
            <button onClick={addMessage}>add message</button>
        </div>
    )
}

export default Dialogs