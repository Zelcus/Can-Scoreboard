import React, { useState } from "react";

import * as FirestoreService from "../Services/firestore";
import ErrorMessage from "../ErrorMessage/errorMessage";

function CreateList(props) {
    const { onCreate } = props;

    const [error, setError] = useState();

    function createUserList(e) {
        e.preventDefault();
        setError(null);

        const userName = document.createListForm.userName.value;
        if (!userName) {
            setError("user-name-required");
            return;
        }

        FirestoreService.createUserList(userName)
            .then((docRef) => {
                onCreate(docRef.id, userName);
            })
            .catch((reason) => setError("create-list-error"));
    }

    return (
        <div>
            <header>
                <h1>Welcome to the User List app!</h1>
            </header>
            <div className="create-container">
                <div>
                    <form name="createListForm">
                        <p>
                            <label>What is your name?</label>
                        </p>
                        <p>
                            <input type="text" name="userName" />
                        </p>
                        <ErrorMessage errorCode={error}></ErrorMessage>
                        <p>
                            <button onClick={createUserList}>
                                Create a new user list
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateList;