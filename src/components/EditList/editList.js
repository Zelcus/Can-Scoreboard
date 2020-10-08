import React from "react";

import AddItem from "./AddItem/addItem";
import ItemList from "./ItemList/itemList";

function EditList(props) {
    const { userListId, user, onCloseUserList, userId } = props;

    function onCreateListClick(e) {
        e.preventDefault();
        onCloseUserList();
    }

    return (
        <div>
            <header className="app-header">
                <h1>Live {user}</h1>
                <p>
                    <strong>Hi!</strong>
                </p>
                <p>
                    Add items to the list. When someone else adds an item it
                    will instantly appear on the list.
                </p>
            </header>
            <div className="edit-container">
                <div className="add-item-column">
                    <AddItem {...{ userListId, userId }}></AddItem>
                </div>
                <div className="list-column">
                    <ItemList {...{ userListId }}></ItemList>
                </div>
            </div>
            <footer className="app-footer">
                <p>
                    <a href="/" onClick={onCreateListClick}>
                        create a new list
                    </a>
                    .
                </p>
            </footer>
        </div>
    );
}

export default EditList;
