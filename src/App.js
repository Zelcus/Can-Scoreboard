import React, { useEffect, useState } from "react";

import * as FirestoreService from "./components/Services/firestore";

import "./styling/App.scss";

import CreateList from "./components/CreateList/createList";
import JoinList from "./components/JoinList/joinList";
import EditList from "./components/EditList/editList";
import ErrorMessage from "./components/ErrorMessage/errorMessage";

import useQueryString from "./hooks/useQueryString";

function App() {
    const [user, setUser] = useState();
    const [userId, setUserId] = useState();
    const [userList, setUserList] = useState();
    const [error, setError] = useState();

    const [userListId, setUserListId] = useQueryString("listId");
    useEffect(() => {
        FirestoreService.authenticateAnonymously()
            .then((userCredential) => {
                setUserId(userCredential.user.uid);
                if (userListId) {
                    FirestoreService.getUserList(userListId)
                        .then((userList) => {
                            if (userList.exists) {
                                setError(null);
                                setUserList(userList.data());
                            } else {
                                setError("user-list-not-found");
                                setUserListId();
                            }
                        })
                        .catch(() => setError("user-list-get-fail"));
                }
            })
            .catch(() => setError("anonymous-auth-failed"));
    }, [userListId, setUserListId]);
    function onUserListCreate(userListId, userName) {
        setUserListId(userListId);
        setUser(userName);
    }
    function onCloseUserList() {
        setUserListId();
        setUserList();
        setUser();
    }
    function onSelectUser(userName) {
        setUser(userName);
        FirestoreService.getUserList(userListId)
            .then((updatedUserList) => setUserList(updatedUserList.data()))
            .catch(() => setError("user-list-get-fail"));
    }
    // render a component based on the current state

    if (userList && user) {
        return (
            <EditList
                {...{ userListId, user, onCloseUserList, userId }}
            ></EditList>
        );
    } else if (userList) {
        return (
            <div>
                <ErrorMessage errorCode={error}></ErrorMessage>
                <JoinList
                    users={userList.users}
                    {...{ userListId, onSelectUser, onCloseUserList, userId }}
                ></JoinList>
            </div>
        );
    }
    return (
        <div>
            <ErrorMessage errorCode={error}></ErrorMessage>
            <CreateList
                onCreate={onUserListCreate}
                userId={userId}
            ></CreateList>
        </div>
    );
}
export default App;
