import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemProps = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemProps> = ({name, id}) => {
    let path = `/dialogs/${id}`

    return <div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>{name}</NavLink>
        {/*<NavLink to={'/dialogs/' + id}>{name}</NavLink>*/}
    </div>
}