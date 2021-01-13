import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/errorMessage";
import * as FirestoreService from "../Services/firestore";

function JoinList(props) {
    const { users, userListId, onSelectUser, onCloseUserList, userId } = props;

    const [error, setError] = useState();

    function addExistingUser(e) {
        e.preventDefault();
        onSelectUser(e.target.innerText);
    }

    function getUserButtonList() {
        const buttonList = users.map((user) => (
            <button key={user.name} onClick={addExistingUser}>
                {user.name}
            </button>
        ));
        return <div className="button-group">{buttonList}</div>;
    }

    function addNewUser(e) {
        e.preventDefault();
        setError(null);

        const userName = document.addUserToListForm.name.value;
        if (!userName) {
            setError("user-name-required");
            return;
        }

        if (users.find((user) => user.name === userName)) {
            onSelectUser(userName);
        } else {
            FirestoreService.addUserToUserList(userName, userListId, userId)
                .then(() => onSelectUser(userName))
                .catch(() => setError("add-user-to-list-error"));
        }
    }

    function onCreateListClick(e) {
        e.preventDefault();
        onCloseUserList();
    }

    return (
        <div>
            <div className="form-container">
                <form className="wrapper-form" name="addUserToListForm">
                    <h3 className="sub-header form-sub-header">
                        Select the name of scoreboard you want to open...
                    </h3>
                    {getUserButtonList()}
                    <p>...or enter a new name to create a new Scoreboard...</p>
                    <div className="form-input-group">
                        <input className="form-input" type="text" name="name" />
                        <button className="form-button" onClick={addNewUser}>
                            Join
                        </button>
                    </div>
                    <ErrorMessage errorCode={error}></ErrorMessage>
                    <p>
                        ...or{" "}
                        <a
                            href="/"
                            onClick={onCreateListClick}
                            className="new-scoreboard-link"
                        >
                            create a new Scoreboard
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default JoinList;
