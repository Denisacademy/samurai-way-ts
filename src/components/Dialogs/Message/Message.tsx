import React from "react";
import style from "../Dialogs.module.css";
import {MessageType} from "../../../redux/dialogs-reducer";

export const MessageItem = (props: MessageType) => {
    return <div className={style.message}>{props.message}</div>
}