import React from 'react';
import { BsClipboardPlusFill } from "react-icons/bs";
import '../styles/Input.css'
const Input = ({ NewItem, SetNewItem, handleInput }) => {
    return (
        <form className="former" onSubmit={handleInput}>
            <label htmlFor="additem">Add A Task </label>
            <input autoFocus value={NewItem}
                onChange={(e) => SetNewItem(e.target.value)}
                type="text"
                id="additem"
                placeholder='Add A task'
                required >
            </input>

            <button type="submit"><BsClipboardPlusFill /></button>

        </form>
    )
}

export default Input;