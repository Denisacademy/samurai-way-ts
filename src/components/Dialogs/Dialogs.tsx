import React, {createRef} from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem, DialogItemProps} from "./DialogItem/DialogItem";
import {MessageItem, MessageItemProps} from "./Message/Message";
import {dialogsPageType} from "../../redux/state";

type DialogsProps = {
    state: dialogsPageType
}
const Dialogs = (props: DialogsProps) => {
    const textMessage = createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        console.log(textMessage.current?.value)
    }

    const dialogElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.state.messages.map(message => <MessageItem key={message.id} message={message.message} />)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <textarea onClick={addMessage} ref={textMessage} placeholder='type smth'></textarea>
        </div>
    )
}

export default Dialogs