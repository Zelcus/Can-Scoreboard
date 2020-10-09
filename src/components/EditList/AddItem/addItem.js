import React, { useState } from "react";
import * as FirestoreService from "../../Services/firestore";
import ErrorMessage from "../../ErrorMessage/errorMessage";

function AddItem(props) {
    const { userListId, userId } = props;

    const [error, setError] = useState("");

    function addItem(e) {
        e.preventDefault();
        setError(null);

        const itemDesc = document.addItemForm.itemDesc.value;
        if (!itemDesc) {
            setError("user-item-desc-req");
            return;
        }
        FirestoreService.addUserListItem(itemDesc, userListId, userId)
            .then(() => document.addItemForm.reset())
            .catch((reason) => {
                if (reason.message === "duplicate-item-error") {
                    setError(reason.message);
                } else {
                    setError("add-list-item-error");
                }
            });
    }

    return (
        <div className="form-container">
            <form className="wrapper-form" name="addItemForm">
                <h3 className="sub-header form-sub-header">Add User...</h3>
                <div className="form-input-group">
                    <input className="form-input" type="text" name="itemDesc" />
                    <button
                        className="form-button"
                        type="submit"
                        onClick={addItem}
                    >
                        Add
                    </button>
                </div>
                <ErrorMessage errorCode={error}></ErrorMessage>
            </form>
        </div>
    );
}

export default AddItem;
