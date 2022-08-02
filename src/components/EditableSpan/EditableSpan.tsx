import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {TextField} from '@material-ui/core';

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    console.log("EditableSpan called");
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') {
            props.onChange(title)
            setEditMode(false)
        }
    }

    return editMode
        ?    <TextField value={title} onChange={changeTitle} onKeyPress={onKeyPressHandler} autoFocus onBlur={activateViewMode} />
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
});
