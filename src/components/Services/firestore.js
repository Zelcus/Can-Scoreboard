import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);
const db = firebase.firestore();

// *** Auth API  ***

export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
};

export const createUserList = (userName) => {
    return db.collection("userLists").add({
        created: firebase.firestore.FieldValue.serverTimestamp(),
        users: [
            {
                name: userName,
            },
        ],
    });
};

export const getUserList = (userListId) => {
    return db.collection("userLists").doc(userListId).get();
};

export const getUserListItems = (userListId) => {
    return db.collection("userLists").doc(userListId).collection("items").get();
};
export const streamUserListItems = (userListId, observer) => {
    return db
        .collection("userLists")
        .doc(userListId)
        .collection("items")
        .orderBy("created")
        .onSnapshot(observer);
};

export const addUserToUserList = (userName, userListId) => {
    return db
        .collection("userLists")
        .doc(userListId)
        .update({
            users: firebase.firestore.FieldValue.arrayUnion({
                name: userName,
            }),
        });
};
export const addUserListItem = (item, userListId, userId) => {
    return getUserListItems(userListId)
        .then((querySnapshot) => querySnapshot.docs)
        .then((userListItems) =>
            userListItems.find(
                (userListItem) =>
                    userListItem.data().name.toLowerCase() ===
                    item.toLowerCase()
            )
        )
        .then((matchingItem) => {
            if (!matchingItem) {
                return db
                    .collection("userLists")
                    .doc(userListId)
                    .collection("items")
                    .add({
                        name: item,
                        created: firebase.firestore.FieldValue.serverTimestamp(),
                    });
            }
            throw new Error("duplicate-item-error");
        });
};
